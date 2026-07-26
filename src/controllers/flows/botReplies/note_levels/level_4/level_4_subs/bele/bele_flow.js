let grroupedButtonBlockGen = require('simple-messenger-blocks/groupedBtnBlockGen');
let webBtnBlockGen = require('simple-messenger-blocks/webBtnGen');
let payloadBtnGen = require('simple-messenger-blocks/payloadBtnGen');

let beleFlow = [
  grroupedButtonBlockGen("📌 Full Notes -", [
    webBtnBlockGen("Shahed(TEM,26)", "https://drive.google.com/drive/folders/1SCIitNzpjG5vw7NtNXILqUOAZo5wyeqs"),
  ]),
];

module.exports = beleFlow;
