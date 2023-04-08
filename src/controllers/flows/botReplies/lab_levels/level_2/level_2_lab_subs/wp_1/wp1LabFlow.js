let grroupedButtonBlockGen = require('simple-messenger-blocks/groupedBtnBlockGen');
let webBtnBlockGen = require('simple-messenger-blocks/webBtnGen');
let payloadBtnGen = require('simple-messenger-blocks/payloadBtnGen');



let wp1_lab_flow = [
    grroupedButtonBlockGen(
        "🔰 Select Experiment for WP-I -",
        [
            payloadBtnGen("1)layout", "wp1_lab_layout_flow"),
            payloadBtnGen("2)Alk Scouring", "wp1_lab_alkScouring_flow"),
            payloadBtnGen("Combined(Cot)", "wp1_lab_combinedScouringCotton_flow"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Experiment for WP-I -",
        [
            payloadBtnGen("Combined(Jute)", "wp1_lab_combinedScouringJute_flow"),
            payloadBtnGen("Direct Dye", "wp1_lab_directDye_flow"),
            payloadBtnGen("Reactive Dye", "wp1_lab_reactiveDye_flow"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Experiment for WP-I -",
        [
            payloadBtnGen("Disperse Dye", "wp1_lab_disperseDye_flow"),
            payloadBtnGen("Acid Dye", "wp1_lab_acidDye_flow"),
            payloadBtnGen("Basic Dye", "wp1_lab_basicDye_flow"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Experiment for WP-I -",
        [
            payloadBtnGen("Vat Dye", "wp1_lab_vatDye_flow"),
            payloadBtnGen("Rubbing Fast..", "wp1_lab_rubbing_flow"),
            payloadBtnGen("Pigment on Cotton", "wp1_lab_pigmentCotton_flow"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Experiment for WP-I -",
        [
            webBtnBlockGen("Color Fast.", "https://drive.google.com/file/d/1p0Zntum2HLl7XTVhpOYVEMzH-6gXnwX6/view?usp=sharing"),
        ]
    ),
    grroupedButtonBlockGen(
        "⚡ All Combined -",
        [
            webBtnBlockGen("ইয়ামিন", "https://drive.google.com/file/d/11E9-rVvkh0lFe6lXxfqkhY3HZfLeBKAB/view?usp=sharing"),
            webBtnBlockGen("Emran Sir", "https://drive.google.com/file/d/1Ub8pYoYqSYSJLdOUu4qBRX6c11PuYvGG/view?usp=sharing"),
            webBtnBlockGen("Nihat(2023)", "https://drive.google.com/file/d/1oeq2w6GJUMwi2x-Bi0TPdrrlLQHcHss5/view?usp=sharing"),
        ]
    )
]



module.exports = wp1_lab_flow;