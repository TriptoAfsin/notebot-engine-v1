let grroupedButtonBlockGen = require('simple-messenger-blocks/groupedBtnBlockGen');
let webBtnBlockGen = require('simple-messenger-blocks/webBtnGen');
let payloadBtnGen = require('simple-messenger-blocks/payloadBtnGen');
let imgBlockGen = require('simple-messenger-blocks/imgBlockGen');


let fm2_lab_flow = [
    imgBlockGen("https://manybot-thumbnails.s3.eu-central-1.amazonaws.com/fb243958719599028/ca/big_4ea8034e14dee64657b53bd213d86ebf.png"),
    grroupedButtonBlockGen(
        "📌 Layout - ",
        [
            webBtnBlockGen("Mamun(2023)", "https://drive.google.com/file/d/14lT7hPuaqSo6hdpG4qpby7ygBCO1rFsv/view?usp=sharing"),
        ]
    ),
    grroupedButtonBlockGen(
        "📌 All Report - ",
        [
            webBtnBlockGen("All Report(Bappi)", "https://drive.google.com/file/d/1Y72PDOYkFwW9_l8yoSJ2e27Dh1iLaWiE/view"),
            webBtnBlockGen("All Report(Osmani,2022)", "https://drive.google.com/file/d/1Of6rRBvlEOT_OLCcUPF7y9M0BiExS8oM/view?usp=sharing"),
            webBtnBlockGen("All Report(Wasima,2024)", "https://drive.google.com/file/d/1BJPHUb2N_bryRXnEK5KHg6PwHWpF_SZx/view?usp=sharing"),
        ]
    ),
    grroupedButtonBlockGen(
        "📌 Viva Note - ",
        [
            webBtnBlockGen("All Report(Estiak, ESE-48,2025)", "https://drive.google.com/file/d/1WvYXlfwwvYXGBtx8fhpLYmThlk596MyB/view?usp=sharing"),
        ]
    ),
]



module.exports = fm2_lab_flow;