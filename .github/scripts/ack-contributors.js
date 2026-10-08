// Thanks contributors once their submissions are published: one email per person per run, listing
// every note of theirs that went live and where it was added.
//
// Runs after apply-ingest (notes, labs, level links) and after place-question-banks, so every
// publishing path is covered without either script knowing about email. It works from the database
// rather than from a manifest: any submission with status='done' and ack_status NULL is owed a
// thank-you. ack_status then records the outcome, so nobody is emailed twice for the same note:
//   sent                 - Resend accepted it
//   no-email             - the submitter left no usable address (names, Facebook handles)
//   failed               - Resend rejected the address outright (4xx); not retried
//   skipped-preexisting  - published before this feature existed (set once by the backfill)
// A transient failure (429/5xx/network) leaves ack_status NULL so the next run retries it.
//
// Env: DATABASE_URL, RESEND_API_KEY (required to send); TELEGRAM_BOT_TOKEN/TELEGRAM_CHAT_ID (optional).
// Flags: --dry (render and report, send and write nothing), --max N (contributors per run, default 25)
const { Client } = require("pg");
const { renderAck } = require("./lib/ack-email");

const DRY = process.argv.includes("--dry");
const MAX = (() => { const i = process.argv.indexOf("--max"); return i >= 0 ? Number(process.argv[i + 1]) : 25; })();
const FROM = "NoteBot <notebot@t21.dev>";
const REPLY_TO = "afsintripto@gmail.com";
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// Where each published submission landed, found by its Drive file id (or the full URL for Dropbox
// and other hosts) across every table a submission can be published into.
const PLACEMENT_SQL = `
WITH owed AS (
  SELECT s.id, s.contributor_id, s.subject_name, s.topic_name, s.level, s.kind,
         coalesce(substring(u.url FROM '/d/([A-Za-z0-9_-]{10,})'), u.url) AS k
    FROM submissions s
    CROSS JOIN LATERAL (SELECT coalesce(nullif(s.public_url, ''), s.original_url) AS url) u
   WHERE s.status = 'done' AND s.ack_status IS NULL AND s.contributor_id IS NOT NULL
)
SELECT o.id, o.contributor_id, o.subject_name, o.topic_name, o.level, o.kind, p.*
  FROM owed o
  LEFT JOIN LATERAL (
    SELECT 'note' AS section, l.slug AS p_level, sub.display_name AS p_subject, t.display_name AS p_topic
      FROM notes n JOIN topics t ON t.id = n.topic_id JOIN subjects sub ON sub.id = t.subject_id JOIN levels l ON l.id = sub.level_id
     WHERE coalesce(substring(n.url FROM '/d/([A-Za-z0-9_-]{10,})'), n.url) = o.k
    UNION ALL
    SELECT 'lab', l.slug,
           coalesce((SELECT x->>'displayName' FROM jsonb_array_elements(l.metadata->'labSubjects') x WHERE x->>'dbSlug' = lr.subject_slug LIMIT 1), upper(lr.subject_slug)),
           regexp_replace(lr.topic_name, '^[^A-Za-z0-9]+', '')
      FROM lab_reports lr JOIN levels l ON l.id = lr.level_id
     WHERE coalesce(substring(lr.url FROM '/d/([A-Za-z0-9_-]{10,})'), lr.url) = o.k
    UNION ALL
    SELECT 'question-bank', l.slug, q.title, NULL
      FROM question_banks q JOIN levels l ON l.id = q.level_id
     WHERE coalesce(substring(q.url FROM '/d/([A-Za-z0-9_-]{10,})'), q.url) = o.k
    UNION ALL
    SELECT 'note', l.slug, sub.display_name, NULL
      FROM subjects sub JOIN levels l ON l.id = sub.level_id
     WHERE coalesce(substring(sub.metadata->>'directUrl' FROM '/d/([A-Za-z0-9_-]{10,})'), sub.metadata->>'directUrl') = o.k
    LIMIT 1
  ) p ON true
 ORDER BY o.contributor_id, o.id`;

async function send(to, msg, ids) {
  const r = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
      // Same submissions -> same key, so a re-run after a crash between "sent" and "recorded"
      // cannot deliver the same thank-you twice (Resend dedupes on this for 24h).
      "Idempotency-Key": `ack-${ids.join("-")}`,
    },
    body: JSON.stringify({ from: FROM, to: [to], reply_to: REPLY_TO, subject: msg.subject, html: msg.html, text: msg.text }),
  });
  const body = await r.json().catch(() => ({}));
  return { status: r.status, ok: r.ok, body };
}

