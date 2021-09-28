let grroupedButtonBlockGen = require("simple-messenger-blocks/groupedBtnBlockGen");
let webBtnBlockGen = require("simple-messenger-blocks/webBtnGen");
let payloadBtnGen = require("simple-messenger-blocks/payloadBtnGen");
let cardGenerator = require("simple-messenger-blocks/cardGenerator");
let bondiFlow = require("../../../../sponsoredFlows/bondiCard");


let pdFlow = [
    grroupedButtonBlockGen(
        "🔰 Select Topics for PD -",
        [
            payloadBtnGen("Intro to PD", "pd_intro_flow"),
            payloadBtnGen("Understa. customer", "pd_understandingCustomer_flow"),
            payloadBtnGen("Planning for design", "pd_planningDesign_flow"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Topics for PD -",
        [
            payloadBtnGen("Quality Func Deplo", "pd_qualityFunc_flow"),
            payloadBtnGen("Design for Assem.", "pd_designAssembly_flow"),
        ]
    ),
]





module.exports = pdFlow;