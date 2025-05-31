let grroupedButtonBlockGen = require('simple-messenger-blocks/groupedBtnBlockGen');
let webBtnBlockGen = require('simple-messenger-blocks/webBtnGen');
let payloadBtnGen = require('simple-messenger-blocks/payloadBtnGen');


let imFlow = [
    grroupedButtonBlockGen(
        "📌 Select Topics for IM(New) -",
        [
            webBtnBlockGen("Marketing Basics", "https://drive.google.com/file/d/1-V7IyR_jCb7SoZ9XD46k5av4bJrZf0MC/view"),
            webBtnBlockGen("Basics of IM", "https://drive.google.com/file/d/1e9OsUlsSl3DnblCoenWhHT8Mm5ooQQM4/view?usp=sharing"),
        ]
    ),
    grroupedButtonBlockGen(
        "📌 Full Hand Notes - ",
        [
            webBtnBlockGen("Tawhid(A)(Short Note)", "https://drive.google.com/file/d/1lOUgGLEEGdB70ptP1VJJx8U9hRozLVmX/view?usp=sharing"),
            webBtnBlockGen("Tawhid(B)(Short Note)", "https://drive.google.com/file/d/1CcQzhpSc7ZMZDIkkzH0AuOqFtBna8EkE/view?usp=sharing"),
        ]
    ),
    grroupedButtonBlockGen(
        "📌 Full Hand Notes - ",
        [
            webBtnBlockGen("A+B(Adee)", "https://drive.google.com/file/d/1k7GoxViqrMal0NmYJlBiyeWDyye2Xhf6/view?usp=sharing"),
            webBtnBlockGen("Akib(A)", "https://drive.google.com/file/d/1-CuUfrbNWHMOqta7lbYJv0YSjSSbpSYj/view"),
            webBtnBlockGen("Akib(B)", "https://drive.google.com/file/d/11TSBNO3w8DlcuUYhXEw1IA8pXl0rMSHI/view"),
        ]
    ),
    grroupedButtonBlockGen(
        "📌 Full Hand Notes - ",
        [
            webBtnBlockGen("Nahid(B)", "https://drive.google.com/file/d/1RQX2Ax7pCnoGxFB93vXK_kp-xc_vbMEc/view?usp=sharing"),
            webBtnBlockGen("Lingkon(2025)", "https://drive.google.com/file/d/1_nGO31aCJrMiN5d7-TA3JOcagbZI0kgu/view?usp=sharing"),
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
            payloadBtnGen("Managerial Skills", "im_lec2_flow"),
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