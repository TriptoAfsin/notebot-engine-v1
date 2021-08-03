let grroupedButtonBlockGen = require("../../../../../../genrators/grroupedButtonBlockGen");
let webBtnBlockGen = require("../../../../../../genrators/webBtnBlockGen");
let payloadBtnGen = require("../../../../../../genrators/payloadBtnGen");
let cardGenerator = require("../../../../../../genrators/cardGenerator");
let bondiFlow = require("../../../../sponsoredFlows/bondiCard");

let acfdFlow = [
    bondiFlow,
    grroupedButtonBlockGen(
        `📌 Full Hand Notes- `,
        [
            webBtnBlockGen("Authoi(2021)", "https://drive.google.com/file/d/12mJe7o_3MKJQSOSpRuhoRD2ZPBbJGW0U/view?usp=sharing"),
        ]
    ),
]





module.exports = acfdFlow;