/**
 * Extracts v1's free-text behaviour as an ordered rule table.
 *
 * v1 answers a typed message with a 162-branch if/else chain over keyword arrays. The matching is
 * **unanchored substring, first-match-wins**, so branch order is part of the contract — reordering
 * two branches changes what users get even with identical keywords. Reimplementing that chain by
 * hand in v2 would be 162 chances to get the order wrong, so it is read out of the source instead:
 *
 *   1. parse the branches in source order, capturing the matcher and the keyword array's name
 *   2. resolve each name to the actual array
 *   3. drive v1 in-process with every keyword and record what it replies
 *
 * Replies are stored once per rule when every keyword produces the same blocks, and per keyword when
 * they differ (academic words route to different subjects). Nothing is sent: see
 * extract-payload-blocks.js for the interception, which this reuses.
 *
 * Usage: node .ingest/extract-keyword-rules.js [--out keyword-rules.json]
 */
const path = require("path");
const fs = require("fs");
const Module = require("module");

const ROOT = path.join(__dirname, "..");
const OUT = (() => {
  const i = process.argv.indexOf("--out");
  return i >= 0 && process.argv[i + 1] ? process.argv[i + 1] : path.join(__dirname, "keyword-rules.json");
})();

// ---------------------------------------------------------------- interception
const sent = [];
const PROFILE_BODY = JSON.stringify({ first_name: "Test", last_name: "User", profile_pic: "" });

function requestStub(opts, cb) {
  const uri = (opts && (opts.uri || opts.url)) || "";
  if (opts && opts.json && /\/me\/messages/.test(uri)) sent.push(opts.json);
  if (typeof cb === "function") cb(null, { statusCode: 200 }, PROFILE_BODY);
  return { on() { return this; } };
}
requestStub.post = requestStub;
requestStub.get = requestStub;

const requestPath = (() => {
  try { return Module._resolveFilename("request", { paths: [path.join(ROOT, "node_modules")] }); }
  catch { return "request"; }
})();
require.cache[requestPath] = { id: requestPath, filename: requestPath, loaded: true, exports: requestStub };

try {
  const axiosPath = Module._resolveFilename("axios", { paths: [path.join(ROOT, "node_modules")] });
  const noop = async () => ({ data: {}, status: 200 });
  const axiosStub = Object.assign(noop, { get: noop, post: noop, put: noop, delete: noop, create: () => axiosStub, defaults: { headers: {} } });
  require.cache[axiosPath] = { id: axiosPath, filename: axiosPath, loaded: true, exports: axiosStub };
} catch { /* not installed */ }

// Freeze the 63 random-reply pools to their first element so the snapshot is stable.
Math.random = () => 0;

// ------------------------------------------------------------------- parsing
/** Removes comments so commented-out branches are not mistaken for live ones. */
function stripComments(src) {
  return src
    .replace(/\/\*[\s\S]*?\*\//g, (m) => m.replace(/[^\n]/g, " "))
    .replace(/(^|[^:])\/\/[^\n]*/g, (m, p1) => p1 + "");
}

/** Ordered (matcher, arrayExpression) pairs from the handleMessage chain. */
function parseRules(src) {
  const clean = stripComments(src);
  const rules = [];
  const re = /\b(wordIs|wordIncludes|wordIncludesWhole)\s*\(\s*([A-Za-z_$][\w$]*|\[[^\]]*\])\s*,\s*received_message\s*\)/g;
  for (const m of clean.matchAll(re)) {
    rules.push({ matcher: m[1], source: m[2], index: m.index });
  }
  return rules;
}

