let grroupedButtonBlockGen = require("simple-messenger-blocks/groupedBtnBlockGen");
let webBtnBlockGen = require("simple-messenger-blocks/webBtnGen");
let payloadBtnGen = require("simple-messenger-blocks/payloadBtnGen");
let cardGenerator = require("simple-messenger-blocks/cardGenerator");
let bondiFlow = require("../../../../sponsoredFlows/bondiCard");


let chem1_flow = [
    bondiFlow,
    grroupedButtonBlockGen(
        "📌 Select Topics for CHE-I -",
        [
            webBtnBlockGen("QB Solve(2021)", "https://drive.google.com/drive/folders/1tOXp7lwSuoENfugIFQ3djiDgahxvR8Un?usp=sharing"),
        ]
    ),
    grroupedButtonBlockGen(
        "📌 Sheets(2021) -",
        [
            webBtnBlockGen("Brishty Mam", "https://drive.google.com/drive/folders/1XJqRTgawf-FQdWAb8Q42npba2sIW-mpa?usp=sharing"),
            webBtnBlockGen("Samiul Sir", "https://drive.google.com/drive/folders/10absc61DIVDG6jzxzYA0_WgpQDi-bXtl?usp=sharing"),
        ]
    ),
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