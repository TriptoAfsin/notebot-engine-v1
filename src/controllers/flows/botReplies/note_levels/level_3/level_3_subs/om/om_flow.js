
let grroupedButtonBlockGen = require("../../../../../../genrators/grroupedButtonBlockGen");
let webBtnBlockGen = require("../../../../../../genrators/webBtnBlockGen");
let payloadBtnGen = require("../../../../../../genrators/payloadBtnGen");
let cardGenerator = require("../../../../../../genrators/cardGenerator");

let omFlow = [
    grroupedButtonBlockGen(`📌 Full Notes -`, [
        webBtnBlockGen("Rubayet(IPE)PtB", "https://drive.google.com/file/d/1OAMcnu_ju9seuwJ2BtL71qxbYjTw_bJL/view?usp=sharing"),
    ]),
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