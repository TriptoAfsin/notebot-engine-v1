
let grroupedButtonBlockGen = require("../../../../../../genrators/grroupedButtonBlockGen");
let webBtnBlockGen = require("../../../../../../genrators/webBtnBlockGen");
let payloadBtnGen = require("../../../../../../genrators/payloadBtnGen");
let cardGenerator = require("../../../../../../genrators/cardGenerator");

let fsdFlow = [
    grroupedButtonBlockGen(
        `🔰 Select Topics for FSD - `,
        [
            payloadBtnGen("Intro to FSD", "fsd_intro_flow"),
            payloadBtnGen("Plain Weave", "fsd_plainWeave_flow"),
        ]
    ),
    cardGenerator(
        "https://i.imgur.com/MY7JBCn.png",
        "Card Title",
        "Card Subtitle",
        "https://notebot.netlify.app/#/",
        [
            webBtnBlockGen("Visit Here", "https://notebot.netlify.app/#/")
        ]
    )
]



module.exports = fsdFlow;