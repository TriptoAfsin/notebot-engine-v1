// Places question-bank submissions straight into v2's `question_banks` table.
//
// WHY THIS EXISTS AS A SEPARATE PATH
// The main ingest loop is: prepare-queue → cloud agent edits v1 flow files → PR → apply-ingest
// mirrors the merged rows into v2. Question banks cannot travel that road: v1 exposes QBs only as
// links to shared Drive *folders* (see qb_flow), so there is no per-file placement for the agent to
// make and nothing for a PR to change. prepare-queue therefore skips kind='question'.
//
// Its comment used to say those were "handled by n8n copying to the QB Drive folder". That was not
// happening: nothing in the Level-2 QB folder tree is newer than 2025, question_banks had no new row
// after 2026-02-03, and **not one** question submission had ever left status='pending' — 19 had
// accumulated since May 2026 with their links intact but unreachable by students. This script closes
// that gap by writing them where v2 actually reads QBs from, which is also what the CMS edits.
//
// Safe to re-run: a submission is only marked done once its URL is present in question_banks, and a
// URL already there is never inserted twice.
//
// Env: DATABASE_URL (required); REDIS_URL (optional — busts qbs:<levelId> so the change shows
// immediately instead of waiting out the ~1h TTL).
// Flags: --dry (report only, write nothing), --limit N
const { Client } = require("pg");

const DRY = process.argv.includes("--dry");
const LIMIT = (() => {
  const i = process.argv.indexOf("--limit");
  return i >= 0 && process.argv[i + 1] ? Number(process.argv[i + 1]) : 0;
})();

/** The identity of a hosted file, so the same upload is never placed twice. */
const fileKey = (u) => {
  const s = String(u || "");
  const drive = s.match(/\/d\/([\w-]{10,})/) || s.match(/\/folders\/([\w-]{10,})/) || s.match(/[?&]id=([\w-]{10,})/);
  if (drive) return `drive:${drive[1]}`;
  // Dropbox and anything else: strip the volatile query so ?st= / ?dl= churn does not read as new.
  const dropbox = s.match(/dropbox\.com\/scl\/fi\/([\w-]+)/);
  if (dropbox) return `dropbox:${dropbox[1]}`;
  return s.split("?")[0].replace(/\/+$/, "").toLowerCase() || null;
};

/** Subject names that carry no subject — the topic field is the only real label on those rows. */
const isPlaceholderSubject = (s) =>
  /^(question|questions|qb|q\.?b\.?|full course|all|n\/?a|none|-+)$/i.test(String(s || "").trim());

/** Whitespace tidy, including inside brackets — these strings end up as buttons students read. */
const clean = (s) =>
  String(s || "")
    .replace(/\s+/g, " ")
    .replace(/\(\s+/g, "(")
    .replace(/\s+\)/g, ")")
    .trim();

/**
 * Whether a field is a message to a human rather than a label.
 *
 * These titles become the button students tap, so "Here i am uploading level 4,term 1 questions" and
 * "I want to share QB" cannot be used verbatim — students would see the submitter talking to us.
 */
const isChatter = (s) => {
  const t = clean(s);
  return t.length > 34 || /\b(i|i'm|im|we)\b|want to|here is|here i|uploading|sharing|please|thanks/i.test(t);
};

/**
 * The level a row's own text claims, when it contradicts the level column.
 *
 * Submission 144 is filed as level 2 while its topic reads "Level 1, term 1 &2 QB". Guessing either
 * way would put a question bank in front of the wrong year, which is worse than leaving it pending —
 * so a conflict is reported for a human instead of resolved here.
 */
const claimedLevel = (...fields) => {
  for (const f of fields) {
    const m = String(f || "").match(/\b(?:level|l)[\s.-]*([1-4])\b/i);
    if (m) return m[1];
  }
  return null;
};

/** A short qualifier that separates two submissions for the same subject. */
const qualifier = (topic) => {
  const t = clean(topic).toLowerCase();
  if (/solve|solution/.test(t)) return "solve";
  if (/math/.test(t)) return "math";
  if (/important/.test(t)) return "important";
  if (/\b(20\d{2})\b/.test(t)) return t.match(/\b(20\d{2})\b/)[1];
  return null;
};

const slugify = (s, max = 50) =>
  clean(s).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, max);

