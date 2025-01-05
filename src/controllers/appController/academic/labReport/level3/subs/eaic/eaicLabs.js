let grroupedButtonBlockGen = require("simple-messenger-blocks/groupedBtnBlockGen");
let webBtnBlockGen = require("simple-messenger-blocks/webBtnGen");

let eaicFlow = [
    grroupedButtonBlockGen(
        "🔰EAIC Lab Report -",
        [
            webBtnBlockGen("Drive Folder", "https://drive.google.com/drive/folders/1i10S7hEutVWy4ylFyT_SXTZ_9hakdBXJ?usp=sharing"),
        ]
    )
]
let SubTopicTrans = require('../../../../../translaters/SubTopicTrans')


let routePrefix = "app/labs/3/eaic"

let eaicLabApp = SubTopicTrans(routePrefix, eaicFlow)

module.exports = eaicLabApp