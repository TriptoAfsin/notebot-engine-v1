let grroupedButtonBlockGen = require("simple-messenger-blocks/groupedBtnBlockGen");
let webBtnBlockGen = require("simple-messenger-blocks/webBtnGen");

let flow = [
    grroupedButtonBlockGen(
        "🔰 KFA Lab Report -",
        [
            webBtnBlockGen("Drive Folder", "https://drive.google.com/drive/folders/1vMOrdLv3JU8ekaWhQXVP1f5k0FmlXcvs?usp=sharing"),
        ]
    )
]
let SubTopicTrans = require('../../../../../translaters/SubTopicTrans')


let routePrefix = "app/labs/4/kfa"

let kfaLabApp = SubTopicTrans(routePrefix, flow)

module.exports = kfaLabApp