let grroupedButtonBlockGen = require("../../genrators/grroupedButtonBlockGen");
let webBtnBlockGen = require("../../genrators/webBtnBlockGen");
let payloadBtnGen = require("../../genrators/payloadBtnGen");
let cardGen = require("../../genrators/cardGenerator");



let syllabus = [
    grroupedButtonBlockGen(
        "🔰 Select Your Batch -",
        [
            payloadBtnGen("🔵 46", "syllabus_46"),
            payloadBtnGen("🔵 45", "syllabus_45"),
        ]
    ),
]





module.exports = syllabus;