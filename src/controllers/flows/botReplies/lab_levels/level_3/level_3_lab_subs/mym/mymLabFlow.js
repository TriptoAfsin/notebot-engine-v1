let grroupedButtonBlockGen = require('simple-messenger-blocks/groupedBtnBlockGen');
let webBtnBlockGen = require('simple-messenger-blocks/webBtnGen');


let mymLab = [
    grroupedButtonBlockGen(
        "📌 All Reports -",
        [
            webBtnBlockGen("Nafi(YE-45,2025)", "https://drive.google.com/file/d/1_J7AYtAcUqXH0YoAxTc1I4jOeg81E12R/view?usp=sharing"),
        ]
    ),
]



module.exports = mymLab;