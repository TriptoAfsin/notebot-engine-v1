let grroupedButtonBlockGen = require("../../../../../../genrators/grroupedButtonBlockGen");
let webBtnBlockGen = require("../../../../../../genrators/webBtnBlockGen");
let payloadBtnGen = require("../../../../../../genrators/payloadBtnGen");
let cardGenerator = require("../../../../../../genrators/cardGenerator");

let aceFlow = [
    grroupedButtonBlockGen(
        "🔰 Select Topics for ACE -",
        [
            payloadBtnGen("Intro to Control Sy.", "ace_introSys_flow"),
            payloadBtnGen("Modeling the Freq", "ace_modleingFreq_flow"),
            payloadBtnGen("Time Response", "ace_timeResponse_flow")
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Topics for ACE -",
        [
            payloadBtnGen("Sensors.", "ace_sensors_flow"),
            payloadBtnGen("Number sys, PLC", "ace_numberSys_flow"),
        ]
    ),
]





module.exports = aceFlow;