let grroupedButtonBlockGen = require("../../../../../../genrators/grroupedButtonBlockGen");
let webBtnBlockGen = require("../../../../../../genrators/webBtnBlockGen");
let payloadBtnGen = require("../../../../../../genrators/payloadBtnGen");
let cardGenerator = require("../../../../../../genrators/cardGenerator");




let phy2_flow = [
    grroupedButtonBlockGen("📌 Combined Note -",
        [
            webBtnBlockGen("Maruf(2019)", "https://drive.google.com/file/d/1fIgUIBddhWxMaS7hKrKViD5eNNhvhtXL/view"),
            webBtnBlockGen("Hasibul(2019)", "https://drive.google.com/file/d/18SqLs8J-wnMhdfALqaklgj21hGCqDxLc/view")
        ]
    ),
    grroupedButtonBlockGen("🔰 Select Topic for PHY-II -",
        [
            payloadBtnGen("Books", "phy2_books_flow"),
            payloadBtnGen("Questions", "phy2_ques_flow"),
            payloadBtnGen("Kinetic Theory Gas", "phy2_kinetic_flow")
        ]
    ),
    grroupedButtonBlockGen("🔰 Select Topic for PHY-II -",
        [
            payloadBtnGen("Electricity", "phy2_electricity_flow"),
            payloadBtnGen("Thermo Dynamics", "phy2_thermodynamics_flow"),
            payloadBtnGen("Radiation", "phy2_radiation_flow")
        ]
    ),
    grroupedButtonBlockGen("🔰 Select Topic for PHY-II -",
        [
            payloadBtnGen("Magnetism", "phy2_magnet_flow"),
            payloadBtnGen("Modern Physics", "phy2_modern_flow"),
            payloadBtnGen("Entropy", "phy2_entropy_flow")
        ]
    ),
]





module.exports = phy2_flow;