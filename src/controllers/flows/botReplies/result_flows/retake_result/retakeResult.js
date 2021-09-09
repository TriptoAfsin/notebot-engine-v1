let grroupedButtonBlockGen = require("../../../../genrators/grroupedButtonBlockGen");
let webBtnBlockGen = require("../../../../genrators/webBtnBlockGen");
let payloadBtnGen = require("../../../../genrators/payloadBtnGen");
let cardGenerator = require("../../../../genrators/cardGenerator");


let retakecResult = [
    grroupedButtonBlockGen(
        "🟤 Select Academic Year -",
        [
            payloadBtnGen("Retake 2019", "retake_res_2019"),
            payloadBtnGen("Retake 2018", "retake_res_2018"),
        ]
    ),
]





module.exports = retakecResult;