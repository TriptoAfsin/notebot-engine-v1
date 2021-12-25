
let grroupedButtonBlockGen = require("simple-messenger-blocks/groupedBtnBlockGen");
let webBtnBlockGen = require("simple-messenger-blocks/webBtnGen");
let payloadBtnGen = require("simple-messenger-blocks/payloadBtnGen");
let cardGenerator = require("simple-messenger-blocks/cardGenerator");
let bondiFlow = require("../../../../sponsoredFlows/bondiCard");

let fsdFlow = [
    bondiFlow,
    grroupedButtonBlockGen(
        `📌 Full Notes  `,
        [
            webBtnBlockGen("Akib(A)", "https://drive.google.com/file/d/1AIDhY0Y6KIHkzUgxsbKs2OxhDlwhGeS3/view"),
            webBtnBlockGen("Akib(B)", "https://drive.google.com/file/d/1033CG6uvSwnAvLoRxx5WIV0XArqPy5r_/view"),
        ]
    ),
    grroupedButtonBlockGen(
        `⚡ All Designs`,
        [
            webBtnBlockGen("Excel(Taqi-43)", "https://docs.google.com/spreadsheets/d/1c8n5ldfZOU76mjk6jtxOw1jcAN09N8ne/edit?usp=sharing&ouid=104261757061783772055&rtpof=true&sd=true"),
            webBtnBlockGen("PDFs(Akib-44)", "https://drive.google.com/drive/u/0/folders/17BQq9bdEfQiUKU9doB90FaNbl4-rbKat"),
        ]
    ),
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
            webBtnBlockGen("Shilpi Mam(A)", "https://drive.google.com/file/d/1RLy1u-ZcZd-KVHGK0GtO6sk1GGoIam-k/view?usp=sharing"),
            webBtnBlockGen("Shilpi Mam(B)", "https://drive.google.com/drive/folders/1e1UO-hd553hsqSOd6oQKkLaOIcf2DQuD?usp=sharing"),
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
            payloadBtnGen("Twill Weave", "fsd_twillWeave_flow"),
        ]
    ),
    grroupedButtonBlockGen(
        `🔰 Select Topics for FSD - `,
        [
            payloadBtnGen("Fancy Weave", "fsd_fancyWeave_flow"),
            payloadBtnGen("Color & Weave Eff.", "fsd_colorWeave_flow"),
            payloadBtnGen("Satin Weave", "fsd_satin_flow"),
        ]
    ),
    grroupedButtonBlockGen(
        `🔰 Select Topics for FSD - `,
        [
            webBtnBlockGen("Fig. Extra Threads", "https://drive.google.com/file/d/1AXlX8JVt94QIwkqVFdZGO-iJu9w_rcM6/view"),
            webBtnBlockGen("Double Cloth", "https://drive.google.com/file/d/109_6KUwyDrvN9d84EU02WhH9tRZ_Efss/view"),
            webBtnBlockGen("Compound Fabric", "https://drive.google.com/file/d/109GIHbKWJvgCXYQ8ha2sKQ3n00jMFQsR/view"),
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