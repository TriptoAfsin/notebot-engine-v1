let grroupedButtonBlockGen = require("simple-messenger-blocks/groupedBtnBlockGen");
let webBtnBlockGen = require("simple-messenger-blocks/webBtnGen");

let application_computers_flow = [
  grroupedButtonBlockGen(`🔰 Select -`, [
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
  ]),
];

module.exports = application_computers_flow;
