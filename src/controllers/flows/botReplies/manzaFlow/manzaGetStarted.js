let textBlockGen = require("simple-messenger-blocks/textBlockGen");
const imgBlockGen = require("simple-messenger-blocks/imgBlockGen");
const quickReplyGen = require("simple-messenger-blocks/quickReplyBlockGen");
const webBtnBlockGen = require("../../../genrators/webBtnBlockGen");
const payloadBtnBlockGen = require("../../../genrators/payloadBtnGen");
const groupedBtnBlockGen = require("../../../genrators/grroupedButtonBlockGen");

let manzaGetStarted = [
  textBlockGen(`Welcome to ManzaBot 😃 !`),
  "quick_replies": [{
    "content_type": "text",
    "title": "📦 Browse Catalogue",
    "payload": "manza_catalogue"
},
{
    "content_type": "text",
    "title": "💌 Contact Us",
    "payload": "manza_contact"
},
{
    "content_type": "text",
    "title": "👋 Help/ FAQ",
    "payload": "manza_faq"
},
]
];

module.exports = manzaGetStarted;
