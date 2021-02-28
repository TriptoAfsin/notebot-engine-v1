let grroupedButtonBlockGen = require("../../../../../../genrators/grroupedButtonBlockGen");
let webBtnBlockGen = require("../../../../../../genrators/webBtnBlockGen");
let payloadBtnGen = require("../../../../../../genrators/payloadBtnGen");
let cardGenerator = require("../../../../../../genrators/cardGenerator");


let acmFlow = [
    grroupedButtonBlockGen(
        `🔰 Select Topics for ACM - `,
        [
            payloadBtnGen("Books", "acm_book_flow")
        ]
    ),
    grroupedButtonBlockGen(
        `🔰 Select Topics for ACM - `,
        [
            payloadBtnGen("Intro to Cost Ma.", "acm_introCostManage_flow"),
            payloadBtnGen("Interested users .", "acm_interestedUsers_flow"),
            payloadBtnGen("Accounting in action", "acm_accountingAction_flow")
        ]
    ),
    grroupedButtonBlockGen(
        `🔰 Select Topics for ACM - `,
        [
            payloadBtnGen("The recording pro.", "acm_recordingProcess_flow"),
            payloadBtnGen("Cost Behav.", "acm_CostBehav_flow"),
            payloadBtnGen("Acc..for merch.", "acm_accMerchendizing_flow")
        ]
    ),
]



module.exports = acmFlow;