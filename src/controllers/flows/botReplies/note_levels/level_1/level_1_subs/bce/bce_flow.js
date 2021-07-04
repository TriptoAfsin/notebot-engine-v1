let grroupedButtonBlockGen = require("../../../../../../genrators/grroupedButtonBlockGen");
let webBtnBlockGen = require("../../../../../../genrators/webBtnBlockGen");
let payloadBtnGen = require("../../../../../../genrators/payloadBtnGen");



let bce_flow = [
    grroupedButtonBlockGen(
        "🔰 Select Topic For BCE -",
        [
            payloadBtnGen("Questions", "bce_ques_flow"),
            payloadBtnGen("All Sheets", "all_sheets_bce_flow"),
            webBtnBlockGen("Salahuddin Sir", "https://drive.google.com/drive/folders/1ll3-yTK0oG-IxzhCgEz5LoqI__zOSs1X?usp=sharing"),
        ]
    ),
    grroupedButtonBlockGen(
        "📌 Full Hand Notes -",
        [
            payloadBtnGen("Part A", "part_a_bce_flow"),
            payloadBtnGen("Part B", "part_b_bce_flow"),
            payloadBtnGen("Full(A+B)", "full_ab_bce_flow"),
        ]
    ),
    grroupedButtonBlockGen(
        "📌 Full Hand Notes -",
        [
            webBtnBlockGen("Rafsan(2021)", "https://drive.google.com/file/d/1SO8FI9elSj0CT0VPV3WcX2SPhpbZV_p6/view?usp=sharing"),
            webBtnBlockGen("Wasy(2021)", "https://drive.google.com/file/d/1nCl3rA47TtAtR2qV63_Jv3UStcB3-MVX/view?usp=sharing"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Topic For BCE -",
        [
            payloadBtnGen("Intro to Language", "intro_bce_flow"),
            payloadBtnGen("Language Functions", "lang_func_bce_flow"),
            payloadBtnGen("Communication", "communi_bce_flow"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Topic For BCE -",
        [
            payloadBtnGen("Business Letter", "letter_bce_flow"),
            payloadBtnGen("Business Report", "report_bce_flow"),
            payloadBtnGen("Reading,Writing..", "read_write_bce_flow"),
        ]
    ),
]





module.exports = bce_flow;