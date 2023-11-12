let grroupedButtonBlockGen = require("../../../../../../genrators/grroupedButtonBlockGen");
let webBtnBlockGen = require("../../../../../../genrators/webBtnBlockGen");
let payloadBtnGen = require("../../../../../../genrators/payloadBtnGen");
let cardGenerator = require("../../../../../../genrators/cardGenerator");


let ym1_lab_flow = [
    grroupedButtonBlockGen("📌 Select Experiment for FEEE -", [
        webBtnBlockGen("All(Jabbar, 2023)", "https://drive.google.com/file/d/1COWcYUaxjJFu6u__jDh1d5M0N5TJSA4C/view?usp=sharing"),
    ]),
    grroupedButtonBlockGen("⚡ All Report - ",
        [
            webBtnBlockGen("Dipa(2023)", "https://drive.google.com/file/d/1D-fdyVQm3armVryKPrG8F64T3oA3oVzv/view?usp=sharing"),
            webBtnBlockGen("Saidul(2019)", "https://drive.google.com/file/d/1Cp6EuJvXW6YqWeDDRX8k_kPu4WR5Nieb/view"),
            webBtnBlockGen("Hasibul(2019)", "https://drive.google.com/file/d/1ocvUyMPhtF62movL_qwKW46WdGcQVgbP/view?usp=sharing"),
        ]
    ),
    grroupedButtonBlockGen("⚡ All Report - ",
        [
            webBtnBlockGen("Fuad(2023)", "https://drive.google.com/file/d/1HVZKrJv2vdI51jOv0kZkouAEQp-6K4rj/view?usp=sharing"),
            webBtnBlockGen("Arindom(2023)", "https://drive.google.com/file/d/1RJKwKWH-pNh4O4-gb5epTZx0kGHXFfiE/view?usp=sharing"),
            webBtnBlockGen("Samia(2023)", "https://drive.google.com/file/d/1K8VQ9dP0r1mRHTRh0bX72w58_cBySfNY/view?usp=sharing"),
        ]
    ),
    grroupedButtonBlockGen("⚡ Lab Viva Note(Naimur, 2020) - ",
        [
            webBtnBlockGen("Download", "https://drive.google.com/file/d/1roX4eDoc75v2Mfk-8jHm8t9YuXRDb5Rk/view"),
        ]
    ),
    grroupedButtonBlockGen("⚡ Lab Viva Note(Sazzad, 2023) - ",
        [
            webBtnBlockGen("Download", "https://drive.google.com/file/d/1jxCxZI8N3t0BfdmDOOH9HCkoxDDU1WwE/view?usp=sharing"),
        ]
    ),
    grroupedButtonBlockGen("🔰 Select Experiment for YM-I -  ",
        [
            payloadBtnGen("1. Layout", "ym1_lab_layout_flow"),
            payloadBtnGen("Principle of SSS", "ym1_lab_pricipleSSS_flow"),
            payloadBtnGen("2. Bale Opener", "ym1_lab_baleOpener_flow"),
        ]
    ),
    grroupedButtonBlockGen("🔰 Select Experiment for YM-I -  ",
        [
            payloadBtnGen("Porcupine ... Scut", "ym1_lab_porcupine_flow"),
            payloadBtnGen("Ring Frame", "ym1_lab_ringFrame_flow"),
            payloadBtnGen("Simplex", "ym1_lab_simplex_flow"),
        ]
    ),
    grroupedButtonBlockGen("🔰 Select Experiment for YM-I -  ",
        [
            payloadBtnGen("Comber", "ym1_lab_comber_flow"),
            payloadBtnGen("Drawframe", "ym1_lab_drawFrame_flow"),
            payloadBtnGen("Carding", "ym1_lab_carding_flow"),
        ]
    )
]



module.exports = ym1_lab_flow;