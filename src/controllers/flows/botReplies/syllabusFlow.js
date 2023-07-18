let grroupedButtonBlockGen = require("../../genrators/grroupedButtonBlockGen");
let webBtnBlockGen = require("../../genrators/webBtnBlockGen");
let payloadBtnGen = require("../../genrators/payloadBtnGen");
let cardGen = require("../../genrators/cardGenerator");



let syllabus = [
    grroupedButtonBlockGen(
        "🔰 Select Your Batch -",
        [
            webBtnBlockGen("🔵 46", "https://drive.google.com/file/d/1di3DU0HRJZE-Kjihfr6UGS4y7qNWH7mF/view?usp=sharing"),
            payloadBtnGen("🔵 45", "syllabus_45"),
        ]
    ),
]





module.exports = syllabus;