let grroupedButtonBlockGen = require('simple-messenger-blocks/groupedBtnBlockGen');
let webBtnBlockGen = require('simple-messenger-blocks/webBtnGen');


let micLab = [
    grroupedButtonBlockGen(
        "📌 All Reports -",
        [
            webBtnBlockGen("Wasy(2022)", "https://drive.google.com/drive/folders/1OJh34so0XSa5S7kOTGoh4gSfK82z_-Cw"),
            webBtnBlockGen("Israt(2026)", "https://drive.google.com/file/d/1qteGZ-f2nzr_jElqM1nw1VR-IlPMU3kQ/view?usp=sharing"),
        ]
    ),
]



module.exports = micLab;