# Ingest classifier RULEBOOK — how to place each submission

Read this with `.ingest/WIRING.md` (the exact file-by-file wiring). This file is the
DECISION layer: given a submission, which placement to choose. Always pick the **lowest-risk
option that fits**. When a case isn't covered here, add a new rule to this file (grow it).

Messenger hard limits (enforced silently in the generators — respect them):
- **≤ 3 buttons per `grroupedButtonBlockGen`** (a 4th is silently dropped). Split into multiple groups.
- **button titles ≤ 15 chars** (silently truncated). Keep labels short (e.g. `Alim(Aff.,26)`).
- No enforced block cap, but keep a level section tidy (~≤10 blocks); start a new group rather than overloading one.

---

## Decision order (top = most preferred)

1. **Append to an existing topic file** — subject + topic both map to a real `.../<subject>/topics/<topicFile>.js`. Add one `textBlockGen` line. (WIRING.md Level 1.) Safest.

2. **Level-flow web-link** — the note is a **whole-subject / "Full" / "Part A/B Full"** note, OR the subject has no matching topic file, OR the subject doesn't exist as a dir. Add a grouped web-button block directly to `note_levels/level_L/level_L_flow.js`:
   ```js
   grroupedButtonBlockGen(`📌 <Subject> Notes -`, [
     webBtnBlockGen("<ShortLabel ≤15>", "<public_url>"),
   ]),
   ```
   **Chatbot needs ONLY this one file** — no controller/route/keyword edit (a `webBtnBlockGen` renders as a direct tappable link; only `payloadBtnGen` needs routing). For **web-app parity**, also add the same block to the level's app data if that level is served from a hand-written subject list — otherwise the web app won't show it (see WIRING.md web-app section). Group notes for the same subject under one `📌 <Subject> Notes -` header (≤3 per group; add another group past 3).

3. **New topic under an existing subject** — subject dir exists, topic is a real new chapter/section worth its own page. Either (a) a topic file + full Level-2 wiring (WIRING.md), or (b) simpler: a level-flow web-link group named for the topic (option 2). Prefer (b) for single links; (a) when several notes will accrue.

4. **New subject** — subject dir does NOT exist AND it's a genuine recurring curriculum subject. Do the full Level-3 wiring in WIRING.md (chatbot flow + level registration + `handlePostback` + keywords, AND web app: wrapper + `appController.js` require/handler/export + `web.js` route + `levelLSubs.js`). **Flag loudly in the PR** ("⚠️ NEW SUBJECT"). For a one-off note to a non-existent subject, prefer option 2 (level-flow web-link) instead of a full subject.

5. **Lab report (`kind=lab`)** — never goes in note flows. Place under `lab_levels/level_L/` (see LAB section below).

6. **Question bank (`kind=question`)** — excluded from ingest entirely (copied to the QB Drive folder by n8n; no code). These are pre-filtered out of the queue.

---

## Case rules (from real flagged submissions — extend as new ones appear)

- **"Full" / "Full Note" / "Full Course" / "Part A Full" / "Part B Full" / whole-subject** (e.g. FSD/FULL, wpp/Full note, ym1/Full Note, sss1/Full note, cp/Python Full Note, mmtf/Part A, mmtf/Part-B Full, Full-Course folder drops) → **option 2, level-flow web-link** under `📌 <Subject> Notes -`. These are whole-subject hand-notes, not chapter topics.

- **Chemistry, ambiguous I vs II** → disambiguate by `level` + department + the topic/filename. Level-1 "Chemistry" → `chem1`. If the needed topic (e.g. "Suggestions") has no topic file, use **option 2**: `grroupedButtonBlockGen("📌 Chem-I Suggestions -", [ webBtnBlockGen("<name>(<yr>)", url) ])` in `level_1_flow.js`.

- **New chapter/topic that doesn't exist** (ym1 "Math solve", wpp "Sizing") → **option 2** level-flow web-link group named for the topic (`📌 <Subject> - <Topic> -`), unless multiple notes justify a full topic file (option 3a). wpp's real topics are Desizing/Pretreatment/BioScouring/Singeing/Impurities — "Sizing" is genuinely new, so a web-link group is fine.

- **`cp` (Computer Programming)** only has per-chapter files (arrays/loops/conditions/functions/strings) — a whole-course "Full Note" has no home → **option 2** level-flow web-link.

- **Non-existent real subjects** the user wants as full subjects: **INDUSTRIAL ENGINEERING** (level 2), **IESE / Environment** (note: `iee` exists but its topic files use a legacy `{text:...}` format — do NOT append a `textBlockGen` into those; make a clean new subject or a level-flow web-link) → **option 4 new subject** (flag loudly), or option 2 if it's clearly a one-off.

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
