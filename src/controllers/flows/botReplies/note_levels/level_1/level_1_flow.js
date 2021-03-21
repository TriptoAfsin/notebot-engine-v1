let grroupedButtonBlockGen = require("../../../../genrators/grroupedButtonBlockGen");
let webBtnBlockGen = require("../../../../genrators/webBtnBlockGen");
let payloadBtnGen = require("../../../../genrators/payloadBtnGen");
let cardGen = require("../../../../genrators/cardGenerator");


let level_1_note = [
    cardGen(
        "https://i.imgur.com/JJRZaJI.jpg",
        "কাঠপেন্সিল",
        "Buy Comfy Solid Color T-Shirts at only 250TK",
        "https://www.facebook.com/kathpencil.butex/posts/1643017485885654",
        [
            webBtnBlockGen("🔴 Order Now!", "https://www.facebook.com/kathpencil.butex/posts/1643017485885654")
        ]
    ),
    grroupedButtonBlockGen(`🔴 Question Banks - `,
        [
            webBtnBlockGen("All Level 1", "https://drive.google.com/drive/folders/1XSV3_96TvLXmkqnhK6zFQQ67jCj4_NzL"),
            webBtnBlockGen("Aff. Clg..", "https://drive.google.com/file/d/11g0SLE_iMcPJCf3S8-nBKkdbOu6OLN5B/view")
        ]
    ),
    grroupedButtonBlockGen(`🔰 Select Subject for level 1 - `,
        [
            payloadBtnGen("Math-I", "math1_flow"),
            payloadBtnGen("Physics-I", "phy1_flow"),
            payloadBtnGen("Chemistry-I", "che1_flow")
        ]
    ),
    grroupedButtonBlockGen(`🔰 Select Subject for level 1 - `,
        [
            payloadBtnGen("Math-II", "math2_flow"),
            payloadBtnGen("Physics-II", "phy2_flow"),
            payloadBtnGen("Chemistry-II", "che2_flow")
        ]
    ),
    grroupedButtonBlockGen(`🔰 Select Subject for level 1 - `,
        [
            payloadBtnGen("EM", "em_flow"),
            payloadBtnGen("PSE", "pse_flow"),
            payloadBtnGen("CP", "cp_flow")
        ]
    ),
    grroupedButtonBlockGen(`🔰 Select Subject for level 1 - `,
        [
            payloadBtnGen("NTF", "ntf_flow"),
            payloadBtnGen("BCE", "bce_flow"),
            payloadBtnGen("TPM", "tpm_flow")
        ]
    ),
    grroupedButtonBlockGen(`🔰 Select Subject for level 1 - `,
        [
            payloadBtnGen("IAE", "iae_flow"),
            payloadBtnGen("TMM", "tmm_flow"),
            payloadBtnGen("FMG", "fmg_flow")
        ]
    ),
    grroupedButtonBlockGen(`🔰 Select Subject for level 1 - `,
        [
            payloadBtnGen("BFS", "bfs_flow"),
            payloadBtnGen("IEE", "iee_flow"),
            payloadBtnGen("ECB", "ecb_flow")
        ]
    )
]





module.exports = level_1_note;