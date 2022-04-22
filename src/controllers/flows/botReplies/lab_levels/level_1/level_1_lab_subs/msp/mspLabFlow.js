let grroupedButtonBlockGen = require('simple-messenger-blocks/groupedBtnBlockGen');
let webBtnBlockGen = require('simple-messenger-blocks/webBtnGen');
let payloadBtnGen = require('simple-messenger-blocks/payloadBtnGen');



let msp_lab_flow = [
    grroupedButtonBlockGen(
        "📌 All Lab Report -",
        [
            webBtnBlockGen("Emon(Affli,2022)", "https://drive.google.com/file/d/1gLFB4SIK_uKCMHDcTm1SomJGm75_-jvV/view?usp=sharing"),
            webBtnBlockGen("Rafi(2022)", "https://drive.google.com/drive/folders/1l7HpWG3SndZyEpWjGafq_AX8ex_rXrPA?usp=sharing"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Experiment for MSP -",
        [
            payloadBtnGen("Layout", "msp_lab_layout_flow"),
            payloadBtnGen("Hand tools", "msp_lab_handTools_flow"),
            payloadBtnGen("Grinding machine", "msp_lab_grindingMC_flow"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Experiment for MSP -",
        [
            payloadBtnGen("Lathe M/C", "msp_lab_lathe_flow"),
            payloadBtnGen("Square Key", "msp_lab_sqKey_flow"),
            payloadBtnGen("Matching Parts", "msp_lab_matchingParts_flow"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Experiment for MSP -",
        [
            payloadBtnGen("Milling Machine", "msp_lab_milling_flow"),
            payloadBtnGen("Drilling Machine", "msp_lab_drilling_flow"),
            payloadBtnGen("Shaper Machine", "msp_lab_shaper_flow"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Experiment for MSP -",
        [
            payloadBtnGen("Welding", "msp_lab_welding_flow"),
            payloadBtnGen("Intro Light Machines", "msp_lab_introLight_flow"),
            webBtnBlockGen("Turning Op Lathe MC", "https://drive.google.com/file/d/1-UfadXXyJUZ8PQ5S0STpfrLFwWN18sth/view"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Experiment for MSP -",
        [
            payloadBtnGen("Arc Welding", "msp_lab_arcWelding_flow"),
            payloadBtnGen("Manufact.. of Assem", "msp_lab_manuAssm_flow"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Experiment for MSP -",
        [
            payloadBtnGen("MSP Quiz Question", "msp_lab_mspQuiz_flow"),
        ]
    )
]



module.exports = msp_lab_flow;