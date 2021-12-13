let grroupedButtonBlockGen = require('simple-messenger-blocks/groupedBtnBlockGen');
let webBtnBlockGen = require('simple-messenger-blocks/webBtnGen');
let payloadBtnGen = require('simple-messenger-blocks/payloadBtnGen');


let syllabus45 = [
    grroupedButtonBlockGen(
        "🔰 Choose Your Department -",
        [
            payloadBtnGen("AE", "syllabus_ae45_flow"),
            payloadBtnGen("FE", "syllabus_fe45_flow"),
            payloadBtnGen("IPE", "syllabus_ipe45_flow"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Choose Your Department -",
        [
            payloadBtnGen("TEM", "syllabus_tem45_flow"),
            payloadBtnGen("TFD", "syllabus_tfd45_flow"),
            payloadBtnGen("YE", "syllabus_ye45_flow"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Choose Your Department -",
        [
            payloadBtnGen("TMDM", "syllabus_tmdm45_flow"),
            payloadBtnGen("WPE", "syllabus_wpe45_flow"),
            payloadBtnGen("DCE", "syllabus_dce45_flow"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Choose Your Department -",
        [
            payloadBtnGen("ESE", "syllabus_ese45_flow"),
            payloadBtnGen("WPE", "syllabus_wpe45_flow"),
            payloadBtnGen("DCE", "syllabus_dce45_flow"),
        ]
    )
]





module.exports = syllabus45;