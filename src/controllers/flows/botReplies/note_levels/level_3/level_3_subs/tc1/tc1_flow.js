let grroupedButtonBlockGen = require('simple-messenger-blocks/groupedBtnBlockGen');
let webBtnBlockGen = require('simple-messenger-blocks/webBtnGen');
let payloadBtnGen = require('simple-messenger-blocks/payloadBtnGen');
let cardGenerator = require('simple-messenger-blocks/cardGenerator');
let bondiFlow = require("../../../../sponsoredFlows/bondiCard");


let tc1Flow = [
    bondiFlow,
    grroupedButtonBlockGen(
        "📌 QB Solve (Akash, NTEC) - ",
        [
            webBtnBlockGen("Download", "https://drive.google.com/file/d/1EcTnQY49Cp5EQqmaLBvzCrKnNBWneBMl/view?usp=sharing"),
        ]
    ),
    grroupedButtonBlockGen(
        "📌 Drive Folder - ",
        [
            webBtnBlockGen("Download", "https://drive.google.com/drive/folders/1Tg0ruIBuznlNWYGNYZVxGHnwu8UUNa2r?usp=sharing"),
        ]
    ),
]





module.exports = tc1Flow;