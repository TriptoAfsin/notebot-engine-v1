let grroupedButtonBlockGen = require('simple-messenger-blocks/groupedBtnBlockGen');
let webBtnBlockGen = require('simple-messenger-blocks/webBtnGen');
let payloadBtnGen = require('simple-messenger-blocks/payloadBtnGen');

let level_1_lab = [
  grroupedButtonBlockGen("🔰 Select Subject Your Lab Report -", [
    payloadBtnGen("Physics-I", "phy1_lab_flow"),
    payloadBtnGen("Chemistry-I", "che1_lab_flow"),
    payloadBtnGen("MSP", "msp_lab_flow"),
  ]),
  grroupedButtonBlockGen("🔰 Select Subject Your Lab Report -", [
    payloadBtnGen("Eng. Drawing", "ed_lab_flow"),
    payloadBtnGen("Physics-II", "phy2_lab_flow"),
    payloadBtnGen("Chemistry-II", "che2_lab_flow"),
  ]),
  grroupedButtonBlockGen("🔰 Select Subject Your Lab Report -", [
    payloadBtnGen("AP-I", "ap1_lab_flow"),
    payloadBtnGen("BCE", "bce_lab_flow"),
    payloadBtnGen("CP", "cp_lab_flow"),
  ]),
];

module.exports = level_1_lab;
