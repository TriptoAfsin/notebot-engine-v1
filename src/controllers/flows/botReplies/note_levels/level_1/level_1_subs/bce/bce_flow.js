let grroupedButtonBlockGen = require("simple-messenger-blocks/groupedBtnBlockGen");
let webBtnBlockGen = require("simple-messenger-blocks/webBtnGen");
let payloadBtnGen = require("simple-messenger-blocks/payloadBtnGen");
let cardGenerator = require("simple-messenger-blocks/cardGenerator");
let bondiFlow = require("../../../../sponsoredFlows/bondiCard");



let bce_flow = [
    bondiFlow,
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
            webBtnBlockGen("Sayim(2023)", "https://drive.google.com/file/d/1bUkAy1_faKnLzJw92mbtRp2QXRe_dEVp/view?usp=sharing"),
            webBtnBlockGen("Definitions(2022)", "https://drive.google.com/file/d/141ZMgBy78AMmZtGAagjuqJubiyzFi7pJ/view?usp=sharing"),
            webBtnBlockGen("QB Solve(Mamun,SKTEC)", "https://drive.google.com/file/d/1JW_Mk-5SePV6oDEAaAUWoRNVmyfFloUR/view?usp=sharing"),
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
        "📌 Suggestions -",
        [
            webBtnBlockGen("Affli(2022)", "https://drive.google.com/file/d/19pE0LLMnvFVtSHZKdIeydRM4e7qF5TS4/view?usp=sharing"),
        ]
    ),
    grroupedButtonBlockGen(
        "📌 Full Hand Notes -",
        [
            webBtnBlockGen("Nafis(2022)", "https://drive.google.com/file/d/1x1hcnrlXKk2Qu4zSsiJwPf_uV8u0lWZ2/view?usp=sharing"),
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
    grroupedButtonBlockGen(
        "🔰 Select Topic For BCE -",
        [
            webBtnBlockGen("Meeting & Memo", "https://drive.google.com/file/d/1l7bLK56hBoUyRphM7AYB_PE8NEtYtScz/view?usp=sharing"),
            webBtnBlockGen("Business Proposal", "https://drive.google.com/drive/folders/1Vxui2BB55qcUjaRzP6YcLCELUaGi751Z?usp=sharing")
        ]
    ),
]





module.exports = bce_flow;