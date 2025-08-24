let grroupedButtonBlockGen = require('simple-messenger-blocks/groupedBtnBlockGen');
let webBtnBlockGen = require('simple-messenger-blocks/webBtnGen');
let payloadBtnGen = require('simple-messenger-blocks/payloadBtnGen');


let wp2Flow = [
    grroupedButtonBlockGen(
        "📌 Full Hand Notes - ",
        [
            webBtnBlockGen("Joty(2025)", "https://drive.google.com/drive/folders/1cghR1Fww8i3SFkpP8jC8HyKXTQdHSLi0?usp=sharing"),
            webBtnBlockGen("Tawhid(Short Note)", "https://drive.google.com/file/d/1XUtb5y2t1J8U_30yozAsSSElWsPgKE_C/view?usp=sharing"),
        ]
    ),
    grroupedButtonBlockGen(
        "📌 Full Hand Notes - ",
        [
            webBtnBlockGen("A+B(Adee)", "https://drive.google.com/file/d/1Zrc8t3JEr8fSypTEGh_XDkoI8ns0_cM8/view?usp=sharing"),
            webBtnBlockGen("A(Akib)(2022)", "https://drive.google.com/file/d/11COefArauELwwD-Bhr52YoovqS0pL5Rx/view?fbclid=IwAR3LJR9exJ5bIrwNKVe_5VGkVQlmpJWPurkrXbulL1shmeThVJ3l6Ec0RIk"),
            webBtnBlockGen("B(2025)", "https://drive.google.com/file/d/1CpnPKt5WXlGRGyiPkKttti5W3cd1_Y5x/view?usp=sharing"),
        ]
    ),
    grroupedButtonBlockGen(
        "📌 Question Analysis(2023) - ",
        [
            webBtnBlockGen("Arjan+Riaz", "https://drive.google.com/file/d/1uIQV3xem2yHPSn0JbX_XWRMqGaU6_PFW/view?usp=sharing"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Topics for WP-II -",
        [
            payloadBtnGen("Books", "wp2_books_flow"),
            payloadBtnGen("Class Lecture", "wp2_classlec_flow"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Topics for WP-II -",
        [
            webBtnBlockGen("Intro to Tex Print", "https://drive.google.com/file/d/1FC9dIbItS7r3QY5H7mQcODGIFP3V-KgE/view?usp=sharing"),
            webBtnBlockGen("Finishes(2025)", "https://drive.google.com/drive/folders/18ot2NH4pJKI9Kh25HudCpkcIA_JV7uks?usp=sharing"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Topics for WP-II -",
        [
            webBtnBlockGen("Wool Finishings", "https://drive.google.com/file/d/1NDXSTfZ04CHaAXDRdO1ovquRitHaPhTH/view"),
            webBtnBlockGen("Antimicrobial Fin", "https://drive.google.com/file/d/1Cc3BvygH2BRXgT0o7zsFvTsh5IOr3wso/view"),
            webBtnBlockGen("Softener", "https://drive.google.com/file/d/1QaOpsNlmVf0gbh69EpZpNtuXq9zCOqGT/view"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Topics for WP-II -",
        [
            webBtnBlockGen("Heat Setting", "https://drive.google.com/file/d/1EC8m-S65v_5BBP54KaRVsBbTVidJ9Qne/view"),
            webBtnBlockGen("Water Repel..", "https://drive.google.com/file/d/1IePZr4_DhKNTzCpSK7RF_kemhEnDmCLG/view"),
            webBtnBlockGen("Chemical Finish", "https://drive.google.com/file/d/1rtvCZLg-dhGvorcga2Yu0fkabpiocaaH/view"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Topics for WP-II -",
        [
            webBtnBlockGen("Fire Retardant", "https://drive.google.com/file/d/1xJs0iOHtzDGEvXe42QIHqi7vtnE6jdOy/view"),
            webBtnBlockGen("Lec 2", "https://drive.google.com/file/d/1SVsV27yKYdT1PWenyMBfXePkeB-sbVxa/view"),
            webBtnBlockGen("Printing Styles", "https://drive.google.com/file/d/1QD-iuGbIu8b9Dao3jNOIpoptFJqWAqpV/view"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Topics for WP-II -",
        [
            webBtnBlockGen("Burn Out Printing.", "https://drive.google.com/file/d/1Q5RXHzJEF40rcciKnSgAijBUWwOlGkFt/view"),
            webBtnBlockGen("Special Printing M/C", "https://drive.google.com/file/d/1PxU8GRdKi9nU6gDxaDE8GwrwmO60BuK_/view"),
            webBtnBlockGen("Printing M/C", "https://drive.google.com/file/d/1PpySQmAysH4b-ifNZLsGRlteCEk37Qii/view"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Topics for WP-II -",
        [
            webBtnBlockGen("Textile Printing Sheet", "https://drive.google.com/file/d/1Ocpo2rPdux_Tc1B4B1jG3YOaJmyGQIgA/view"),
            webBtnBlockGen("Mesh & Screen Pri", "https://drive.google.com/file/d/1CwRW4GBxwfyw65sEXpB6wHhDYsxU6ZW7/view"),
            webBtnBlockGen("Screen Printing", "https://drive.google.com/file/d/1ZAr8hIzUqY7FIKawNnqUnsOx30lD0-hX/view?usp=sharing")
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Topics for WP-II -",
        [
            webBtnBlockGen("Direct Print", "https://drive.google.com/drive/folders/1X4aidySziwH04yIAekacdKL9JrmpHYDi?usp=sharing"),
            webBtnBlockGen("Special Wet Proc.", "https://drive.google.com/file/d/1eFxo2rUQx0mijOsGs3sGclvyM2F4gQqH/view?usp=sharing"),
        ]
    )
]





module.exports = wp2Flow;