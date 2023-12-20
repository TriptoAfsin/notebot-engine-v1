let grroupedButtonBlockGen = require("../../../../genrators/grroupedButtonBlockGen");
let webBtnBlockGen = require("../../../../genrators/webBtnBlockGen");
let payloadBtnGen = require("../../../../genrators/payloadBtnGen");
let cardGen = require("../../../../genrators/cardGenerator");
let bondiFlow = require("../../sponsoredFlows/bondiCard");

let level_2_note = [
    bondiFlow,
    grroupedButtonBlockGen(`🔴 Question Banks -`,
        [
            webBtnBlockGen("All QB", "https://drive.google.com/drive/folders/1KZvgEL3f1kDY54H5Ha218l7yZfPn6jM6?usp=sharing"),
            webBtnBlockGen("New(Till 2019)", "https://drive.google.com/file/d/1ce4mTpJ0S0yi8tYQvvEGn_4BtlbcjI6m/view?usp=sharing"),
            webBtnBlockGen("⭕ Online(2021)", "https://drive.google.com/drive/folders/1LxaFjV2a7MdCRpG5XxyqO49gY_CcmcS_?usp=sharing")
        ]
    ),
    grroupedButtonBlockGen(`🔴 Question Banks -`,
        [
            webBtnBlockGen("2022(2-1)", "https://drive.google.com/file/d/1SR70b7AQvJ0yomIAUuE1QTBJzUqMT0KG/view?usp=sharing"),
        ]
    ),
    grroupedButtonBlockGen(`🔰 Select Subject for level 2 -`,
        [
            payloadBtnGen("EEE", "eee_flow"),
            payloadBtnGen("TP", "tp_flow"),
            payloadBtnGen("WP-I", "wp1_flow")
        ]
    ),
    grroupedButtonBlockGen(`🔰 Select Subject for level 2 -`,
        [
            payloadBtnGen("Marketing(FM)", "marketing_flow"),
            payloadBtnGen("FYT", "fyt_flow"),
            payloadBtnGen("SSS-II", "sss2_flow")
        ]
    ),
    grroupedButtonBlockGen(`🔰 Select Subject for level 2 -`,
        [
            payloadBtnGen("SSS-I", "sss1_flow"),
            payloadBtnGen("MMTF", "mmtf_flow"),
            payloadBtnGen("FME", "fme_flow")
        ]
    ),
    grroupedButtonBlockGen(`🔰 Select Subject for level 2 -`,
        [
            payloadBtnGen("AM-I", "am1_flow"),
            payloadBtnGen("Stat", "stat_flow"),
            payloadBtnGen("YM-I", "ym1_flow")
        ]
    ),
    grroupedButtonBlockGen(`🔰 Select Subject for level 2 -`,
        [
            payloadBtnGen("FM-I", "fm1_flow"),
            payloadBtnGen("TTQC", "ttqc_flow"),
            payloadBtnGen("FDCE", "fdce_flow")
        ]
    ),
    grroupedButtonBlockGen(`🔰 Select Subject for level 2 -`,
        [
            payloadBtnGen("MP", "mp_flow"),
            payloadBtnGen("FD-II", "fd2_flow"),
            payloadBtnGen("AP-I", "ap1_flow")
        ]
    ),
    grroupedButtonBlockGen(`🔰 Select Subject for level 2 -`,
        [
            payloadBtnGen("CTCA", "ctca_flow"),
            payloadBtnGen("WPP", "wpp_flow"),
            payloadBtnGen("Weaving Preparatory", "weav_prep_flow")
        ]
    ),
    grroupedButtonBlockGen(`🔰 Select Subject for level 2 -`,
    [
        webBtnBlockGen("Weaving-1", "https://drive.google.com/drive/folders/1SFjq8TMmb9X4O2d74-Z8z8TbknwEslkG?usp=sharing"),
        webBtnBlockGen("OM(TEM)", "https://drive.google.com/drive/folders/10RWll1pyS1cZFGV32vkaSjA2MdRM2T10?usp=sharing"),
        webBtnBlockGen("IDCC(ESE)", "https://drive.google.com/drive/folders/1QEdJyJyPuYJ6Co9dWI5Zya0xxaioF8lW?usp=sharing"),
    ]
),
]





module.exports = level_2_note;