# .ingest — automated note-ingestion hand-off files

These files are the GitHub-only channel between the staging DB, the weekly **cloud ingest
agent**, and the DB-writing GitHub Actions. The cloud agent's sandbox can reach GitHub only
(no DB, no arbitrary HTTPS), so all data crosses through this folder.

| File | Written by | Read by |
|------|-----------|---------|
| `pending.json` | `notebot-prepare-queue` Action (reads staging DB) | the cloud ingest agent |
| `applied.json` | the cloud ingest agent (what it added to v1) | `notebot-apply-ingest` Action (writes DB + v2 notes) |

Flow each week:
1. **Mon 00:30 UTC** — `prepare-queue` reads `submissions WHERE status='pending' AND resolve_status='ok'` and commits them to `pending.json`.
2. **Mon 01:00 UTC** — the cloud routine reads `pending.json`, classifies each note to the right `note_levels/**` topic file, appends the `textBlockGen` line, writes `applied.json` = `[{id, topicName, title, url}]`, and opens a PR.
3. **On merge** — `apply-ingest` reads `applied.json`, marks those rows `pr-opened`, inserts the matching rows into the v2 `notes` table, and blanks `applied.json`.

`applied.json` is normally `[]` at rest. Do not hand-edit these files.

Requires repo secret **`DATABASE_URL`** (Railway staging Postgres).
