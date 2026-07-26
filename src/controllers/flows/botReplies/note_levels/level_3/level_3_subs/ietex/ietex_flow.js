let grroupedButtonBlockGen = require('simple-messenger-blocks/groupedBtnBlockGen');
let webBtnBlockGen = require('simple-messenger-blocks/webBtnGen');
let payloadBtnGen = require('simple-messenger-blocks/payloadBtnGen');

let ietexFlow = [
  grroupedButtonBlockGen("📌 Full Notes -", [
    webBtnBlockGen("Lamia(IPE,26)", "https://drive.google.com/drive/folders/1VXcDcV0950x3DKByz7O-4mcenXT-FOCo"),
  ]),
];

module.exports = ietexFlow;
