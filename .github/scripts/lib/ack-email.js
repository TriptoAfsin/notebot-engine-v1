// The "your notes are live" email sent to a contributor once their submissions are published.
//
// One email per contributor per run: a student who submitted four notes gets one message listing
// all four, not four messages. Kept free of I/O so the exact HTML can be previewed before it is
// ever sent (node .github/scripts/lib/ack-email.js --preview <dir>).

const SITE = "https://butexnotebot.com";
const BOT = "https://www.messenger.com/t/103148557940299";
const SUBMIT = "https://forms.gle/RjPXedjRDim4YE6P8";
const APP = "https://play.google.com/store/apps/details?id=com.hawkers.notebot";
const BRAND = "#377fcc";

const esc = (v) => String(v == null ? "" : v)
  .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

// Same signature as the access email, so both messages read as coming from the same person.
const SIG = '<p style="margin-top:24px"><b>Afshin Nahian Tripto</b><br/>'
  + '<span style="color:#666;font-size:13px">Senior Full Stack Engineer, Provision Capital<br/>'
  + "Software Engineer, REDQ<br/>Founder, BUTEX NoteBOT</span></p>";

/** "Level 2 › AM-1 › Fabric Cutting" - the path a student taps through in the bot or on the site. */
function wherePath(item) {
  const parts = [`Level ${item.level}`];
  if (item.section === "lab") parts.push("Lab Reports");
  if (item.section === "question-bank") parts.push("Question Banks");
  if (item.subject) parts.push(item.subject);
  if (item.topic) parts.push(item.topic);
  return parts.join(" › ");
}

/**
 * @param {{ name: string, items: Array<{ submittedSubject: string, submittedTopic: string,
 *   level: string, section: "note"|"lab"|"question-bank", subject?: string, topic?: string }> }} c
 * @returns {{ subject: string, html: string, text: string }}
 */
function renderAck({ name, items }) {
  const n = items.length, many = n > 1;
  const first = String(name || "").trim().split(/\s+/)[0] || "there";
  const subject = many
    ? `Thank you! Your ${n} notes are now on BUTEX NoteBot`
    : "Thank you! Your note is now on BUTEX NoteBot";

  const rows = items.map((it) => `
    <tr><td style="padding:12px 0;border-top:1px solid #e6e8eb">
      <div style="font-weight:600">${esc(it.submittedSubject)}${it.submittedTopic ? " — " + esc(it.submittedTopic) : ""}</div>
      <div style="color:#555;font-size:14px;margin-top:2px">Added to: ${esc(wherePath(it))}</div>
    </td></tr>`).join("");

  const html = `<div style="font-family:-apple-system,Segoe UI,Roboto,Arial,sans-serif;max-width:520px;margin:0 auto;color:#1a1a1a;line-height:1.5">
  <p>Hi ${esc(first)},</p>
  <p>Thank you for sharing your notes with BUTEX NoteBot. ${many ? `All ${n} of your submissions have` : "Your submission has"} been added, and ${many ? "they are" : "it is"} now available to every BUTEX student on the NoteBot platform: web, bot and app.</p>
  <p style="margin-bottom:4px">Here is where ${many ? "they were" : "it was"} added:</p>
  <table role="presentation" cellpadding="0" cellspacing="0" style="width:100%;border-collapse:collapse">${rows}
  </table>
  <p style="margin-top:20px">Find ${many ? "them" : "it"} on NoteBot: <a href="${SITE}" style="color:${BRAND}">web</a> · <a href="${BOT}" style="color:${BRAND}">bot</a> · <a href="${APP}" style="color:${BRAND}">app</a></p>
  <p>Notes like yours are what keep NoteBot useful for your juniors, so thank you for taking the time. If you have more to share, you can submit them any time: <a href="${SUBMIT}" style="color:${BRAND}">${SUBMIT}</a></p>
  ${SIG}
  <p style="color:#999;font-size:12px;margin-top:24px">You are receiving this because you submitted notes to BUTEX NoteBot with this email address.</p>
</div>`;

  const text = [
    `Hi ${first},`, "",
    `Thank you for sharing your notes with BUTEX NoteBot. ${many ? `All ${n} of your submissions have` : "Your submission has"} been added, and ${many ? "they are" : "it is"} now available to every BUTEX student on the NoteBot platform: web, bot and app.`, "",
    `Here is where ${many ? "they were" : "it was"} added:`, "",
    ...items.flatMap((it) => [
      `- ${it.submittedSubject}${it.submittedTopic ? " — " + it.submittedTopic : ""}`,
      `  Added to: ${wherePath(it)}`, ""]),
    `Find ${many ? "them" : "it"} on NoteBot:`, `  Web: ${SITE}`, `  Bot: ${BOT}`, `  App: ${APP}`, "",
    `Notes like yours are what keep NoteBot useful for your juniors, so thank you for taking the time. If you have more to share, you can submit them any time: ${SUBMIT}`, "",
    "Afshin Nahian Tripto", "Founder, BUTEX NoteBOT", "",
    "You are receiving this because you submitted notes to BUTEX NoteBot with this email address.",
  ].join("\n");

  return { subject, html, text };
}

module.exports = { renderAck, wherePath };

// Preview: writes the single- and multi-note versions as HTML files, sends nothing.
if (require.main === module && process.argv[2] === "--preview") {
  const fs = require("fs"), path = require("path");
  const dir = process.argv[3] || ".";
  const multi = renderAck({ name: "Shrestho", items: [
    { submittedSubject: "Physics-I", submittedTopic: "Elasticity", level: "1", section: "note", subject: "Physics-I", topic: "Elasticity" },
    { submittedSubject: "Physics-I", submittedTopic: "Surface tension", level: "1", section: "note", subject: "Physics-I", topic: "Surface Tension" },
    { submittedSubject: "Chemistry-I", submittedTopic: "Colloids", level: "1", section: "note", subject: "Chem-I", topic: "Colloids" },
    { submittedSubject: "YM-1 Lab", submittedTopic: "Drawframe, Comber, Simplex", level: "2", section: "lab", subject: "YM-1", topic: "All Report" },
  ] });
  const single = renderAck({ name: "Maksuda Akter Lily", items: [
    { submittedSubject: "AM-1 part B", submittedTopic: "Fabric cutting", level: "2", section: "note", subject: "AM-1", topic: "Fabric Cutting" },
  ] });
  for (const [k, m] of Object.entries({ multi, single })) {
    fs.writeFileSync(path.join(dir, `ack-${k}.html`), `<!-- Subject: ${m.subject} -->\n${m.html}`);
    console.log(`--- ${k} ---\nSubject: ${m.subject}\n\n${m.text}\n`);
  }
}
