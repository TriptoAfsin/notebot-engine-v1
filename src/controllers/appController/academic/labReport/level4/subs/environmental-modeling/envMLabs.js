let grroupedButtonBlockGen = require("simple-messenger-blocks/groupedBtnBlockGen");
let webBtnBlockGen = require("simple-messenger-blocks/webBtnGen");

let envMLabsFlow = [
    grroupedButtonBlockGen(
        "🔰 Environmental Modeling Lab Report -",
        [
            webBtnBlockGen("Drive Folder", "https://drive.google.com/drive/folders/1jo2y6jTZdhr2AVyvmaMroR9qMljoGbWA?usp=sharing"),
        ]
    )
]
let SubTopicTrans = require('../../../../../translaters/SubTopicTrans')


let routePrefix = "app/labs/4/envModeling"

let envMLabsApp = SubTopicTrans(routePrefix, envMLabsFlow)

module.exports = envMLabsApp