let grroupedButtonBlockGen = require('simple-messenger-blocks/groupedBtnBlockGen');
let webBtnBlockGen = require('simple-messenger-blocks/webBtnGen');
let payloadBtnGen = require('simple-messenger-blocks/payloadBtnGen');

let sociologyFlow = [
  grroupedButtonBlockGen("📌 Full Notes -", [
    webBtnBlockGen("Shahed(TEM,26)", "https://drive.google.com/drive/folders/1ZmTUnOE2MlVBJfaQWMgSKAHh2JwxJp1V"),
  ]),
];

module.exports = sociologyFlow;
