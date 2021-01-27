let grroupedButtonBlockGen = require("../../../../genrators/grroupedButtonBlockGen");
let payloadBtnGen = require("../../../../genrators/payloadBtnGen");


let bothWP_flow = [
    grroupedButtonBlockGen(`🟩 Choose -  `,
        [
            payloadBtnGen("AP-I", "ap1_flow"),
            payloadBtnGen("AP-II", "ap2_flow")
        ]
    )
]





module.exports = bothWP_flow;