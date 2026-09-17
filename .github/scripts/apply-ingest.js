// Runs on a GitHub Actions runner AFTER the cloud agent's ingest PR merges to main.
// Reads .ingest/applied.json and mirrors each applied row into its proper v2 home:
//   - normal note          → topics/notes tree (resolving, or CREATING, subject + topic)
//   - subject-level link   → a per-subject "<subjectDir>FullNotes" catch-all topic in notes
//   - lab report           → the dedicated lab_reports table (level + subject_slug + topic_name)
// A submission is marked status='done' ONLY once its url is actually present in v2; rows that
// could not be mirrored get status='v2-failed' so they stay queryable (and are NOT re-queued,
// since prepare-queue only picks status='pending'). Then the manifest is blanked so it can't
// re-apply ([skip ci] on the commit prevents re-trigger).
//
// applied.json item shape (id/url required):
//   { id, level, subjectDir, subjectName, topicName, topicDisplay, title, url, new }
//   topicName === v1 topic-file basename === v2 topics.name (the key we map on).
//   topicName is "" for the two v1 placements that have no topic file — new==="subject-weblink"
//   (a link in <subject>_flow.js) and new==="lab" (a lab_levels report). Both used to fall
//   through a silent `continue` here, so every web-link and every lab report was marked done
//   and then dropped; they are now routed instead.
//
// Env: DATABASE_URL (required); REDIS_URL (optional — busts the v2 cache so merged
// content shows immediately instead of waiting out the ~1h TTL). Runner has the egress
// the cloud agent lacks.
const fs = require("fs");
const { Client } = require("pg");

const idOf = (u) => { const m = String(u).match(/\/d\/([\w-]+)/); return m ? m[1] : String(u); };
const base = (s) => String(s || "").split("/").filter(Boolean).pop() || "";        // last path segment ("…/fm_1" → "fm_1")
const slug = (s, max = 50) => String(s || "").toLowerCase().replace(/[^a-z0-9_]+/g, "").slice(0, max) || null;
const cut = (s, max) => String(s ?? "").slice(0, max);                              // fit a varchar(max) column
const isLabRow = (a) => a.new === "lab" || a.kind === "lab" || /(^|\/)lab_levels(\/|$)/.test(String(a.subjectDir || ""));

/**
 * Puts the same button into v2's Messenger snapshot of `level_<n>_flow.js`.
 *
 * v2 answers the `level_<n>` postback from a `bot_flows` row extracted from v1 (metadata.source =
 * "v1-extract"), not from the subjects table — so a button added to the v1 flow file shows up in the
 * web app (which reads subjects) and stays invisible in the bot until this row carries it too.
 *
 * `groupHeader` is the template text the button sits under, so a placement keeps v1's grouping
 * ("\u{1F4CC} Question Analysis - " rather than another "\u{1F530} Select Subject" chip). Messenger
 * allows 3 buttons per template, so a full group gets a sibling with the same header, exactly as the
 * flow files do. `afterHeader` says which group it follows the first time that header appears.
 * No-ops when the URL is already in the snapshot, so a re-run cannot duplicate it.
 */
async function addLevelButton(c, levelSlug, a) {
  const payload = `level_${levelSlug}`;
  const row = (await c.query("SELECT id, blocks FROM bot_flows WHERE payload=$1", [payload])).rows[0];
  if (!row) return false;                                   // no snapshot for this level; nothing to keep in step
  const blocks = Array.isArray(row.blocks) ? row.blocks : [];
  const groups = blocks.filter((b) => Array.isArray(b?.attachment?.payload?.buttons));
  if (groups.some((g) => g.attachment.payload.buttons.some((btn) => idOf(btn.url || "") === idOf(a.url)))) return false;

  const header = a.groupHeader || "\u{1F530} Select Subject for level " + levelSlug + " - ";
  const button = { type: "web_url", url: String(a.url), title: cut(a.title || a.subjectName || "Notes", 20) };

  const open = groups.find((g) => g.attachment.payload.text === header && g.attachment.payload.buttons.length < 3);
  if (open) {
    open.attachment.payload.buttons.push(button);
  } else {
    const block = { attachment: { type: "template", payload: { text: header, buttons: [button], template_type: "button" } } };
    // Sit next to the group it belongs with. For a header the snapshot has never seen, `afterHeader`
    // is the placing agent telling us where the same group sits in the v1 file, so the bot lists the
    // groups in v1's order rather than pushing every new one past the subject chips.
    const texts = blocks.map((b) => b?.attachment?.payload?.text);
    const at = texts.lastIndexOf(header);
    const hint = a.afterHeader ? texts.lastIndexOf(a.afterHeader) : -1;
    blocks.splice(at >= 0 ? at + 1 : hint >= 0 ? hint + 1 : blocks.length, 0, block);
  }
  await c.query("UPDATE bot_flows SET blocks=$2, updated_at=now() WHERE id=$1", [row.id, JSON.stringify(blocks)]);
  return true;
}

