let grroupedButtonBlockGen = require("simple-messenger-blocks/groupedBtnBlockGen");
let webBtnBlockGen = require("simple-messenger-blocks/webBtnGen");
let payloadBtnGen = require("simple-messenger-blocks/payloadBtnGen");
let cardGenerator = require("simple-messenger-blocks/cardGenerator");
let bondiFlow = require("../../../../sponsoredFlows/bondiCard");


let aceFlow = [
    bondiFlow,
    grroupedButtonBlockGen(
        `📌 Select Topics for ACE - `,
        [
            payloadBtnGen("Books", "ace_books_flow"),
            webBtnBlockGen("Sheets", "https://drive.google.com/drive/folders/10wqGn_zgTpiSbS85AuvS3lvHb-6eeqRc?usp=sharing"),
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
        `📌 Full Notes -  `,
        [
            webBtnBlockGen("Part-A(Nahid)", "https://drive.google.com/file/d/1fIcM2fj3OBEk9saJADuceD8LNPtYmxfp/view?usp=sharing"),
            webBtnBlockGen("Part-A(Rakibul)", "https://drive.google.com/file/d/1GIBG0Y7ksjM1OURLdADvEs4n1IanruoP/view?usp=sharing"),
            webBtnBlockGen("Part-B(Nahid)", "https://drive.google.com/file/d/1_QuELIk-Z0QIdRMcr9pLRjzWPlR5mJI-/view?usp=sharing"),
        ]
    ),
    grroupedButtonBlockGen(
        `📌 Full Notes -  `,
        [
            webBtnBlockGen("Full(Zahurul, 2023)", "https://drive.google.com/file/d/1bX81pB9dfGnTTuLsGuZ4FYUxrwLaJLhQ/view?usp=sharing"),
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
            payloadBtnGen("Intro Robotics", "ace_introRobot_flow"),
            payloadBtnGen("Joints&Lin.", "ace_Joint_flow"),
            payloadBtnGen("Actuator, Arm.", "ace_Actuator_flow"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Topics for ACE -",
        [
            payloadBtnGen("Grips", "ace_Grips_flow"),
            payloadBtnGen("Struct. Eleme.", "ace_StructElements_flow"),
            webBtnBlockGen("Robot Mot. An.", "https://drive.google.com/file/d/1KPKmH4Vegkw5V-Z7MmEr-pyOQUyWFpKf/view?usp=sharing"),
        ]
    ),
]





module.exports = aceFlow;