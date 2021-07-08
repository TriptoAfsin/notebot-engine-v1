let grroupedButtonBlockGen = require("../../../../../../genrators/grroupedButtonBlockGen");
let webBtnBlockGen = require("../../../../../../genrators/webBtnBlockGen");
let payloadBtnGen = require("../../../../../../genrators/payloadBtnGen");
let cardGenerator = require("../../../../../../genrators/cardGenerator");
let bondiFlow = require("../../../../sponsoredFlows/bondiCard");

let aceFlow = [
    bondiFlow,
    grroupedButtonBlockGen(
        `📌 Select Topics for ACE - `,
        [
            payloadBtnGen("Books", "ace_books_flow"),
            webBtnBlockGen("Maths", "https://drive.google.com/file/d/1AxtcbgsU7-AmuvbuLTh2I6ID4V7QEvwl/view?usp=sharing"),
        ]
    ),
    grroupedButtonBlockGen(
        `📌 Full Notes -  `,
        [
            webBtnBlockGen("Hamja Sir", "https://drive.google.com/file/d/1nmY_03EfkpJIM7cfc_2MrAo599D83Zzk/view?usp=sharing"),
            webBtnBlockGen("Arman(43, 2021)", "https://drive.google.com/file/d/1HBstrTVn9xwk-M6dL_oKdwy53__QuQey/view?usp=sharing"),
            webBtnBlockGen("Sadia(43, 2021)", "https://drive.google.com/file/d/12zjpSRwdcNNl2I2s2ufxwPDZVroGVzt3/view?usp=sharing"),
        ]
    ),
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
            payloadBtnGen("Transfer Func.", "ace_transferFunc_flow"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Topics for ACE -",
        [
            payloadBtnGen("Logic gate", "ace_logicGate_flow"),
            payloadBtnGen("Hydraulics", "ace_hydraulics_flow"),
            payloadBtnGen("Pneumatics", "ace_pneumatics_flow"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Topics for ACE -",
        [
            webBtnBlockGen("Intro Robotics", "https://drive.google.com/file/d/1iHnZOCmOurxDtAwvuEXcnfqCL0Db_CQ-/view?usp=sharing"),
            webBtnBlockGen("Joints&Lin.", "https://drive.google.com/file/d/1JtD4Mjs_3_Wf4VHbg6aXE6hnjEtCN0Hz/view?usp=sharing"),
            webBtnBlockGen("Actuator, Arm.", "https://drive.google.com/file/d/11_JlRmYCEBy9T1g1qSUE1k8vxQTsWef4/view?usp=sharing"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Topics for ACE -",
        [
            webBtnBlockGen("Grips", "https://drive.google.com/file/d/1DOI5IZzCpFjHL53jN-d7XDnNh336jbo8/view?usp=sharing"),
            webBtnBlockGen("Struct. Eleme.", "https://drive.google.com/file/d/14nxTUZKU3TqF734RzxTdjnY9YYlX1uRS/view?usp=sharing"),
        ]
    ),
]





module.exports = aceFlow;