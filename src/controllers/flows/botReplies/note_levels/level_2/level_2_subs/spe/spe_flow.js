let grroupedButtonBlockGen = require('simple-messenger-blocks/groupedBtnBlockGen');
let webBtnBlockGen = require('simple-messenger-blocks/webBtnGen');
let payloadBtnGen = require('simple-messenger-blocks/payloadBtnGen');

let speFlow = [
  grroupedButtonBlockGen("📌 Full Notes -", [
    webBtnBlockGen("Fardin(AE,26)", "https://drive.google.com/drive/folders/1Wfu6aZbOT-cYpUSb4sBfheOVttySUQvU"),
  ]),
];

module.exports = speFlow;
