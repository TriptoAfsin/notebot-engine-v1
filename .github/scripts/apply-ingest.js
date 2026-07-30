// Runs on a GitHub Actions runner AFTER the cloud agent's ingest PR merges to main.
// Reads .ingest/applied.json and mirrors each applied note into the v2 DB:
//   - marks the submission status='done'
//   - resolves (or CREATES) the v2 subject + topic, then inserts the note (dedup by Drive id)
// Then blanks the manifest so it can't re-apply ([skip ci] on the commit prevents re-trigger).
//
// applied.json item shape (all optional except id/topicName/url):
//   { id, level, subjectDir, subjectName, topicName, topicDisplay, title, url }
//   topicName === v1 topic-file basename === v2 topics.name (the primary key we map on).
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

(async () => {
  let applied = [];
  try { applied = JSON.parse(fs.readFileSync(".ingest/applied.json", "utf8")); } catch { applied = []; }
  if (!Array.isArray(applied) || applied.length === 0) { console.log("applied.json empty — nothing to apply"); return; }

  const c = new Client({ connectionString: process.env.DATABASE_URL, ssl: { rejectUnauthorized: false } });
  await c.connect();
  let done = 0, inserted = 0, dupes = 0, newTopics = 0, newSubjects = 0;
  const problems = [];
  const bustNotes = new Set(), bustTopics = new Set(), bustSubjects = new Set();

  for (const a of applied) {
    const id = parseInt(a.id, 10);
    if (Number.isInteger(id)) { await c.query("UPDATE submissions SET status='done' WHERE id=$1", [id]); done++; }
    if (!a.topicName || !a.url) continue;

    // 1) resolve the v2 topic by name (== v1 topic-file basename)
    let topic = (await c.query("SELECT id FROM topics WHERE name=$1", [a.topicName])).rows[0];

    // 2) create it if missing (the agent created a NEW v1 topic/subject)
    if (!topic) {
      const levelSlug = String(a.level || "").trim();
      const level = (await c.query("SELECT id FROM levels WHERE slug=$1", [levelSlug])).rows[0];
      if (!level) { problems.push(`${a.topicName}: unknown level '${a.level}'`); continue; }

      // find (or create) the subject: match by slug/name of the v1 subject dir within the level.
      // subjectDir is a full repo path — slugify only its basename, else we blow past varchar(50).
      const sKey = slug(base(a.subjectDir)) || slug(a.subjectName);
      let subject = (await c.query(
        "SELECT id FROM subjects WHERE level_id=$1 AND (slug=$2 OR name=$2)", [level.id, sKey]
      )).rows[0];
      if (!subject) {
        const sSort = (await c.query("SELECT COALESCE(MAX(sort_order),0)+1 AS n FROM subjects WHERE level_id=$1", [level.id])).rows[0].n;
        subject = (await c.query(
          "INSERT INTO subjects (level_id,name,display_name,slug,sort_order,metadata) VALUES ($1,$2,$3,$4,$5,$6) RETURNING id",
          [level.id, sKey, cut(a.subjectName || base(a.subjectDir) || sKey, 100), sKey, sSort, JSON.stringify({ source: "ingest-auto" })]
        )).rows[0];
        newSubjects++; bustSubjects.add(level.id);
      }
      const tSort = (await c.query("SELECT COALESCE(MAX(sort_order),0)+1 AS n FROM topics WHERE subject_id=$1", [subject.id])).rows[0].n;
      topic = (await c.query(
        "INSERT INTO topics (subject_id,name,display_name,slug,sort_order,metadata) VALUES ($1,$2,$3,$4,$5,$6) RETURNING id",
        [subject.id, cut(a.topicName, 100), cut(a.topicDisplay || a.topicName, 200), slug(a.topicName, 100), tSort, JSON.stringify({ source: "ingest-auto" })]
      )).rows[0];
      newTopics++; bustTopics.add(subject.id);
    }

    // 3) insert the note (skip if the same Drive file id is already under this topic)
    const existing = (await c.query("SELECT url FROM notes WHERE topic_id=$1", [topic.id])).rows;
    if (existing.some((e) => idOf(e.url) === idOf(a.url))) { dupes++; continue; }
    const nSort = (await c.query("SELECT COALESCE(MAX(sort_order),0)+1 AS n FROM notes WHERE topic_id=$1", [topic.id])).rows[0].n;
    await c.query(
      "INSERT INTO notes (topic_id,title,url,sort_order,metadata) VALUES ($1,$2,$3,$4,$5)",
      [topic.id, cut(a.title || "", 500), cut(a.url, 1000), nSort, JSON.stringify({ source: "ingest-auto" })]
    );
    inserted++; bustNotes.add(topic.id);
  }
  await c.end();
  console.log(`done:${done} | v2 inserted:${inserted} | dupes:${dupes} | new topics:${newTopics} | new subjects:${newSubjects} | problems:${problems.length}`);
  if (problems.length) console.log("  problems:", problems.join(" ; "));

  // Bust the v2 Redis cache so merged content is visible immediately (else ~1h TTL).
  const redisUrl = process.env.REDIS_URL;
  if (redisUrl && (bustNotes.size || bustTopics.size || bustSubjects.size)) {
    try {
      const Redis = require("ioredis");
      const r = new Redis(redisUrl);
      const keys = [
        ...[...bustNotes].map((t) => `notebot:notes:${t}`),
        ...[...bustTopics].map((s) => `notebot:topics:${s}`),
        ...[...bustSubjects].map((l) => `notebot:subjects:${l}`),
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
      (newTopics || newSubjects) ? `🆕 new topics: ${newTopics} · new subjects: ${newSubjects}` : null,
      dupes ? `♻️ already present: ${dupes}` : null,
      problems.length ? `⚠️ problems: ${problems.length}` : null,
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
