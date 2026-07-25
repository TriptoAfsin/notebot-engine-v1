# Ingest wiring rules — READ BEFORE creating subjects/topics

The classifier places notes at three escalating levels of effort/risk. **Always prefer the
lowest one that fits.** v1 has TWO parallel systems that BOTH need wiring — the Messenger
chatbot (`chatbotController.js`) and the web app (`appController/appController.js` + `routes/web.js`)
— plus a keyword system. Skipping a step usually fails **silently** (dead button / 404).

Paths below use: level `L`, subject key `x` (lowercase, e.g. `fme`), topic file `xT`, payload
strings `x_flow` / `x_T_flow`. Base = `src/controllers/flows/botReplies/note_levels/level_L/level_L_subs/`.

---

## Level 1 — append a note to an EXISTING topic file  (trivial, always safe)
Append before `module.exports` in `.../x/topics/xT.js`:
```js
textBlockGen(`🔷 Hand Note(<name>, <dept>-<batch>, <year>) - \n\n<public_url>`),
```
(YouTube → `📺 Video Lecture(...)`.) Nothing else to wire. **This is the default path.**

## Level 2 — new TOPIC under an EXISTING subject  (bounded, ~6 edits)
1. Create `.../x/topics/xT.js` (array of text blocks + `module.exports`).
2. `.../x/x_flow.js`: add `payloadBtnGen("T","x_T_flow")` inside a group.
3. `chatbotController.js`: add `const x_T = require(".../x/topics/xT");` (near other requires) AND a branch in `handlePostback`: `else if (payload === "x_T_flow") { magicFunc(sender_psid, x_T); }` — **payload string must match step 2 exactly**.
4. `appController/academic/notes/levelL/subs/x/topics/appXT.js`: `module.exports = TextBlockTrans(require(".../x/topics/xT"))`.
5. `appController/appController.js`: require `appXT`, add handler `let xTFlow=(req,res)=>{...return res.send(xT)}`, add `xTFlow: xTFlow,` to `module.exports`.
6. `routes/web.js`: `router.get("/app/notes/L/x/x_T_flow", appController.xTFlow);` — **path segment after `/x/` must equal the payload string** (SubTopicTrans builds `route = app/notes/L/x/<payload>`).

## Level 3 — new SUBJECT  (~16 edits, HIGH RISK — flag loudly in the PR)
Do steps 1–6 above for the subject's first topic, PLUS:

**Chatbot**
- `.../x/x_flow.js` — the subject flow (grouped `payloadBtnGen`/`webBtnBlockGen`).
- `level_L_flow.js` — add `payloadBtnGen("X","x_flow")` to a "🔰 Select Subject for level L" group. *(skip → no subject button)*
- `chatbotController.js` — require `x_flow`; `handlePostback` branch `else if (payload==="x_flow"){ magicFunc(sender_psid, x_flow); }`.
- keywords: `keywords/academic_words/subjects/xWords.js`; in `chatbotController.js` require it, alias `const x = x_words;` in `handleMessage`, and `else if (wordIs(x, received_message)) { magicFunc(sender_psid, x_flow); }`. *(skip → not reachable by typing; not fatal)*

**Web app**
- `appController/academic/notes/levelL/subs/x/x.js` — `module.exports = SubTopicTrans("app/notes/L/x", require(".../x/x_flow"))`.
- `appController.js` — require `x.js` as `xAppFlow`, handler `let xFlow=(req,res)=>{...return res.send(xAppFlow)}`, export `xFlow: xFlow,`.
- `routes/web.js` — `router.get("/app/notes/L/x", appController.xFlow);`.
- `appController/academic/notes/levelL/levelLSubs.js` — append `{ subName:"X", route:"app/notes/L/x" }`. **MANUAL, not auto-generated** *(skip → subject invisible on web app)*.

**Labs (only if the submission is a lab report):** parallel structure under `appController/academic/labReport/levelL/subs/x/` + `router.get("/app/labs/L/x", ...)`.

---

### Silent-break checklist (verify before finishing)
- [ ] every `payloadBtnGen(...,"P")` has a `handlePostback` branch `payload === "P"`
- [ ] every such `P` also has a `web.js` route `.../x/P`
- [ ] new subject added to BOTH `level_L_flow.js` (chatbot) AND `levelLSubs.js` (web)
- [ ] every edited `.js` passes `node -e "require('./<file>')"`
- [ ] `require` paths' `../` depth is correct (deep nesting under appController)

Generators live in `src/controllers/genrators/` (historical typo — do NOT rename).
When you create a subject/topic, also add its aliases to `.ingest/subject-map.json`.
