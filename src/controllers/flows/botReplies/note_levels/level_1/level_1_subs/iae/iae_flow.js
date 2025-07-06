let grroupedButtonBlockGen = require('simple-messenger-blocks/groupedBtnBlockGen');
let webBtnBlockGen = require('simple-messenger-blocks/webBtnGen');
let payloadBtnGen = require('simple-messenger-blocks/payloadBtnGen');
let cardGen = require('simple-messenger-blocks/cardGenerator');
let bondiFlow = require("../../../../sponsoredFlows/bondiCard");


let iae_flow = [
    bondiFlow,
    grroupedButtonBlockGen(
        "📌 Full Hand Notes - ",
        [
            webBtnBlockGen("⭐ Najib(2023)", "https://drive.google.com/file/d/1P-OT6bNv5NRh1ft26flat8ZqcJBZ7_NE/view?usp=sharing"),
            webBtnBlockGen("⭐ Part-A(2025)", "https://drive.google.com/file/d/15tR7YAR7YIExiD4ntLgwHGWeLBbOP20U/view?usp=sharing")
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Topics for IAE -",
        [
            payloadBtnGen("Books", "iae_books_flow"),
            payloadBtnGen("Questions", "iae_ques_flow"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Topics for IAE -",
        [
            payloadBtnGen("Intro to Apparel", "iae_intro_flow"),
            payloadBtnGen("Different T.. Woven", "iae_diff_woven_flow"),
            payloadBtnGen("Full Slide", "iae_full_slide_flow"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Topics for IAE -",
        [
            payloadBtnGen("Apparel Brands", "iae_brands_flow"),
            payloadBtnGen("Quota & Cate..", "iae_quota_flow"),
            payloadBtnGen("CAD & CAM", "iae_cam_flow"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Topics for IAE -",
        [
            payloadBtnGen("Components of Shirt", "iae_shirt_flow"),
            webBtnBlockGen("Imp. Fabric Sam.", "https://drive.google.com/file/d/1eNzC8iF1r7m8viLXteCFbv9mVAydZWYC/view?usp=sharing")
        ]
    )
]





module.exports = iae_flow;