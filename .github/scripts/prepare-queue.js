// Reads pending-and-resolved submissions from the staging Postgres and writes them to
// .ingest/pending.json for the cloud ingest agent to consume. The cloud agent's sandbox
// can only reach GitHub, so it cannot query Postgres directly — this script runs on a
// GitHub Actions runner (full network egress) and stages the queue as a repo file.
//
// Env: DATABASE_URL (Railway staging DB connection string). Run by .github/workflows/notebot-prepare-queue.yml
const fs = require("fs");
const { Client } = require("pg");

(async () => {
  const c = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false },
  });
  await c.connect();
  const r = await c.query(
    "SELECT id, submitted_at, name, batch, department, level, subject_name, topic_name, kind, public_url " +
    "FROM submissions WHERE status='pending' AND resolve_status='ok' ORDER BY submitted_at"
  );
  await c.end();
  fs.mkdirSync(".ingest", { recursive: true });
  fs.writeFileSync(".ingest/pending.json", JSON.stringify(r.rows, null, 2) + "\n");
  console.log(`wrote .ingest/pending.json with ${r.rows.length} row(s)`);
})().catch((e) => { console.error("prepare-queue failed:", e.message); process.exit(1); });
