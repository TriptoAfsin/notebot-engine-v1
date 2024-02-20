let grroupedButtonBlockGen = require("../../../../../../genrators/grroupedButtonBlockGen");
let webBtnBlockGen = require("../../../../../../genrators/webBtnBlockGen");
let payloadBtnGen = require("../../../../../../genrators/payloadBtnGen");
let cardGenerator = require("../../../../../../genrators/cardGenerator");


let knit1Flow = [
    grroupedButtonBlockGen(
        `📌 Full Hand Notes - `,
        [
            webBtnBlockGen("Zia(2024)", "https://drive.google.com/file/d/1Lb08EFFnfiejsSbCD2qoLc2MaoEBEDCL/view?usp=sharing"),
        ]
    ),
    grroupedButtonBlockGen(
        `📌 Select Topics for Knitting-I - `,
        [
            webBtnBlockGen("Belal Sir Book", "https://drive.google.com/file/d/1J8FZQuyRVOxXJcK1PMmbs3gE3OHmLrrW/view?usp=sharing"),
        ]
    ),
    grroupedButtonBlockGen(
        `🔰 Select Topics for Knitting-I - `,
        [
            payloadBtnGen("Lecture", "knit_lecture_flow"),
        ]
    ),
]





module.exports = knit1Flow;