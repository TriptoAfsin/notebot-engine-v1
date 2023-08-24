let grroupedButtonBlockGen = require('simple-messenger-blocks/groupedBtnBlockGen');
let webBtnBlockGen = require('simple-messenger-blocks/webBtnGen');
let payloadBtnGen = require('simple-messenger-blocks/payloadBtnGen');
let bondiFlow = require("../../../../sponsoredFlows/bondiCard");


let fytFlow = [
    grroupedButtonBlockGen(
        "🔰 Select Topics for FYT -",
        [
            payloadBtnGen("Books", "fyt_books_flow"),
            payloadBtnGen("Hand Notes", "fyt_hnotes_flow"),
            payloadBtnGen("Suggestions", "fyt_sugg_flow"),
        ]
    ),
    grroupedButtonBlockGen(`📌 Combined Note - `,
        [
            webBtnBlockGen("Hasib Sir(Nihat,2023)", "https://drive.google.com/file/d/1HoTudvaUZ1VtEMv1lQtKkij0Mpcoq1OD/view?usp=sharing"),
            webBtnBlockGen("Jalal Sir(Nihat,2023)", "https://drive.google.com/file/d/1Ah9laqL6MJ9cO3cOS1f3lFTp6vRJusKN/view?usp=sharing"),
            webBtnBlockGen("Lingkon(CTEC,2023)", "https://drive.google.com/file/d/1Bf-3cGfx-XSOhcYRFHjRalYFqjtEY659/view?usp=sharing"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Topics for FYT -",
        [
            webBtnBlockGen("Yarn Testing(2019)", "https://drive.google.com/file/d/1KrJAnDwKiKwC-7rHmdZAzQRZu2TFAdKf/view"),
            payloadBtnGen("Yarn Numbering", "fyt_yarnNum_flow"),
            payloadBtnGen("Yarn Twist", "fyt_yarnTwist_flow"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Topics for FYT -",
        [
            payloadBtnGen("Evenness tester", "fyt_evennessTester_flow"),
            payloadBtnGen("Yarn Counting", "fyt_yarnCounting_flow"),
            payloadBtnGen("AFIS", "fyt_afis_flow"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Topics for FYT -",
        [
            payloadBtnGen("ISO", "fyt_iso_flow"),
            payloadBtnGen("Capacitance Optical.", "fyt_capaOptical_flow"),
        ]
    )
]





module.exports = fytFlow;