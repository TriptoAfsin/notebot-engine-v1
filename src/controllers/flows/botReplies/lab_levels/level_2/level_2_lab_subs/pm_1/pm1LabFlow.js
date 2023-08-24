let grroupedButtonBlockGen = require('simple-messenger-blocks/groupedBtnBlockGen');
let webBtnBlockGen = require('simple-messenger-blocks/webBtnGen');
let payloadBtnGen = require('simple-messenger-blocks/payloadBtnGen');

let pm1_lab_flow = [
    grroupedButtonBlockGen("📌 All Report - ", [
        webBtnBlockGen("Miftahul(2023)", "https://drive.google.com/file/d/1YzdrSXyfI5a5UCfSfzQ8qYvV58eK_GQ-/view?usp=sharing"),
        webBtnBlockGen("Mashtura(2023)", "https://drive.google.com/file/d/1q3yr4FxMuk2JYg2IFhMmaaNVivOwQQRh/view?usp=sharing"),
    ]),
    grroupedButtonBlockGen("🔰 Select Experiment for PM-I -", [

        webBtnBlockGen("Exp: 1", "https://drive.google.com/file/d/19yGc9Uedsv6XlRsWfPmoIrVtyLLKMi-Q/view")
    ]),
]



module.exports = pm1_lab_flow;