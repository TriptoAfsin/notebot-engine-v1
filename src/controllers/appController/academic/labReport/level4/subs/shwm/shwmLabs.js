let grroupedButtonBlockGen = require("simple-messenger-blocks/groupedBtnBlockGen");
let webBtnBlockGen = require("simple-messenger-blocks/webBtnGen");

let flow = [
    grroupedButtonBlockGen(
        "🔰 SHWM Lab Report -",
        [
            webBtnBlockGen("Drive Folder", "https://drive.google.com/drive/folders/1Ss6UOS_De1zRCVNonJnrsA18jGu8KavZ?usp=sharing"),
        ]
    )
]
let SubTopicTrans = require('../../../../../translaters/SubTopicTrans')


let routePrefix = "app/labs/4/shwm"

let shwmLabApp = SubTopicTrans(routePrefix, flow)

module.exports = shwmLabApp