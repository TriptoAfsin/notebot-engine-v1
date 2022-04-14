let grroupedButtonBlockGen = require('simple-messenger-blocks/groupedBtnBlockGen');
let webBtnBlockGen = require('simple-messenger-blocks/webBtnGen');
let payloadBtnGen = require('simple-messenger-blocks/payloadBtnGen');


let bce_lab_flow = [
    grroupedButtonBlockGen(
        "📌 All Report  - ",
        [
            payloadBtnGen("All(2022)", "https://drive.google.com/file/d/1tu8slkIs7pTJ3LJseqX04l5o04NDbjDv/view?usp=sharing"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Experiment for BCE - ",
        [
            payloadBtnGen("Reading Technique", "bce_lab_read_flow"),
            payloadBtnGen("Listening Skills", "bce_lab_listen_flow")
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Experiment for BCE - ",
        [
            webBtnBlockGen("Social English", "https://drive.google.com/file/d/1xyoE71MpJL0Hwn2guWsuI9mRxPJBGPas/view?usp=sharing"),
            payloadBtnGen("Lab Sheet(Final Viva", "bce_lab_sheet_flow")
        ]
    )
]



module.exports = bce_lab_flow;