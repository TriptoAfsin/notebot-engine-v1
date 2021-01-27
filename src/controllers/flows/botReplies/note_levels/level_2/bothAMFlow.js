let grroupedButtonBlockGen = require("../../../../genrators/grroupedButtonBlockGen");
let payloadBtnGen = require("../../../../genrators/payloadBtnGen");


let bothAM_flow = [
    grroupedButtonBlockGen(`🟩 Choose -  `,
        [
            payloadBtnGen("AM-I", "am1_flow"),
            payloadBtnGen("AM-II", "am2_flow")
        ]
    )
]





module.exports = bothAM_flow;