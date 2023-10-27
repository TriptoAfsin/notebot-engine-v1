let grroupedButtonBlockGen = require('simple-messenger-blocks/groupedBtnBlockGen');
let webBtnBlockGen = require('simple-messenger-blocks/webBtnGen');
let payloadBtnGen = require('simple-messenger-blocks/payloadBtnGen');
let cardGen = require('simple-messenger-blocks/cardGenerator');


let level_3_lab = [
    grroupedButtonBlockGen(
        "🔰 Select Subject Your Lab Report -",
        [
            payloadBtnGen("AM-II", "am2_lab_flow"),
            payloadBtnGen("WP-II", "wp2_lab_flow"),
            payloadBtnGen("FM-II", "fm2_lab_flow"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Subject Your Lab Report -",
        [
            payloadBtnGen("YM-II", "ym2_lab_flow"),
            payloadBtnGen("Textile Coloration-I", "texColor_lab_flow"),
            payloadBtnGen("FSD", "fsd_lab_flow"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Subject Your Lab Report -",
        [
            payloadBtnGen("AP-II", "ap2_lab_flow"),
            payloadBtnGen("LSS", "lss_lab_flow"),
            payloadBtnGen("Apparel Washing, Dy", "apprelWashing_lab_flow"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Subject Your Lab Report -",
        [
            payloadBtnGen("PM-II", "pm2LabFlow"),
            payloadBtnGen("ACWP", "acwp_lab_flow"),
            webBtnBlockGen("TC-I(Osmani)", "https://drive.google.com/drive/folders/1Q6_wLwh8TWW3Qh3NHgZXBguLd8R8Cfz7?usp=sharing"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Subject Your Lab Report -",
        [
            webBtnBlockGen("MIC", "https://drive.google.com/drive/folders/1OJh34so0XSa5S7kOTGoh4gSfK82z_-Cw?usp=sharing"),
            webBtnBlockGen("Knitting-I", "https://drive.google.com/drive/folders/183JV7mfUaMLKUBiceYCllbxNO2scmUP0?usp=sharing"),
            webBtnBlockGen("Knitting-II", "https://drive.google.com/drive/folders/1lafs0XW9yVrc328RuYHI_I849NqT7hhh?usp=sharing"),
        ]
    ),
    grroupedButtonBlockGen(
        "⚡ Lab Lectures -",
        [
            webBtnBlockGen("WP-II(Tazkia)", "https://drive.google.com/file/d/1AFSAcRKNOJICelLN7J8B8w-gncHKrDZL/view"),
            webBtnBlockGen("AM-II(Tazkia)", "https://drive.google.com/file/d/13iIG5urFXxhix9nnIBqKMwlJCCh4kKj-/view"),
            webBtnBlockGen("FM(Tazkia)", "https://drive.google.com/file/d/19w7CYNB7fkgjKDUqfDJZyEdUf7RXCLmb/view"),
        ]
    ),
    grroupedButtonBlockGen(
        "⚡ Lab Lectures -",
        [
            webBtnBlockGen("LSS(Tazkia)", "https://drive.google.com/file/d/1A5AfNa2kzk9aHVeWTd2TPfkOCs3gzc1o/view")
        ]
    ),
]



module.exports = level_3_lab;