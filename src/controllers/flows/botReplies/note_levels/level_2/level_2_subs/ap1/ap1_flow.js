let grroupedButtonBlockGen = require('simple-messenger-blocks/groupedBtnBlockGen');
let webBtnBlockGen = require('simple-messenger-blocks/webBtnGen');
let payloadBtnGen = require('simple-messenger-blocks/payloadBtnGen');
let cardGen = require('simple-messenger-blocks/cardGenerator');


let ap1Flow = [
    grroupedButtonBlockGen(
        "📌 Full Hand Note -",
        [
            webBtnBlockGen("Akib", "https://drive.google.com/file/d/1PcYlsGRhig4gxmynG9wVx-_FdGeK7a1v/view"),
            webBtnBlockGen("⭐ Najib(2023)", "https://drive.google.com/file/d/1OGNM7pOgXRrHKkXhbKIKrFmilKiLizqe/view?usp=sharing")
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Topics for AP-I -",
        [
            payloadBtnGen("Books", "ap1_books_flow"),
            payloadBtnGen("Questions", "ap1_ques_flow"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Topics for AP-I -",
        [
            payloadBtnGen("Sizing System", "ap1_sizing_flow"),
            payloadBtnGen("Trimming", "ap1_trimmimg_flow"),
            payloadBtnGen("Interlining", "ap1_interlining_flow"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Topics for AP-I -",
        [
            payloadBtnGen("Fabric Cutting", "ap1_fabricCut_flow"),
            payloadBtnGen("Pattern Making", "ap1_patternMaking_flow"),
            payloadBtnGen("Fabric Spreading", "ap1_fabricSpreading_flow"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Topics for AP-I -",
        [
            payloadBtnGen("Marker Making", "ap1_markerMaking_flow"),
            payloadBtnGen("Sewing Thread", "ap1_sewingTherad_flow")
        ]
    )
]





module.exports = ap1Flow;