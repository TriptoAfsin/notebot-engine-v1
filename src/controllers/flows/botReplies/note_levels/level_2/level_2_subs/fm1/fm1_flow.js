let grroupedButtonBlockGen = require("../../../../../../genrators/grroupedButtonBlockGen");
let webBtnBlockGen = require("../../../../../../genrators/webBtnBlockGen");
let payloadBtnGen = require("../../../../../../genrators/payloadBtnGen");
let bondiFlow = require("../../../../sponsoredFlows/bondiCard");


let fm1Flow = [
    bondiFlow,
    grroupedButtonBlockGen(
        `📌 Full Hand Notes - `,
        [
            webBtnBlockGen("Maruf(2020)","https://drive.google.com/file/d/1KLLujcKbcUUTzUxRKKBdXaOYHR9vg9Fr/view"),
            webBtnBlockGen("Tanvir(2020)","https://drive.google.com/file/d/1KLLujcKbcUUTzUxRKKBdXaOYHR9vg9Fr/view"),
            webBtnBlockGen("Class Lec(B)","https://drive.google.com/file/d/1Tj9i9cEufH9R-KGXHc0Vf9N5F0IPOIbd/view")
        ]
    ),
    grroupedButtonBlockGen(
        "📌 QB Solve & CT Ques -",
        [
            webBtnBlockGen("Arjan(2022)", "https://drive.google.com/file/d/1OsF8c6R88ZOBetP8_BQMO65vk_awZRWK/view?usp=sharing"),
            webBtnBlockGen("Mamun(2023)", "https://drive.google.com/file/d/1VhX7QoFBETw-WyYey9rCAINGO9LhE25U/view?usp=sharing"),
            webBtnBlockGen("Aurin Sir(2022)", "https://drive.google.com/file/d/1ylZlxF2Kz2zyXgdtHy5xflAaySKGYhaw/view?usp=sharing"),
        ]
    ),
    grroupedButtonBlockGen(
        `📌 Full Hand Notes(Akib, 2021) - `,
        [
            webBtnBlockGen("Part-A(Akib)","https://drive.google.com/file/d/1FHbZSTiRa7cosKdP8zuLn5l0vmg7vRH_/view"),
            webBtnBlockGen("Part-B(Akib)","https://drive.google.com/file/d/10Zjl_bwl4IYPRb_j9phM1ERXtu5tuQOD/view"),
        ]
    ),
    grroupedButtonBlockGen(
        `📌 Full Hand Notes(2022)- `,
        [
            webBtnBlockGen("Part-A(Urmi)","https://drive.google.com/file/d/1_eaOh72rQ1whd7LQDsr-7Fc795Vp29xA/view?usp=sharing"),
        ]
    ),
    grroupedButtonBlockGen(
        `🔰 Select Topics for FM-I - `,
        [
            payloadBtnGen("Hand Notes","fm1_hnotes_flow"),
            payloadBtnGen("Books","fm1_books_flow"),
            payloadBtnGen("Suggestions","fm1_sugg_flow")
        ]
    ),
    grroupedButtonBlockGen(
        `🔰 Select Topics for FM-I - `,
        [
            payloadBtnGen("Questions","fm1_ques_flow"),
            payloadBtnGen("Loom(New)","fm1_loom_flow"),
            payloadBtnGen("Motions in We.","fm1_motion_weav_flow")
        ]
    ),
    grroupedButtonBlockGen(
        `🔰 Select Topics for FM-I - `,
        [
            payloadBtnGen("Intro to FM","fm1_intro_fm_flow"),
            payloadBtnGen("Shedding","fm1_shedding_flow"),
            payloadBtnGen("Weaving","fm1_weaving_flow")
        ]
    ),
    grroupedButtonBlockGen(
        `🔰 Select Topics for FM-I - `,
        [
            payloadBtnGen("Sizing","fm1_sizing_flow"),
            payloadBtnGen("Winding","fm1_winding_flow"),
            payloadBtnGen("Dobby","fm1_dobby_flow")
        ]
    ),
    grroupedButtonBlockGen(
        `🔰 Select Topics for FM-I - `,
        [
            payloadBtnGen("Warping","fm1_warping_flow"),
            payloadBtnGen("Tappet(New)","fm1_tappet_flow"),
            payloadBtnGen("Picking(New)","fm1_picking_flow")
        ]
    ),
    grroupedButtonBlockGen(
        `🔰 Select Topics for FM-I - `,
        [
            payloadBtnGen("Beatup(New)","fm1_beatup_flow"),
            payloadBtnGen("Selvedge&Faults","fm1_selvedgeFaults_flow"),
            payloadBtnGen("Takeup(New)","fm1_takeup_flow")
        ]
    ),
    grroupedButtonBlockGen(
        `🔰 Select Topics for FM-I - `,
        [
            payloadBtnGen("Let Off","fm1_letOff_flow"),
            payloadBtnGen("Denim(New)","fm1_denim_flow"),
            payloadBtnGen("Stop Motion","fm1_stopMotion_flow")
        ]
    ),
    grroupedButtonBlockGen(
        `🔰 Select Topics for FM-I - `,
        [
            payloadBtnGen("Jacquard(New)","fm1_jacquard_flow"),
        ]
    ),

]





module.exports = fm1Flow;