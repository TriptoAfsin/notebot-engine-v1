let grroupedButtonBlockGen = require("simple-messenger-blocks/groupedBtnBlockGen");
let webBtnBlockGen = require("simple-messenger-blocks/webBtnGen");
let payloadBtnGen = require("simple-messenger-blocks/payloadBtnGen");
let cardGenerator = require("simple-messenger-blocks/cardGenerator");
let bondiFlow = require("../../../../sponsoredFlows/bondiCard");



let econoFlow = [
    grroupedButtonBlockGen(
        "📌 Full Hand Notes - ",
        [
            webBtnBlockGen("Tawhid(Rules)", "https://drive.google.com/file/d/13I0qB-GorP6GLtShJ9wsTXKBjhhzx2E4/view?usp=sharing"),
            webBtnBlockGen("Tawhid(A)(Short Note)", "https://drive.google.com/file/d/1PbyuhA3ZLZBL__Jkf9pAkZouvjrDEyum/view?usp=sharing"),
        ]
    ),
    grroupedButtonBlockGen(
        `📽️ Youtube Playlist -`,
        [
            webBtnBlockGen("Rafi(ESE-46,2024)", "https://www.youtube.com/playlist?list=PLpFoI_N-jBPEPa5hMTIsu6-aGpQvuteh6"),
        ]
    ),
    grroupedButtonBlockGen(
        "📌 QB Solve - ",
        [
            webBtnBlockGen("2025", "https://drive.google.com/drive/folders/19pdc5zaAkBN7GgqFlbSMmr1_dJs0LbyI?usp=sharing"),
        ]
    ),
    grroupedButtonBlockGen(
        "📌 Full Hand Notes - ",
        [
            webBtnBlockGen("B(Akib)(2022)", "https://drive.google.com/file/d/1-ZI1d9-AOvzUA_HhWpD9v51E_SA8Ocjn/view"),
        ]
    ),
    grroupedButtonBlockGen(
        "📌 Full Hand Notes - ",
        [
            webBtnBlockGen("A+B(Ezaz)", "https://drive.google.com/file/d/1nADo6MizjPUu-A4_xwi1aMXnuZlxV9YT/view?usp=sharing"),
            webBtnBlockGen("A+B(Adee)", "https://drive.google.com/file/d/1n9UVrvWxVAvbV1qbYfJ5c6Lxh53fBnlG/view?usp=sharing"),
            webBtnBlockGen("A+B(Khadiza)", "https://drive.google.com/file/d/1m-nXG46geAIkKMJm_b6Ja9yYy6OhYnRN/view?usp=sharing"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Topics for Economics -",
        [
            payloadBtnGen("Books", "econo_books_flow"),
            payloadBtnGen("Class Lecture", "econo_classlec_flow"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Topics for Economics -",
        [
            webBtnBlockGen("Budget Constraint", "https://drive.google.com/file/d/1CyBqQrIHa_oB2KKuaGgnlH4qNZ-3h1NO/view"),
            webBtnBlockGen("Cost Market", "https://drive.google.com/file/d/1QJJajqolvzNrh0hNB8nR2Qi8oM41cFFv/view"),
            webBtnBlockGen("Demand Supply", "https://drive.google.com/file/d/1yotewpj9ehODozHmcL8cKd9Ak7yF_n_3/view"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Topics for Economics -",
        [
            webBtnBlockGen("General Equilibrium", "https://drive.google.com/file/d/1TBaemq7epLsW3dpnAd7taY4M10PdA5kF/view"),
            webBtnBlockGen("Indifference Curve", "https://drive.google.com/file/d/1dd1lDFe6rpiFQrXlwd3JyPofzXOuN-mR/view"),
            webBtnBlockGen("Inflation, Money,Ma.", "https://drive.google.com/file/d/1g727B_k4V1L7rm8qgx-8L0qmnzDXlKMe/view"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Topics for Economics -",
        [
            webBtnBlockGen("IS Curve", "https://drive.google.com/file/d/1jLBQgmHZJ7Ykls2FmEd-8OxnCDbvFcQq/view"),
            webBtnBlockGen("Keynesian Cross", "https://drive.google.com/file/d/16r1otQ2VzWe69YkFcWy74yBKJIbnMvHI/view"),
            webBtnBlockGen("Optimal Choice", "https://drive.google.com/file/d/1hyxzbBwfHe0JOTOh0njIxWi_Itaj8pUa/view"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Topics for Economics -",
        [
            webBtnBlockGen("Preference", "https://drive.google.com/file/d/1UkhXc0C3q4mmO7IOkGeOFwLMRHWCCp_d/view"),
            webBtnBlockGen("Production Theory", "https://drive.google.com/file/d/1zgZqPfF4HiZc0qtfnOiqy5nCWNts1T0U/view"),
        ]
    )
]





module.exports = econoFlow;