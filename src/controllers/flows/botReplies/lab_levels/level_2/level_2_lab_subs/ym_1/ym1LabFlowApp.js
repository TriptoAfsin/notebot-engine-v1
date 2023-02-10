let grroupedButtonBlockGen = require("../../../../../../genrators/grroupedButtonBlockGen");
let webBtnBlockGen = require("../../../../../../genrators/webBtnBlockGen");
let payloadBtnGen = require("../../../../../../genrators/payloadBtnGen");
let cardGenerator = require("../../../../../../genrators/cardGenerator");


let ym1_lab_flow = [
    grroupedButtonBlockGen("⚡ All Report - ",
        [
            webBtnBlockGen("Dipa(2023)", "https://drive.google.com/file/d/1D-fdyVQm3armVryKPrG8F64T3oA3oVzv/view?usp=sharing"),
            webBtnBlockGen("Saidul(2019)", "https://drive.google.com/file/d/1Cp6EuJvXW6YqWeDDRX8k_kPu4WR5Nieb/view"),
            webBtnBlockGen("Hasibul(2019)", "https://drive.google.com/file/d/1ocvUyMPhtF62movL_qwKW46WdGcQVgbP/view?usp=sharing"),
        ]
    ),
    grroupedButtonBlockGen("⚡ Lab Viva Note(Naimur, 2020) - ",
        [
            webBtnBlockGen("Download", "https://drive.google.com/file/d/1roX4eDoc75v2Mfk-8jHm8t9YuXRDb5Rk/view"),
        ]
    ),
]



module.exports = ym1_lab_flow;