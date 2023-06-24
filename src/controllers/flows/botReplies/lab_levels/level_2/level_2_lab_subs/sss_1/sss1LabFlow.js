let grroupedButtonBlockGen = require("../../../../../../genrators/grroupedButtonBlockGen");
let webBtnBlockGen = require("../../../../../../genrators/webBtnBlockGen");
let payloadBtnGen = require("../../../../../../genrators/payloadBtnGen");


let sss1_lab_flow = [
    grroupedButtonBlockGen("⚡ All Combined -", [
        webBtnBlockGen("Sanjana(2023)", "https://drive.google.com/file/d/1VGqGhvh7pj_x_IlOzyr_n-EYvu-tK92q/view?usp=sharing"),
        webBtnBlockGen("Shuchi", "https://drive.google.com/file/d/1zwRYYJMPrBBumhtinFjxsTL9ecT11jrq/view?usp=sharing"),
    ]),
    grroupedButtonBlockGen("🔰 Select Experiment for SSS-I -", [
        payloadBtnGen("Layout Plan", "sss1_lab_layoutPlan_flow"),

    ]),
]



module.exports = sss1_lab_flow;