let grroupedButtonBlockGen = require('simple-messenger-blocks/groupedBtnBlockGen');
let webBtnBlockGen = require('simple-messenger-blocks/webBtnGen');
let payloadBtnGen = require('simple-messenger-blocks/payloadBtnGen');
let cardGen = require('simple-messenger-blocks/cardGenerator');
let bondiFlow = require("../../../../sponsoredFlows/bondiCard");


let marketingFlow = [
    bondiFlow,
    grroupedButtonBlockGen(
        "📌 All Class Lecture(2019) -",
        [
            webBtnBlockGen("Munir Sir(Nahid)", "https://drive.google.com/file/d/183Hdcf9g9ld6OjeCLtfP_TF85xBd819i/view")
        ]
    ),
    grroupedButtonBlockGen(
        "📌 All Sheets -",
        [
            webBtnBlockGen("2022", "https://drive.google.com/drive/folders/1TcV1UXcMQF6QquMGb-kVd2CWH2XteH2c?usp=sharing")
        ]
    ),
    grroupedButtonBlockGen(
        "📌 Full Hand Notes - ",
        [
            webBtnBlockGen("⭐ Sazzad(2023)", "https://drive.google.com/file/d/16hiaRNHcE3_41i3s8O-nZRqmpHQDZzdj/view?usp=sharing"),
        ]
    ),
    grroupedButtonBlockGen(
        "📌 Full Hand Notes - ",
        [
            webBtnBlockGen("⭐ Najib(2023)", "https://drive.google.com/file/d/1P-jQ9A9Ba43zDgOYwrPGqibAjeD7tc00/view?usp=sharing"),
            webBtnBlockGen("Adee(2021)", "https://drive.google.com/file/d/19GwfyxWCbHxKlt5HBPew2oMrUjPi7W7K/view?usp=sharing"),
            webBtnBlockGen("Mamun(SKTEC,2023)", "https://drive.google.com/file/d/19zrgVEJ-W9zXxca52G9JveeGpD4K9J9R/view?usp=sharing"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Topics for Marketing -",
        [
            payloadBtnGen("Books", "marketing_books_flow"),
            payloadBtnGen("Hand Notes", "marketing_notes_flow"),
            payloadBtnGen("Questions", "marketing_ques_flow"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Topics for Marketing -",
        [
            payloadBtnGen("Suggestion", "marketing_suggestion_flow"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Topics for Marketing -",
        [
            payloadBtnGen("Intro to Marketing", "marketing_intro_flow"),
            payloadBtnGen("Functions of Mar.", "marketing_func_flow"),
            payloadBtnGen("Field of Marketing", "marketing_field_flow"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Topics for Marketing -",
        [
            payloadBtnGen("Concept of Marketing", "marketing_concept_flow"),
            payloadBtnGen("Market Orientation", "marketing_market_orientation_flow"),
            payloadBtnGen("Micro Environment", "marketing_micro_env_flow"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Topics for Marketing -",
        [
            payloadBtnGen("Macro Environment", "marketing_macro_env_flow"),
            payloadBtnGen("Market Segme.", "marketing_market_segment_flow"),
            payloadBtnGen("Market Targeting", "marketing_market_targeting_flow"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Topics for Marketing -",
        [
            payloadBtnGen("Differen.. & Pos", "marketing_diff_pos_flow"),
            payloadBtnGen("Channels of Distri.", "marketing_channel_distri_flow"),
            payloadBtnGen("Retailing & Whole", "marketing_retailing_flow"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Topics for Marketing -",
        [
            payloadBtnGen("Price System", "marketing_price_sys_flow"),
            payloadBtnGen("Consumer Buyer Beh", "marketing_consumer_buyer_flow"),
            payloadBtnGen("Branding,Pack,Label", "marketing_branding_pack_flow"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Topics for Marketing -",
        [
            payloadBtnGen("New Product Devel.", "marketing_new_product_flow"),
            payloadBtnGen("dvertising,Sales..", "marketing_advertising_flow"),
            payloadBtnGen("Competitive Stra..", "marketing_competitive_flow"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Topics for Marketing -",
        [
            payloadBtnGen("Major Pricing Stra.", "marketing_major_pricing_flow"),
        ]
    ),
]





module.exports = marketingFlow;