let grroupedButtonBlockGen = require("../../../../../../genrators/grroupedButtonBlockGen");
let webBtnBlockGen = require("../../../../../../genrators/webBtnBlockGen");
let payloadBtnGen = require("../../../../../../genrators/payloadBtnGen");


let ym1Flow = [
    grroupedButtonBlockGen(
        `📌 Question Bank Solve -   `,
        [
            webBtnBlockGen("Part A(Tiasha)","https://drive.google.com/file/d/1BKv0ypkstPNvGxxRTMllSOpPU0ZD77d-/view"),
            webBtnBlockGen("Part B(Tiasha)","https://drive.google.com/file/d/1_vsRTuexZ1qtwuiPFlr2BaBTLVYtnOJH/view"),
        ]
    ),
    grroupedButtonBlockGen(
        `📌 Akib's Hand Notes -   `,
        [
            webBtnBlockGen("Part A","https://drive.google.com/file/d/1LtfOtf5NkgwEFfcSdfSzFiBTnFdc_N3G/view"),
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