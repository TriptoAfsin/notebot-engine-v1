// Runs on a GitHub Actions runner when the cloud agent pushes an ingest/auto-* branch
// (the sandbox can't reach api.github.com or Telegram, so the runner does it):
//   1. builds a PR body = table of applied notes (+ new subjects/topics + flagged list)
//   2. opens the PR (base main) if one doesn't already exist
//   3. marks the applied submissions status='pr-open' (dedup: next queue skips them)
//   4. sends a Telegram message with the PR link + note table
//
// Env: GITHUB_TOKEN, GITHUB_REPOSITORY (owner/repo), GITHUB_REF_NAME (branch),
//      DATABASE_URL, TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID.
const fs = require("fs");
const { Client } = require("pg");

const esc = (s) => String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const noteName = (t) => { const m = String(t || "").match(/\(([^)]*)\)/); return m ? m[1] : (t || "").replace(/^🔷|^📺/, "").trim(); };

async function main() {
  const repo = process.env.GITHUB_REPOSITORY;          // TriptoAfsin/notebot-engine-v1
  const branch = process.env.GITHUB_REF_NAME;           // ingest/auto-YYYY-MM-DD
  const gh = process.env.GITHUB_TOKEN;
  const ghHead = { Authorization: `Bearer ${gh}`, Accept: "application/vnd.github+json", "Content-Type": "application/json" };

  let applied = [];
  try { applied = JSON.parse(fs.readFileSync(".ingest/applied.json", "utf8")); } catch { applied = []; }
  let flagged = [];
  try { flagged = JSON.parse(fs.readFileSync(".ingest/flagged.json", "utf8")); } catch { flagged = []; }

  const date = branch.replace("ingest/auto-", "");
  const newSubs = applied.filter((a) => a.new === "subject");
  const newTops = applied.filter((a) => a.new === "topic");

  // ---- PR body ----
  let body = `Automated note ingest for **${date}**.\n\n`;
  if (applied.length) {
    body += `### ✅ Applied (${applied.length})\n\n| Note | Placed in | Link |\n|---|---|---|\n`;
    for (const a of applied) {
      const where = `L${a.level || "?"} · ${a.subjectName || a.subjectDir || "?"} / ${a.topicDisplay || a.topicName || "?"}` +
        (a.new ? ` **(new ${a.new})**` : "");
      body += `| ${noteName(a.title)} | ${where} | [open](${a.url}) |\n`;
    }
    body += "\n";
  } else {
    body += "_No notes auto-applied this run._\n\n";
  }
  if (newSubs.length) body += `> ⚠️ **${newSubs.length} NEW SUBJECT(S)** created — review the chatbot + web-app wiring carefully (see \`.ingest/WIRING.md\`).\n\n`;
  if (flagged.length) {
    body += `### 🚩 Flagged / manual (${flagged.length})\n\n| Submission | Reason | Link |\n|---|---|---|\n`;
    for (const f of flagged) body += `| ${esc(f.name || "")} — ${esc(f.subject_name || "")} / ${esc(f.topic_name || "")} | ${esc(f.reason || f.kind || "")} | [open](${f.public_url || f.url || ""}) |\n`;
    body += "\n";
  }
  body += `\n_On merge, \`apply-ingest\` mirrors these into the v2 notes DB._`;

  // ---- open PR (or find existing) ----
  let prUrl = "", prNum = 0;
  const owner = repo.split("/")[0];
  let r = await fetch(`https://api.github.com/repos/${repo}/pulls`, {
    method: "POST", headers: ghHead,
    body: JSON.stringify({ title: `Auto note ingest ${date}`, head: branch, base: "main", body }),
  });
  if (r.status === 201) { const j = await r.json(); prUrl = j.html_url; prNum = j.number; }
  else {
    // likely already exists — look it up
    const ex = await (await fetch(`https://api.github.com/repos/${repo}/pulls?head=${owner}:${branch}&state=open`, { headers: ghHead })).json();
    if (Array.isArray(ex) && ex[0]) { prUrl = ex[0].html_url; prNum = ex[0].number; }
    else console.log("PR create failed:", r.status, (await r.text()).slice(0, 200));
  }
  console.log("PR:", prNum, prUrl);

  // ---- mark applied rows pr-open (dedup) ----
  const ids = applied.map((a) => parseInt(a.id, 10)).filter(Number.isInteger);
  if (ids.length && process.env.DATABASE_URL) {
    const c = new Client({ connectionString: process.env.DATABASE_URL, ssl: { rejectUnauthorized: false } });
    await c.connect();
    await c.query("UPDATE submissions SET status='pr-open' WHERE id = ANY($1::int[]) AND status='pending'", [ids]);
    await c.end();
    console.log("marked pr-open:", ids.length);
  }

  // ---- Telegram ----
  const tok = process.env.TELEGRAM_BOT_TOKEN, chat = process.env.TELEGRAM_CHAT_ID;
  if (tok && chat) {
    const lines = [
      "📥 <b>NoteBot ingest PR ready</b>",
      "------------------",
      `📝 Applied: <b>${applied.length}</b>${newSubs.length ? ` · new subjects: ${newSubs.length}` : ""}${newTops.length ? ` · new topics: ${newTops.length}` : ""}`,
      flagged.length ? `🚩 Flagged: <b>${flagged.length}</b>` : null,
      prUrl ? `🔗 <a href="${prUrl}">PR #${prNum}</a>` : "⚠️ PR not opened (see Action log)",
    ].filter(Boolean);
    const preview = applied.slice(0, 8).map((a) => `• ${esc(noteName(a.title))} → ${esc(a.subjectName || a.subjectDir || "")}/${esc(a.topicDisplay || a.topicName || "")}${a.new ? ` (new ${a.new})` : ""}`);
    if (preview.length) lines.push("", ...preview, applied.length > 8 ? `…and ${applied.length - 8} more` : "");
    const text = lines.filter((x) => x !== "").join("\n");
    const tr = await fetch(`https://api.telegram.org/bot${tok}/sendMessage`, {
      method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chat, text, parse_mode: "HTML", disable_web_page_preview: true }),
    });
    console.log("telegram:", tr.status);
  }
}
main().catch((e) => { console.error("open-pr-notify failed:", e.message); process.exit(1); });
