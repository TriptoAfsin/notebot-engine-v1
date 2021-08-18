let grroupedButtonBlockGen = require("../../../../../../genrators/grroupedButtonBlockGen");
let webBtnBlockGen = require("../../../../../../genrators/webBtnBlockGen");
let payloadBtnGen = require("../../../../../../genrators/payloadBtnGen");
let bondiFlow = require("../../../../sponsoredFlows/bondiCard");


let tqmFlow = [
    bondiFlow,
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