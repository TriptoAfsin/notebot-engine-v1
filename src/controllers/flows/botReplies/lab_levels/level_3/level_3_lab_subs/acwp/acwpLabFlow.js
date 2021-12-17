let grroupedButtonBlockGen = require('simple-messenger-blocks/groupedBtnBlockGen');
let webBtnBlockGen = require('simple-messenger-blocks/webBtnGen');
let payloadBtnGen = require('simple-messenger-blocks/payloadBtnGen');
let imgBlockGen = require('simple-messenger-blocks/imgBlockGen');


let acwp_lab_flow = [
    grroupedButtonBlockGen(
        "📌 All Report - ",
        [
            webBtnBlockGen("Osmani(WPE-44,2021)", "https://drive.google.com/file/d/1CEa5qQGAWRSKXl2yymBaLtb4aCTHyGNU/view?usp=sharing"),
        ]
    )
]



module.exports = acwp_lab_flow;