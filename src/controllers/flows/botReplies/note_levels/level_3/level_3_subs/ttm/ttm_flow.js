let grroupedButtonBlockGen = require('simple-messenger-blocks/groupedBtnBlockGen');
let webBtnBlockGen = require('simple-messenger-blocks/webBtnGen');
let payloadBtnGen = require('simple-messenger-blocks/payloadBtnGen');
let bondiFlow = require("../../../../sponsoredFlows/bondiCard");


let ttmFlow = [
    bondiFlow,
    grroupedButtonBlockGen(
        "🔰 Select Topics for TTM - ",
        [
            webBtnBlockGen("Sheet(Kibria Sir)", "https://drive.google.com/drive/folders/1FsQ6B77JgZWPT3n-bMTGIuza-O8YEsLH?usp=sharing"),
        ]
    ),
]



module.exports = ttmFlow;