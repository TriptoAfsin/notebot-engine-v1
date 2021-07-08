let grroupedButtonBlockGen = require("../../../../../../genrators/grroupedButtonBlockGen");
let webBtnBlockGen = require("../../../../../../genrators/webBtnBlockGen");
let payloadBtnGen = require("../../../../../../genrators/payloadBtnGen");
let bondiFlow = require("../../../../sponsoredFlows/bondiCard");



let pcsFlow = [
    bondiFlow,
    grroupedButtonBlockGen(
        "🔰 Select Topics for PCS -",
        [
            payloadBtnGen("Books", "pcs_books_flow")
        ]
    ),
]



module.exports = pcsFlow;