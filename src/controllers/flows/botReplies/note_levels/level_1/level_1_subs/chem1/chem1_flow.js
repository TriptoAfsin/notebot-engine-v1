let grroupedButtonBlockGen = require("../../../../../../genrators/grroupedButtonBlockGen");
let webBtnBlockGen = require("../../../../../../genrators/webBtnBlockGen");
let payloadBtnGen = require("../../../../../../genrators/payloadBtnGen");
let cardGenerator = require("../../../../../../genrators/cardGenerator");


let chem1_flow = [
    grroupedButtonBlockGen(
        "🔰 Select Topics for CHE-I -",
        [
            payloadBtnGen("Books", "chem1_books_flow"),
            payloadBtnGen("Questions", "chem1_ques_flow"),
            payloadBtnGen("Periodic Properties", "chem1_periodic_flow")
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Topics for CHE-I -",
        [
            payloadBtnGen("Dilute Solution", "chem1_dilute_flow"),
            payloadBtnGen("Complex Compound", "chem1_complx_flow"),
            payloadBtnGen("Chemical Bond", "chem1_bond_flow")
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Topics for CHE-I -",
        [
            payloadBtnGen("Chemical Kinetics", "chem1_kinetics_flow"),
            payloadBtnGen("Chemical Equilibrium", "chem1_equi_flow"),
            payloadBtnGen("Photo Chemistry", "chem1_photo_flow")
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Topics for CHE-I -",
        [
            payloadBtnGen("Analytical Analysis", "chem1_analy_flow"),
            payloadBtnGen("Colloid", "chem1_coll_flow"),
            payloadBtnGen("Acid & Base", "chem1_acid_base_flow")
        ]
    ),
]





module.exports = chem1_flow;