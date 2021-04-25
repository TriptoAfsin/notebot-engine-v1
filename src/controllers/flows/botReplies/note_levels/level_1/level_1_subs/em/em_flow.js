let grroupedButtonBlockGen = require("../../../../../../genrators/grroupedButtonBlockGen");
let webBtnBlockGen = require("../../../../../../genrators/webBtnBlockGen");
let payloadBtnGen = require("../../../../../../genrators/payloadBtnGen");
let cardGenerator = require("../../../../../../genrators/cardGenerator");



let em_flow = [
    grroupedButtonBlockGen("📌 Short Hand Note All(Saidul, 2019) -",
        [
            webBtnBlockGen("⚡Download", "https://drive.google.com/file/d/11lnmfUbsrYQa0dwJvCoe3uU2JmNPAOUE/view?usp=sharing")
        ]
    ),
    grroupedButtonBlockGen("🟩 Select Topics for EM -",
        [
            payloadBtnGen("Books", "em_books_flow"),
            payloadBtnGen("Questions", "em_ques_flow"),
            payloadBtnGen("Math Chotha", "em_math_flow")
        ]
    ),
    grroupedButtonBlockGen("🟩 Select Topics for EM -",
        [
            payloadBtnGen("Blast Furnance", "em_blast_flow"),
            payloadBtnGen("Heat Treatment", "em_heat_flow"),
            payloadBtnGen("Wrought, cast iron", "em_wrought_flow")
        ]
    ),
    grroupedButtonBlockGen("🟩 Select Topics for EM -",
        [
            payloadBtnGen("Blast Furnance", "em_blast_flow"),
            payloadBtnGen("Heat Treatment", "em_heat_flow"),
            payloadBtnGen("Wrought, cast iron", "em_wrought_flow")
        ]
    ),
    grroupedButtonBlockGen("🟩 Select Topics for EM -",
        [
            payloadBtnGen("Crystal Structure", "em_crystal_flow"),
            payloadBtnGen("Iron,Ceramic,Lub", "em_iron_ceramic_flow"),
            payloadBtnGen("Glass", "em_glass_flow")
        ]
    ),
    grroupedButtonBlockGen("🟩 Select Topics for EM -",
        [
            payloadBtnGen("Ceramics", "em_ceramic_flow"),
            payloadBtnGen("Corrosion", "em_corrosion_flow"),
            payloadBtnGen("Alloy", "em_alloy_flow")
        ]
    ),
    grroupedButtonBlockGen("🟩 Select Topics for EM -",
        [
            payloadBtnGen("Composites", "em_composites_flow"),
            payloadBtnGen("Plastic", "em_plastic_flow"),
        ]
    ),
]





module.exports = em_flow;