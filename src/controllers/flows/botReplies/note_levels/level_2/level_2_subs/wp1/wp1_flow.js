let grroupedButtonBlockGen = require('simple-messenger-blocks/groupedBtnBlockGen');
let webBtnBlockGen = require('simple-messenger-blocks/webBtnGen');
let payloadBtnGen = require('simple-messenger-blocks/payloadBtnGen');
let bondiFlow = require("../../../../sponsoredFlows/bondiCard");

let wp1Flow = [
    bondiFlow,
    grroupedButtonBlockGen(
        "📌 QB Solve -",
        [
            webBtnBlockGen("Rafi(2023)", "https://drive.google.com/drive/folders/1RbAuvw2oFdUap3cqi5zWleNUtWIHDBNl?usp=sharing"),
        ]
    ),
    grroupedButtonBlockGen("📌 Full Hand Note & Basic Stuff -",
    [
        webBtnBlockGen("Short Note(Sadia,2023)", "https://drive.google.com/file/d/1iHtTbyEoRfzGZmBbz7aC8GRELnCZjjvg/view?usp=sharing"),
        webBtnBlockGen("Vat,Reactive Dye(2023)", "https://drive.google.com/file/d/11Awi13SRQxJpvyotHexdZ6qwQZovYhOd/view?usp=sharing"),
    ]
),
grroupedButtonBlockGen(
    "📌 Full Hand Notes - ",
    [
        webBtnBlockGen("⭐ Sazzad(2023)", "https://drive.google.com/file/d/1488a5EJs3H3Y0QNC9qoX9qZbfnjK8sFj/view?usp=sharing"),
        webBtnBlockGen("⭐ Alim(2024)", "https://drive.google.com/file/d/1HDrrZLdRZCrqtJtHxlBz9WVvuYLPOT-Z/view?usp=sharing"),
    ]
),
    grroupedButtonBlockGen("📌 Full Hand Note & Basic Stuff -",
        [
            webBtnBlockGen("Akib(2019)", "https://drive.google.com/file/d/12kmXjlTAQiY14w5rd1I8ZFWOYpxXvdUF/view"),
            webBtnBlockGen("MCQ Note", "https://drive.google.com/file/d/1nlroDuFqXjPjw7KAkQ0rMTfygGsJ17QB/view?usp=sharing"),
            webBtnBlockGen("Basic Concepts", "https://drive.google.com/file/d/1Mz4ETriFRFRQY-Fv3io-eL9_azTg8_Rf/view"),

        ]
    ),
    grroupedButtonBlockGen("📌 Full Hand Note & Basic Stuff -",
        [
            webBtnBlockGen("Adee(2021)", "https://drive.google.com/file/d/1AvUqCO9AWQnY6YK1vWgZk_TYIxpjHk20/view?usp=sharing"),
            webBtnBlockGen("Part-B(Kibria Sir,2022)", "https://drive.google.com/file/d/1S5ne8Twoz87Ul9DFSGHjDlQo21ZtNQqw/view?usp=sharing"),
            webBtnBlockGen("Part-A(Raafi Sir,2022)", "https://drive.google.com/file/d/1tukl8wSRhj0Kr1pLWHv4b7Qu-gbkfQZs/view?usp=sharing"),
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