let grroupedButtonBlockGen = require("../../../../genrators/grroupedButtonBlockGen");
let webBtnBlockGen = require("../../../../genrators/webBtnBlockGen");
let payloadBtnGen = require("../../../../genrators/payloadBtnGen");
let cardGenerator = require("../../../../genrators/cardGenerator");



let academicResult = [
    grroupedButtonBlockGen(
        "🟡 Select Academic Year -",
        [
            payloadBtnGen("2019", "academic_res_2019"),
            payloadBtnGen("2018", "academic_res_2018")
        ]
    ),
]





module.exports = academicResult;