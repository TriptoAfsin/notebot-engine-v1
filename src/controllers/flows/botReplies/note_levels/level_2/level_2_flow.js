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
grroupedButtonBlockGen(`🔰 Select Subject for level 2 -`,
    [
        webBtnBlockGen("TQCFT", "https://drive.google.com/drive/folders/1z1vdls2FvQKW3jh7VriVtbVh8plynwje?usp=sharing"),
        webBtnBlockGen("Biochemical Engineering", "https://drive.google.com/drive/folders/11dO-FPMxESGbCUeKO9NV8SXOGBdm2Cgi?usp=sharing"),
        payloadBtnGen("Ind. Engg.", "ie_flow"),
    ]
),
grroupedButtonBlockGen(`📌 WPP Notes -`,
    [
        webBtnBlockGen("Sinha(FE,26)", "https://drive.google.com/file/d/1btZBRE4be96fHE9n-pxEgaYk1yRohUlc/view?usp=sharing"),
        webBtnBlockGen("Anonna(FE)PartA", "https://drive.google.com/file/d/1Jev0cmX3TyWBzC4JtJ5EdnxS0kUrWWmD/view?usp=sharing"),
        webBtnBlockGen("Debdas(FE,26)", "https://drive.google.com/file/d/1W1qT1laWp3H3oCwmjtjhy59L7zphi_Mk/view?usp=sharing"),
    ]
),
grroupedButtonBlockGen(`📌 WPP - Sizing -`,
    [
        webBtnBlockGen("Anonna(FE,26)", "https://drive.google.com/file/d/1ooAUSM4_7fkb0JNyn71ITCW193M1cI6l/view?usp=sharing"),
    ]
),
grroupedButtonBlockGen(`📌 MMTF Notes -`,
    [
        webBtnBlockGen("Mridul(YE)PartB", "https://drive.google.com/drive/folders/1MFVTqrunhjvJttyxTfUdp8665HdEvist"),
        webBtnBlockGen("Anas(WPE)PartA", "https://drive.google.com/file/d/19LhSe_DiYSF_XcZUL4JDYaV6w9RXKKo9/view?usp=sharing"),
        webBtnBlockGen("Sinha(FE,26)", "https://drive.google.com/file/d/1Xf_p5f0GAG4n7imdpDX_PMyOMN9QjQ5g/view?usp=sharing"),
    ]
),
grroupedButtonBlockGen(`📌 YM-1 Notes -`,
    [
        webBtnBlockGen("Sinha(FE,26)", "https://drive.google.com/file/d/1Hdx6ria4iAKSBRx4nL9ycG7U8a14S4RB/view?usp=sharing"),
        webBtnBlockGen("Fardin(AE,26)", "https://drive.google.com/drive/folders/1GoOgn8ja_i_hOURhb4LBonqjF0KVY5zb"),
    ]
),
grroupedButtonBlockGen(`📌 YM-1 - Math solve -`,
    [
        webBtnBlockGen("Anonna(FE,26)", "https://drive.google.com/file/d/1etRESSPlzV88EQBKeVH_1FFb3XBi_u8V/view?usp=sharing"),
    ]
),
grroupedButtonBlockGen(`📌 FME - Math solve -`,
    [
        webBtnBlockGen("Anonna(FE,26)", "https://drive.google.com/file/d/1LAWVZysxPqAyiIUr__eQEzL1kAxSanI-/view?usp=sharing"),
    ]
),
grroupedButtonBlockGen(`📌 FYT Notes -`,
    [
        webBtnBlockGen("Sinha(FE,26)", "https://drive.google.com/file/d/1xCxkH0NoCXn4orqosJR-y7XUyXYOr8K4/view?usp=sharing"),
    ]
),
grroupedButtonBlockGen(`📌 Statistics Notes -`,
    [
        webBtnBlockGen("Sinha(FE,26)", "https://drive.google.com/file/d/1cRLWZ7yBtM7OwRYlQPAySQRJ0P0-xwsO/view?usp=sharing"),
    ]
),
grroupedButtonBlockGen(`📌 SSS-I Notes -`,
    [
        webBtnBlockGen("Shihab(YE,26)", "https://drive.google.com/file/d/1WInHYBqcoeLYBhYiT-ax6zSpOXI3TJ3M/view?usp=sharing"),
    ]
),
grroupedButtonBlockGen(`📌 FM-1 Notes -`,
    [
        webBtnBlockGen("Fardin(AE,26)", "https://drive.google.com/drive/folders/1O0gRDJUqLb6ac0ywfbmD1irPNl98vETk"),
    ]
),
grroupedButtonBlockGen(`📌 AP-II Notes -`,
    [
        webBtnBlockGen("Fardin(AE,26)", "https://drive.google.com/drive/folders/12k818j4kIEfe_FnCNX6X5pVYW3K0sZkW"),
    ]
),
grroupedButtonBlockGen(`📌 SPE Notes -`,
    [
        webBtnBlockGen("Fardin(AE,26)", "https://drive.google.com/drive/folders/1Wfu6aZbOT-cYpUSb4sBfheOVttySUQvU"),
    ]
),
]





module.exports = level_2_note;