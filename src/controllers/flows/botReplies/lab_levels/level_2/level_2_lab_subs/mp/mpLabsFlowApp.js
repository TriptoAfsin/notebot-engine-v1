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
        ]
    ),
]



module.exports = mp_lab_flow;