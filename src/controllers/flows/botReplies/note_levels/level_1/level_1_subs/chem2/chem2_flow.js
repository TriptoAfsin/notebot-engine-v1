let grroupedButtonBlockGen = require('simple-messenger-blocks/groupedBtnBlockGen');
let webBtnBlockGen = require('simple-messenger-blocks/webBtnGen');
let payloadBtnGen = require('simple-messenger-blocks/payloadBtnGen');
let cardGenerator = require('simple-messenger-blocks/cardGenerator');
let bondiFlow = require("../../../../sponsoredFlows/bondiCard");

let chem2_flow = [
  bondiFlow,
  grroupedButtonBlockGen("📌 Hand Notes -", [
    webBtnBlockGen(
      "Hand Note(Maruf)",
      "https://drive.google.com/file/d/12LLcW92t1BTLFENL9DQH9xkJOvn0VIVe/view?usp=sharing"
    ),
    webBtnBlockGen(
      "Hand Note(Hasibul)",
      "https://drive.google.com/file/d/19XzX0HOyJjE7pHBxaO8LIEqt2apDB_Xg/view?usp=sharing"
    ),
    webBtnBlockGen(
      "Important Rea.",
      "https://drive.google.com/file/d/1CzG8tPqz50-Byx72oGolh0u72Hx--rZM/view?usp=sharing"
    ),
  ]),
  grroupedButtonBlockGen("📌 Hand Notes -", [
    webBtnBlockGen(
      "Rushad(2021)",
      "https://drive.google.com/file/d/1VzbsuNV1WRoPdfGAJ7DO-sWZQGELvNx_/view?usp=sharing"
    ),
    webBtnBlockGen(
      "Wasy(2022)",
      "https://drive.google.com/file/d/1rLSeFUex-OhiQjalsYwSGgfBVnmKyOaj/view?usp=sharing"
    ),
    webBtnBlockGen(
      "Affli College(2022)",
      "https://drive.google.com/file/d/160qMkHlwhqIe2gftncwCtNdRCNvG3S9l/view?usp=sharing"
    ),
  ]),
  grroupedButtonBlockGen("📌 Hand Notes -", [
    webBtnBlockGen(
      "Rasel(2023)",
      "https://drive.google.com/drive/folders/1T_kaJ7m_hcr5h6Dp2TS3ik3LxC5o8ls4?usp=sharing"
    ),
    webBtnBlockGen(
      "Lingkon(CTEC)(2023)",
      "https://drive.google.com/file/d/179aQS4-tD0LUDO4z7pjSIQktii2F2j8H/view?usp=sharing"
    ),
  ]),
  grroupedButtonBlockGen("📌 QB Solve - ", [
    webBtnBlockGen(
      "By AE-45",
      "https://drive.google.com/file/d/1kV5Jfj-JFY_9GjTO7uu4L6_vcZn3EOUK/view?usp=sharing"
    ),
    webBtnBlockGen(
      "Mamun(SKTEC)",
      "https://drive.google.com/file/d/1oR4A8wNt5lOXgSBRihljz9VrqFA5D3Wi/view?usp=sharing"
    ),
  ]),
  grroupedButtonBlockGen("🔰 Select Topic for CHE-II - ", [
    payloadBtnGen("Books", "chem2_books_flow"),
    payloadBtnGen("Questions", "chem2_ques_flow"),
    payloadBtnGen("Organ Metalic Com.", "chem2_org_meta_flow"),
  ]),
  grroupedButtonBlockGen("🔰 Select Topic for CHE-II - ", [
    payloadBtnGen("Carbonyl Comp.", "chem2_carbonyl_flow"),
    payloadBtnGen("Organic Reaction Me", "chem2_org_reac_flow"),
    payloadBtnGen("Alcohol & Phenol", "chem2_alc_phe_flow"),
  ]),
  grroupedButtonBlockGen("🔰 Select Topic for CHE-II - ", [
    payloadBtnGen("Amino Acid", "chem2_amino_flow"),
    payloadBtnGen("Carbohydrates", "chem2_carbo_flow"),
    payloadBtnGen("Color, Dye, Pigment", "chem2_color_dye_flow"),
  ]),
  grroupedButtonBlockGen("🔰 Select Topic for CHE-II - ", [
    payloadBtnGen("Carboxylic Acid", "chem2_carboxylic_flow"),
    payloadBtnGen("Amine", "chem2_amine_flow"),
    payloadBtnGen("Solubulity Boiling", "chem2_solubulity_flow"),
  ]),
  grroupedButtonBlockGen("🔰 Select Topic for CHE-II - ", [
    webBtnBlockGen("Ald&Ketone", "https://drive.google.com/file/d/1YRQW4JPKG46JOxvKmPCZzzA-T-1X4JKj/view?usp=sharing"),
    webBtnBlockGen("Org Reac Mech", "https://drive.google.com/file/d/1ax1Fp_Ea8CZSoXZo0EB7nv_CCy4mIdtg/view?usp=sharing"),
  ]),
  grroupedButtonBlockGen("🔰 Select Topic for CHE-II - ", [
    webBtnBlockGen(
      "Grignard Rea.",
      "https://drive.google.com/file/d/1UnWcDu9vRCh1WFALLQG3SOR9LqiyfYif/view?usp=sharing"
    ),
  ]),
  grroupedButtonBlockGen("📌 Sheets Folder - ", [
    webBtnBlockGen(
      "Samiul Sir(2021)",
      "https://drive.google.com/drive/folders/1bD3cZb_HzjhIiX1sPJhcBwfM6SgBCFZY?usp=sharing"
    ),
  ]),
];

module.exports = chem2_flow;
