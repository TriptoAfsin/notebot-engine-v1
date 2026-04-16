# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

NoteBOT Engine v1 — a Node.js/Express backend for a Facebook Messenger chatbot serving BUTEX (Bangladesh University of Textiles) students with academic notes, lab reports, question banks, routines, and results. It also has a companion web app served via EJS templates.

## Commands

- `npm run dev` — Start dev server with nodemon (hot reload)
- `npm start` — Start production server (`node src/server.js`)
- No test suite exists (`npm test` is a placeholder)

## Architecture

### Entry Point & Routing

`src/server.js` → Express app on `PORT` (default 6969). Routes defined in `src/routes/web.js`:
- `POST /webhook` — Facebook Messenger webhook (main bot logic)
- `GET /webhook` — Webhook verification
- `GET /app/**` — Web app routes for browsing notes by level/subject/topic

### Two Controllers, Two Interfaces

- **`src/controllers/chatbotController.js`** — The core bot brain (~5700 lines). Handles all Messenger interactions: incoming messages (`handleMessage`), button postbacks (`handlePostback`), and reactions (`handleReaction`). Routes messages by matching keywords to flows, then sends responses via `magicFunc()` → `callSendAPI()` (Facebook Send API v21.0).
- **`src/controllers/appController/appController.js`** — Serves the web app. Each route renders an EJS template with the same flow data used by the chatbot, making content accessible via browser.

### Message Flow

```
User sends message → POST /webhook → handleMessage()
  → keyword matching (wordIs / wordIncludes / wordIncludesWhole)
  → matched flow array selected
  → magicFunc(sender_psid, flowArray) sends blocks sequentially
```

For button clicks: `handlePostback()` matches `payload` string to a flow.

### Flows — The Content Model

A "flow" is a JS array of Messenger-formatted message blocks. Located in `src/controllers/flows/botReplies/`:

- `note_levels/level_{1-4}/` — Academic notes organized by level, then subject subdirectories
- `lab_levels/level_{1-3}/` — Lab reports, same structure
- `routine_levels/` — Class routines
- `entertainFlows/` — Jokes, quotes, songs
- `sponsoredFlows/` — Promotional/partnership content injected into flows

Each subject (e.g., `fme/`) has a main `fme_flow.js` (top-level buttons and links) and a `topics/` directory with sub-flows (e.g., `fmeBooks.js`, `fmeNotes.js`, `fmeSugg.js`).

### Block Generators (`simple-messenger-blocks` package)

All message blocks use the `simple-messenger-blocks` npm package (also aliased locally via `src/controllers/genrators/`):

- `textBlockGen(text)` — Plain text message
- `webBtnBlockGen(title, url)` — Web URL button (commonly used for Google Drive links)
- `payloadBtnGen(title, payload)` — Postback button triggering another flow
- `groupedBtnBlockGen(headerText, buttonArray)` — Header text + up to 3 buttons (Messenger limit)
- `imgBlockGen(url)` — Image attachment
- `cardGenerator(imageUrl, title, subtitle, url, buttons)` — Generic template card
- `quickReplyBlockGen()` — Quick reply chips

**Pattern for adding a new note resource:** Add a `webBtnBlockGen("Label", "google_drive_url")` inside a `groupedBtnBlockGen()` call in the appropriate subject's flow file. Max 3 buttons per group.

### Keyword System

`src/controllers/keywords/` contains arrays of trigger words. `academic_words/subjects/` has per-subject keywords. Matching functions in `src/controllers/libs/wordDetectors/`:
- `wordIs()` — Exact match
- `wordIncludes()` — Substring match
- `wordIncludesWhole()` — Whole word boundary match

### Services

`src/services/chatBotService.js` — Messenger Platform helpers: typing indicators, read receipts, user profile lookup, human handoff (`passThreadControl`/`takeThreadControl`).

### Analytics

Optional analytics via external server. Controlled by `collectAnalytics` env var. Tracks note views, lab views, missed keywords, and new users.

## Environment Variables

Copy `.env.example` to `.env`. Key vars: `PORT`, `PAGE_ACCESS_TOKEN`, `MY_VERIFY_TOKEN`, `FACEBOOK_APP_ID`, `appProduction`, `collectAnalytics`, `analyticsServerUrl`, `analyticsAuthKey`, `SECONDARY_RECEIVER_ID`.

## Common Task: Adding a Note

1. Find the subject's flow file (e.g., `src/controllers/flows/botReplies/note_levels/level_2/level_2_subs/fme/fme_flow.js`)
2. Add a `groupedBtnBlockGen()` with `webBtnBlockGen()` entries before the `🔰 Select Topics` section
3. If adding to a sub-topic (books, hand notes, questions), edit the corresponding file in `topics/`
4. The chatbotController and appController both consume the same flow files — no duplicate registration needed

## Adding Notes from Google Drive Folders

When adding bulk notes from a shared Google Drive folder, use the `playwright-cli` skill to extract individual file IDs:

1. `npx playwright-cli open "https://drive.google.com/drive/folders/FOLDER_ID?usp=sharing"`
2. Run JS to extract file IDs: `npx playwright-cli run-code "async page => { const result = await page.evaluate(() => { ... extract data-id and data-tooltip ... }); return result; }"`
3. Each file ID maps to `https://drive.google.com/file/d/FILE_ID/view?usp=sharing`
4. Match file names to existing subject flows and add `webBtnBlockGen` entries

Some subjects (CDP, UM, SYM, ES, ACWP, FTQC, etc.) only exist as web links in their level flow file (`level_3_flow.js`, `level_4_flow.js`) rather than having their own subdirectory — add individual file notes as new button blocks near those existing web links.

## Naming Conventions

- Flow files: `{subject}_flow.js` or `{subject}{Topic}.js`
- App controller wrappers: `app{Subject}{Topic}.js` in `appController/academic/`
- Keywords: `{subject}Words.js`
- Lab flows: `{subject}LabFlow.js`
- Note: the generators directory is intentionally spelled `genrators` (historical typo, do not rename)
