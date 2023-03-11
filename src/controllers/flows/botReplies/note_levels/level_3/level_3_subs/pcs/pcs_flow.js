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
    grroupedButtonBlockGen(
        "📌 Full Hand Notes - ",
        [
            webBtnBlockGen("Adee(2023)", "https://drive.google.com/file/d/1gnS3aPE87bafEmvNgYQDveHikIYcbr_1/view?usp=sharing")
        ]
    ),
]



module.exports = pcsFlow;