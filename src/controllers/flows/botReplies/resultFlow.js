let grroupedButtonBlockGen = require("../../genrators/grroupedButtonBlockGen");
let webBtnBlockGen = require("../../genrators/webBtnBlockGen");
let payloadBtnGen = require("../../genrators/payloadBtnGen");
let cardGenerator = require("../../genrators/cardGenerator");


let result = [
    grroupedButtonBlockGen(
        "🔰 Choose -",
        [
            webBtnBlockGen("🔴 All Results", "https://www.butex.edu.bd/results-published/"),
            webBtnBlockGen("🔴 Retake Result", "https://www.butex.edu.bd/?s=Retake"),
            webBtnBlockGen("🔴 Affl. Result", "https://www.butex.edu.bd/?s=Ac+Result")
        ]
    ),
    grroupedButtonBlockGen(
        "⚡Admission Results -",
        [
            payloadBtnGen("🟠 BUTEX Admission", "https://www.butex.edu.bd/?s=Merit+List"),
        ]
    )
]





module.exports = result;