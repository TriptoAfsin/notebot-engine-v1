let grroupedButtonBlockGen = require("../../../../genrators/grroupedButtonBlockGen");
let webBtnBlockGen = require("../../../../genrators/webBtnBlockGen");
let payloadBtnGen = require("../../../../genrators/payloadBtnGen");
let cardGen = require("../../../../genrators/cardGenerator");
let bondiFlow = require("../../sponsoredFlows/bondiCard");

let level_1_note = [
    bondiFlow,
    grroupedButtonBlockGen(`🔴 Question Banks - `,
        [
            webBtnBlockGen("All Level 1", "https://drive.google.com/drive/folders/1XSV3_96TvLXmkqnhK6zFQQ67jCj4_NzL"),
            webBtnBlockGen("Aff. Clg..", "https://drive.google.com/file/d/11g0SLE_iMcPJCf3S8-nBKkdbOu6OLN5B/view"),
            webBtnBlockGen("⭕ Online(2021)", "https://drive.google.com/drive/folders/1sjF1ivgKg7bjjPCwaH08PYtW_8Rp1tWY?usp=sharing")
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
    ),
    grroupedButtonBlockGen(`🔰 Select Subject for level 1 - `,
        [
            payloadBtnGen("Fashion His.", "fh_flow"),
            webBtnBlockGen("FMG(Mgmt.)", "https://drive.google.com/file/d/1q6llewteDyEz1TQegSB4rNF8EMxlsOr5/view?usp=sharing"),
        ]
    )
]





module.exports = level_1_note;