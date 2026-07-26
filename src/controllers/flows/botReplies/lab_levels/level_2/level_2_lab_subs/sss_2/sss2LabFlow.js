let grroupedButtonBlockGen = require("simple-messenger-blocks/groupedBtnBlockGen");
let webBtnBlockGen = require("simple-messenger-blocks/webBtnGen");
// let payloadBtnGen = require("simple-messenger-blocks/payloadBtnGen");
// let cardGenerator = require("simple-messenger-blocks/cardGenerator");


let sss2_lab_flow = [
    grroupedButtonBlockGen(
        "📌 All Reports - ",
        [
            webBtnBlockGen("Adee(2020)", "https://drive.google.com/file/d/1-aqU06gmzHPTTR_ZerUsuCJLFxbQ4dvd/view"),
            webBtnBlockGen("Nafi(2022)", "https://drive.google.com/file/d/1U8IQId0K8efdEkFYOh1aLFglKV6njoFD/view?usp=sharing"),
            webBtnBlockGen("Sazzad(2022)", "https://drive.google.com/file/d/1fwA-pmdyloXRf2pEcPc00OCHWaRdSYUR/view?usp=sharing")
        ]
    ),
    grroupedButtonBlockGen(
        "📌 All Reports -",
        [
            webBtnBlockGen("Hashibul(YE26)", "https://drive.google.com/file/d/1-mPQ2Win_QPRqam0SBaNrH9DpWptyeDQ/view?usp=sharing"),
            webBtnBlockGen("Mridul(YE,2026)", "https://drive.google.com/drive/folders/1xLCECBIoqnq9hGtrJ0PXdPz_BVgq9Vp7"),
        ]
    ),
]



module.exports = sss2_lab_flow;