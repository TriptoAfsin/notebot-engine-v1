let grroupedButtonBlockGen = require('simple-messenger-blocks/groupedBtnBlockGen');
let webBtnBlockGen = require('simple-messenger-blocks/webBtnGen');
let payloadBtnGen = require('simple-messenger-blocks/payloadBtnGen');
let cardGenerator = require('simple-messenger-blocks/cardGenerator');
let bondiFlow = require("../../../../sponsoredFlows/bondiCard");


let idccFlow = [
    bondiFlow,
    grroupedButtonBlockGen(
        "📌 Drive Folder - ",
        [
            webBtnBlockGen("Download", "https://drive.google.com/drive/folders/1QEdJyJyPuYJ6Co9dWI5Zya0xxaioF8lW?usp=sharing"),
        ]
    ),
]





module.exports = idccFlow;