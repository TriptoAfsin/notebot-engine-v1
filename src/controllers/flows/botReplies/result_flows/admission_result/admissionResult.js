let grroupedButtonBlockGen = require("../../../../genrators/grroupedButtonBlockGen");
let webBtnBlockGen = require("../../../../genrators/webBtnBlockGen");
let payloadBtnGen = require("../../../../genrators/payloadBtnGen");
let cardGenerator = require("../../../../genrators/cardGenerator");


let admissionRes = [
    grroupedButtonBlockGen(
        "🟡 Select Year -",
        [
            webBtnBlockGen("Admission 2019", "https://drive.google.com/file/d/1HabkRymQ2D2MY8ypR6ppxUcC2YGMQJ9y/view"),
            webBtnBlockGen("Admission 2018", "https://drive.google.com/file/d/1glzQ9CojGOiLOGYAersKskV4Z2wzL1dl/view"),
        ]
    ),
]





module.exports = admissionRes;