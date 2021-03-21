let grroupedButtonBlockGen = require("../../../../genrators/grroupedButtonBlockGen");
let webBtnBlockGen = require("../../../../genrators/webBtnBlockGen");
let payloadBtnGen = require("../../../../genrators/payloadBtnGen");
let cardGen = require("../../../../genrators/cardGenerator");


let level_3_note = [
    cardGen(
        "https://i.imgur.com/JJRZaJI.jpg",
        "কাঠপেন্সিল",
        "Buy Comfy Solid Color T-Shirts at only 250TK",
        "https://www.facebook.com/kathpencil.butex/posts/1643017485885654",
        [
            webBtnBlockGen("🔴 Order Now!", "https://www.facebook.com/kathpencil.butex/posts/1643017485885654")
        ]
    ),
    grroupedButtonBlockGen(`🔴 Question Banks -`,
        [
            webBtnBlockGen("All QB", "https://drive.google.com/drive/folders/1nhPHYnDC1JZFl0TwaYxeFB2dbo8aGf9J"),
        ]
    ),
    grroupedButtonBlockGen(`🔰 Select Subject for level 3 -`,
        [
            payloadBtnGen("Economics", "econo_flow"),
            payloadBtnGen("TCP", "tcp_flow"),
            payloadBtnGen("AM-II", "am2_flow")
        ]
    ),
    grroupedButtonBlockGen(`🔰 Select Subject for level 3 -`,
        [
            payloadBtnGen("IM (new)", "im_flow"),
            payloadBtnGen("WP-II", "wp2_flow"),
            payloadBtnGen("FM-II", "fm2_flow")
        ]
    ),
    grroupedButtonBlockGen(`🔰 Select Subject for level 3 -`,
        [
            payloadBtnGen("YM-II", "ym2_flow"),
            payloadBtnGen("PCS", "pcs_flow"),
            payloadBtnGen("LSS", "lss_flow")
        ]
    ),
    grroupedButtonBlockGen(`🔰 Select Subject for level 3 -`,
        [
            payloadBtnGen("Knitting-I", "kint1_flow"),
            payloadBtnGen("FSD", "fsd_flow"),
            payloadBtnGen("AP-II", "ap2_flow")
        ]
    ),
    grroupedButtonBlockGen(`🔰 Select Subject for level 3 -`,
        [
            payloadBtnGen("ACE", "ace_flow"),
            payloadBtnGen("PD", "pd_flow"),
            payloadBtnGen("MIC", "mic_flow")
        ]
    ),
    grroupedButtonBlockGen(`🔰 Select Subject for level 3 -`,
        [
            payloadBtnGen("ACM", "acm_flow"),
            payloadBtnGen("TQM", "tqm_flow"),
            payloadBtnGen("MIC", "mic_flow")
        ]
    )
]





module.exports = level_3_note;