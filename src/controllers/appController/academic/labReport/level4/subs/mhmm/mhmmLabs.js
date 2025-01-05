let grroupedButtonBlockGen = require("simple-messenger-blocks/groupedBtnBlockGen");
let webBtnBlockGen = require("simple-messenger-blocks/webBtnGen");

let flow = [
    grroupedButtonBlockGen(
        "🔰 MHMM Lab Report -",
        [
            webBtnBlockGen("Drive Folder", "https://drive.google.com/drive/folders/1_q_HFcY657iBKyJSZjN40uIcpQj0dYC5?usp=sharing"),
        ]
    )
]
let SubTopicTrans = require('../../../../../translaters/SubTopicTrans')


let routePrefix = "app/labs/4/mhmm"

let mhmmLabApp = SubTopicTrans(routePrefix, flow)

module.exports = mhmmLabApp