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
  // kind='question' (QBs) are excluded because they have no v1 placement: v1 exposes question banks
  // only as links to shared Drive *folders* (see qb_flow), so there is nothing per-file for the cloud
  // agent to edit and nothing for a PR to change.
  //
  // This comment used to claim they were "handled by n8n copying to the QB Drive folder". They were
  // not — the Level-2 QB folder tree held nothing newer than 2025, question_banks gained no row after
  // 2026-02-03, and not one question submission had ever left status='pending'. They are now placed
  // straight into v2's question_banks by .github/scripts/place-question-banks.js, which runs in the
  // same workflow as this script.
  const r = await c.query(
    "SELECT id, submitted_at, name, batch, department, level, subject_name, topic_name, kind, public_url " +
    "FROM submissions WHERE status='pending' AND resolve_status='ok' AND kind <> 'question' ORDER BY submitted_at"
  );
  await c.end();
  fs.mkdirSync(".ingest", { recursive: true });
  fs.writeFileSync(".ingest/pending.json", JSON.stringify(r.rows, null, 2) + "\n");
  console.log(`wrote .ingest/pending.json with ${r.rows.length} row(s)`);
})().catch((e) => { console.error("prepare-queue failed:", e.message); process.exit(1); });
