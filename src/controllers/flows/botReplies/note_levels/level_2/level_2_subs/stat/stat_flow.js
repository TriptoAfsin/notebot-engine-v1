let grroupedButtonBlockGen = require("../../../../../../genrators/grroupedButtonBlockGen");
let webBtnBlockGen = require("../../../../../../genrators/webBtnBlockGen");
let payloadBtnGen = require("../../../../../../genrators/payloadBtnGen");



let statFlow = [
    grroupedButtonBlockGen(`📌 Full Hand Notes -`,
        [
            webBtnBlockGen("Nahid(2020)", "https://drive.google.com/file/d/1buy5jwu1gR44OYS_srTuviCwpAEuPuq7/view"),
            webBtnBlockGen("Rifat(B, 2020)", "https://drive.google.com/file/d/1HsUaV_Y4AGjOXAMe4bjHO5y7Ooun9Da-/view")
        ]
    ),
    grroupedButtonBlockGen(`📌 Stat Assignment 2020(Rabbi Sir)- `,
        [
            webBtnBlockGen("⚡ Download", "https://drive.google.com/file/d/1VTjqvPRw5cAxlDnOselChSK1VgClMVbj/view"),
            webBtnBlockGen("🟢 Solve(Nahid)", "https://drive.google.com/file/d/1Ew41DTFlO9ixg7DDNaQz-9eR7EnSlHkv/view?usp=sharing")
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