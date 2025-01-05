let grroupedButtonBlockGen = require('simple-messenger-blocks/groupedBtnBlockGen');
let webBtnBlockGen = require('simple-messenger-blocks/webBtnGen');
let payloadBtnGen = require('simple-messenger-blocks/payloadBtnGen');
let cardGen = require('simple-messenger-blocks/cardGenerator');


let level_4_lab = [
    grroupedButtonBlockGen(
        "🔰 Select Subject Your Lab Report -",
        [
            webBtnBlockGen("MHMM", "https://drive.google.com/drive/folders/1_q_HFcY657iBKyJSZjN40uIcpQj0dYC5?usp=sharing"),
            webBtnBlockGen("ESM", "https://drive.google.com/drive/folders/1laSh0xtiO7hQqric84GgyqQrLo1Xqph2?usp=sharing"),
            webBtnBlockGen("SFP", "https://drive.google.com/drive/folders/1Z8NYR44SZpUxmOou-p9AfbEYvIA09TSO?usp=sharing"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Subject Your Lab Report -",
        [
            webBtnBlockGen("KFA", "https://drive.google.com/drive/folders/1vMOrdLv3JU8ekaWhQXVP1f5k0FmlXcvs?usp=sharing"),
            webBtnBlockGen("Wvg-II", "https://drive.google.com/drive/folders/1AJMRd7Q8h4I51ycg0e7ceqreyHaik9Ul?usp=sharing"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Subject Your Lab Report -",
        [
            webBtnBlockGen("WWMM", "https://drive.google.com/drive/folders/1sVhE7w1GKLQtn4It0KqOAwqy971V_9uj?usp=sharing"),
            webBtnBlockGen("SHWM", "https://drive.google.com/drive/folders/1Ss6UOS_De1zRCVNonJnrsA18jGu8KavZ?usp=sharing"),
        ]
    ),
]



module.exports = level_4_lab;