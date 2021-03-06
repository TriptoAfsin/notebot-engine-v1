let grroupedButtonBlockGen = require("../../../../../../genrators/grroupedButtonBlockGen");
let webBtnBlockGen = require("../../../../../../genrators/webBtnBlockGen");
let payloadBtnGen = require("../../../../../../genrators/payloadBtnGen");
let cardGenerator = require("../../../../../../genrators/cardGenerator");
let bondiFlow = require("../../../../sponsoredFlows/bondiCard");


let wppFlow = [
    grroupedButtonBlockGen(
        "📌 Select Topics for WPP -",
        [
            payloadBtnGen("Questions", "wpp_quess_flow"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Topics for WPP -",
        [
            payloadBtnGen("Pretreatment", "wpp_pretreatment_flow"),
            payloadBtnGen("Singeing", "wpp_singeing_flow"),
            payloadBtnGen("Desizing", "wpp_desizing_flow"),
        ]
    ),
]





module.exports = wppFlow;