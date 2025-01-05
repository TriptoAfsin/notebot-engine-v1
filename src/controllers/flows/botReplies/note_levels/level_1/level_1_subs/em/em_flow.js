let grroupedButtonBlockGen = require('simple-messenger-blocks/groupedBtnBlockGen');
let webBtnBlockGen = require('simple-messenger-blocks/webBtnGen');
let payloadBtnGen = require('simple-messenger-blocks/payloadBtnGen');
let cardGenerator = require('simple-messenger-blocks/cardGenerator');
let bondiFlow = require("../../../../sponsoredFlows/bondiCard");


let em_flow = [
    bondiFlow,
    grroupedButtonBlockGen("📌 Short Hand Note All(Saidul, 2019) -",
        [
            webBtnBlockGen("⚡ Download", "https://drive.google.com/file/d/11lnmfUbsrYQa0dwJvCoe3uU2JmNPAOUE/view?usp=sharing")
        ]
    ),
    grroupedButtonBlockGen("📌 Useful Resources - ",
        [
            webBtnBlockGen("Maths, Defn(2022)", "https://drive.google.com/file/d/1JpV6azlb9trGXohf0ygIVcShTKN1_s4Z/view?usp=sharing")
        ]
    ),
    grroupedButtonBlockGen("📌 Full Hand Notes - ",
        [
            webBtnBlockGen("Rushad(2021)", "https://drive.google.com/file/d/1Nieo9oDLZw-_kQs0VhWrjIG2tp9GOG_c/view?usp=sharing"),
            webBtnBlockGen("Linkon(2023)", "https://drive.google.com/file/d/1OvBvwgBWdPBDnr1CpVulWqAmXTG_LvOt/view?usp=sharing")
        ]
    ),
    grroupedButtonBlockGen("🔰 Select Topics for EM -",
        [
            payloadBtnGen("Books", "em_books_flow"),
            payloadBtnGen("Questions", "em_ques_flow"),
            payloadBtnGen("Math Chotha", "em_math_flow")
        ]
    ),
    grroupedButtonBlockGen("🔰 Select Topics for EM -",
        [
            payloadBtnGen("Blast Furnance", "em_blast_flow"),
            payloadBtnGen("Heat Treatment", "em_heat_flow"),
            payloadBtnGen("Wrought, cast iron", "em_wrought_flow")
        ]
    ),
    grroupedButtonBlockGen("🔰 Select Topics for EM -",
        [
            payloadBtnGen("Blast Furnance", "em_blast_flow"),
            payloadBtnGen("Heat Treatment", "em_heat_flow"),
            webBtnBlockGen("Phase Trans.", "https://drive.google.com/drive/folders/12rVkrETfssAY1gmCRlACcKbA78PtFMg3?usp=sharing")
        ]
    ),
    grroupedButtonBlockGen("🔰 Select Topics for EM -",
        [
            payloadBtnGen("Crystal Structure", "em_crystal_flow"),
            payloadBtnGen("Iron,Ceramic,Lub", "em_iron_ceramic_flow"),
            payloadBtnGen("Glass", "em_glass_flow")
        ]
    ),
    grroupedButtonBlockGen("🔰 Select Topics for EM -",
        [
            payloadBtnGen("Ceramics", "em_ceramic_flow"),
            payloadBtnGen("Corrosion", "em_corrosion_flow"),
            payloadBtnGen("Alloy", "em_alloy_flow")
        ]
    ),
    grroupedButtonBlockGen("🔰 Select Topics for EM -",
        [
            payloadBtnGen("Composites", "em_composites_flow"),
            payloadBtnGen("Plastic", "em_plastic_flow"),
            payloadBtnGen("Phase Diagrams", "em_phaseDiag_flow"),
        ]
    ),
    grroupedButtonBlockGen("🔰 Select Topics for EM -",
        [
            payloadBtnGen("Atomic Struc.", "em_atomic_struct_flow"),
            webBtnBlockGen("Class. Prop.", "https://drive.google.com/file/d/1dirVEoOhjyxPto0AUWBShHcwBWldX1CQ/view?usp=sharing"),
            webBtnBlockGen("Clas. Metals", "https://drive.google.com/file/d/17JeWgqGU8DUvFUnR13CS3uqaymTP8eYv/view?usp=sharing")
        ]
    ),
    grroupedButtonBlockGen("🔰 Select Topics for EM -",
        [
            webBtnBlockGen("Polymer", "https://drive.google.com/drive/folders/1ABFULJnAEW3x3c_ULt6mZPS7jllpI0A7?usp=sharing")
        ]
    ),
]





module.exports = em_flow;