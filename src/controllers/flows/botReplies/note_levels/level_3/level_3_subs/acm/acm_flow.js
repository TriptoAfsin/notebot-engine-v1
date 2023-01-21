let grroupedButtonBlockGen = require("../../../../../../genrators/grroupedButtonBlockGen");
let webBtnBlockGen = require("../../../../../../genrators/webBtnBlockGen");
let payloadBtnGen = require("../../../../../../genrators/payloadBtnGen");
let cardGenerator = require("../../../../../../genrators/cardGenerator");
let bondiFlow = require("../../../../sponsoredFlows/bondiCard");

let acmFlow = [
    bondiFlow,
    grroupedButtonBlockGen(
        `📌 Full Notes -`,
        [
            webBtnBlockGen("Anika(Emu Mam)", "https://drive.google.com/file/d/1kFEKcaamuhpk4EfN8vnRpeHJbInTkhJ_/view?usp=sharing"),
            webBtnBlockGen("Akib(Part-B)", "https://drive.google.com/file/d/1Z1XAsyrgt1it6KfLISKc57lAtjHOlQi2/view"),
            webBtnBlockGen("Avik(2023)", "https://drive.google.com/file/d/1OjtrI-1O6olzIpkKCefu28bfvvZPbjBh/view?usp=sharing"),
        ]
    ),
    grroupedButtonBlockGen(
        `📌 All Class Lectures - `,
        [
            webBtnBlockGen("Emu Mam(Tazkia)", "https://drive.google.com/drive/folders/1ykFx0pM2lz5XMxhWRXS7BzAuCzbu2c_M?usp=sharing"),
            webBtnBlockGen("Rayhan Sir", "https://drive.google.com/drive/folders/1ZtY3RjvaA1pXX_Rx_1OCQ0wk12xy6jC0?usp=sharing"),
            webBtnBlockGen("Math Practice", "https://drive.google.com/file/d/1o8ssyMXEc2oSr-hSdDHaKtADAkjpsQwN/view?usp=sharing")
        ]
    ),
    grroupedButtonBlockGen(
        `📌 Assignments & Solves - `,
        [
            webBtnBlockGen("Rayhan Sir(2021)", "https://drive.google.com/drive/folders/1BOYhEXtaZIsiTrzMnRrFP-xQwy97hTR7?usp=sharing"),
        ]
    ),
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
    grroupedButtonBlockGen(
        `🔰 Select Topics for ACM - `,
        [
            payloadBtnGen("Cost Acc. Sys.", "acm_costAccSys_flow"),
            payloadBtnGen("Costing Techniq.", "acm_costTech_flow"),
        ]
    ),
]



module.exports = acmFlow;