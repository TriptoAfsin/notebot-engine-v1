let grroupedButtonBlockGen = require("simple-messenger-blocks/groupedBtnBlockGen");
let webBtnBlockGen = require("simple-messenger-blocks/webBtnGen");
let payloadBtnGen = require("simple-messenger-blocks/payloadBtnGen");
let cardGenerator = require("simple-messenger-blocks/cardGenerator");
let bondiFlow = require("../../../../sponsoredFlows/bondiCard");


let micFlow = [
    bondiFlow,
    grroupedButtonBlockGen(
        "📌 Select Topics for MIC -",
        [
            payloadBtnGen("Books", "mic_book_flow"),
            webBtnBlockGen("Questions", "https://drive.google.com/file/d/1wpL356Gmh156oI0-cGuxZDVr9b2m3Q5i/view?usp=sharing"),
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
    grroupedButtonBlockGen(
        "🔰 Select Topics for MIC -",
        [
            payloadBtnGen("Ch 5: Proc. Control..", "mic_ch5_flow"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Topics for MIC -",
        [
            payloadBtnGen("Limits, Fits ..", "mic_limitsFitsGauge_flow"),
            payloadBtnGen("Non Destru. Test", "mic_nonDestructive_flow"),
            payloadBtnGen("Me. Surface Finish", "mic_surfaceFinish_flow"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Topics for MIC -",
        [
            payloadBtnGen("Thread Measur..", "mic_threadMeasure_flow"),
            payloadBtnGen("Angular Measur..", "mic_angularMeas_flow"),
            payloadBtnGen("Linear Measur..", "mic_LinearMeas_flow"),
        ]
    ),
]



module.exports = micFlow;