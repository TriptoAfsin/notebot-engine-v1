let grroupedButtonBlockGen = require('simple-messenger-blocks/groupedBtnBlockGen');
let webBtnBlockGen = require('simple-messenger-blocks/webBtnGen');

let apparelWashing_lab_flow = [
    grroupedButtonBlockGen(
        "📌 All Reports -",
        [
            webBtnBlockGen("All report", "https://drive.google.com/drive/folders/1txn-Rwx-GURIdwK7cp4pW99ppthVr3Vo"),
            webBtnBlockGen("Mashtura(2025)", "https://drive.google.com/file/d/1q0MbT7WSevwvoZ-zr0iG5k3lFOkXO9Q-/view?usp=sharing"),
        ]
    ),
]



module.exports = apparelWashing_lab_flow;