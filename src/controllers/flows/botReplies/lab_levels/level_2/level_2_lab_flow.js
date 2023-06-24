let grroupedButtonBlockGen = require("simple-messenger-blocks/groupedBtnBlockGen");
let webBtnBlockGen = require("simple-messenger-blocks/webBtnGen");
let payloadBtnGen = require("simple-messenger-blocks/payloadBtnGen");

let level_2_lab = [
  grroupedButtonBlockGen("🔰 Select Subject Your Lab Report - ", [
    payloadBtnGen("AM-I", "am1_lab_flow"),
    payloadBtnGen("WP-I", "wp1_lab_flow"),
    payloadBtnGen("FM-I", "fm1_lab_flow"),
  ]),
  grroupedButtonBlockGen("🔰 Select Subject Your Lab Report - ", [
    payloadBtnGen("SSS-I", "sss1_lab_flow"),
    payloadBtnGen("YM-I", "ym1_lab_flow"),
    payloadBtnGen("Fe-204: WPP", "fe_wpp_lab_flow"),
  ]),
  grroupedButtonBlockGen("🔰 Select Subject Your Lab Report - ", [
    payloadBtnGen("TTQC", "ttqc_lab_flow"),
    payloadBtnGen("MP", "mp_lab_flow"),
    payloadBtnGen("FME", "fme_lab_flow"),
  ]),
  grroupedButtonBlockGen("🔰 Select Subject Your Lab Report - ", [
    payloadBtnGen("FEEE", "feee_lab_flow"),
    payloadBtnGen("AP-I", "ap1_lev2_lab_flow"),
    payloadBtnGen("PM-I", "pm1_lab_flow"),
  ]),
  grroupedButtonBlockGen("🔰 Select Subject Your Lab Report - ", [
    payloadBtnGen("SSS-II", "sss2_lab_flow"),
    payloadBtnGen("WPE 202: WPP", "wpe_wpp_lab_flow"),
    webBtnBlockGen("FYT", "https://drive.google.com/file/d/1ohmJdoTWF7I8WPJ0LizRFMFisbDumfAd/view?usp=sharing"),
  ]),
];

module.exports = level_2_lab;
