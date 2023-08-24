let grroupedButtonBlockGen = require('simple-messenger-blocks/groupedBtnBlockGen');
let webBtnBlockGen = require('simple-messenger-blocks/webBtnGen');
let payloadBtnGen = require('simple-messenger-blocks/payloadBtnGen');
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
    grroupedButtonBlockGen("📌 Combined Note -",
    [
            webBtnBlockGen("Lingkon(CTEC,2023)", "https://drive.google.com/file/d/18aPpGM6-fh1h8wTJzO1hlWVPWvdlRlsj/view?usp=sharing"),
            webBtnBlockGen("Wasy(2021)", "https://drive.google.com/file/d/1Hw9qRAf2fJBL_6UgResO_WgUvnjUMlrA/view?usp=sharing"),
            webBtnBlockGen("Nirob(Affl,2022)", "https://drive.google.com/file/d/1IMl_I9FoYIrjXFL-fvbBICERkyhBVch7/view?usp=sharing"),
        ]
    ),
    grroupedButtonBlockGen("📌 QB Solve - ",
        [
            webBtnBlockGen("By AE-45", "https://drive.google.com/file/d/1F1MVY00RL6MmjLhCgx7ODacgnJOQgI1A/view?usp=sharing"),
            webBtnBlockGen("Math Solve(Affli.)", "https://drive.google.com/file/d/1qi-Ev2jCffNfyfov9PBra2MDUNFLUXEI/view?usp=sharing"),
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
    grroupedButtonBlockGen("🔰 Select Topic for PHY-II -",
        [
            webBtnBlockGen("Ideal Gas", "https://drive.google.com/file/d/1VFjnVq75gsr1MlAJJsiv8liua_XPb77Q/view?usp=sharing"),
        ]
    ),
]





module.exports = phy2_flow;