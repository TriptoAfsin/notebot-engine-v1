let grroupedButtonBlockGen = require("../../../../genrators/grroupedButtonBlockGen");
let payloadBtnGen = require("../../../../genrators/payloadBtnGen");


let bothWP_flow = [
    grroupedButtonBlockGen(`🟩 Choose -  `,
        [
            payloadBtnGen("WP-I", "wp1_flow"),
            payloadBtnGen("WP-II", "wp2_flow")
        ]
    )
]





module.exports = bothWP_flow;