let grroupedButtonBlockGen = require("simple-messenger-blocks/groupedBtnBlockGen");
let webBtnBlockGen = require("simple-messenger-blocks/webBtnGen");
let payloadBtnGen = require("simple-messenger-blocks/payloadBtnGen");
let cardGenerator = require("simple-messenger-blocks/cardGenerator");
let bondiFlow = require("../../../../sponsoredFlows/bondiCard");


let mppFLow = [
    bondiFlow,
    grroupedButtonBlockGen(
        "📌 Full Hand Notes - ",
        [
            webBtnBlockGen("Khadiza(2022)", "https://drive.google.com/file/d/1EYsoBPKf3TqJTEFKXo9bHh2ox-e97nDM/view?usp=sharing"),
        ]
    )
]



module.exports = mppFLow;