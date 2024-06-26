let grroupedButtonBlockGen = require("../../../../../../genrators/grroupedButtonBlockGen");
let webBtnBlockGen = require("../../../../../../genrators/webBtnBlockGen");
let payloadBtnGen = require("../../../../../../genrators/payloadBtnGen");
let bondiFlow = require("../../../../sponsoredFlows/bondiCard");



let statFlow = [
    bondiFlow,
    grroupedButtonBlockGen(`⭐ STAT Tables - `,
        [
            webBtnBlockGen("Normal Table", "https://drive.google.com/file/d/1xcenjNMM1DJUmFkrAxfScg7e6WwJunCL/view?usp=sharing"),
            webBtnBlockGen("Z, T Table", "https://drive.google.com/file/d/13eqSeHVGlDfJ8kLwvBBvSYo2uZJwZ6iR/view?usp=sharing"),
            webBtnBlockGen("Formulas Table", "https://drive.google.com/file/d/1JahjJx6EtYmeZHK1DElidWczDwn_UGaI/view?usp=sharing")
        ]
    ),
    grroupedButtonBlockGen(`📌 Stat Solve -`,
        [
            webBtnBlockGen("Avik(2021)", "https://drive.google.com/file/d/19uqtuiAYmnJ7jvLxzYWnwq8j2cbgvGFz/view?usp=sharing"),
            webBtnBlockGen("Mamun(2023)", "https://drive.google.com/file/d/1fsI-6DOyAe1Vc-WPt6nVH0CqHuVkqCXw/view?usp=sharing"),
        ]
    ),
    grroupedButtonBlockGen(`📌 Full Hand Notes -`,
        [
            webBtnBlockGen("Nahid(2020)", "https://drive.google.com/file/d/1buy5jwu1gR44OYS_srTuviCwpAEuPuq7/view"),
            webBtnBlockGen("Rifat(B, 2020)", "https://drive.google.com/file/d/1HsUaV_Y4AGjOXAMe4bjHO5y7Ooun9Da-/view")
        ]
    ),
    grroupedButtonBlockGen(
        `📌 Full Hand Notes -   `,
        [
            webBtnBlockGen("Part A(Samet)","https://drive.google.com/file/d/1G-pwOzmWap0J1lCNF-6BGX7I-Z03NWaC/view?usp=sharing"),
            webBtnBlockGen("Part B(Samet)","https://drive.google.com/file/d/1b1Ae_m7waUz4zHmT7W-gppp07QR89gA-/view?usp=sharing"),
        ]
    ),
    grroupedButtonBlockGen(`📌 Full Hand Notes(Akib, 2021) -`,
        [
            webBtnBlockGen("Part A", "https://drive.google.com/file/d/10wu1HmCZYwC4JAWQtWkBN-ZTnlCczydF/view"),
            webBtnBlockGen("Part B", "https://drive.google.com/file/d/1--X2Nlu-XpmtD5mkD23I_kT09QFcwodB/view"),
        ]
    ),
    grroupedButtonBlockGen(`📌 Stat Assignment 2020(Rabbi Sir)- `,
        [
            webBtnBlockGen("⚡ Download", "https://drive.google.com/file/d/1VTjqvPRw5cAxlDnOselChSK1VgClMVbj/view"),
            webBtnBlockGen("🟢 Solve(Nahid)", "https://drive.google.com/file/d/1Ew41DTFlO9ixg7DDNaQz-9eR7EnSlHkv/view?usp=sharing")
        ]
    ),
    grroupedButtonBlockGen(
        "📌 Full Hand Notes",
        [
            webBtnBlockGen("Lingkon(2024)", "https://drive.google.com/file/d/1heOYUCpDHhEy5Z0OnAq9IQTWr1semWrH/view?usp=sharing"),
        ]
    ),
    grroupedButtonBlockGen(`🔰 Select Topics for Stat - `,
        [
            payloadBtnGen("Books", "stat_books_flow"),
            payloadBtnGen("Hand Notes", "stat_hnotes_flow")
        ]
    ),
    grroupedButtonBlockGen(`🔰 Select Topics for Stat - `,
        [
            payloadBtnGen("Probability", "stat_probab_flow"),
            payloadBtnGen("Introduction", "stat_intro_flow"),
            payloadBtnGen("Central Tendency", "stat_central_tend_flow")
        ]
    ),
    grroupedButtonBlockGen(`🔰 Select Topics for Stat - `,
        [
            payloadBtnGen("CV, SD, Varia", "stat_cv_sd_flow"),
            payloadBtnGen("Moments", "stat_moments_flow"),
            payloadBtnGen("Shape Charc.", "stat_shapes_flow")
        ]
    ),
    grroupedButtonBlockGen(`🔰 Select Topics for Stat - `,
        [
            payloadBtnGen("Design of Exp", "stat_design_exp_flow"),
            payloadBtnGen("Normal Distri..", "stat_normal_distri_flow"),
            payloadBtnGen("Binomial Distri", "stat_binomial_distri_flow")
        ]
    ),
    grroupedButtonBlockGen(`🔰 Select Topics for Stat - `,
        [
            payloadBtnGen("Poission Distri", "stat_poission_flow"),
            payloadBtnGen("Regression", "stat_regression_flow"),
        ]
    )
]





module.exports = statFlow;