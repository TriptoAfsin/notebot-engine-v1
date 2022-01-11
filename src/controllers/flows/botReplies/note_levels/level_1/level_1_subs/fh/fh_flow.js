let grroupedButtonBlockGen = require("../../../../../../genrators/grroupedButtonBlockGen");
let webBtnBlockGen = require("../../../../../../genrators/webBtnBlockGen");
let payloadBtnGen = require("../../../../../../genrators/payloadBtnGen");
let cardGenerator = require("../../../../../../genrators/cardGenerator");
let bondiFlow = require("../../../../sponsoredFlows/bondiCard");


let fh_flow = [
    bondiFlow,
    grroupedButtonBlockGen("📌 Select Topics for FH -",
        [
            webBtnBlockGen("Suggestion(2021)", "https://drive.google.com/file/d/1ftDWBAfVOvwjtuMKjNEmRVZ_lgVwUf3-/view?usp=sharing"),
            webBtnBlockGen("Kanta Mam(2021)", "https://drive.google.com/file/d/1IHl4c8eZyja3ZSmLRWhbFD9ScUyT9ZmM/view?usp=sharing"),
            webBtnBlockGen("Important(B)", "https://drive.google.com/file/d/1C40LCvqaLXmP7E89xXCBQ36Smf_5r_hO/view?usp=sharing"),
        ]
    ),
    grroupedButtonBlockGen("🔰 Select Topics for FH -",
        [
            payloadBtnGen("Art & Design", "fh_art_des_flow"),
            payloadBtnGen("Roman Cloth.", "fh_roman_flow"),
            payloadBtnGen("Elizabet. Peri.", "fh_elizabethian_flow")
        ]
    ),
    grroupedButtonBlockGen("🔰 Select Topics for FH -",
        [
            payloadBtnGen("Georgian Perio.", "fh_georigian_flow"),
            payloadBtnGen("Greek Cloth.", "fh_greek_flow"),
            payloadBtnGen("Egypt Cloth.", "fh_egyptian_flow")
        ]
    ),
    grroupedButtonBlockGen("🔰 Select Topics for FH -",
        [
            payloadBtnGen("Renaissance", "fh_renaissance_flow"),
            payloadBtnGen("Silk", "fh_silk_flow"),
            payloadBtnGen("Jeans History", "fh_jeans_his_flow")
        ]
    ),
    grroupedButtonBlockGen("🔰 Select Topics for FH -",
        [
            payloadBtnGen("Muslin", "fh_muslin_flow"),
            payloadBtnGen("Handloom", "fh_handloom_flow"),
        ]
    ),
]





module.exports = fh_flow;