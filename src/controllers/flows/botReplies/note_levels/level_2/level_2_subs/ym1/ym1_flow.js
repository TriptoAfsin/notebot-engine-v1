let grroupedButtonBlockGen = require("../../../../../../genrators/grroupedButtonBlockGen");
let webBtnBlockGen = require("../../../../../../genrators/webBtnBlockGen");
let payloadBtnGen = require("../../../../../../genrators/payloadBtnGen");
let bondiFlow = require("../../../../sponsoredFlows/bondiCard");


let ym1Flow = [
    bondiFlow,
    grroupedButtonBlockGen(
        `📌 Question Bank Solve -   `,
        [
            webBtnBlockGen("Part A(Tiasha)","https://drive.google.com/file/d/1BKv0ypkstPNvGxxRTMllSOpPU0ZD77d-/view"),
            webBtnBlockGen("Part B(Tiasha)","https://drive.google.com/file/d/1-R7HoLO03jd5801KCseWvljwSSZHBv1c/view"),
        ]
    ),
    grroupedButtonBlockGen(
        "📌 QB Solve -",
        [
            webBtnBlockGen("Arjan(2022)", "https://drive.google.com/file/d/13XiVix-zmVQL_uQlgLw6Lhe21izJiZIQ/view?usp=sharing"),
        ]
    ),
    grroupedButtonBlockGen(
        `📌 Akib's Hand Notes -   `,
        [
            webBtnBlockGen("Part A","https://drive.google.com/file/d/1LtfOtf5NkgwEFfcSdfSzFiBTnFdc_N3G/view"),
            webBtnBlockGen("Part B","https://drive.google.com/file/d/1-R7HoLO03jd5801KCseWvljwSSZHBv1c/view"),
        ]
    ),
    grroupedButtonBlockGen(
        `📌 Full Hand Notes -   `,
        [
            webBtnBlockGen("Arindom(AE-46,2023)", "https://drive.google.com/file/d/1Licfq20XlebNEsd-MKNoySU44fwzn0Lt/view?usp=sharing"),
            webBtnBlockGen("Nirob(BHETI,2023)", "https://drive.google.com/file/d/1odGZ-NPeH_GWYPVbS0-EdLmJfY2ZQXrt/view?usp=sharing"),
            webBtnBlockGen("Linkon(CTEC,2023)", "https://drive.google.com/file/d/1le7Y0Di_V7CKujbrFH4t3ciH-kZSGj90/view?usp=sharing"),
        ]
    ),
    grroupedButtonBlockGen(
        `🔰 Select Topics for YM-I - `,
        [
            payloadBtnGen("Intro to YM","ym1_intro_flow"),
            payloadBtnGen("Indeterminer Stress","ym1_indeterminer_flow"),
            payloadBtnGen("Blowroom","ym1_blowroom_flow")
        ]
    ),
    grroupedButtonBlockGen(
        `🔰 Select Topics for YM-I - `,
        [
            payloadBtnGen("Mixing & Blend","ym1_mixing_blend_flow"),
            payloadBtnGen("Fibre Prop.","ym1_fibreProp_flow"),
            payloadBtnGen("Yarn Condi.","ym1_yarnCondi_flow")
        ]
    ),
    grroupedButtonBlockGen(
        `🔰 Select Topics for YM-I - `,
        [
            payloadBtnGen("Comber","ym1_comber_flow"),
            payloadBtnGen("Draw Frame","ym1_drawFrame_flow"),
            payloadBtnGen("Winding","ym1_winding_flow")
        ]
    ),
    grroupedButtonBlockGen(
        `🔰 Select Topics for YM-I - `,
        [
            payloadBtnGen("Lap Former","ym1_lapFormer_flow"),
            payloadBtnGen("Carding","ym1_carding_flow"),
            payloadBtnGen("Ring Frame","ym1_ringFrame_flow")
        ]
    ),
    grroupedButtonBlockGen(
        `🔰 Select Topics for YM-I - `,
        [
            payloadBtnGen("Speed/Simplex","ym1_speedFrame_flow"),
        ]
    )
]





module.exports = ym1Flow;