const payloadBtnGen = require("simple-messenger-blocks/payloadBtnGen");
const webBtnBlockGen = require("simple-messenger-blocks/webBtnGen");
const grroupedButtonBlockGen = require("simple-messenger-blocks/groupedBtnBlockGen");

let ap1_lab_flow = [
    grroupedButtonBlockGen(
        "🔰 Select Experiment for AP-I- ",
        [
            webBtnBlockGen("Layout", "https://drive.google.com/file/d/1WFSElxD8VgGjZ0zv2f8HBHfwIR5gJlqb/view?usp=sharing"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Experiment for AP-I- ",
        [
            payloadBtnGen("Attaching Interli.", "ap1_lab_attachingInterline_flow"),
            payloadBtnGen("Standard Body Mea.", "ap1_lab_standardBody_flow"),
            payloadBtnGen("Continuous Fusing MC", "ap1_lab_continuousFusing_flow"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Experiment for AP-I- ",
        [
            payloadBtnGen("Staright Knife & ", "ap1_lab_straightKnife_flow"),
        ]
    ),
]



module.exports = ap1_lab_flow;