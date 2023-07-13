let textBlockGen = require("simple-messenger-blocks/textBlockGen");
const imgBlockGen = require("simple-messenger-blocks/imgBlockGen");
const quickReplyBlockGen = require("simple-messenger-blocks/quickReplyBlockGen");
const webBtnBlockGen = require("../../../genrators/webBtnBlockGen");
const payloadBtnBlockGen = require("../../../genrators/payloadBtnGen");
const groupedBtnBlockGen = require("simple-messenger-blocks/groupedBtnBlockGen");

let manzaGetStarted = groupedBtnBlockGen("Welcome to ManzaBot 😃 !", [
  payloadBtnBlockGen("📦 Catalogue", "manza_catalogue"),
  payloadBtnBlockGen("💌 Contact Us", "manza_contact"),
  payloadBtnBlockGen("👋 Help/ FAQ", "manza_faq"),
]);
// let manzaGetStarted = {
//   text: `Welcome to ManzaBot 😃 !`,
//   quick_replies: [
//     {
//       content_type: "text",
//       title: "📦 Browse Catalogue",
//       payload: "manza_catalogue",
//     },
//     {
//       content_type: "text",
//       title: "💌 Contact Us",
//       payload: "manza_contact",
//     },
//     {
//       content_type: "text",
//       title: "👋 Help/ FAQ",
//       payload: "manza_faq",
//     },
//   ],
// };
module.exports = manzaGetStarted;
