// Applies the cloud agent's ingest manifest (.ingest/applied.json) to the DB after its PR
// merges to main: marks each submission status='pr-opened' and mirrors the note into the v2
// `notes` table (topicName -> topics.name, deduped by Drive file id). Then blanks the manifest
// so it does not re-apply. Runs on a GitHub Actions runner (has DB egress the cloud agent lacks).
//
// applied.json shape: [{ id, topicName, title, url }]
// Env: DATABASE_URL. Run by .github/workflows/notebot-apply-ingest.yml
const fs = require("fs");
const { Client } = require("pg");

const idOf = (u) => { const m = String(u).match(/\/d\/([\w-]+)/); return m ? m[1] : String(u); };

(async () => {
  let applied = [];
  try { applied = JSON.parse(fs.readFileSync(".ingest/applied.json", "utf8")); } catch { applied = []; }
  if (!Array.isArray(applied) || applied.length === 0) {
    console.log("applied.json empty — nothing to apply");
    return;
  }
  const c = new Client({ connectionString: process.env.DATABASE_URL, ssl: { rejectUnauthorized: false } });
  await c.connect();
  let marked = 0, inserted = 0, dupes = 0;
  const unmapped = [];
  for (const a of applied) {
    const id = parseInt(a.id, 10);
    if (Number.isInteger(id)) {
      await c.query("UPDATE submissions SET status='pr-opened' WHERE id=$1", [id]);
      marked++;
    }
    if (!a.topicName || !a.url) continue;
    const t = await c.query("SELECT id FROM topics WHERE name=$1", [a.topicName]);
    if (t.rows.length !== 1) { unmapped.push(`${a.topicName} (${t.rows.length} matches)`); continue; }
    const topicId = t.rows[0].id;
    const existing = (await c.query("SELECT url FROM notes WHERE topic_id=$1", [topicId])).rows;
    if (existing.some((e) => idOf(e.url) === idOf(a.url))) { dupes++; continue; }
    const mx = (await c.query("SELECT COALESCE(MAX(sort_order),0)+1 AS n FROM notes WHERE topic_id=$1", [topicId])).rows[0].n;
    await c.query(
      "INSERT INTO notes (topic_id, title, url, sort_order, metadata) VALUES ($1,$2,$3,$4,$5)",
      [topicId, a.title || "", a.url, mx, JSON.stringify({ source: "ingest-auto" })]
    );
    inserted++;
  }
  await c.end();
  console.log(`marked pr-opened:${marked} | v2 inserted:${inserted} | dupes skipped:${dupes} | unmapped:${unmapped.length}`);
  if (unmapped.length) console.log("  unmapped topicNames (fix manually in v2):", unmapped.join(", "));
  // blank the manifest so a re-run / re-push does not double-apply
  fs.writeFileSync(".ingest/applied.json", "[]\n");
})().catch((e) => { console.error("apply-ingest failed:", e.message); process.exit(1); });
