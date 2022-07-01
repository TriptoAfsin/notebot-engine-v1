let grroupedButtonBlockGen = require("simple-messenger-blocks/groupedBtnBlockGen");
let webBtnBlockGen = require("simple-messenger-blocks/webBtnGen");
let payloadBtnGen = require("simple-messenger-blocks/payloadBtnGen");
let cardGenerator = require("simple-messenger-blocks/cardGenerator");
let bondiFlow = require("../../../../sponsoredFlows/bondiCard");



let eeeFlow = [
    bondiFlow,
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
            webBtnBlockGen("Adee(2021)", "https://drive.google.com/file/d/1KgIfMMCIu33dd7wUZfefJXGso1_Hiiwl/view?usp=sharing")
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
            payloadBtnGen("Ch 5: Electronics", "eee_ch5_flow"),
            payloadBtnGen("Ch 8: Power System", "eee_ch8_flow"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Topics for FEEE -",
        [
            webBtnBlockGen("Ch 9", "https://drive.google.com/file/d/1CDRk6kZBwrn0JaxMle5vxI8ExqNiNBal/view?usp=sharing"),
            webBtnBlockGen("Ch 12", "https://drive.google.com/file/d/1wJe3_T-ewgsOz2nSqJdzSd8QQX-ak4Gj/view?usp=sharing"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Topics for FEEE -",
        [
            webBtnBlockGen("Sensor(2021)", "https://drive.google.com/file/d/1ZPdioYHOByOck6kcAVRUdgfngUxNxody/view?usp=sharing"),
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
]





module.exports = eeeFlow;