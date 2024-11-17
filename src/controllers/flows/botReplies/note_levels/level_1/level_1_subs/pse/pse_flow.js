let grroupedButtonBlockGen = require("simple-messenger-blocks/groupedBtnBlockGen");
let webBtnBlockGen = require("simple-messenger-blocks/webBtnGen");
let payloadBtnGen = require("simple-messenger-blocks/payloadBtnGen");
let cardGenerator = require("simple-messenger-blocks/cardGenerator");
let bondiFlow = require("../../../../sponsoredFlows/bondiCard");



let pse_flow = [
    bondiFlow,
    grroupedButtonBlockGen(
        "📌 Sheets - ",
        [
            webBtnBlockGen("Shohag Sir(2024)", "https://drive.google.com/file/d/1LjOr1pHUzAzxmkqCQ9JwQnA_5_xb7Eda/view?usp=sharing"),
        ]
    ),
    grroupedButtonBlockGen(
        "📌 Full Hand Notes(2022) - ",
        [
            webBtnBlockGen("Part-B(Rafi)", "https://drive.google.com/file/d/1T87Wvn3dEVPyED6X70yyaiZer-dFqFml/view?usp=sharing"),
            webBtnBlockGen("Important Ques(2022)", "https://drive.google.com/file/d/13pluwYvVBZj5auqpRsE-x7OcavsmatOr/view?usp=sharing"),
            webBtnBlockGen("Suggestion(2023)", "https://drive.google.com/file/d/1Lz4Hj40MkGYfFMs--OCz6f-0P88f3a2U/view?usp=sharing"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Topics for PSE - ",
        [
            payloadBtnGen("Books", "pse_books_flow"),
            payloadBtnGen("Questions", "pse_ques_flow"),
            payloadBtnGen("Hand Notes", "pse_handnotes_flow"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Topics for PSE - ",
        [
            payloadBtnGen("Intro to Polymers", "pse_intro_flow"),
            payloadBtnGen("Physical Structure", "pse_physical_struc_flow"),
            payloadBtnGen("Chemical Structure", "pse_chemical_struc_flow"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Topics for PSE - ",
        [
            payloadBtnGen("Molecular Weight", "pse_molWei_flow"),
            payloadBtnGen("Step Growth", "pse_step_growth_flow"),
            payloadBtnGen("Chain Growth", "pse_chain_growth_flow"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Topics for PSE - ",
        [
            payloadBtnGen("Thermal Transition", "pse_thermal_flow"),
            payloadBtnGen("Polymer Degradation", "pse_degrad_flow"),
            payloadBtnGen("Polymerization Tec.", "pse_polymer_tec_flow"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Topics for PSE - ",
        [
            payloadBtnGen("Appli.. of Polymers", "pse_application_flow"),
            payloadBtnGen("Polymer Morpho..", "pse_morpho_flow"),
            payloadBtnGen("Fiber For. Poly.", "pse_fiberForming_flow"),
        ]
    ),
]





module.exports = pse_flow;