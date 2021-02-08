let grroupedButtonBlockGen = require("../../../../genrators/grroupedButtonBlockGen");
let webBtnBlockGen = require("../../../../genrators/webBtnBlockGen");
let payloadBtnGen = require("../../../../genrators/payloadBtnGen");


let onlineClass = [
    grroupedButtonBlockGen(
        `🔰 Choose Course - `,
        [
            payloadBtnGen("FSD","onlineClass_level3_FSD"),
            payloadBtnGen("TQM","onlineClass_level3_TQM"),
            payloadBtnGen("ACM","onlineClass_level3_ACM")
        ]
    ),
    grroupedButtonBlockGen(
        `🔰 Choose Course - `,
        [
            payloadBtnGen("Product Design","onlineClass_level3_PD"),
            payloadBtnGen("MIC","onlineClass_level3_MIC"),
            payloadBtnGen("ACE","onlineClass_level3_ACE"),
        ]
    ),
    grroupedButtonBlockGen(
        `🔰 Choose Course - `,
        [
            payloadBtnGen("AP-II","onlineClass_level3_ap2"),
        ]
    ),
]





module.exports = onlineClass;