let grroupedButtonBlockGen = require('simple-messenger-blocks/groupedBtnBlockGen');
let webBtnBlockGen = require('simple-messenger-blocks/webBtnGen');
let payloadBtnGen = require('simple-messenger-blocks/payloadBtnGen');


let fme_lab_flow = [
    grroupedButtonBlockGen(
        "📌 Lab Note(2022)",
        [
            webBtnBlockGen("Sazzad(2022)", "https://drive.google.com/file/d/1sRovtBb0HtblVsmVadr02eh8K1w_sigi/view?usp=sharing")
        ]
    ),
    grroupedButtonBlockGen(
        "📌 All Report (2019-2020, Naimur) -",
        [
            webBtnBlockGen("☄️Download", "https://drive.google.com/file/d/1E_RNhj87kifJFY6JNjM8BQkgxh2fbBF4/view")
        ]
    ),
    grroupedButtonBlockGen(
        "📌 Lab Viva Note(Akib, 2020) -",
        [
            webBtnBlockGen("☄️Download", "https://drive.google.com/file/d/1UE87DBj9yhI6_NQDeHwdPMz4Bzw6s-tI/view")
        ]
    )
]



module.exports = fme_lab_flow;