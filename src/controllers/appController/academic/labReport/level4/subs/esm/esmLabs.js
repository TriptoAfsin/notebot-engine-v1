let grroupedButtonBlockGen = require("simple-messenger-blocks/groupedBtnBlockGen");
let webBtnBlockGen = require("simple-messenger-blocks/webBtnGen");

let flow = [
    grroupedButtonBlockGen(
        "🔰 ESM Lab Report -",
        [
            webBtnBlockGen("Drive Folder", "https://drive.google.com/drive/folders/1laSh0xtiO7hQqric84GgyqQrLo1Xqph2?usp=sharing"),
        ]
    )
]
let SubTopicTrans = require('../../../../../translaters/SubTopicTrans')


let routePrefix = "app/labs/4/esm"

let esmLabApp = SubTopicTrans(routePrefix, flow)

module.exports = esmLabApp