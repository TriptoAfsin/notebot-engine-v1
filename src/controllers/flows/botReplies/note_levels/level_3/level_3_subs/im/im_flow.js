let grroupedButtonBlockGen = require('simple-messenger-blocks/groupedBtnBlockGen');
let webBtnBlockGen = require('simple-messenger-blocks/webBtnGen');
let payloadBtnGen = require('simple-messenger-blocks/payloadBtnGen');


let imFlow = [
    grroupedButtonBlockGen(
        "📌 Select Topics for IM(New) -",
        [
            webBtnBlockGen("Marketing Basics", "https://drive.google.com/file/d/1-V7IyR_jCb7SoZ9XD46k5av4bJrZf0MC/view"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Topics for IM -",
        [
            payloadBtnGen("Lectures", "im_lecture_flow"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Topics for IM -",
        [
            payloadBtnGen("Lec 1: Intro to IM", "im_lec1_flow"),
            payloadBtnGen("Lec 2: Manegerial ..", "im_lec2_flow"),
            payloadBtnGen("Lec 3: Environment.", "im_lec3_flow"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Topics for IM -",
        [
            payloadBtnGen("Lec 4: Motivating E", "im_lec4_flow"),
            payloadBtnGen("Market", "im_market_flow"),
            payloadBtnGen("Market Mix", "im_marketMix_flow"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Topics for IM -",
        [
            payloadBtnGen("Project & Feasi..", "im_projectFeasible_flow"),
            payloadBtnGen("Nature & Scope of B.", "im_natureScope_flow"),
            payloadBtnGen("Management & Func", "im_managementFunc_flow"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Topics for IM -",
        [
            payloadBtnGen("Industrial Manag.", "im_indusManage_flow"),
            payloadBtnGen("Technology Manage", "im_techManage_flow"),
            payloadBtnGen("Production Mange.", "im_prodMange_flow"),
        ]
    ),
]



module.exports = imFlow;