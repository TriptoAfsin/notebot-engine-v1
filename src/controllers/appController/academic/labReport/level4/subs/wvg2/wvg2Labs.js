let grroupedButtonBlockGen = require("simple-messenger-blocks/groupedBtnBlockGen");
let webBtnBlockGen = require("simple-messenger-blocks/webBtnGen");

let wvg2Flow = [
    grroupedButtonBlockGen(
        "🔰 Weaving-II Lab Report -",
        [
            webBtnBlockGen("Drive Folder", "https://drive.google.com/drive/folders/1AJMRd7Q8h4I51ycg0e7ceqreyHaik9Ul?usp=sharing"),
        ]
    )
]
let SubTopicTrans = require('../../../../../translaters/SubTopicTrans')


let routePrefix = "app/labs/4/wvg2"

let wvg2LabApp = SubTopicTrans(routePrefix, wvg2Flow)

module.exports = wvg2LabApp