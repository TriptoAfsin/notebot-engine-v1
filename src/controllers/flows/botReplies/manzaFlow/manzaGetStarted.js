let textBlockGen = require("simple-messenger-blocks/textBlockGen");
const imgBlockGen = require("simple-messenger-blocks/imgBlockGen");
const quickReplyGen = require("simple-messenger-blocks/quickReplyBlockGen");
const webBtnBlockGen = require("../../../genrators/webBtnBlockGen");
const payloadBtnBlockGen = require("../../../genrators/payloadBtnGen");
const groupedBtnBlockGen = require("../../../genrators/grroupedButtonBlockGen");

let manzaGetStarted = [
  textBlockGen(`Welcome to ManzaBot 😃 !`),
  quickReplyGen("Choose what you want - ", [
    payloadBtnBlockGen("📦 Browse Catalogue", "manza_catalogue"),
    payloadBtnBlockGen("💌 Contact Us", "manza_contact"),
    payloadBtnBlockGen("💌 Help/ FAQ", "manza_faq"),
  ]),
];

module.exports = manzaGetStarted;
