let grroupedButtonBlockGen = require("simple-messenger-blocks/groupedBtnBlockGen");
let webBtnBlockGen = require("simple-messenger-blocks/webBtnGen");
let payloadBtnGen = require("simple-messenger-blocks/payloadBtnGen");

let am1_lab_flow = [
  grroupedButtonBlockGen("📌 All Reports - ", [
    payloadBtnGen("All Report", "am1_lab_AllReport_flow"),
    webBtnBlockGen("Lab Note(2023)", "https://drive.google.com/file/d/101VcKHXYBgXthwDamFkOEazFeC0ESiHf/view?usp=sharing"),
    webBtnBlockGen("Hashibul(YE26)", "https://drive.google.com/file/d/1-SXyMy629efD2NP_uo3kHbNH0leV6Eq6/view?usp=sharing"),
  ]),
  grroupedButtonBlockGen("🔰 Select Experiment for AM-I -", [
    payloadBtnGen("Layout Plan", "am1_lab_layoutPlan_flow"),
    payloadBtnGen("Standard Body Me.", "am1_lab_standardBody_flow"),
  ]),
];

module.exports = am1_lab_flow;
