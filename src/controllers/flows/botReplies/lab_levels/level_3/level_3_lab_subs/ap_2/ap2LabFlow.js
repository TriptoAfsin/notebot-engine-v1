let grroupedButtonBlockGen = require('simple-messenger-blocks/groupedBtnBlockGen');
let webBtnBlockGen = require('simple-messenger-blocks/webBtnGen');
let payloadBtnGen = require('simple-messenger-blocks/payloadBtnGen');


let ap2_lab_flow = [
    grroupedButtonBlockGen(
        "📌 All Reports - ",
        [
            webBtnBlockGen("Naimur - 2021", "https://drive.google.com/file/d/1cTWxp54APJ0J1ElwSCzd5z-OggQ3W5qB/view?usp=sharing"),
            webBtnBlockGen("Nadeem - 2022", "https://drive.google.com/file/d/1DPt9c0tVcXOJSxpgx9gROhkzxvUNfvEe/view"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select report for AP-II - ",
        [
            webBtnBlockGen("Stitch Formation(2023)", "https://drive.google.com/file/d/1bQivgT_8yyHaRtnMG-hjZqPYYPdrYx89/view?usp=sharing"),
        ]
    ),
]



module.exports = ap2_lab_flow;