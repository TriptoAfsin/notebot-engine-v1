let grroupedButtonBlockGen = require('simple-messenger-blocks/groupedBtnBlockGen');
let webBtnBlockGen = require('simple-messenger-blocks/webBtnGen');
let payloadBtnGen = require('simple-messenger-blocks/payloadBtnGen');
let cardGen = require('simple-messenger-blocks/cardGenerator');


let pm2Lab = [
    grroupedButtonBlockGen(
        "📌 All Reports -",
        [
            webBtnBlockGen("Mashtura(2024)", "https://drive.google.com/file/d/1YsZ5B1xPBo100KnqiSw4n0x7829cstRR/view?usp=sharing"),
            webBtnBlockGen("Akib(2021)", "https://drive.google.com/file/d/1gdwOAVrjfXw4K8PbWtUty0QT67gidSmF/view"),
            webBtnBlockGen("Naimur(2021)", "https://drive.google.com/file/d/1reKITBkO3ppqIBXpGYQQop3AzhMblPK3/view?usp=sharing"),
        ]
    ),
    grroupedButtonBlockGen(
        "📌 All Reports -",
        [
            webBtnBlockGen("Tahin(TEM308)", "https://drive.google.com/drive/folders/1LX3L7X0h_gkNx_0aV7BJhYemfRhOCeTB"),
        ]
    ),
]



module.exports = pm2Lab;