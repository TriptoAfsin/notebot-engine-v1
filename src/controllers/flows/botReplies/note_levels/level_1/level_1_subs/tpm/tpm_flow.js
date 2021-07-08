let grroupedButtonBlockGen = require("../../../../../../genrators/grroupedButtonBlockGen");
let webBtnBlockGen = require("../../../../../../genrators/webBtnBlockGen");
let payloadBtnGen = require("../../../../../../genrators/payloadBtnGen");
let bondiFlow = require("../../../../sponsoredFlows/bondiCard");



let tpm_flow = [
    bondiFlow,
    grroupedButtonBlockGen(
        "📌Part A Note(Imran, 2019)-",
        [
            webBtnBlockGen("☄️ Download ☄️", "https://drive.google.com/file/d/1DU-9bYRe7evvp5u8stZJnkvoXv7pziyU/view?usp=sharing")
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Topics for TPM -",
        [
            payloadBtnGen("Questions", "tpm_ques_flow")
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Topics for TPM -",
        [
            payloadBtnGen("Woven Fab Wet..", "tpm_wov_fab_wet_flow"),
            payloadBtnGen("Woven Fab Manu Pro", "tpm_wov_fab_manu_flow")
        ]
    ),
]





module.exports = tpm_flow;