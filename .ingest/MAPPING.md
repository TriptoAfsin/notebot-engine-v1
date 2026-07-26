# Ingest classifier RULEBOOK — how to place each submission

Read this with `.ingest/WIRING.md` (the exact file-by-file wiring). This file is the
DECISION layer: given a submission, which placement to choose. Always pick the **lowest-risk
option that fits**. When a case isn't covered here, add a new rule to this file (grow it).

Messenger hard limits (enforced silently in the generators — respect them):
- **≤ 3 buttons per `grroupedButtonBlockGen`** (a 4th is silently dropped). Split into multiple groups.
- **button titles ≤ 15 chars** (silently truncated). Keep labels short (e.g. `Alim(Aff.,26)`).
- No enforced block cap, but keep a level section tidy (~≤10 blocks); start a new group rather than overloading one.

---

**DEDUP (critical):** Append each note **exactly once**. Before writing, check the target file does NOT already contain that Drive file-id (parse it from the url). NEVER write the same URL twice in one run. If the queue has duplicate rows for the same file, keep one.

**Where subject content goes:** content for an existing subject ALWAYS goes **inside that subject's own dir/flow** (`.../<subject>/topics/*.js` or `.../<subject>/<subject>_flow.js`) — NOT into `level_N_flow.js`. A `level_N_flow.js` web-link is a LAST RESORT only for a subject you are deliberately not creating a dir for.

## Decision order (top = most preferred)

1. **Append to an existing topic file** — subject + topic both map to a real `.../<subject>/topics/<topicFile>.js`. Add one `textBlockGen` line. (WIRING.md Level 1.) Safest. (Skip if that url already present — see DEDUP.)

2. **Subject-flow web-link (EXISTING subject)** — a whole-subject / "Full" / "Full Course" / "Part A|B Full" note, or a topic with no dedicated topic file, for a subject whose **dir EXISTS**. Add a grouped web-button block INSIDE that subject's own flow `.../<subject>/<subject>_flow.js`, placed BEFORE its `🔰 Select Topics` group:
   ```js
   grroupedButtonBlockGen(`📌 Full Notes -`, [        // or `📌 <Topic> -`
     webBtnBlockGen("<ShortLabel ≤15>", "<public_url>"),
   ]),
   ```
   This gives **BOTH chatbot AND web-app parity automatically** — the subject flow is already routed (`handlePostback`) and translated by its app wrapper (`SubTopicTrans`). No controller/route/keyword edit. Group same-kind links under one header (≤3 buttons/group; new group past 3). **Do NOT put this in `level_N_flow.js`.**

3. **New topic under an existing subject** — subject dir exists, topic is a real new chapter worth its own page and several notes will accrue → topic file + full Level-2 wiring (WIRING.md). For a single link, use option 2 (a `📌 <Topic> -` group in the subject flow) instead.

4. **New subject (dir does NOT exist)** — e.g. AP-II (`ap2`), SPE, INDUSTRIAL ENGINEERING, IESE. Create it with full Level-3 wiring (WIRING.md): chatbot flow + level registration + `handlePostback` + keywords, AND web app wrapper + `appController.js` require/handler/export + `web.js` route + `levelLSubs.js`. Put the note as a web-link group inside the NEW `<subject>_flow.js`. **Flag loudly ("⚠️ NEW SUBJECT").** Do NOT dump it into `level_N_flow.js`.

5. **Lab report (`kind=lab`)** — never goes in note flows. Place under `lab_levels/level_L/` (see LAB section below).

6. **Question bank (`kind=question`)** — excluded from ingest entirely (copied to the QB Drive folder by n8n; no code). These are pre-filtered out of the queue.

---

## Case rules (from real flagged submissions — extend as new ones appear)

- **"Full" / "Full Note" / "Full Course" / "Part A Full" / "Part B Full" / whole-subject** (e.g. FSD/FULL, wpp/Full note, ym1/Full Note, sss1/Full note, cp/Python Full Note, mmtf/Part A, mmtf/Part-B Full, Full-Course folder drops) → **option 2: a `📌 Full Notes -` group INSIDE the subject's own `<subject>_flow.js`** (create the subject — option 4 — if it has no dir). NEVER in `level_N_flow.js`. These are whole-subject hand-notes, not chapter topics.

- **Chemistry, ambiguous I vs II** → disambiguate by `level` + department + the topic/filename. Level-1 "Chemistry" → `chem1`. If the needed topic (e.g. "Suggestions") has no topic file, use **option 2** inside `chem1_flow.js`: `grroupedButtonBlockGen("📌 Suggestions -", [ webBtnBlockGen("<name>(<yr>)", url) ])`.

- **New chapter/topic that doesn't exist** (ym1 "Math solve", wpp "Sizing") → **option 2**: a `📌 <Topic> -` group inside the subject's `<subject>_flow.js`, unless multiple notes justify a full topic file (option 3). wpp's real topics are Desizing/Pretreatment/BioScouring/Singeing/Impurities — "Sizing" is genuinely new, so a web-link group in `wpp_flow.js` is right.

- **`cp` (Computer Programming)** only has per-chapter files (arrays/loops/conditions/functions/strings) — a whole-course "Full Note" has no topic file → **option 2**: `📌 Full Notes -` group inside `cp_flow.js`.

- **Non-existent-dir real subjects**: **AP-II (`ap2`)**, **SPE**, **INDUSTRIAL ENGINEERING** (level 2), **IESE / Environment** (`iee` exists but its topic files use a legacy `{text:...}` format — do NOT append `textBlockGen` there) → **option 4: create a new subject** (full wiring, flag loudly). Put the note inside the new `<subject>_flow.js`. Never dump into `level_N_flow.js`.

- **Submitter's name in the subject field** (e.g. subject "Rubayet") → the real subject is in the topic text ("Full operations management part B" → Operations Management). Recover the real subject; if unclear, **flag**.

- **Malformed / spans many courses** ("All courses of AE-49 L-3 T-1", "INDUSTRIAL ENGINEERING [PART A ALI SIR FULL HAND NOTE]") → **flag** for manual review; don't guess.

---

## LAB reports (`kind=lab`) — `lab_levels/level_L/`

Mirror of notes. Level lab menu = `level_L_lab_flow.js` (already required + dispatched by the existing `payload === "level_L_lab"` branch). Simplest placement for a lab report link:

- If the subject's lab menu file `.../level_L_lab_subs/<X>/<X>LabFlow.js` exists → add `webBtnBlockGen("<name>(<yr>)", url)` into its `📌 All Lab Reports -` group (≤3/group). No controller edit needed (the subject menu is already routed).
- If the subject has no lab menu yet → create it + wire it (WIRING-style: chatbot require + `handlePostback` `payload === "<X>_lab_flow"` branch + register `payloadBtnGen("<Label>","<X>_lab_flow")` in `level_L_lab_flow.js`; web app: `labReport/levelL/subs/<X>/<X>Labs.js` wrapper + `appController.js` require/handler/export + `web.js` `/app/labs/L/<X>` route + `levelLLabs.js` entry). Lab topics are `{text:...url...}` blocks. Keywords are NOT needed (labs are postback-only).
- Silent breaks: payload↔`handlePostback`↔`/app/labs` route must all match; titles ≤15 chars; ≤3 buttons/group.

---

## When mapping genuinely fails
Flag the row (write it to `flagged.json` with a concrete `reason`) rather than guessing — a flagged row the human places beats a wrong auto-edit. Then add a rule here so the next occurrence is handled.
