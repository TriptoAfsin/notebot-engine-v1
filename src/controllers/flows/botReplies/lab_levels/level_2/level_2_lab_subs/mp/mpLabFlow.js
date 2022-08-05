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
        "🔰 Select Experiment for MP -",
        [
            payloadBtnGen("Exp 1: Lathe MC", "mp_lab_lathe_flow"),
            payloadBtnGen("Exp3: Milling M/C", "mp_lab_milling_flow"),
            payloadBtnGen("Exp 5:CNC Mill", "mp_lab_cncMill_flow")
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Experiment for MP -",
        [
            payloadBtnGen("Chips Temp.", "mp_lab_chipsTemp_flow"),
            payloadBtnGen("Jack Screw", "mp_lab_jackScrew_flow"),
            payloadBtnGen("Exp 7:Inj. Mold", "mp_lab_injectionMoulding_flow")
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Experiment for MP -",
        [
            payloadBtnGen("Exp10:Sand Mold", "mp_lab_sandMold_flow"),
        ]
    )
]



module.exports = mp_lab_flow;