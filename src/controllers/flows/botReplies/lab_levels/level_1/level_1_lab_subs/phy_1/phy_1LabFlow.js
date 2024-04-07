let grroupedButtonBlockGen = require('simple-messenger-blocks/groupedBtnBlockGen');
let webBtnBlockGen = require('simple-messenger-blocks/webBtnGen');
let payloadBtnGen = require('simple-messenger-blocks/payloadBtnGen');
let imgBlockGen = require('simple-messenger-blocks/imgBlockGen');


let phy1_lab_flow = [
    // imgBlockGen('https://manybot-thumbnails.s3.eu-central-1.amazonaws.com/fb243958719599028/ca/big_43439688e574c75733a93d3207ce0c16.png'),
    imgBlockGen('https://i.postimg.cc/PrFkhkBt/Phy-I-2024.jpg'),
    grroupedButtonBlockGen(
        "📌 All Reports - ",
        [
            webBtnBlockGen("Hasnabul(2024)", "https://drive.google.com/drive/folders/1Y7WweNoZuGmspIintCA8PiEjmp6PZQTK?usp=sharing"),
            webBtnBlockGen("Emon(2022)", "https://drive.google.com/file/d/1RKd7KCULtdwPoCe2rA8x6rZTJT5EQdtm/view?usp=sharing"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Experiment for PHY-I -",
        [
            payloadBtnGen("M1", "phy1_m1_flow"),
            payloadBtnGen("M2", "phy1_m2_flow"),
            payloadBtnGen("M3", "phy1_m3_flow"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Experiment for PHY-I -",
        [
            payloadBtnGen("M4", "phy1_m4_flow"),
            payloadBtnGen("M5", "phy1_m5_flow"),
            payloadBtnGen("M6", "phy1_m6_flow"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Experiment for PHY-I -",
        [
            webBtnBlockGen("M7", "https://drive.google.com/file/d/1YUx_u2jxctaD-2Rl6MVBLzy0Ct0fOt9f/view?usp=sharing"),
            webBtnBlockGen("M10", "https://drive.google.com/drive/folders/1IH3gleEoCe-ANfzcIHbr3jQonYXD89vu?usp=sharing"),
            payloadBtnGen("O1", "phy1_o1_flow"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Experiment for PHY-I -",
        [
            payloadBtnGen("O2", "phy1_o2_flow"),
            payloadBtnGen("O3", "phy1_o3_flow"),
            payloadBtnGen("O4", "phy1_o4_flow"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Find Rest of the experiments in this book -",
        [
            webBtnBlockGen("Practical Physics", "https://drive.google.com/file/d/1AGP280Qf8lD6es6yTtJBHbExDePOY-Rl/view?usp=sharing"),
        ]
    ),
]



module.exports = phy1_lab_flow;