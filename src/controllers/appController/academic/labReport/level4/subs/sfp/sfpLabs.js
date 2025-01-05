let grroupedButtonBlockGen = require("simple-messenger-blocks/groupedBtnBlockGen");
let webBtnBlockGen = require("simple-messenger-blocks/webBtnGen");

let flow = [
    grroupedButtonBlockGen(
        "🔰 SFP Lab Report -",
        [
            webBtnBlockGen("Drive Folder", "https://drive.google.com/drive/folders/1Z8NYR44SZpUxmOou-p9AfbEYvIA09TSO?usp=sharing"),
        ]
    )
]
let SubTopicTrans = require('../../../../../translaters/SubTopicTrans')


let routePrefix = "app/labs/4/sfp"

let sfpLabApp = SubTopicTrans(routePrefix, flow)

module.exports = sfpLabApp