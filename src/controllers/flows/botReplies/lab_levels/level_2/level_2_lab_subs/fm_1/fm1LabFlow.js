let grroupedButtonBlockGen = require("simple-messenger-blocks/groupedBtnBlockGen");
let webBtnBlockGen = require("simple-messenger-blocks/webBtnGen");
let payloadBtnGen = require("simple-messenger-blocks/payloadBtnGen");

let fm1_lab_flow = [
  grroupedButtonBlockGen("⚡ All Reports - ", [
    webBtnBlockGen(
      "Tarek(2023)",
      "https://drive.google.com/file/d/1d_3AlUFr4X9nKn-_uTJ1lWjH7U2PGXd4/view?usp=sharing"
    ),
    webBtnBlockGen(
      "Imran(2019)",
      "https://drive.google.com/file/d/1FEbPctE5twrOgtjp47ei-Na9S0VPhNdg/view"
    ),
  ]),
  grroupedButtonBlockGen("🔰 Select Experiment for FM-I -", [
    payloadBtnGen("1.Layout", "fm1_lab_layout_flow"),
    payloadBtnGen("Tappet Shedding", "fm1_lab_tappetShedding_flow"),
    payloadBtnGen("Looming", "fm1_lab_looming_flow"),
  ]),
  grroupedButtonBlockGen("🔰 Select Experiment for FM-I -", [
    payloadBtnGen("2. Package", "fm1_lab_package_flow"),
    payloadBtnGen("3. Cheese Wind", "fm1_lab_cheesWinding_flow"),
    payloadBtnGen("4. High speed wrap", "fm1_lab_highSpeedWarp_flow"),
  ]),
  grroupedButtonBlockGen("🔰 Select Experiment for FM-I -", [
    payloadBtnGen("5. Sectional Warping", "fm1_lab_sectionalWarping_flow"),
    payloadBtnGen("6.Conv Sizing", "fm1_lab_conventionalSizing_flow"),
    payloadBtnGen("Dobby", "fm1_lab_dobby_flow"),
  ]),
  grroupedButtonBlockGen("🔰 Select Experiment for FM-I -", [
    payloadBtnGen("Sizing", "fm1_lab_sizing_flow"),
    payloadBtnGen("6.Conv Sizing", "fm1_lab_conventionalSizing_flow"),
    payloadBtnGen("Dobby", "fm1_lab_dobby_flow"),
  ]),
];

module.exports = fm1_lab_flow;
