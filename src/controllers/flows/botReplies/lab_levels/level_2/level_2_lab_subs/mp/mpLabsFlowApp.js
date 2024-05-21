let grroupedButtonBlockGen = require('simple-messenger-blocks/groupedBtnBlockGen');
let webBtnBlockGen = require('simple-messenger-blocks/webBtnGen');
let payloadBtnGen = require('simple-messenger-blocks/payloadBtnGen');


let mp_lab_flow = [
    grroupedButtonBlockGen(
        "⚡ Select Experiment for MP -",
        [
            webBtnBlockGen("General Guideline", "https://drive.google.com/file/d/10k2Xuts_y8zgum2BhLCCcPdbbF4xdBDx/view")
        ]
    ),
    grroupedButtonBlockGen(
        "📌 All Reports -",
        [
            webBtnBlockGen("Download", "https://drive.google.com/file/d/1GtWZdRxrljTM4YSqNdNuoJkR1vAMohAU/view?usp=sharing"),
            webBtnBlockGen("Jabbar, 2023", "https://drive.google.com/file/d/126Xoa2LTUKrhM1BtYXIy-VN73pYESEu7/view?usp=sharing"),
            webBtnBlockGen("Himel, 2024", "https://drive.google.com/file/d/1Opk6Fa7qO9-2xpQlWXQNsKVprecO1Mf4/view?usp=sharing"),
        ]
    ),
]



module.exports = mp_lab_flow;