let grroupedButtonBlockGen = require("../../genrators/grroupedButtonBlockGen");
let webBtnBlockGen = require("../../genrators/webBtnBlockGen");
let payloadBtnGen = require("../../genrators/payloadBtnGen");
let cardGenerator = require("../../genrators/cardGenerator");


let result = [
    grroupedButtonBlockGen(
        "🔴 Latest Results -",
        [
            webBtnBlockGen("L1, T1(New)", "https://www.butex.edu.bd/wp-content/uploads/2022/02/Result-of-B.Sc_.-in-Textile-Engineering-L-1-T-1-Exam-2020.pdf"),
            webBtnBlockGen("Retake L1T2", "https://www.butex.edu.bd/result-of-retake-subjects-b-sc-in-textile-engineering-l-1-t-2-exam-2019/"),
            webBtnBlockGen("L4T2(2021)", "https://www.butex.edu.bd/wp-content/uploads/2021/10/Result-of-B.Sc_.-in-Textile-Engineering-L-4-T-2-Dated-28102021.pdf")
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