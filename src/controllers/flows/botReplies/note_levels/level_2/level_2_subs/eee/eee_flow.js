let grroupedButtonBlockGen = require("simple-messenger-blocks/groupedBtnBlockGen");
let webBtnBlockGen = require("simple-messenger-blocks/webBtnGen");
let payloadBtnGen = require("simple-messenger-blocks/payloadBtnGen");
let cardGenerator = require("simple-messenger-blocks/cardGenerator");
let bondiFlow = require("../../../../sponsoredFlows/bondiCard");



let eeeFlow = [
    bondiFlow,
    grroupedButtonBlockGen(
        "📌 Full Hand Notes",
        [
            webBtnBlockGen("Shurja, WPE-50,2025", "https://drive.google.com/file/d/1Tquv-GisspL2q0CpAPltKZ8grr-t-8CX/view?usp=sharing"),
        ]
    ),
    grroupedButtonBlockGen(
        "📌 QB Solve -",
        [
            webBtnBlockGen("Rafi(2023)", "https://drive.google.com/drive/folders/1wOTKv9jDlR54evoAOS60gkrNOfDjvDvZ?usp=sharing"),
        ]
    ),
    grroupedButtonBlockGen(
        "📽️ Class Recordings - ",
        [
            webBtnBlockGen("YouTube Playlist", "https://www.youtube.com/playlist?list=PLakGb0S4SwU17jAOvXvN8hNxfflP13PkJ")
        ]
    ),
    grroupedButtonBlockGen(
        "📌 Asad Sir's Slide -",
        [
            webBtnBlockGen("⚡ Downlaod", "https://drive.google.com/file/d/16mFkXWt7gAeeYpCpcQp-dQLf43Jocdpx/view?usp=sharing")
        ]
    ),
    grroupedButtonBlockGen(
        "📌 Basic Laws - ",
        [
            webBtnBlockGen("Arpa(2022)", "https://drive.google.com/file/d/1w1k-HhyGqUe8nxAs7tfJ9q8zeQxXSzhL/view?usp=sharing")
        ]
    ),
    grroupedButtonBlockGen(
        "📌 Full Hand Notes",
        [
            webBtnBlockGen("Adee(2021)", "https://drive.google.com/file/d/1KgIfMMCIu33dd7wUZfefJXGso1_Hiiwl/view?usp=sharing"),
            webBtnBlockGen("Mamun(SKTEC,2023)", "https://drive.google.com/file/d/1o66VmiMFz4BgGBSFTVQJAQl7vJx1ubJf/view?usp=sharing"),
            webBtnBlockGen("⭐ Alim(2024)", "https://drive.google.com/file/d/1b8wMBpJ2iEsHpVNUTA-_UVfZG7GlJTTD/view?usp=sharing"),
        ]
    ),
    grroupedButtonBlockGen(
        "📌 Full Hand Notes",
        [
            webBtnBlockGen("Lingkon(2024)", "https://drive.google.com/file/d/17xdvsm_0LcY4nOvwKn2fQu_Lm0D_qKOL/view?usp=sharing"),
            webBtnBlockGen("DCE Circuit(Gourab,2025)", "https://drive.google.com/file/d/1w5Se5R-f3wCXPtjTlWoH8y5-RQrXzRDL/view?usp=sharing"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Topics for FEEE -",
        [
            payloadBtnGen("Books", "eee_books_flow"),
            payloadBtnGen("Hand Notes", "eee_hnotes_flow"),
            payloadBtnGen("Questions", "eee_ques_flow"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Topics for FEEE -",
        [
            payloadBtnGen("Ch 1", "eee_ch1_flow"),
            payloadBtnGen("Ch 2:Method of An", "eee_ch2_flow"),
            payloadBtnGen("Ch 3", "eee_ch3_flow"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Topics for FEEE -",
        [
            payloadBtnGen("Ch 4:3 & 1 Phase Sys", "eee_ch4_flow"),
            payloadBtnGen("Electronics & E-Tex.", "eee_ch5_flow"),
            payloadBtnGen("Ch 8: Power System", "eee_ch8_flow"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Topics for FEEE -",
        [
            webBtnBlockGen("Ch 9", "https://drive.google.com/file/d/1CDRk6kZBwrn0JaxMle5vxI8ExqNiNBal/view?usp=sharing"),
            webBtnBlockGen("Ch 12", "https://drive.google.com/file/d/1wJe3_T-ewgsOz2nSqJdzSd8QQX-ak4Gj/view?usp=sharing"),
            webBtnBlockGen("Electrical Machine", "https://drive.google.com/drive/folders/1uuOpi_sQBgZjpQ27-nH6OYD6UrxY75LV?usp=sharing"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Topics for FEEE -",
        [
            webBtnBlockGen("Sensor(2021)", "https://drive.google.com/file/d/1ZPdioYHOByOck6kcAVRUdgfngUxNxody/view?usp=sharing"),
            webBtnBlockGen("Electrical M/C", "https://drive.google.com/file/d/1i_P4lHpyQQnA4Yo7_ylz3cXMrISPmd5U/view?usp=sharing"),
            webBtnBlockGen("AC Sinu.(Ratul, TEM-48, 2025)", "https://drive.google.com/file/d/1pOLsYcu12aajh9ur-vQoXfqmIbHZvix9/view?usp=sharing"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Topics for FEEE -",
        [
            payloadBtnGen("Wye-Delta", "eee_wye_delta_flow"),
            payloadBtnGen("RMS", "eee_rms_flow"),
            payloadBtnGen("Circuit Analysis", "eee_circuit_analy_flow"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Topics for FEEE -",
        [
            webBtnBlockGen("AC Power.. An.", "https://drive.google.com/drive/folders/1mWG23OkIzSNuzZppUB3vicMZjLK4jnET?usp=sharing"),
        ]
    ),
]





module.exports = eeeFlow;