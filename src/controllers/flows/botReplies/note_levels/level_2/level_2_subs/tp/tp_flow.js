let grroupedButtonBlockGen = require("../../../../../../genrators/grroupedButtonBlockGen");
let webBtnBlockGen = require("../../../../../../genrators/webBtnBlockGen");
let payloadBtnGen = require("../../../../../../genrators/payloadBtnGen");
let bondiFlow = require("../../../../sponsoredFlows/bondiCard");


let tpFlow = [
    bondiFlow,
    grroupedButtonBlockGen(
        "📌 QB Solve -",
        [
            webBtnBlockGen("Rafi(2023)", "https://drive.google.com/drive/folders/16mRiVpUohGl_QHul0DSS8PwF2qKdVMdj?usp=sharing"),
        ]
    ),
    grroupedButtonBlockGen(
        "📌 Full Hand Notes -",
        [
            webBtnBlockGen("Akib's All Note", "https://drive.google.com/file/d/1N1wxgwmp-ltxPYkOB6UfPPjuOfsz9FTz/view"),
            webBtnBlockGen("Jalal Sir Part(Emon)", "https://drive.google.com/file/d/19oQyEktkXu1n4Cpxa8f_O-s2EQs-gTSG/view"),
            webBtnBlockGen("Linkon(CTEC,2023)", "https://drive.google.com/file/d/1KxpK1JAzROhVrBsaMWG98xRxSlbSETon/view?usp=sharing"),
        ]
    ),
    grroupedButtonBlockGen(
        "📌 Full Hand Notes -",
        [
            webBtnBlockGen("Alim(2024)", "https://drive.google.com/file/d/16OT1urjBJAu1F-8c_fIiRs4VCbLlpkXC/view?usp=sharing"),
            webBtnBlockGen("Sazzad(FE-46)", "https://drive.google.com/file/d/1O81J3bDe1ipWprSSyQKbtz7HjXcPvRjU/view?usp=sharing"),
        ]
    ),
    grroupedButtonBlockGen(
        "📌 Full Hand Notes -",
        [
            webBtnBlockGen("☄️Download", "https://drive.google.com/file/d/15vQaaVfyd5gOQX_yg4-L18wVWLWkujwc/view"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Topics for TP -",
        [
            payloadBtnGen("Books", "tp_books_flow"),
            payloadBtnGen("Hand Notes", "tp_notes_flow"),
            payloadBtnGen("Suggestions", "tp_sugg_flow"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Topics for TP -",
        [
            payloadBtnGen("Questions", "tp_ques_flow"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Topics for TP -",
        [
            payloadBtnGen("Swelling", "tp_swelling_flow"),
            payloadBtnGen("Friction", "tp_friction_flow"),
            payloadBtnGen("Yarn Jamming", "tp_yarnJamming_flow"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Topics for TP -",
        [
            payloadBtnGen("Optical Property", "tp_optical_flow"),
            payloadBtnGen("Fiber Migration", "tp_fibreMig_flow"),
            payloadBtnGen("Thermal Properties", "tp_thermalProp_flow"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Topics for TP -",
        [
            payloadBtnGen("Fibre Drawing", "tp_fibredraw_flow"),
            payloadBtnGen("X-Ray Diffra ..", "tp_x_ray_flow"),
            payloadBtnGen("Yarn Str. & Pr.", "tp_yarnStructure_flow"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Topics for TP -",
        [
            payloadBtnGen("Fabric Geometry", "tp_fabgemometry_flow"),
            payloadBtnGen("Tensile Properties", "tp_tensile_flow"),
            webBtnBlockGen("Static Elec", "https://drive.google.com/file/d/145M8jxn2Ts3NhpEDbDZ5pM_u8U8d0ufD/view?usp=sharing"),
        ]
    )
]





module.exports = tpFlow;