(async () => {
  if (!DRY && !process.env.RESEND_API_KEY) { console.log("RESEND_API_KEY not set - skipping acknowledgements"); return; }
  const c = new Client({ connectionString: process.env.DATABASE_URL, ssl: { rejectUnauthorized: false } });
  await c.connect();

  // New submitters become contributors here too, so a run never misses someone just staged.
  if (!DRY) await c.query("SELECT sync_contributors()");

  const noEmail = DRY
    ? (await c.query("SELECT count(*)::int n FROM submissions WHERE status='done' AND ack_status IS NULL AND contributor_id IS NULL")).rows[0].n
    : (await c.query("UPDATE submissions SET ack_status='no-email' WHERE status='done' AND ack_status IS NULL AND contributor_id IS NULL")).rowCount;

  const { rows } = await c.query(PLACEMENT_SQL);
  const people = new Map();
  for (const r of rows) {
    if (!people.has(r.contributor_id)) people.set(r.contributor_id, []);
    people.get(r.contributor_id).push(r);
  }
  const { rows: contacts } = await c.query("SELECT id, email, name FROM contributors WHERE id = ANY($1::int[])", [[...people.keys()]]);
  const byId = new Map(contacts.map((x) => [x.id, x]));

  let sent = 0, failed = 0, retry = 0;
  const lines = [];
  for (const [cid, subs] of [...people].slice(0, MAX)) {
    const who = byId.get(cid);
    const items = subs.map((s) => ({
      submittedSubject: s.subject_name, submittedTopic: s.topic_name,
      // Unplaced (should not happen for status='done') still gets thanked, at level granularity.
      level: s.p_level || s.level, section: s.section || (s.kind === "lab" ? "lab" : s.kind === "question" ? "question-bank" : "note"),
      subject: s.p_subject || undefined, topic: s.p_topic || undefined,
    }));
    const msg = renderAck({ name: who.name, items });
    const ids = subs.map((s) => s.id);

    if (DRY) { console.log(`[dry] ${who.email.replace(/^(.{3}).*@/, "$1…@")} <- "${msg.subject}" (${ids.join(",")})`); continue; }

    const res = await send(who.email, msg, ids);
    if (res.ok) {
      await c.query("UPDATE submissions SET ack_status='sent', acknowledged_at=now() WHERE id = ANY($1::int[])", [ids]);
      await c.query("UPDATE contributors SET last_acknowledged_at=now(), updated_at=now() WHERE id=$1", [cid]);
      sent++; lines.push(`${who.name || "?"}: ${ids.length}`);
    } else if (res.status >= 400 && res.status < 500 && res.status !== 429) {
      await c.query("UPDATE submissions SET ack_status='failed' WHERE id = ANY($1::int[])", [ids]);
      failed++; console.log(`  ! rejected (${res.status}) for submissions ${ids.join(",")}: ${JSON.stringify(res.body).slice(0, 160)}`);
    } else {
      retry++; console.log(`  ~ transient ${res.status} for submissions ${ids.join(",")}; will retry next run`);
    }
    await sleep(600); // Resend's default limit is 2 requests/second
  }
  const deferred = Math.max(0, people.size - MAX);
  console.log(`acknowledgements: sent ${sent} | rejected ${failed} | retry later ${retry} | no address ${noEmail} | deferred to next run ${deferred}`);

  const tok = process.env.TELEGRAM_BOT_TOKEN, chat = process.env.TELEGRAM_CHAT_ID;
  if (!DRY && tok && chat && (sent || failed)) {
    const text = ["\u{1F48C} <b>Contributors thanked</b>", "------------------", `Emails sent: <b>${sent}</b>`,
      ...lines.slice(0, 10).map((l) => "• " + l.replace(/&/g, "&amp;").replace(/</g, "&lt;")),
      failed ? `⚠️ rejected addresses: ${failed}` : null, noEmail ? `no address on file: ${noEmail}` : null].filter(Boolean).join("\n");
    await fetch(`https://api.telegram.org/bot${tok}/sendMessage`, { method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chat, text, parse_mode: "HTML" }) }).catch(() => {});
  }
  await c.end();
})().catch((e) => { console.error("ack-contributors failed:", e.message); process.exit(1); });