(async () => {
  const c = new Client({ connectionString: process.env.DATABASE_URL, ssl: { rejectUnauthorized: false } });
  await c.connect();

  // resolve_status is deliberately NOT filtered to 'ok': the Drive resolver only fills public_url for
  // Drive links, so rows tagged 'manual-qb' (Dropbox uploads) have a perfectly usable original_url
  // and would otherwise sit here forever.
  const { rows: subs } = await c.query(
    `SELECT id, level, subject_name, topic_name, name, batch, department,
            COALESCE(NULLIF(public_url,''), original_url) AS url
       FROM submissions
      WHERE kind = 'question' AND status = 'pending'
      ORDER BY id` + (LIMIT ? ` LIMIT ${Number(LIMIT)}` : "")
  );
  console.log(`${subs.length} pending question submission(s)`);
  if (subs.length === 0) { await c.end(); return; }

  // Everything already in question_banks, so a re-run cannot duplicate.
  const { rows: existing } = await c.query("SELECT level_id, subject_slug, url FROM question_banks");
  const placed = new Set(existing.map((r) => fileKey(r.url)).filter(Boolean));
  const takenSlug = new Set(existing.map((r) => `${r.level_id}:${r.subject_slug.toLowerCase()}`));
  // Titles already on the shelf for a level, so a new one that would read identically gets qualified.
  const { rows: existingTitles } = await c.query("SELECT level_id, title FROM question_banks");
  const titlesInLevel = new Set(existingTitles.map((r) => `${r.level_id}:${String(r.title).toLowerCase()}`));

  const { rows: levelRows } = await c.query("SELECT id, slug FROM levels");
  const levelBySlug = new Map(levelRows.map((l) => [String(l.slug), l.id]));

  const nextSort = new Map();
  for (const l of levelRows) {
    const { rows } = await c.query(
      "SELECT COALESCE(MAX(sort_order),0)+1 AS n FROM question_banks WHERE level_id=$1", [l.id]
    );
    nextSort.set(l.id, Number(rows[0].n));
  }

  let inserted = 0, alreadyThere = 0, skipped = 0;
  const problems = [];

  for (const s of subs) {
    const levelId = levelBySlug.get(String(s.level).trim());
    if (!levelId) { problems.push(`${s.id}: level "${s.level}" is not a known level`); skipped++; continue; }

    const url = clean(s.url);
    if (!/^https?:\/\//i.test(url)) { problems.push(`${s.id}: no usable URL`); skipped++; continue; }

    const key = fileKey(url);
    if (key && placed.has(key)) {
      // Already reachable — mark the submission done rather than leaving it pending forever.
      if (!DRY) await c.query("UPDATE submissions SET status='done' WHERE id=$1", [s.id]);
      alreadyThere++;
      continue;
    }

    // Refuse to guess when the row's own words contradict its level column.
    const claims = claimedLevel(s.topic_name, s.subject_name);
    if (claims && claims !== String(s.level).trim()) {
      problems.push(
        `${s.id}: filed as level ${s.level} but its text says level ${claims} ` +
        `("${clean(s.topic_name).slice(0, 40)}") — left pending for a human`
      );
      skipped++;
      continue;
    }

    // A placeholder subject pushes the label onto topic_name, which is often a note to us rather
    // than a title. Fall back to something a student can read.
    let label;
    if (isPlaceholderSubject(s.subject_name)) {
      label = isChatter(s.topic_name)
        ? `Question bank — level ${s.level}`
        : clean(s.topic_name) || `Question bank — level ${s.level}`;
    } else {
      label = clean(s.subject_name);
    }

    // Two submissions can name the same subject (SSS-1 twice, one plain and one solved). Identical
    // buttons are indistinguishable to a student, so the topic supplies a qualifier.
    if (titlesInLevel.has(`${levelId}:${label.toLowerCase()}`)) {
      const q = qualifier(s.topic_name);
      label = q ? `${label} (${q})` : `${label} (${s.id})`;
    }
    titlesInLevel.add(`${levelId}:${label.toLowerCase()}`);

    // Unique per level, because question_banks is addressed by level + subject_slug.
    const root = slugify(label) || `qb-${s.id}`;
    let slug = root;
    for (let n = 2; takenSlug.has(`${levelId}:${slug}`); n++) {
      const suffix = `-${n}`;
      slug = root.slice(0, 50 - suffix.length) + suffix;
    }

    const sort = nextSort.get(levelId);
    nextSort.set(levelId, sort + 1);

    const metadata = {
      source: "question-ingest",
      submissionId: s.id,
      submittedBy: clean(s.name) || null,
      topic: clean(s.topic_name) || null,
      batch: clean(s.batch) || null,
      department: clean(s.department) || null,
    };

    console.log(`  L${s.level} ${slug.padEnd(30)} "${label.slice(0, 44)}"`);

    if (!DRY) {
      await c.query(
        `INSERT INTO question_banks (level_id, subject_slug, title, url, sort_order, metadata)
         VALUES ($1,$2,$3,$4,$5,$6)`,
        [levelId, slug.slice(0, 50), label.slice(0, 500), url.slice(0, 1000), sort, metadata]
      );
      // Only now is the submission genuinely served, so only now is it done.
      await c.query("UPDATE submissions SET status='done', published_at=now() WHERE id=$1", [s.id]);
    }
    takenSlug.add(`${levelId}:${slug}`);
    if (key) placed.add(key);
    inserted++;
  }

  console.log(`\ninserted        : ${inserted}`);
  console.log(`already present : ${alreadyThere} (marked done)`);
  console.log(`skipped         : ${skipped}`);
  for (const p of problems) console.log(`   ! ${p}`);

  // Bust the level QB caches so the engine serves the new rows now, not in an hour.
  if (!DRY && inserted > 0 && process.env.REDIS_URL) {
    try {
      const Redis = require("ioredis");
      const r = new Redis(process.env.REDIS_URL);
      for (const id of nextSort.keys()) await r.del(`notebot:qbs:${id}`);
      await r.del("notebot:levels");
      await r.quit();
      console.log("v2 QB caches busted");
    } catch (e) {
      console.log(`cache bust skipped: ${e.message}`);
    }
  }

  await c.end();
  if (DRY) console.log("\n--dry: nothing was written");
})().catch((e) => { console.error("place-question-banks failed:", e.message); process.exit(1); });
