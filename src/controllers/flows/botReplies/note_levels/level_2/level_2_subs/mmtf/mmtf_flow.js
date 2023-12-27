let grroupedButtonBlockGen = require("../../../../../../genrators/grroupedButtonBlockGen");
let webBtnBlockGen = require("../../../../../../genrators/webBtnBlockGen");
let payloadBtnGen = require("../../../../../../genrators/payloadBtnGen");
let bondiFlow = require("../../../../sponsoredFlows/bondiCard");

let mmtfFlow = [
    bondiFlow,
    grroupedButtonBlockGen(
        "📌 Full Hand Notes -",
        [
            webBtnBlockGen("Maruf(2020)", "https://drive.google.com/file/d/1mU864Zkt8PGN5Ebs6RV1QJ5AJfYm8ZZA/view"),
            webBtnBlockGen("Nahid(2020, A)", "https://drive.google.com/file/d/1yv4UeJ0X_-bIoNG0KBXzVuxAq5l0WXXT/view"),
            webBtnBlockGen("Nahid(2021, B )", "https://drive.google.com/file/d/13fwAwSOCh74lB680kK7by00QtG_qEkPX/view?usp=sharing")
        ]
    ),
    grroupedButtonBlockGen(
        "📌 Full Hand Notes -",
        [
            webBtnBlockGen("Abbas Sir(2022)", "https://drive.google.com/file/d/1jGDwBptxYjlH5WEaJeMUt10jipIlRwfq/view?usp=sharing"),
            webBtnBlockGen("Lingkon(2023)", "https://drive.google.com/file/d/1rl7O2QEzF0ttfeGH4opyPAa08fCAGwX5/view?usp=sharing"),
            webBtnBlockGen("Alim(2023)","https://drive.google.com/file/d/1Dqnqgckvdgs3dvEKJDrC4z5KdtdhWAik/view?usp=sharing"),
        ]
    ),
    grroupedButtonBlockGen(
        `📌 Full Hand Notes -   `,
        [
            webBtnBlockGen("Part A(Samet)","https://drive.google.com/file/d/1fsUiNahjR_-S4iZc9H5MtUjKmR-hE9SG/view?usp=sharing"),
        ]
    ),
    grroupedButtonBlockGen(`Sheets - `,
        [
            webBtnBlockGen("Arafat Sir", "https://drive.google.com/drive/folders/16z7I0LSz8w7yb5Sr2wdd68wm2wKw_XP_?usp=sharing"),
            webBtnBlockGen("Habiba Mam", "https://drive.google.com/drive/folders/1fr9nw1an3wNHu4crFdQl1z8TuxvbQFGx?usp=sharing"),
        ]
    ),
    grroupedButtonBlockGen(
        "📌 QB Solve -",
        [
            webBtnBlockGen("Arjan(2022)", "https://drive.google.com/file/d/1nDvpJkaENtIVnbeRzfJTV8AdQI1oybj1/view?usp=sharing"),
        ]
    ),
    grroupedButtonBlockGen(
        "📌 Analytical Questions & Assignments - ",
        [
            webBtnBlockGen("Tripto(2021)", "https://drive.google.com/file/d/1axF8QJfbggg4DqLk-V_HfXuUv1YvnBU5/view?usp=sharing"),
            webBtnBlockGen("Assignment(Global Mills)", "https://drive.google.com/file/d/1kFxnjei-CbtSHxEEHWph8cRc9_TxJQmw/view?usp=sharing"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Topics for MMTF -",
        [
            payloadBtnGen("Books", "mmtf_books_flow"),
            payloadBtnGen("Hand Notes", "mmtf_hnotes_flow"),
            payloadBtnGen("Suggestions", "mmtf_sugg_flow")
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Topics for MMTF -",
        [
            payloadBtnGen("Intro to MMTF", "mmtf_intro_flow"),
            payloadBtnGen("Viscose Rayon", "mmtf_rayon_flow"),
            payloadBtnGen("Spinning System", "mmtf_spinning_sys_flow")
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Topics for MMTF -",
        [
            payloadBtnGen("High Per. Fibre", "mmtf_high_perf_flow"),
            payloadBtnGen("Polyamide", "mmtf_polyamaide_flow"),
            payloadBtnGen("Modal", "mmtf_modal_flow")
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Topics for MMTF -",
        [
            payloadBtnGen("Elastomer", "mmtf_elastomer_flow"),
            payloadBtnGen("Polyolefin", "mmtf_polyolefin_flow"),
            payloadBtnGen("Carbon Fibre", "mmtf_carbon_fibre_flow")
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Topics for MMTF -",
        [
            payloadBtnGen("Aceta.. Triac.", "mmtf_acetate_flow"),
            payloadBtnGen("Bi Comp.. Fibre", "mmtf_bio_fibre_flow"),
            payloadBtnGen("Polyester", "mmtf_polyester_flow")
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Topics for MMTF -",
        [
            payloadBtnGen("Acrylics", "mmtf_acrylic_flow"),
            payloadBtnGen("Vectran", "mmtf_vectran_flow"),
            payloadBtnGen("Regen. Protein Fibre", "mmtf_regen_protein_fibre_flow")
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Topics for MMTF -",
        [
            payloadBtnGen("Glass Fibre", "mmtf_glassfib_flow"),
            payloadBtnGen("Lyocell", "mmtf_lyocell_flow"),
            payloadBtnGen("Nylon", "mmtf_nylon_flow")
        ]
    ),
]





module.exports = mmtfFlow;