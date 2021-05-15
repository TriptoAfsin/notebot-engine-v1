
let grroupedButtonBlockGen = require("../../../../../../genrators/grroupedButtonBlockGen");
let webBtnBlockGen = require("../../../../../../genrators/webBtnBlockGen");
let payloadBtnGen = require("../../../../../../genrators/payloadBtnGen");
let cardGenerator = require("../../../../../../genrators/cardGenerator");

let omFlow = [
    grroupedButtonBlockGen(
        `🔰 Select Topics for OM - `,
        [
            payloadBtnGen("Ch-1", "om_ch1_flow"),
            payloadBtnGen("Ch-2", "om_ch2_flow"),
            payloadBtnGen("Ch-3", "om_ch3_flow"),
        ]
    ),
]



module.exports = omFlow;