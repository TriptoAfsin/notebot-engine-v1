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
        "📌 Spin Plan",
        [
            webBtnBlockGen("Ratul(2023)", "https://drive.google.com/file/d/1g7MQuqR81QOJxT1T1LvCrN9W8Rd-2KS-/view?usp=sharing")
        ]
    ),
    grroupedButtonBlockGen(
        "📌 Full Hand Notes - ",
        [
            webBtnBlockGen("Adee(2021)", "https://drive.google.com/file/d/1B2Z73TC3xG0-EX0K4DD5XzDqy6urdjro/view?usp=sharing"),
            webBtnBlockGen("Nazim(A)", "https://drive.google.com/file/d/1u1SYDj2jNzhPqXg5halwh9ZmiZkH_soy/view?usp=sharing"),
            webBtnBlockGen("Nazim(B)", "https://drive.google.com/file/d/16jlSmPUoWxMkR58eZgmwARkR-4lXpk8K/view?usp=sharing"),
        ]
    ),
    grroupedButtonBlockGen(
        "📌 Full Hand Notes - ",
        [
            webBtnBlockGen("Alim(2024)", "https://drive.google.com/file/d/1Q5215ucatvoKkSIAoyEpHVvcBqHHecS4/view?usp=sharing"),
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