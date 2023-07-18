let grroupedButtonBlockGen = require("../../../../../../genrators/grroupedButtonBlockGen");
let webBtnBlockGen = require("../../../../../../genrators/webBtnBlockGen");
let payloadBtnGen = require("../../../../../../genrators/payloadBtnGen");
let bondiFlow = require("../../../../sponsoredFlows/bondiCard");


let ttqcFlow = [
    bondiFlow,
    grroupedButtonBlockGen(
        "📌 QB Solve -",
        [
            webBtnBlockGen("Rafi(2023)", "https://drive.google.com/drive/folders/17Yv0ziAOwwxnoLCMb17vup-ljSxpEx5y?usp=sharing"),
        ]
    ),
    grroupedButtonBlockGen(`📌 Full Hand Notes -`,
        [
            webBtnBlockGen("Nahid(A,2020)", "https://drive.google.com/file/d/117BxjlWQoCQDxpHPjPKK2LnwJ9ZOf0GT/view"),
            webBtnBlockGen("Nahid(B, 2020)", "https://drive.google.com/file/d/10tgBY4GOUW4uG1JSLaI4gGfNXmtsuHVl/view"),
            webBtnBlockGen("Rifat(2020)", "https://drive.google.com/file/d/1OBMtlEA2Tdivk5oKHfTUjuluBbGp96Rn/view?usp=sharing")
        ]
    ),
    grroupedButtonBlockGen(`📌 Full Hand Notes -`,
        [
            webBtnBlockGen("Sakib(2023)", "https://drive.google.com/file/d/19Hhrxht0Rm6_fFxPXzsBoLSO3JJI2X1C/view?usp=sharing"),
        ]
    ),
    grroupedButtonBlockGen(`📌 Akib's Hand Notes -`,
        [
            webBtnBlockGen("Part-A", "https://drive.google.com/file/d/1-4EA5mbfL1vJ8KCkPxlI0XLLhAabvsfG/view"),
            webBtnBlockGen("Part-B", "https://drive.google.com/file/d/1-T7jwixZSNlWn16zOQHxKpGXL90h_om6/view"),
        ]
    ),
    grroupedButtonBlockGen(`🔰 Select Topics for TTQC -`,
        [
            payloadBtnGen("Books", "ttqc_books_flow"),
            payloadBtnGen("Hand Notes", "ttqc_hnotes_flow"),
            webBtnBlockGen("Sheets", "https://drive.google.com/drive/folders/1QZ2EQKlzUNk4tXYzfsdzXjXbtwTlobZc")
        ]
    ),
    grroupedButtonBlockGen(`🔰 Select Topics for TTQC -`,
        [
            payloadBtnGen("Count", "ttqc_count_flow"),
            payloadBtnGen("Crimp", "ttqc_crimp_flow"),
            payloadBtnGen("Twist", "ttqc_twist_flow")
        ]
    ),
    grroupedButtonBlockGen(`🔰 Select Topics for TTQC -`,
        [
            payloadBtnGen("Intro to TTQC", "ttqc_intro_flow"),
            payloadBtnGen("Moisture, RH", "ttqc_mositure_flow"),
            payloadBtnGen("Neps", "ttqc_neps_flow")
        ]
    ),
    grroupedButtonBlockGen(`🔰 Select Topics for TTQC -`,
        [
            payloadBtnGen("Sampling", "ttqc_sampling_flow"),
            payloadBtnGen("Fibre Pro.", "ttqc_fibre_prop_flow"),
            payloadBtnGen("HVI", "ttqc_hvi_flow")
        ]
    ),
    grroupedButtonBlockGen(`🔰 Select Topics for TTQC -`,
        [
            payloadBtnGen("AFIS", "ttqc_afis_flow"),
        ]
    ),
    grroupedButtonBlockGen(`⚡ Online Count Converter -`,
        [
            webBtnBlockGen("🌎Count Koto", "https://triptoafsin.github.io/CountKoto-/"),
        ]
    )
]





module.exports = ttqcFlow;