(async () => {
  let applied = [];
  try { applied = JSON.parse(fs.readFileSync(".ingest/applied.json", "utf8")); } catch { applied = []; }
  if (!Array.isArray(applied) || applied.length === 0) { console.log("applied.json empty — nothing to apply"); return; }

  const c = new Client({ connectionString: process.env.DATABASE_URL, ssl: { rejectUnauthorized: false } });
  await c.connect();
  let done = 0, inserted = 0, labs = 0, dupes = 0, newTopics = 0, newSubjects = 0, levelLinks = 0;
  const problems = [];
  const bustNotes = new Set(), bustTopics = new Set(), bustSubjects = new Set(), bustLabs = new Set();
  let bustFlows = false;   // the bot's whole flow table is one cache entry, so this is a flag, not a set

  // resolve the v2 subject for a row, creating it if the agent added a brand-new v1 subject.
  // subjectDir is a repo path — slugify only its basename, else we blow past varchar(50).
  const resolveSubject = async (a, levelId) => {
    const sKey = slug(base(a.subjectDir)) || slug(a.subjectName);
    let subject = (await c.query(
      "SELECT id FROM subjects WHERE level_id=$1 AND (slug=$2 OR name=$2)", [levelId, sKey]
    )).rows[0];
    if (!subject) {
      const sSort = (await c.query("SELECT COALESCE(MAX(sort_order),0)+1 AS n FROM subjects WHERE level_id=$1", [levelId])).rows[0].n;
      subject = (await c.query(
        "INSERT INTO subjects (level_id,name,display_name,slug,sort_order,metadata) VALUES ($1,$2,$3,$4,$5,$6) RETURNING id",
        [levelId, sKey, cut(a.subjectName || base(a.subjectDir) || sKey, 100), sKey, sSort, JSON.stringify({ source: "ingest-auto" })]
      )).rows[0];
      newSubjects++; bustSubjects.add(levelId);
    }
    return subject;
  };

  for (const a of applied) {
    const id = parseInt(a.id, 10);
    const mark = async (status) => { if (Number.isInteger(id)) await c.query("UPDATE submissions SET status=$2 WHERE id=$1", [id, status]); };
    const fail = async (msg) => { problems.push(`${a.id}: ${msg}`); await mark("v2-failed"); };

    if (!a.url) { await fail("no url"); continue; }
    const levelSlug = String(a.level || "").trim();
    const level = (await c.query("SELECT id FROM levels WHERE slug=$1", [levelSlug])).rows[0];
    if (!level) { await fail(`unknown level '${a.level}'`); continue; }

    // ---- lab reports live in their own table, keyed by level + v1 lab subject dir ----
    if (isLabRow(a)) {
      const subjectSlug = slug(base(a.subjectDir), 50);
      if (!subjectSlug) { await fail("lab row without a subjectDir"); continue; }
      const topicName = cut(a.topicDisplay || a.topicName || "Lab Reports", 200);
      const existing = (await c.query(
        "SELECT url FROM lab_reports WHERE level_id=$1 AND subject_slug=$2", [level.id, subjectSlug]
      )).rows;
      if (existing.some((e) => idOf(e.url) === idOf(a.url))) { dupes++; await mark("done"); done++; continue; }
      const lSort = (await c.query(
        "SELECT COALESCE(MAX(sort_order),0)+1 AS n FROM lab_reports WHERE level_id=$1 AND subject_slug=$2", [level.id, subjectSlug]
      )).rows[0].n;
      // v1Display/v1Kind are what compat.routes.ts renders from. A lab web-link left without them
      // falls back to a group-size heuristic, which is how an ingested report ended up hidden
      // behind a drill-down instead of showing as the direct link v1 gives it.
      const labTitle = cut(a.title || topicName, 500);
      await c.query(
        "INSERT INTO lab_reports (level_id,subject_slug,topic_name,title,url,sort_order,metadata) VALUES ($1,$2,$3,$4,$5,$6,$7)",
        [level.id, subjectSlug, topicName, labTitle, cut(a.url, 1000), lSort,
         JSON.stringify({ source: "ingest-auto", v1Kind: "link", v1Display: `\u{1F4CC} ${topicName} -${labTitle}` })]
      );
      labs++; bustLabs.add(`${level.id}:${subjectSlug}`); await mark("done"); done++; continue;
    }

    // ---- a link in the LEVEL flow file, not a subject's own flow ----
    // v1's level_<n>_flow.js carries a handful of buttons that are a bare Drive link rather than a
    // subject with topics ("All Level 1", "TNF", "IESE"). v2 models those as a subjects row with
    // zero topics and metadata.directUrl, which compat.routes.ts renders as { subName, url } - the
    // direct link v1's app list gives. Routing one down the normal notes path instead would invent a
    // "<slug>FullNotes" topic and bury the link behind a drill-down it does not have in v1.
    if (a.new === "level-weblink") {
      const sKey = slug(a.subjectDir ? base(a.subjectDir) : a.subjectName);
      if (!sKey) { await fail("level-weblink without a usable slug"); continue; }
      const existing = (await c.query("SELECT id, metadata FROM subjects WHERE level_id=$1 AND slug=$2", [level.id, sKey])).rows[0];
      if (existing) {
        if (idOf(existing.metadata?.directUrl || "") === idOf(a.url)) { dupes++; await mark("done"); done++; continue; }
        await c.query("UPDATE subjects SET metadata = COALESCE(metadata,'{}'::jsonb) || $2::jsonb WHERE id=$1",
          [existing.id, JSON.stringify({ directUrl: cut(a.url, 1000), source: "ingest-auto" })]);
      } else {
        const sSort = (await c.query("SELECT COALESCE(MAX(sort_order),0)+1 AS n FROM subjects WHERE level_id=$1", [level.id])).rows[0].n;
        await c.query(
          "INSERT INTO subjects (level_id,name,display_name,slug,sort_order,metadata) VALUES ($1,$2,$3,$4,$5,$6)",
          [level.id, sKey, cut(a.subjectName || sKey, 100), sKey, sSort,
           JSON.stringify({ directUrl: cut(a.url, 1000), source: "ingest-auto" })]);
        newSubjects++;
      }
      // The Messenger side of v2 answers `level_<n>` from a frozen v1 extract in bot_flows, so a
      // button added to level_<n>_flow.js is invisible to the bot until that snapshot carries it
      // too. That is the same failure mode that kept 46 lab subjects frozen; keep the two in step.
      if (await addLevelButton(c, levelSlug, a)) bustFlows = true;
      levelLinks++; bustSubjects.add(level.id); await mark("done"); done++; continue;
    }

    // ---- notes: resolve the subject first, so subject-level links have somewhere to land ----
    const subject = await resolveSubject(a, level.id);

    // A v1 subject-flow web link has no topic file; give the subject one catch-all topic so the
    // note is reachable in v2 instead of being dropped (notes.topic_id is NOT NULL).
    const topicKey = a.topicName || `${base(a.subjectDir) || slug(a.subjectName)}FullNotes`;
    const topicShow = a.topicName ? (a.topicDisplay || a.topicName) : "Full Notes";

    // prefer a topic already under this subject; fall back to a global name match (legacy
    // behaviour) so we do not create a duplicate of a topic that lives elsewhere.
    let topic = (await c.query("SELECT id FROM topics WHERE subject_id=$1 AND name=$2", [subject.id, topicKey])).rows[0]
             || (await c.query("SELECT id FROM topics WHERE name=$1", [topicKey])).rows[0];
    if (!topic) {
      const tSort = (await c.query("SELECT COALESCE(MAX(sort_order),0)+1 AS n FROM topics WHERE subject_id=$1", [subject.id])).rows[0].n;
      topic = (await c.query(
        "INSERT INTO topics (subject_id,name,display_name,slug,sort_order,metadata) VALUES ($1,$2,$3,$4,$5,$6) RETURNING id",
        [subject.id, cut(topicKey, 100), cut(topicShow, 200), slug(topicKey, 100), tSort, JSON.stringify({ source: "ingest-auto" })]
      )).rows[0];
      newTopics++; bustTopics.add(subject.id);
    }

    const existing = (await c.query("SELECT url FROM notes WHERE topic_id=$1", [topic.id])).rows;
    if (existing.some((e) => idOf(e.url) === idOf(a.url))) { dupes++; await mark("done"); done++; continue; }
    const nSort = (await c.query("SELECT COALESCE(MAX(sort_order),0)+1 AS n FROM notes WHERE topic_id=$1", [topic.id])).rows[0].n;
    await c.query(
      "INSERT INTO notes (topic_id,title,url,sort_order,metadata) VALUES ($1,$2,$3,$4,$5)",
      [topic.id, cut(a.title || topicShow, 500), cut(a.url, 1000), nSort, JSON.stringify({ source: "ingest-auto" })]
    );
    inserted++; bustNotes.add(topic.id); await mark("done"); done++;
  }
  await c.end();
  console.log(`done:${done}/${applied.length} | v2 notes:${inserted} | v2 labs:${labs} | level links:${levelLinks} | dupes:${dupes} | new topics:${newTopics} | new subjects:${newSubjects} | problems:${problems.length}`);
  if (problems.length) console.log("  problems:", problems.join(" ; "));

  // Bust the v2 Redis cache so merged content is visible immediately (else ~1h TTL).
  const redisUrl = process.env.REDIS_URL;
  if (redisUrl && (bustNotes.size || bustTopics.size || bustSubjects.size || bustLabs.size || bustFlows)) {
    try {
      const Redis = require("ioredis");
      const r = new Redis(redisUrl);
      const keys = [
        ...[...bustNotes].map((t) => `notebot:notes:${t}`),
        ...[...bustTopics].map((s) => `notebot:topics:${s}`),
        ...[...bustSubjects].map((l) => `notebot:subjects:${l}`),
        ...[...bustLabs].map((k) => `notebot:labs:${k.split(":")[0]}:${k.split(":")[1]}`),
        ...(bustFlows ? ["notebot:botflows:all"] : []),   // bot-flow.service.ts caches the table under one key
      ];
      if (keys.length) await r.del(...keys);
      await r.quit();
      console.log("busted Redis:", keys.length, "key(s)");
    } catch (e) { console.log("cache bust skipped:", e.message); }
  }

  // Telegram: report how many rows landed in the v2 DB on merge
  const tok = process.env.TELEGRAM_BOT_TOKEN, chat = process.env.TELEGRAM_CHAT_ID;
  if (tok && chat) {
    const lines = [
      "✅ <b>NoteBot v2 sync (merged)</b>",
      "------------------",
      `🗄️ Notes added to v2 DB: <b>${inserted}</b>`,
      labs ? `🧪 Lab reports added: <b>${labs}</b>` : null,
      levelLinks ? `\u{1F517} Level links added: <b>${levelLinks}</b>` : null,
      (newTopics || newSubjects) ? `🆕 new topics: ${newTopics} · new subjects: ${newSubjects}` : null,
      dupes ? `♻️ already present: ${dupes}` : null,
      // a mismatch here means rows were applied to v1 but never mirrored — always surface it
      done < applied.length ? `⚠️ NOT mirrored: <b>${applied.length - done}</b> of ${applied.length} (status v2-failed)` : null,
      problems.length ? `⚠️ problems: ${problems.slice(0, 5).join(" ; ")}` : null,
    ].filter(Boolean);
    try {
      const r = await fetch(`https://api.telegram.org/bot${tok}/sendMessage`, {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: chat, text: lines.join("\n"), parse_mode: "HTML" }),
      });
      console.log("telegram:", r.status);
    } catch (e) { console.log("telegram failed:", e.message); }
  }

  fs.writeFileSync(".ingest/applied.json", "[]\n");
})().catch((e) => { console.error("apply-ingest failed:", e.message); process.exit(1); });
