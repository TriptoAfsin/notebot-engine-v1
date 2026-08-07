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

(async () => {
  let applied = [];
  try { applied = JSON.parse(fs.readFileSync(".ingest/applied.json", "utf8")); } catch { applied = []; }
  if (!Array.isArray(applied) || applied.length === 0) { console.log("applied.json empty — nothing to apply"); return; }

  const c = new Client({ connectionString: process.env.DATABASE_URL, ssl: { rejectUnauthorized: false } });
  await c.connect();
  let done = 0, inserted = 0, labs = 0, dupes = 0, newTopics = 0, newSubjects = 0;
  const problems = [];
  const bustNotes = new Set(), bustTopics = new Set(), bustSubjects = new Set(), bustLabs = new Set();

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
      await c.query(
        "INSERT INTO lab_reports (level_id,subject_slug,topic_name,title,url,sort_order,metadata) VALUES ($1,$2,$3,$4,$5,$6,$7)",
        [level.id, subjectSlug, topicName, cut(a.title || topicName, 500), cut(a.url, 1000), lSort, JSON.stringify({ source: "ingest-auto" })]
      );
      labs++; bustLabs.add(`${level.id}:${subjectSlug}`); await mark("done"); done++; continue;
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
  console.log(`done:${done}/${applied.length} | v2 notes:${inserted} | v2 labs:${labs} | dupes:${dupes} | new topics:${newTopics} | new subjects:${newSubjects} | problems:${problems.length}`);
  if (problems.length) console.log("  problems:", problems.join(" ; "));

  // Bust the v2 Redis cache so merged content is visible immediately (else ~1h TTL).
  const redisUrl = process.env.REDIS_URL;
  if (redisUrl && (bustNotes.size || bustTopics.size || bustSubjects.size || bustLabs.size)) {
    try {
      const Redis = require("ioredis");
      const r = new Redis(redisUrl);
      const keys = [
        ...[...bustNotes].map((t) => `notebot:notes:${t}`),
        ...[...bustTopics].map((s) => `notebot:topics:${s}`),
        ...[...bustSubjects].map((l) => `notebot:subjects:${l}`),
        ...[...bustLabs].map((k) => `notebot:labs:${k.split(":")[0]}:${k.split(":")[1]}`),
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
