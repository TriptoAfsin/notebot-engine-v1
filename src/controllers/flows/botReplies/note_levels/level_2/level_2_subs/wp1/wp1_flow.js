let grroupedButtonBlockGen = require("../../../../../../genrators/grroupedButtonBlockGen");
let webBtnBlockGen = require("../../../../../../genrators/webBtnBlockGen");
let payloadBtnGen = require("../../../../../../genrators/payloadBtnGen");





let wp1Flow = [

    grroupedButtonBlockGen("📌 Full Hand Note & Basic Stuff -",
        [
            webBtnBlockGen("Akib", "https://drive.google.com/file/d/12kmXjlTAQiY14w5rd1I8ZFWOYpxXvdUF/view"),
            webBtnBlockGen("MCQ Note", "https://drive.google.com/file/d/1nlroDuFqXjPjw7KAkQ0rMTfygGsJ17QB/view?usp=sharing"),
            webBtnBlockGen("Basic Concepts", "https://drive.google.com/file/d/1Mz4ETriFRFRQY-Fv3io-eL9_azTg8_Rf/view"),

        ]
    ),
    grroupedButtonBlockGen("🔰 Select Topics for WP-I -",
        [
            payloadBtnGen("Books", "wp1_books_flow"),
            payloadBtnGen("Hand Notes", "wp1_notes_flow"),
            payloadBtnGen("Questions", "wp1_ques_flow"),

        ]
    ),
    grroupedButtonBlockGen("🔰 Select Topics for WP-I -",
        [
            payloadBtnGen("Intro To WP", "wp1_intro_flow"),
            payloadBtnGen("Water in WP", "wp1_water_flow"),
            payloadBtnGen("Intro to Dye", "wp1_introDye_flow"),

        ]
    ),
    grroupedButtonBlockGen("🔰 Select Topics for WP-I -",
        [
            payloadBtnGen("General Concepts", "wp1_generalConcepts_flow"),
            payloadBtnGen("Color Fastness", "wp1_colorFastness_flow"),
            payloadBtnGen("Stripping", "wp1_stripping_flow"),

        ]
    ),
    grroupedButtonBlockGen("🔰 Select Topics for WP-I -",
        [
            payloadBtnGen("Singeing", "wp1_singeing_flow"),
            payloadBtnGen("Scouring", "wp1_scouring_flow"),
            payloadBtnGen("Pigment", "wp1_pigment_flow"),

        ]
    ),
    grroupedButtonBlockGen("🔰 Select Topics for WP-I -",
        [
            payloadBtnGen("Textile Finishing", "wp1_textileFinishing_flow"),
            payloadBtnGen("VAT Dyes", "wp1_vatDyes_flow"),
            payloadBtnGen("Desizing", "wp1_desizing_flow"),

        ]
    ),
    grroupedButtonBlockGen("🔰 Select Topics for WP-I -",
        [
            payloadBtnGen("Basic Dye", "wp1_basicDye_flow"),
            payloadBtnGen("Acid Dye", "wp1_acidDye_flow"),
            payloadBtnGen("Bleaching", "wp1_bleaching_flow"),

        ]
    ),
    grroupedButtonBlockGen("🔰 Select Topics for WP-I -",
        [
            payloadBtnGen("Disperse Dye", "wp1_disperseDye_flow"),
            payloadBtnGen("Kier Boiler", "wp1_kierBoiler_flow"),
            payloadBtnGen("Dyeing Fault", "wp1_dyeingFault_flow"),

        ]
    ),
    grroupedButtonBlockGen("🔰 Select Topics for WP-I -",
        [
            payloadBtnGen("Reactive Dye", "wp1_reactiveDye_flow"),
            payloadBtnGen("Direct Dye", "wp1_directDye_flow"),
            payloadBtnGen("Jigger machine", "wp1_jiggerMachine_flow"),

        ]
    ),
    grroupedButtonBlockGen("🔰 Select Topics for WP-I -",
        [
            payloadBtnGen("Color Test", "wp1_colorTest_flow"),
            payloadBtnGen("Folding test", "wp1_foldingTest_flow"),
            payloadBtnGen("Washing Machine", "wp1_washingMachine_flow"),

        ]
    ),
]





module.exports = wp1Flow;