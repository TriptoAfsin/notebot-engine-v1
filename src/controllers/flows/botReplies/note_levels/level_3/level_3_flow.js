let grroupedButtonBlockGen = require("simple-messenger-blocks/groupedBtnBlockGen");
let webBtnBlockGen = require("simple-messenger-blocks/webBtnGen");
let payloadBtnGen = require("simple-messenger-blocks/payloadBtnGen");
let cardGen = require("simple-messenger-blocks/cardGenerator");
let bondiFlow = require("../../sponsoredFlows/bondiCard");

let level_3_note = [
  bondiFlow,
  grroupedButtonBlockGen(`📌 All QB for level 3 -`, [
    webBtnBlockGen(
      "All QB",
      "https://drive.google.com/drive/folders/1mbygPQPSEDkP6NoRxJxJATWI8aBgzxsZ?usp=sharing"
    ),
    webBtnBlockGen(
      "All QB(2021)",
      "https://drive.google.com/drive/folders/1aMIGuCLJsTWPq9hm9F_KbaSiU9yxwvNm?usp=sharing"
    ),
  ]),
  grroupedButtonBlockGen(`🔰 Select Subject for level 3 -`, [
    payloadBtnGen("Economics", "econo_flow"),
    payloadBtnGen("TCP", "tcp_flow"),
    payloadBtnGen("AM-II", "am2_flow"),
  ]),
  grroupedButtonBlockGen(`🔰 Select Subject for level 3 -`, [
    payloadBtnGen("IM (new)", "im_flow"),
    payloadBtnGen("WP-II", "wp2_flow"),
    payloadBtnGen("FM-II", "fm2_flow"),
  ]),
  grroupedButtonBlockGen(`🔰 Select Subject for level 3 -`, [
    payloadBtnGen("YM-II", "ym2_flow"),
    payloadBtnGen("PCS", "pcs_flow"),
    payloadBtnGen("LSS", "lss_flow"),
  ]),
  grroupedButtonBlockGen(`🔰 Select Subject for level 3 -`, [
    payloadBtnGen("Knitting-I", "kint1_flow"),
    payloadBtnGen("FSD", "fsd_flow"),
    payloadBtnGen("AP-II", "ap2_flow"),
  ]),
  grroupedButtonBlockGen(`🔰 Select Subject for level 3 -`, [
    webBtnBlockGen("Knitting-II", "https://drive.google.com/drive/folders/10q4PsdhyUZlyGO8McbJoGF8mvkBVQI2u?usp=sharing"),
  ]),
  grroupedButtonBlockGen(`🔰 Select Subject for level 3 -`, [
    payloadBtnGen("ACE", "ace_flow"),
    payloadBtnGen("PD", "pd_flow"),
    payloadBtnGen("MIC", "mic_flow"),
  ]),
  grroupedButtonBlockGen(`🔰 Select Subject for level 3 -`, [
    payloadBtnGen("ACM", "acm_flow"),
    payloadBtnGen("TQM", "tqm_flow"),
    payloadBtnGen("ACFD", "acfd_flow"),
  ]),
  grroupedButtonBlockGen(`🔰 Select Subject for level 3 -`, [
    payloadBtnGen("TTM", "ttm_flow"),
    payloadBtnGen("Weaving-II", "weave2_flow"),
    payloadBtnGen("MPP", "mpp_flow"),
  ]),
  grroupedButtonBlockGen(`🔰 Select Subject for level 3 -`, [
    payloadBtnGen("HRM", "hrm_flow"),
  ]),
  grroupedButtonBlockGen(`🔰 Select Subject for level 3 -`, [
    webBtnBlockGen(
      "TC-I",
      "https://drive.google.com/drive/folders/1Tg0ruIBuznlNWYGNYZVxGHnwu8UUNa2r?usp=sharing"
    ),
    webBtnBlockGen(
      "CDP",
      "https://drive.google.com/drive/folders/1RQAbOpyuvqFSNgUBuDLJB5I51Tx5p8sV?usp=sharing"
    ),
    webBtnBlockGen(
      "UM",
      "https://drive.google.com/drive/folders/1JtOZ552EnvWUX8RZ-5XA1WaQliujL-TV?usp=sharing"
    ),
  ]),
  grroupedButtonBlockGen(`🔰 Select Subject for level 3 -`, [
    webBtnBlockGen(
      "CTPC",
      "https://drive.google.com/drive/folders/1VU_oIoVdv4ERdazfucJHUf7sKY4pW9s4?usp=sharing"
    ),
  ]),
  grroupedButtonBlockGen(`🔰 Select Subject for level 3 -`, [
    webBtnBlockGen(
      "AWDP",
      "https://drive.google.com/drive/folders/1l_xuqNbZyDC_aHw4MgHiRd_7FMMDra8v?usp=sharing"
    ),
    webBtnBlockGen(
      "ACYM",
      "https://drive.google.com/drive/folders/1c0nOFo78pJUI_Ja6iTRHonwUQnO1SnTL?usp=sharing"
    ),
    webBtnBlockGen(
      "ACWP",
      "https://drive.google.com/drive/folders/1pCqxLyVgJ-BwhCpCtut7f6v9oQucaHzN?usp=sharing"
    ),
  ]),
  grroupedButtonBlockGen(`🔰 Select Subject for level 3 -`, [
    webBtnBlockGen(
      "ACAM",
      "https://drive.google.com/drive/folders/1Z1Xzjtc_9suoB12JBU0zoFud5y6pYC2k?usp=sharing"
    ),
    webBtnBlockGen(
      "SYM",
      "https://drive.google.com/drive/folders/1632Rlb5rOPeQkKsGmO_VTxIEz6EY5OSY?usp=sharing"
    ),
  ]),
];

module.exports = level_3_note;
