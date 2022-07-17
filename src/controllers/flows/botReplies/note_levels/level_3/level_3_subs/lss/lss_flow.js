let grroupedButtonBlockGen = require('simple-messenger-blocks/groupedBtnBlockGen');
let webBtnBlockGen = require('simple-messenger-blocks/webBtnGen');
let payloadBtnGen = require('simple-messenger-blocks/payloadBtnGen');


let lssFlow = [
    grroupedButtonBlockGen(
        "📌 Full Hand Notes -",
        [
            webBtnBlockGen("Adee(2022)", "https://drive.google.com/file/d/1478dh9aFpS1Pv3M2N9qvncrJg89Yuvwd/view?usp=sharing"),
        ]
    ),
    grroupedButtonBlockGen(
        "📌 Select Topics for LSS -",
        [
            webBtnBlockGen("Books", "https://drive.google.com/drive/folders/1ZUFn6WYpCpQqFelEjlNkni9WvcSf9AUE"),
            webBtnBlockGen("Lectures", "https://drive.google.com/drive/folders/11Arr591u9frELe15mUjXTCOcCjSWE91I"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Topics for LSS -",
        [
            webBtnBlockGen("Math DF & Spinning", "https://drive.google.com/file/d/1wWMiO2syNMCHIK4IQb947F8MnrzYJwCh/view"),
            webBtnBlockGen("Jute Spin.", "https://drive.google.com/file/d/1UFAzeWvMVUYsVhipp_OVpJJCGm7BBtjo/view"),
            webBtnBlockGen("Jute Diver.", "https://drive.google.com/file/d/1P9BW9nEOw0n1U1yGl1QGk90wmgyaycjM/view"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Topics for LSS -",
        [
            webBtnBlockGen("Jute Composite Div.", "hhttps://drive.google.com/file/d/1a8yAU_EVtKLedoZP35rmzCM5DXKraN21/view"),
            payloadBtnGen("Drawframe", "lss_drawFrame_flow"),
            payloadBtnGen("Spreader & Carding", "lss_spreader_flow"),
        ]
    )
]



module.exports = lssFlow;