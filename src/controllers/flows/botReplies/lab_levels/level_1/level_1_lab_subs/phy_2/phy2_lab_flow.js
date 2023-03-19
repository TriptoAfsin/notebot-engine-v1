let grroupedButtonBlockGen = require('simple-messenger-blocks/groupedBtnBlockGen');
let webBtnBlockGen = require('simple-messenger-blocks/webBtnGen');
let payloadBtnGen = require('simple-messenger-blocks/payloadBtnGen');
let imgBlockGen = require('simple-messenger-blocks/imgBlockGen');

let phy2_lab_flow = [
    imgBlockGen("https://manybot-thumbnails.s3.eu-central-1.amazonaws.com/fb243958719599028/ca/big_9c59ca1c6005f0305772d40f5d0177be.png"),
    grroupedButtonBlockGen(
        "📌 All Lab Reports -",
        [
            webBtnBlockGen("2022", "https://drive.google.com/file/d/1dLXbV8GiLNiDUaapr1nopXWh0u-bs1xn/view?usp=sharing"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Experiment for PHY-II-",
        [
            webBtnBlockGen("Book Scanned", "https://drive.google.com/file/d/159l8qjOpNROAlbRCVJKLOWiqtpbGUSCY/view?usp=sharing"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Experiment for PHY-II-",
        [
            payloadBtnGen("E1", "phy2_lab_e1_flow"),
            payloadBtnGen("E2", "phy2_lab_e2_flow"),
            payloadBtnGen("E3", "phy2_lab_e3_flow"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Experiment for PHY-II-",
        [
            payloadBtnGen("E4", "phy2_lab_e4_flow"),
            payloadBtnGen("E5", "phy2_lab_e5_flow"),
            payloadBtnGen("E6", "phy2_lab_e6_flow"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Experiment for PHY-II-",
        [
            payloadBtnGen("E7", "phy2_lab_e7_flow"),
            payloadBtnGen("E8", "phy2_lab_e8_flow"),
            payloadBtnGen("M1", "phy2_lab_m1_flow"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Experiment for PHY-II-",
        [
            payloadBtnGen("H1", "phy2_lab_h1_flow"),
            payloadBtnGen("H2", "phy2_lab_h2_flow"),
            payloadBtnGen("H3", "phy2_lab_h3_flow"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Experiment for PHY-II-",
        [
            webBtnBlockGen("H4", "https://drive.google.com/file/d/1l4anpT2DcGyWXa8e1YlSf6jvyV5JzBvl/view?usp=sharing"),
            webBtnBlockGen("H5", "https://drive.google.com/file/d/1vYRMVGfuRJxdaFAptb__ike0gCJJvaAm/view?usp=sharing"),
        ]
    )
]



module.exports = phy2_lab_flow;