// ------------------------------------------------------------------------- run
async function main() {
  const controllerPath = path.join(ROOT, "src/controllers/chatbotController.js");
  const src = fs.readFileSync(controllerPath, "utf8");
  const parsed = parseRules(src);
  console.log(`parsed ${parsed.length} live keyword branches (source order preserved)`);

  // Resolve each branch's keyword array. Inline literals are parsed directly; named arrays are
  // looked up through the controller's own requires so aliasing cannot drift.
  const requireMap = {};
  for (const m of stripComments(src).matchAll(
    /(?:const|let|var)\s+([A-Za-z_$][\w$]*)\s*=\s*require\(\s*["'`]([^"'`]+)["'`]\s*\)\s*;?/g
  )) requireMap[m[1]] = m[2];

  // Most branches do not reference the required name directly — 91 of 163 go through a one-line
  // alias (`const greets = greetWords;`), so plain require lookup finds only 70 of them.
  const aliasMap = {};
  for (const m of stripComments(src).matchAll(
    /(?:const|let|var)\s+([A-Za-z_$][\w$]*)\s*=\s*([A-Za-z_$][\w$]*)\s*;/g
  )) if (!(m[1] in aliasMap)) aliasMap[m[1]] = m[2];

  const resolveArray = (expr, hops = 0) => {
    if (hops > 8) return null; // alias cycles are not a real pattern here, but do not hang on one
    if (expr.startsWith("[")) {
      try { return JSON.parse(expr.replace(/'/g, '"')); } catch { return null; }
    }
    const rel = requireMap[expr];
    if (rel) {
      try {
        const abs = require.resolve(path.resolve(path.dirname(controllerPath), rel));
        const mod = require(abs);
        return Array.isArray(mod) ? mod : (Array.isArray(mod && mod.default) ? mod.default : null);
      } catch { return null; }
    }
    if (aliasMap[expr]) return resolveArray(aliasMap[expr], hops + 1);
    return null;
  };

  const realWarn = console.warn, realLog = console.log;
  console.warn = () => {}; console.log = () => {};
  const controller = require(controllerPath);
  console.log = realLog; console.warn = realWarn;

  const PSID = "__extractor__";
  const askText = async (text) => {
    sent.length = 0;
    const req = {
      body: {
        object: "page",
        entry: [{ messaging: [{ sender: { id: PSID }, recipient: { id: "page" }, message: { mid: "m", text } }] }],
      },
    };
    const res = { status: () => res, send: () => res, sendStatus: () => res };
    try { await controller.postWebhook(req, res); } catch (e) { return { error: String(e.message || e) }; }
    await new Promise((r) => setImmediate(r));
    await new Promise((r) => setTimeout(r, 0));
    const content = [];
    for (const s of sent) {
      if (s && s.sender_action !== undefined) continue;
      content.push(s && s.message !== undefined ? s.message : s);
    }
    return { blocks: content };
  };

  const rules = [];
  let unresolved = 0, totalKeywords = 0;

  for (let i = 0; i < parsed.length; i++) {
    const { matcher, source } = parsed[i];
    const keywords = resolveArray(source);
    if (!keywords || keywords.length === 0) { unresolved++; continue; }

    const strings = keywords.filter((k) => typeof k === "string");
    totalKeywords += strings.length;

    // Ask v1 for each keyword; collapse when the whole array answers identically.
    const byReply = new Map();
    for (const kw of strings) {
      const { blocks } = await askText(kw);
      const sig = JSON.stringify(blocks || []);
      if (!byReply.has(sig)) byReply.set(sig, { blocks: blocks || [], keywords: [] });
      byReply.get(sig).keywords.push(kw);
    }

    const variants = [...byReply.values()];
    rules.push({
      order: i,
      matcher,
      arrayName: source,
      keywordCount: strings.length,
      uniform: variants.length === 1,
      variants: variants.map((v) => ({ keywords: v.keywords, blocks: v.blocks })),
    });

    if ((i + 1) % 25 === 0) console.log(`  …${i + 1}/${parsed.length} branches`);
  }

  const empties = rules.filter((r) => r.variants.every((v) => v.blocks.length === 0)).length;
  fs.writeFileSync(OUT, JSON.stringify({ rules }, null, 1));
  console.log(`rules extracted        : ${rules.length}`);
  console.log(`  keyword arrays unresolved : ${unresolved}`);
  console.log(`  distinct keywords         : ${totalKeywords}`);
  console.log(`  rules answering nothing   : ${empties}`);
  console.log(`  non-uniform rules         : ${rules.filter((r) => !r.uniform).length}`);
  console.log(`written -> ${OUT}`);
  process.exit(0);
}

main();
