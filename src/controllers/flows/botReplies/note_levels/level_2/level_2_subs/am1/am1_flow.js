let grroupedButtonBlockGen = require("../../../../../../genrators/grroupedButtonBlockGen");
let webBtnBlockGen = require("../../../../../../genrators/webBtnBlockGen");
let payloadBtnGen = require("../../../../../../genrators/payloadBtnGen");
let bondiFlow = require("../../../../sponsoredFlows/bondiCard");


let am1Flow = [
    bondiFlow,
    grroupedButtonBlockGen(
        "📌 QB Analysis - ",
        [
            webBtnBlockGen("Arjan(2022)", "https://drive.google.com/file/d/1jIAaX3LZaJK4Y1aBZQuzm5-f9GGOI1h0/view?usp=sharing"),
        ]
    ),
    grroupedButtonBlockGen(
        "📌 Full Hand Note & Slide (2020) -",
        [
            webBtnBlockGen("Part A (Rifat)", "https://drive.google.com/file/d/1MSe7Mc7MlqLCIziwBa3iTJQb6nkYRgM-/view"),
            webBtnBlockGen("Part B (Rifat)", "https://drive.google.com/file/d/1BtjAiJBU0eL-UkM66Rr3V7n5FUcWMhUx/view"),
            webBtnBlockGen("Slide Part A", "https://drive.google.com/file/d/1nO_R7oC3MW_Ze9lQS1RjfIKBUrY_SB2M/view"),
        ]
    ),
    grroupedButtonBlockGen(
        "📌 Full Hand Notes - ",
        [
            webBtnBlockGen("Maruf(2021)", "https://drive.google.com/file/d/1PtuUUaa1EbmazOEpa6GyjEuBEpr2d2zl/view?usp=sharing"),
            webBtnBlockGen("Adee(2021)", "https://drive.google.com/file/d/1d31uMCWKBwqayCsMcLcDDKfRoX47fbH2/view?usp=sharing"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Topics for AM-I -",
        [
            payloadBtnGen("Books", "am1_books_flow"),
            payloadBtnGen("Hand Notes", "am1_hnotes_flow"),
            payloadBtnGen("Questions", "am1_ques_flow"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Topics for AM-I -",
        [
            webBtnBlockGen("Basic Terms(Tripto)", "https://drive.google.com/file/d/1oUqikuBVJr5l4LTRF8NAhFe5J1CBMt-D/view"),
            payloadBtnGen("Intro", "am1_intro_flow"),
            payloadBtnGen("Structure of Tex In", "am1_structure_tex_flow"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Topics for AM-I -",
        [
            payloadBtnGen("Sizing System", "am1_sizing_sys_flow"),
            payloadBtnGen("Seam & Stitch", "am1_seam_stitch_flow"),
            payloadBtnGen("Trims & Acces..", "am1_trim_acces_flow"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Topics for AM-I -",
        [
            payloadBtnGen("Interlining", "am1_interlining_flow"),
            payloadBtnGen("Pattern", "am1_pattern_flow"),
            payloadBtnGen("Marker", "am1_marker_flow"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Topics for AM-I -",
        [
            payloadBtnGen("Spreading", "am1_spreading_flow"),
            payloadBtnGen("Fabric Cutting", "am1_fabric_cut_flow"),
            payloadBtnGen("Fabric Inspection", "am1_fabricInspection_flow"),
        ]
    ), 
]





module.exports = am1Flow;