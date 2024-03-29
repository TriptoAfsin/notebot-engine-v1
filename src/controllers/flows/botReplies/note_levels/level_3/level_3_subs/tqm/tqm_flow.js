let grroupedButtonBlockGen = require('simple-messenger-blocks/groupedBtnBlockGen');
let webBtnBlockGen = require('simple-messenger-blocks/webBtnGen');
let payloadBtnGen = require('simple-messenger-blocks/payloadBtnGen');
let bondiFlow = require("../../../../sponsoredFlows/bondiCard");


let tqmFlow = [
    bondiFlow,
    grroupedButtonBlockGen(
        "📌 Select Topics for TQM -",
        [
            webBtnBlockGen("Books", "https://drive.google.com/file/d/1f8lBOBejC-5beq-znanBC0QOlsiMgKc3/view?usp=sharing"),
            webBtnBlockGen("Suggestion(2022)", "https://drive.google.com/file/d/1G1bYyNJ-TWn5oOFF_R1BE-aJcq-qPiR3/view?usp=sharing"),
        ]
    ),
    grroupedButtonBlockGen(
        "📌 Full Hand Notes -",
        [
            webBtnBlockGen("Akib(A)", "https://drive.google.com/file/d/1BqoB9ZfFqLy2dOmVU_864q7wz33bxt7E/view"),
        ]
    ),
    grroupedButtonBlockGen(
        "📌 CT 2021 -",
        [
            webBtnBlockGen("Note(Akib)", "https://drive.google.com/file/d/1-TErZ97R9k1_RzyZfAu_CLxVkIlv1E25/view"),
        ]
    ),
    grroupedButtonBlockGen(
        "📌 Select Topics for TQM - ",
        [
            webBtnBlockGen("TQM Maths", "https://drive.google.com/file/d/1ejpc4Ihsp5-ixXEe_XHh_xRZS7kyHOrm/view?usp=sharing"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Topics for TQM - ",
        [
            payloadBtnGen("Lec 1: Total QM", "tqm_totalQm_flow"),
            payloadBtnGen("Quality & Reliabil.", "tqm_qualityReliability_flow"),
            webBtnBlockGen("Fault Tree Analysis", "https://drive.google.com/file/d/1HNwDmU31ApcnjpWv1gzJC874yUDBlvA9/view")
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Topics for TQM - ",
        [
            webBtnBlockGen("OEE", "https://drive.google.com/file/d/1CMdh-swegCdRYYf97-Qk-UfmgsSBIUcE/view"),
            payloadBtnGen("Conti.. Improv.", "tqm_continuous_flow"),
            payloadBtnGen("Quality Standards", "tqm_qualityStd_flow")
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Topics for TQM - ",
        [
            payloadBtnGen("Intro to QM", "tqm_intro_flow"),
            payloadBtnGen("Control & Meas..", "tqm_control_flow"),
            payloadBtnGen("Management Apro.", "tqm_managementApproach_flow")
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Topics for TQM - ",
        [
            payloadBtnGen("QC Tools", "tqm_qcTools_flow"),
            webBtnBlockGen("Des. Quality Prod", "https://drive.google.com/file/d/1vBVzz2EPSxSGmg0sZTJ5Esm4KYEubx7o/view?usp=sharing"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Topics for TQM - ",
        [
            webBtnBlockGen("H.Sheikh Sir Sheets", "https://drive.google.com/drive/folders/15byZ4dccfNR9oeUQOv1giUXLoD8DXhcs"),
        ]
    ),
]



module.exports = tqmFlow;