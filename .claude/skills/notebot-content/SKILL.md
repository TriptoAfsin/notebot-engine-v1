---
name: notebot-content
description: >
  Add or correct NoteBot academic content — notes, lab reports, topics, subjects, syllabus
  entries — across the v1 engine (Messenger bot + web app flow files) and the v2 stack
  (Postgres + CMS + API). Use when placing a submitted note, wiring a new subject or topic,
  fixing content that is not appearing for students, or reviewing an ingest PR. Encodes the
  placement rulebook, the platform limits that silently truncate content, and the v1↔v2
  mismatches that have each already caused a production bug.
---

# NoteBot content

Two engines serve the same library. **v1** (`notebot-engine-v1`) is what students use today:
JS flow files consumed by both the Messenger bot and a web-app controller. **v2**
(`notebot-engine-v2` + `notebot-cms-v2`) is Postgres-backed and where things are heading.
Content added to one is invisible in the other unless both are updated.

Read this before touching content. Every rule below exists because its absence caused a real
bug.

## Decide where the content goes

Placement follows the *lowest option that fits*. The authoritative detail is in
`.ingest/MAPPING.md` (rulebook) and `.ingest/WIRING.md` (exact wiring); this is the shape.

| Situation | v1 | v2 |
|---|---|---|
| Topic file already exists | append `textBlockGen` to that topic file | note under that topic |
| Whole-subject / "Full Notes", no topic file | `webBtnBlockGen` inside `<subject>_flow.js` | topic with `metadata.directUrl` |
| Real new chapter, several notes | new topic file + level-2 wiring | new topic + notes |
| Subject does not exist | full level wiring, **both** chatbot and web app | new subject |
| Lab report | under `lab_levels/level_N/` | `lab_reports` table, **not** `notes` |

Two traps here:

- Content for an **existing** subject goes inside that subject's own directory, never into
  `level_N_flow.js`.
- A **lab** belongs in `lab_reports`, keyed by `level_id` + `subject_slug`. Writing it into
  `notes` creates a bogus subject in the notes tree — that happened, producing three junk
  Level‑2 subjects named after lab directories.

## Platform limits that fail silently

Nothing errors. A student just sees the wrong thing.

| Limit | Value | What happens |
|---|---|---|
| Button title | **20 chars** | cut, by UTF-16 code unit, so an emoji or Bangla conjunct can be halved |
| Buttons per group | **3** | a 4th is discarded with no warning |
| Template text | 640 chars | — |
| Card title / subtitle | 80 chars | — |

v1 truncated at **15** until `c724761` — five characters below what Meta allows — cutting 427
titles unnecessarily. Two generator copies are live: 181 flow files import
`src/controllers/genrators/*`, 253 import the `simple-messenger-blocks` package. The package is
held at 20 by `patch-package` + a `postinstall` hook. **v2's copy of that package is still
unpatched at 15**, which is why v2 builds blocks in `src/utils/messenger-blocks.ts` instead.

The CMS previews all of this before saving — `/content/new`, and the notes/topics forms.

## v1 ↔ v2 mismatches

**Slugs differ.** Known aliases live in `notebot-automation/scripts/reconcile-v1-v2.js`
(`SUBJECT_ALIAS`): `tc1`→`tc_i`, `econo`→`economics`, `weaving2`→`weave2`.

**Case matters and must not.** Some v2 slugs are stored upper-case (`IAE`). Always compare
case-insensitively. A case-sensitive lookup created a duplicate `iae` subject beside `IAE`, and
made `/app/notes/1/iae` a 404 against a subject that exists.

**The payload string is the URL segment.** `SubTopicTrans` builds `route = <prefix>/<payload>`,
so a `payloadBtnGen(_, "P")` requires a `handlePostback` branch for `P` **and** a `web.js` route
ending in `/P`. Miss either and the button dead-ends. There are 13 such dead buttons today.

**Titles get mangled differently by each side.** v1's `UrlCatcher` strips *every* hyphen from a
title (`IPE-44` → `IPE44`), so a v1-rendered snapshot is not a faithful source for labels. Take
labels from the v1 `.js` source files.

## Adding content

**Through the CMS** — `/content/new` resolves or creates the whole level→subject→topic→note
chain in one transaction and previews both surfaces first. This is the normal path.

**Through the API** — for n8n, a script, or a scheduled agent:

```
POST /api/v1/ingest/note        (notebot-cms-v2)
x-api-key: <key minted at /api-keys>

{ "level": "1",
  "subject": { "slug": "fpc", "displayName": "Fundamental of Polymer Chemistry" },
  "topic":   { "slug": "fpcDegradation", "displayName": "Polymer Degradation" },
  "title": "Hand Note(Jeba Fariha, TME-51, 2026)",
  "url": "https://drive.google.com/file/d/<id>/view" }
```

Omit `topic` for a subject-level link. Idempotent by Drive **file id** within a topic, so a
retry returns `duplicate: true` and 200 rather than creating a second row. Slug-addressed and
case-insensitive.

**Directly in the DB** — nothing invalidates the cache for you. See below.

## Caches: three layers, and only one is server-side

| Layer | TTL | Cleared by |
|---|---|---|
| v2 Redis `notebot:*` | 1 h | CMS writes automatically; otherwise `POST /admin/cache/flush` |
| Web service worker | — | scripts only, not API responses |
| Web React Query in `localStorage` | **6 h** | `CACHE_VERSION` in `notebot-web-v2/src/lib/query-client.ts`, or the app's Settings page |

CMS writes already invalidate the exact keys the engine reads. A **script or direct SQL edit
invalidates nothing** — flush explicitly, or the change appears to have failed:

```
curl -X POST https://api.butexnotebot.com/admin/cache/flush \
  -H "x-api-key: $ADMIN_API_KEY" -H "Content-Type: application/json" \
  -d '{"scope":"all"}'
```

Scopes: `all`, `level`, `subject`, `topic`, `labs`, `syllabus`, `routines`, `results` (the first
four need an `id`).

**A server flush cannot reach a student's browser.** After a large content correction, bump
`CACHE_VERSION` too.

## Before you call it done

- Syntax-check every edited flow file: `node -e "require('./path/to/flow.js')"`
- New payload? Confirm the `handlePostback` branch **and** the `web.js` route both exist.
- New subject? Wired into **both** `level_N_flow.js` (bot) and `levelNSubs.js` (web app).
- Content not appearing? Check the cache layers above before assuming the write failed.
- Never commit to `main` on v1; never touch the `gitlab` remote.

## Tools

Live in `notebot-automation/scripts/`, all dry-run by default:

| Script | Purpose |
|---|---|
| `reconcile-v1-v2.js` | v1→v2 parity; `--repair` fixes mis-filed lab subjects |
| `compat-blob-audit.js` | classifies the old `v1Topics`/`v1Leaves` snapshots |
| `compat-blob-import.js` | imports blob-only content before dropping a snapshot |
| `seed-syllabuses.js` | seeds `syllabuses` from v1 and cross-checks |

Cross-repo state and the full gotcha list: `notebot-automation/docs/STATUS.md`.
