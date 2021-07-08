let grroupedButtonBlockGen = require("../../../../../../genrators/grroupedButtonBlockGen");
let webBtnBlockGen = require("../../../../../../genrators/webBtnBlockGen");
let payloadBtnGen = require("../../../../../../genrators/payloadBtnGen");
let bondiFlow = require("../../../../sponsoredFlows/bondiCard");




let phy2_flow = [
    bondiFlow,
    grroupedButtonBlockGen("📌 Combined Note -",
        [
            webBtnBlockGen("Maruf(2019)", "https://drive.google.com/file/d/1fIgUIBddhWxMaS7hKrKViD5eNNhvhtXL/view"),
            webBtnBlockGen("Hasibul(2019)", "https://drive.google.com/file/d/18SqLs8J-wnMhdfALqaklgj21hGCqDxLc/view"),
            webBtnBlockGen("Rushad(2021)", "https://drive.google.com/file/d/1HGf21qAypMgltBJRwslTJ5NcIjB8M2pL/view?usp=sharing")
        ]
    ),
    grroupedButtonBlockGen("📌 QB Solve - ",
        [
            webBtnBlockGen("By AE-45", "https://drive.google.com/file/d/1F1MVY00RL6MmjLhCgx7ODacgnJOQgI1A/view?usp=sharing"),
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