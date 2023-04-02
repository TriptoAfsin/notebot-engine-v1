let grroupedButtonBlockGen = require("../../genrators/grroupedButtonBlockGen");
let webBtnBlockGen = require("../../genrators/webBtnBlockGen");
let payloadBtnGen = require("../../genrators/payloadBtnGen");
let cardGenerator = require("../../genrators/cardGenerator");


let result = [
    grroupedButtonBlockGen(
        "🔴 Latest Results -",
        [
            webBtnBlockGen("L3, T1(New)(2023)", "https://www.butex.edu.bd/wp-content/uploads/2023/03/Result-of-BSc-in-Textile-Engineering-L-3-T-1-Exam-2021-Session2020-21.pdf"),
            webBtnBlockGen("L2, T1(New)(2022)", "https://www.butex.edu.bd/wp-content/uploads/2023/03/Result-of-BSc-in-Textile-Engineering-L-2-T-1-Exam-2021.pdf"),
            webBtnBlockGen("L1, T1", "https://www.butex.edu.bd/wp-content/uploads/2022/02/Result-of-B.Sc_.-in-Textile-Engineering-L-1-T-1-Exam-2020.pdf"),
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