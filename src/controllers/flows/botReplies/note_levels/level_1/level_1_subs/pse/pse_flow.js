let grroupedButtonBlockGen = require("simple-messenger-blocks/groupedBtnBlockGen");
let webBtnBlockGen = require("simple-messenger-blocks/webBtnGen");
let payloadBtnGen = require("simple-messenger-blocks/payloadBtnGen");
let cardGenerator = require("simple-messenger-blocks/cardGenerator");
let bondiFlow = require("../../../../sponsoredFlows/bondiCard");



let pse_flow = [
    bondiFlow,
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