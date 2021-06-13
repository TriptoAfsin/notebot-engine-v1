let grroupedButtonBlockGen = require("../../../../../../genrators/grroupedButtonBlockGen");
let webBtnBlockGen = require("../../../../../../genrators/webBtnBlockGen");
let payloadBtnGen = require("../../../../../../genrators/payloadBtnGen");



let fmg_flow = [
    grroupedButtonBlockGen(
        "📌 Full Hand Notes - ",
        [
            webBtnBlockGen("Urmi(Part-B)", "https://drive.google.com/file/d/11iNvWSUPbjklqfq_Kd0M93wn3oB-ga5I/view?usp=sharing")
        ]
    ),
    grroupedButtonBlockGen(
        "📌FMG(All)-",
        [
            webBtnBlockGen("☄️ Downlaod ☄️", "https://drive.google.com/drive/folders/1nsQwdWQRQmMebV25fhwrM6IrvC1Sm3LD")
        ]
    ),
]





module.exports = fmg_flow;