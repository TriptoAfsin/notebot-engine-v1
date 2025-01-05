let grroupedButtonBlockGen = require("simple-messenger-blocks/groupedBtnBlockGen");
let webBtnBlockGen = require("simple-messenger-blocks/webBtnGen");

let wwmmFlow = [
    grroupedButtonBlockGen(
        "🔰 WWMM Lab Report -",
        [
            webBtnBlockGen("Drive Folder", "https://drive.google.com/drive/folders/1sVhE7w1GKLQtn4It0KqOAwqy971V_9uj?usp=sharing"),
        ]
    )
]
let SubTopicTrans = require('../../../../../translaters/SubTopicTrans')


let routePrefix = "app/labs/4/wwmm"

let wwmmLabApp = SubTopicTrans(routePrefix, wwmmFlow)

module.exports = wwmmLabApp