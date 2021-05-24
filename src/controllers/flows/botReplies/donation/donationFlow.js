let grroupedButtonBlockGen = require("../../../genrators/grroupedButtonBlockGen");
let webBtnBlockGen = require("../../../genrators/webBtnBlockGen");
let payloadBtnGen = require("../../../genrators/payloadBtnGen");
let cardGen = require("../../../genrators/cardGenerator");
let textBlockGen = require("../../../genrators/textBlockGen");


let donationFlow = [
    textBlockGen("🔵 About This Donation - \n\n1. Donation is freely given money of any amount\n2. This donation will be used for the development reward, hosting cost, note creator reward, ambassador costings etc"),
    grroupedButtonBlockGen(
        `⭐ Donation Options -  `,
        [
            payloadBtnGen("🔴 bKash", "bkash_donation"),
            payloadBtnGen("🟠 Nagad", "nagad_donation"),
            payloadBtnGen("🟡 SureCash", "surecash_donation"),
        ]
    ),
]



module.exports = donationFlow;