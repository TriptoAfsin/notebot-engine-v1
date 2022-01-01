let grroupedButtonBlockGen = require('simple-messenger-blocks/groupedBtnBlockGen');
let webBtnBlockGen = require('simple-messenger-blocks/webBtnGen');
let payloadBtnGen = require('simple-messenger-blocks/payloadBtnGen');
let bondiFlow = require("../../../../sponsoredFlows/bondiCard");


let mpFlow = [
    bondiFlow,
    grroupedButtonBlockGen(
        "📌 Select Topics for MP -",
        [
            webBtnBlockGen("Questions", "https://drive.google.com/file/d/1L4qjNlHTAu8aWdUzVrgz1s_Vhnmvqz0M/view?usp=sharing"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Topics for MP -",
        [
            webBtnBlockGen("Production Process", "https://drive.google.com/file/d/13VOsvTc6rk28xlxCrpklgKrCoSA1INeA/view"),
            webBtnBlockGen("MC Opera.. & MC Tool", "https://drive.google.com/file/d/1DmVxIsqFiDkbfayM4lHgsPiFjJbgpXXA/view"),
            payloadBtnGen("Defects", "mp_defects_flow"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Topics for MP -",
        [
            payloadBtnGen("Lathe M/C(New)", "mp_latheMc_flow"),
            payloadBtnGen("Milling M/C", "mp_millingMc_flow"),
            payloadBtnGen("Casting Video", "mp_castingVideo_flow"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Topics for MP -",
        [
            payloadBtnGen("Welding", "mp_welding_flow"),
            payloadBtnGen("Hot & Cold Working", "mp_hotCold_flow"),
            webBtnBlockGen("Forging, Ring Roll.", "https://drive.google.com/file/d/1PX02MP7cFK6KJhjwqIKouiBfYAuRbd-l/view"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Topics for MP -",
        [
            payloadBtnGen("Ceramics", "mp_ceramics_flow"),
            payloadBtnGen("Plastic", "mp_plastic_flow"),
            payloadBtnGen("Slideways", "mp_slideways_flow"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Topics for MP -",
        [
            payloadBtnGen("Shaper MC", "mp_shaperMc_flow"),
            payloadBtnGen("EDM M/C", "mp_edm_flow"),
            payloadBtnGen("Non-Conventional M/C", "mp_non_conventional_flow"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Topics for MP -",
        [
            payloadBtnGen("Machining Economics", "mp_mcEconomics_flow"),
            payloadBtnGen("Casting", "mp_casting_flow")
        ]
    )
]





module.exports = mpFlow;