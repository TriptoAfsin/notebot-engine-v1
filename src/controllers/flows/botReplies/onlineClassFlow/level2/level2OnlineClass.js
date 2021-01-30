let grroupedButtonBlockGen = require("../../../../genrators/grroupedButtonBlockGen");
let webBtnBlockGen = require("../../../../genrators/webBtnBlockGen");
let payloadBtnGen = require("../../../../genrators/payloadBtnGen");


let onlineClass = [
    grroupedButtonBlockGen(
        `🔰 Choose Level -`,
        [
            payloadBtnGen("1","onlineClass_level1"),
            payloadBtnGen("2","onlineClass_level2"),
            payloadBtnGen("3","onlineClass_level3")
        ]
    ),
    grroupedButtonBlockGen(
        `🔰 Choose Level -`,
        [
            payloadBtnGen("4","onlineClass_level4"),
        ]
    ),
]





module.exports = onlineClass;