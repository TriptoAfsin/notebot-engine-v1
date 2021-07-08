
let grroupedButtonBlockGen = require("../../../../../../genrators/grroupedButtonBlockGen");
let webBtnBlockGen = require("../../../../../../genrators/webBtnBlockGen");
let payloadBtnGen = require("../../../../../../genrators/payloadBtnGen");
let cardGenerator = require("../../../../../../genrators/cardGenerator");
let bondiFlow = require("../../../../sponsoredFlows/bondiCard");

let fsdFlow = [
    bondiFlow,
    grroupedButtonBlockGen(
        `📌 Select Topics for FSD - `,
        [
            webBtnBlockGen("Belal Sir Book", "https://drive.google.com/file/d/1J8FZQuyRVOxXJcK1PMmbs3gE3OHmLrrW/view?usp=sharing"),
        ]
    ),
    grroupedButtonBlockGen(
        `🔰 Select Topics for FSD - `,
        [
            payloadBtnGen("Intro to FSD", "fsd_intro_flow"),
            payloadBtnGen("Plain Weave", "fsd_plainWeave_flow"),
        ]
    ),
]



module.exports = fsdFlow;