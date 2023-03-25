let grroupedButtonBlockGen = require("simple-messenger-blocks/groupedBtnBlockGen");
let webBtnBlockGen = require("simple-messenger-blocks/webBtnGen");
let payloadBtnGen = require("simple-messenger-blocks/payloadBtnGen");

let am1_lab_flow = [
  grroupedButtonBlockGen("📌 All Reports - ", [
    payloadBtnGen("All Report", "am1_lab_AllReport_flow"),
  ]),
  grroupedButtonBlockGen("🔰 Select Experiment for AM-I -", [
    payloadBtnGen("Layout Plan", "am1_lab_layoutPlan_flow"),
    payloadBtnGen("Standard Body Me.", "am1_lab_standardBody_flow"),
  ]),
];

module.exports = am1_lab_flow;
