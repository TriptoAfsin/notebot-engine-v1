let grroupedButtonBlockGen = require('simple-messenger-blocks/groupedBtnBlockGen');
let webBtnBlockGen = require('simple-messenger-blocks/webBtnGen');
let SubTopicTrans = require('../../../../../translaters/SubTopicTrans')


const sdaLabFlow =[
    grroupedButtonBlockGen(
        "📌 Select Topic For SDA -",
        [
            webBtnBlockGen("All Reports", "https://drive.google.com/file/d/1Memau1ep9hW-n-WHJgvIOC7AbQvRmqoC/view?usp=sharing"),
        ]
    )
] 


let routePrefix = "app/labs/2/sda"

let sdaLabApp = SubTopicTrans(routePrefix, sdaLabFlow)

module.exports = sdaLabApp