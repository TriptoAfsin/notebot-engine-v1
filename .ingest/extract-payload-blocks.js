/**
 * Extracts v1's exact Messenger output for every postback payload — the golden file the v2 port is
 * built and verified against.
 *
 * Runs entirely in-process against a LOCAL require of chatbotController. Nothing is sent: the
 * `request` module and the typing/seen helpers in chatBotService are replaced with capturing stubs
 * before the controller is loaded, so no Graph API call is ever made and no real user is messaged.
 *
 * Usage:  node .ingest/extract-payload-blocks.js [--out payload-blocks.json]
 */
const path = require("path");
const fs = require("fs");
const Module = require("module");

const ROOT = path.join(__dirname, "..");
const OUT = (() => {
  const i = process.argv.indexOf("--out");
  return i >= 0 && process.argv[i + 1] ? process.argv[i + 1] : path.join(__dirname, "payload-blocks.json");
})();

// ---------------------------------------------------------------- interception
// Every message v1 tries to send lands here instead of the network.
const sent = [];

/**
 * Stub standing in for the `request` package, in the callback form v1 uses.
 *
 * The body must be a JSON *string*: `chatBotService.getFacebookUserInfo` does `JSON.parse(body)`,
 * so handing back an object makes it parse "[object Object]" and throw.
 * Only POSTs to /me/messages are recorded — profile lookups and typing indicators are noise here.
 */
const PROFILE_BODY = JSON.stringify({ first_name: "Test", last_name: "User", profile_pic: "" });

function requestStub(opts, cb) {
  const uri = (opts && (opts.uri || opts.url)) || "";
  if (opts && opts.json && /\/me\/messages/.test(uri)) sent.push(opts.json);
  if (typeof cb === "function") cb(null, { statusCode: 200 }, PROFILE_BODY);
  return { on() { return this; } };
}
requestStub.post = requestStub;
requestStub.get = requestStub;

// Pre-seed the module cache so `require("request")` inside the controller resolves to the stub.
const realResolve = Module._resolveFilename;
const requestPath = (() => {
  try { return realResolve("request", { paths: [path.join(ROOT, "node_modules")] }); }
  catch { return "request"; }
})();
require.cache[requestPath] = { id: requestPath, filename: requestPath, loaded: true, exports: requestStub };

// axios is used by the analytics + typing helpers; neutralise it so nothing leaves the process.
try {
  const axiosPath = realResolve("axios", { paths: [path.join(ROOT, "node_modules")] });
  const noop = async () => ({ data: {}, status: 200 });
  const axiosStub = Object.assign(noop, { get: noop, post: noop, put: noop, delete: noop, create: () => axiosStub, defaults: { headers: {} } });
  require.cache[axiosPath] = { id: axiosPath, filename: axiosPath, loaded: true, exports: axiosStub };
} catch { /* axios not installed — nothing to stub */ }

// Deterministic "random" so the 63 random-reply branches produce a stable snapshot. The pool, not
// the pick, is what matters for parity; freezing the pick keeps the diff readable.
Math.random = () => 0;

// -------------------------------------------------------------- payload sources
function handledPayloads() {
  const src = fs.readFileSync(path.join(ROOT, "src/controllers/chatbotController.js"), "utf8");
  const out = new Set();
  for (const m of src.matchAll(/payload\s*===?\s*["'`]([^"'`]+)["'`]/g)) out.add(m[1]);
  for (const m of src.matchAll(/case\s+["'`]([^"'`]+)["'`]\s*:/g)) out.add(m[1]);
  return [...out];
}

function emittedPayloads() {
  const out = new Set();
  const walk = (dir) => {
    for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
      const p = path.join(dir, e.name);
      if (e.isDirectory()) walk(p);
      else if (e.name.endsWith(".js")) {
        const src = fs.readFileSync(p, "utf8");
        for (const m of src.matchAll(
          /(?:payloadBtnGen|quickReplyBtn)\s*\(\s*["'`][^"'`]*["'`]\s*,\s*["'`]([^"'`]+)["'`]/g
        )) out.add(m[1]);
      }
    }
  };
  walk(path.join(ROOT, "src/controllers/flows"));
  return [...out];
}

// ------------------------------------------------------------------------- run
async function main() {
  // Silence the corpus-load warnings so the progress output stays readable.
  const realWarn = console.warn, realLog = console.log;
  console.warn = () => {};
  console.log = () => {};

  const controller = require(path.join(ROOT, "src/controllers/chatbotController.js"));

  console.log = realLog;
  console.warn = realWarn;

  const payloads = [...new Set([...handledPayloads(), ...emittedPayloads()])].sort();
  console.log(`extracting ${payloads.length} payloads…`);

  const result = {};
  const PSID = "__extractor__";

  for (const payload of payloads) {
    sent.length = 0;

    const req = {
      body: {
        object: "page",
        entry: [{ messaging: [{ sender: { id: PSID }, recipient: { id: "page" }, postback: { title: "x", payload } }] }],
      },
    };
    const res = { status: () => res, send: () => res, sendStatus: () => res };

    try {
      await controller.postWebhook(req, res);
      // callSendAPI's request() is callback-based and not awaited by magicFunc, so yield until the
      // microtask queue drains and every send has been captured.
      await new Promise((r) => setImmediate(r));
      await new Promise((r) => setTimeout(r, 0));
    } catch (err) {
      result[payload] = { error: String((err && err.message) || err) };
      continue;
    }

    // Split the two kinds of frame v1 posts to /me/messages. Only `message` frames are content;
    // `sender_action` frames are the typing/seen indicators and would swamp any parity diff.
    const content = [];
    const actions = [];
    for (const s of sent) {
      if (s && s.sender_action !== undefined) actions.push(s.sender_action);
      else if (s && s.message !== undefined) content.push(s.message);
      else content.push(s);
    }

    result[payload] = { blockCount: content.length, blocks: content, senderActions: actions };
  }

  const answered = Object.values(result).filter((r) => r.blockCount > 0).length;
  const empty = Object.values(result).filter((r) => r.blockCount === 0).length;
  const errored = Object.values(result).filter((r) => r.error).length;

  fs.writeFileSync(OUT, JSON.stringify(result, null, 1));
  console.log(`  answered with >=1 block : ${answered}`);
  console.log(`  answered with 0 blocks  : ${empty}`);
  console.log(`  threw                   : ${errored}`);
  console.log(`written -> ${OUT}`);
  process.exit(0);
}

main();
