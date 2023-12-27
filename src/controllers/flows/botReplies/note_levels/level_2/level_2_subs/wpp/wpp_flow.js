let grroupedButtonBlockGen = require('simple-messenger-blocks/groupedBtnBlockGen');
let webBtnBlockGen = require('simple-messenger-blocks/webBtnGen');
let payloadBtnGen = require('simple-messenger-blocks/payloadBtnGen');
let cardGenerator = require('simple-messenger-blocks/cardGenerator');
let bondiFlow = require("../../../../sponsoredFlows/bondiCard");

let wppFlow = [
  bondiFlow,
  grroupedButtonBlockGen("📌Sheets -", [
    webBtnBlockGen(
      "Mohaddesh Sir(2023)",
      "https://drive.google.com/drive/folders/1L7Eb-TlLuqNUjtVVT-JYMvMecvcdFnpv?usp=sharing"
    ),
    webBtnBlockGen(
      "Arin Sir(2023)",
      "https://drive.google.com/drive/folders/1uGNMAVF_ldaF1nmYlmp_dxmwJ8w-fEBD?usp=sharing"
    ),
  ]),
  grroupedButtonBlockGen("📌 Question Solve -", [
    webBtnBlockGen(
      "2023",
      "https://drive.google.com/file/d/1NVkYONOZcgnJcHm4dv265Z1SidLWlSWZ/view?usp=sharing"
    ),
  ]),
  grroupedButtonBlockGen("📌 Select Topics for WPP -", [
    payloadBtnGen("Questions", "wpp_quess_flow"),
    webBtnBlockGen(
      "2023 Notes",
      "https://drive.google.com/drive/folders/1eZzB2DtxmhS6dY6xUbt205vFWlnWPe0P?usp=sharing"
    ),
  ]),
  grroupedButtonBlockGen("🔰 Select Topics for WPP -", [
    payloadBtnGen("Pretreatment", "wpp_pretreatment_flow"),
    payloadBtnGen("Singeing", "wpp_singeing_flow"),
    payloadBtnGen("Desizing", "wpp_desizing_flow"),
  ]),
  grroupedButtonBlockGen("🔰 Select Topics for WPP -", [
    payloadBtnGen("Impurities", "wpp_impurities_flow"),
    payloadBtnGen("Bio-Scouring", "wpp_bioScouring"),
  ]),
];

module.exports = wppFlow;