let grroupedButtonBlockGen = require("../../genrators/grroupedButtonBlockGen");
let webBtnBlockGen = require("../../genrators/webBtnBlockGen");
let payloadBtnGen = require("../../genrators/payloadBtnGen");
let cardGenerator = require("../../genrators/cardGenerator");


let result = [
    grroupedButtonBlockGen(
        "🔴 Latest Results -",
        [
            webBtnBlockGen("Retake L1T2", "https://www.butex.edu.bd/result-of-retake-subjects-b-sc-in-textile-engineering-l-1-t-2-exam-2019/"),
            webBtnBlockGen("L2T2(2021)", "https://www.butex.edu.bd/wp-content/uploads/2021/09/Result-of-B.Sc_.-in-Textile-Engineering-L-2-T-2-Examination-2019.pdf"),
            webBtnBlockGen("L3T2(2021)", "https://www.butex.edu.bd/wp-content/uploads/2021/09/Result-of-B.Sc_.-in-Textile-Engineering-L-3-T-2-Examination-2019.pdf"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Choose -",
        [
            payloadBtnGen("🔴 Academic Result", "result_academic"),
            payloadBtnGen("🔴 Retake Result", "result_retake"),
            payloadBtnGen("🔴 Affl. Result", "result_affli")
        ]
    ),
    grroupedButtonBlockGen(
        "⚡Admission Results -",
        [
            payloadBtnGen("🟠 BUTEX Admission", "result_admission"),
        ]
    )
]





module.exports = result;