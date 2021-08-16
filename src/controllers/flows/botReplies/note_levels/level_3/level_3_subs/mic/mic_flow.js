let grroupedButtonBlockGen = require("../../../../../../genrators/grroupedButtonBlockGen");
let webBtnBlockGen = require("../../../../../../genrators/webBtnBlockGen");
let payloadBtnGen = require("../../../../../../genrators/payloadBtnGen");
let bondiFlow = require("../../../../sponsoredFlows/bondiCard");



let micFlow = [
    grroupedButtonBlockGen(
        "🔰 Select Topics for MIC -",
        [
            payloadBtnGen("Books", "mic_book_flow"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Topics for MIC -",
        [
            payloadBtnGen("Ch 1: Intro to .", "mic_ch1_flow"),
            payloadBtnGen("Ch 2: System Elem.", "mic_ch2_flow"),
            payloadBtnGen("Ch 4: Control Sys.", "mic_ch4_flow"),
        ]
    ),
]



module.exports = micFlow;