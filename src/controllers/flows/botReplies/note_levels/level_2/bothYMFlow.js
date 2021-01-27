let grroupedButtonBlockGen = require("../../../../genrators/grroupedButtonBlockGen");
let payloadBtnGen = require("../../../../genrators/payloadBtnGen");


let bothYM_flow = [
    grroupedButtonBlockGen(`🟩 Choose -  `,
        [
            payloadBtnGen("YM-I", "ym1_flow"),
            payloadBtnGen("YM-II", "ym2_flow")
        ]
    )
]





module.exports = bothYM_flow;