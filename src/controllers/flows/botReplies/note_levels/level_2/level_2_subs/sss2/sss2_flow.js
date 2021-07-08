let grroupedButtonBlockGen = require("../../../../../../genrators/grroupedButtonBlockGen");
let webBtnBlockGen = require("../../../../../../genrators/webBtnBlockGen");
let payloadBtnGen = require("../../../../../../genrators/payloadBtnGen");
let bondiFlow = require("../../../../sponsoredFlows/bondiCard");



let sss2Flow = [
    bondiFlow,
    grroupedButtonBlockGen(
        "📌 Chapter Wise Notes(Sabbir Azim, 44, 2021)",
        [
            webBtnBlockGen("Download(Folder)", "https://drive.google.com/drive/folders/1ivgk5L4Ww0WxIfIxYWjEvhOb4CuR1mFQ?usp=sharing")
        ]
    ),
    grroupedButtonBlockGen(
        "📌 Full Hand Notes - ",
        [
            webBtnBlockGen("Adee(2021)", "https://drive.google.com/file/d/1B2Z73TC3xG0-EX0K4DD5XzDqy6urdjro/view?usp=sharing")
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Topics for SSS-II -",
        [
            payloadBtnGen("Hand Notes", "sss2_notes_flow")
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Topics for SSS-II -",
        [
            webBtnBlockGen("Yarn Conditional MC.", "https://drive.google.com/file/d/1bizJhdf0-etVOQPQ-wqusabT6O-GboXO/view"),
            payloadBtnGen("Ring Frame", "sss2_ringFrame_flow"),
            webBtnBlockGen("Autoconer(Folder)", "https://drive.google.com/drive/folders/1bDOhlNbd4j1qqvkRNQ6w2VZZsQYXDIqt")
        ]
    ),
]





module.exports = sss2Flow;