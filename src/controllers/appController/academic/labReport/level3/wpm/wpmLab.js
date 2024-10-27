const SubTopicTrans = require("../../../../translaters/SubTopicTrans")
const groupedButtonBlockGen = require('simple-messenger-blocks/groupedBtnBlockGen'); 
const webBtnBlockGen = require('simple-messenger-blocks/webBtnGen');



const wpmLabFlow = [
    groupedButtonBlockGen(
        "📌 All Reports -",
        [
            webBtnBlockGen("Drive Folder", "https://drive.google.com/drive/folders/1I6Jtxt7zhTLSK_vxOfVE9bl5OshIbOcQ?usp=sharing"),
        ]
    ),
]


let routePrefix = "app/labs/3/wpm_mach"

let wpmLabApp = SubTopicTrans(routePrefix, wpmLabFlow)

module.exports = wpmLabApp