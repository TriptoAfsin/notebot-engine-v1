
let grroupedButtonBlockGen = require("../../../../../../genrators/grroupedButtonBlockGen");
let webBtnBlockGen = require("../../../../../../genrators/webBtnBlockGen");
let payloadBtnGen = require("../../../../../../genrators/payloadBtnGen");
let cardGenerator = require("../../../../../../genrators/cardGenerator");
let bondiFlow = require("../../../../sponsoredFlows/bondiCard");

let fsdFlow = [
    bondiFlow,
    grroupedButtonBlockGen(
        `📌 All Lectures -  `,
        [
            webBtnBlockGen("Shilpi Mam", "https://drive.google.com/drive/folders/1MK9LPivN1r7G-cAWD5zCeS9wkUkyVKms?usp=sharing"),
            webBtnBlockGen("Belal Sir", "https://drive.google.com/drive/folders/1tvTRzUgMdGJY2L4wvvt0rAejHwxHfUsn?usp=sharing"),
        ]
    ),
    grroupedButtonBlockGen(
        `📌 All Sheets -  `,
        [
            webBtnBlockGen("Shilpi Mam Part-A", "https://drive.google.com/file/d/1RLy1u-ZcZd-KVHGK0GtO6sk1GGoIam-k/view?usp=sharing"),
            webBtnBlockGen("Shilpi Mam Part-B", "https://drive.google.com/drive/folders/1T_BhiA18x2p91JGFBACR2NQgPoalmy_Q?usp=sharing"),
        ]
    ),
    grroupedButtonBlockGen(
        `📌 Select Topics for FSD - `,
        [
            payloadBtnGen("Books", "fsd_books_flow"),
        ]
    ),
    grroupedButtonBlockGen(
        `🔰 Select Topics for FSD - `,
        [
            payloadBtnGen("Intro to FSD", "fsd_intro_flow"),
            payloadBtnGen("Plain Weave", "fsd_plainWeave_flow"),
        ]
    ),
    grroupedButtonBlockGen(
        `📌 Shortcuts, Suggestions & Excel Sheets  `,
        [
            webBtnBlockGen("Shortcuts", "https://drive.google.com/file/d/1rY9ENH_FzyulkeGrpzsH0KCFskTTRBw1/view?usp=sharing"),
            webBtnBlockGen("Suggestion", "https://drive.google.com/file/d/1NPmisAZt-wXTaGt5zJFCQJYdv-I8ViuI/view?usp=sharing"),
            webBtnBlockGen("Excel Sheets", "https://drive.google.com/drive/folders/10joH2jDP3T8Obdc2TJqZR4OWJp4CGZzr?usp=sharing"),
        ]
    ),
]



module.exports = fsdFlow;