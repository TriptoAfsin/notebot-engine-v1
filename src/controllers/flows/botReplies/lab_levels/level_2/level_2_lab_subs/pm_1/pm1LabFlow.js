let grroupedButtonBlockGen = require('simple-messenger-blocks/groupedBtnBlockGen');
let webBtnBlockGen = require('simple-messenger-blocks/webBtnGen');
let payloadBtnGen = require('simple-messenger-blocks/payloadBtnGen');

let pm1_lab_flow = [
    grroupedButtonBlockGen("🔰 Select Experiment for PM-I -", [
        webBtnBlockGen("All Report", "https://drive.google.com/drive/folders/1nB3mkHBPqJyHtNRcwe9pcUVqiEX4s9gC?usp=sharing"),
        webBtnBlockGen("Exp: 1", "https://drive.google.com/file/d/19yGc9Uedsv6XlRsWfPmoIrVtyLLKMi-Q/view")
    ]),
]



module.exports = pm1_lab_flow;