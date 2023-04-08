let grroupedButtonBlockGen = require('simple-messenger-blocks/groupedBtnBlockGen');
let webBtnBlockGen = require('simple-messenger-blocks/webBtnGen');
let payloadBtnGen = require('simple-messenger-blocks/payloadBtnGen');


let feee_lab_flow = [
    grroupedButtonBlockGen("📌 Select Experiment for FEEE -", [
        webBtnBlockGen("All(Emon)", "https://drive.google.com/file/d/1nGS7r0MKzv7c0VSl6q1UMaI6t7KslSlW/view"),
        webBtnBlockGen("All(Shomir, 2022)", "https://drive.google.com/file/d/1pk-goLQ5kYGxhEFehYHla5Aez2Hvskmn/view?usp=sharing"),
        webBtnBlockGen("All(Nihat, 2023)", "https://drive.google.com/file/d/1ghyG5w3r2zTSAm4_QChAqlkybixmhElr/view?usp=sharing")
    ]),
    grroupedButtonBlockGen("🔰 Select Experiment for FEEE -", [
        payloadBtnGen("Multimetre", "feee_lab_multiMetre_flow"),
        payloadBtnGen("Ohm's law Ve.", "feee_lab_ohmslaw_flow"),
        payloadBtnGen("Kirchoff's law", "feee_lab_kirchoffsLaw_flow")
    ]),
    grroupedButtonBlockGen("🔰 Select Experiment for FEEE -", [
        payloadBtnGen("RC Circuit", "feee_lab_rcCirct_flow"),
        payloadBtnGen("RL Circuit", "feee_lab_rlCirct_flow"),
        payloadBtnGen("RLC Circuit", "feee_lab_rlcCirct_flow")
    ]),
    grroupedButtonBlockGen("🔰 Select Experiment for FEEE -", [
        payloadBtnGen("Carbon Reistor", "feee_lab_carbonResistor_flow"),
        payloadBtnGen("Fan Regulator", "feee_lab_fanRegulator_flow"),
        payloadBtnGen("Wiring Tubelight", "feee_lab_wiringTubelight_flow")
    ]),
    grroupedButtonBlockGen("🔰 Select Experiment for FEEE -", [
        payloadBtnGen("Full Bridge Rect", "feee_lab_fullBridgeRect_flow"),
        payloadBtnGen("Fuse, Switch Ckt B", "feee_lab_fuseSwitch_flow"),
        payloadBtnGen("Study on Oscillosc.", "feee_lab_Oscillosc_flow")
    ]),
    grroupedButtonBlockGen("🔰 Select Experiment for FEEE -", [
        payloadBtnGen("Wire Gauge", "feee_lab_wireGauge_flow"),
        payloadBtnGen("2 Way Light Swi..", "feee_lab_2waySwitch_flow"),
        payloadBtnGen("Study on Oscillosc.", "feee_lab_Oscillosc_flow")
    ]),
]



module.exports = feee_lab_flow;