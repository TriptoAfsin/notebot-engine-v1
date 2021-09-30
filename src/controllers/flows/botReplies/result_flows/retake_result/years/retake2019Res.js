let grroupedButtonBlockGen = require("simple-messenger-blocks/groupedBtnBlockGen");
let webBtnBlockGen = require("simple-messenger-blocks/webBtnGen");
let payloadBtnGen = require("simple-messenger-blocks/payloadBtnGen");
let cardGenerator = require("simple-messenger-blocks/cardGenerator");


let retakeRes2019 = [
    grroupedButtonBlockGen(
        "🟡 Select Your Desired Result -",
        [
            webBtnBlockGen("4,1", "https://drive.google.com/file/d/1NGhfVSSI_tH7psk1LkrjLQRepqi2E4GW/view"),
            webBtnBlockGen("2,2(New)", "https://www.butex.edu.bd/wp-content/uploads/2021/09/Result-of-Retake-Subjects-B.Sc_.-in-Textile-Engineering-L-2-T-2-Examination-2019.pdf"),
            webBtnBlockGen("3,2(New)", "https://www.butex.edu.bd/wp-content/uploads/2021/09/Result-of-Retake-Subjects-B.Sc_.-in-Textile-Engineering-L-3-T-2-Examination-2019.pdf"),
        ]
    ),
    grroupedButtonBlockGen(
        "🟡 Select Your Desired Result -",
        [
            webBtnBlockGen("1,1", "https://drive.google.com/file/d/17ZXfHpyx4OBXSaEJUc4aWM5scTxvyJGU/edit"),
            webBtnBlockGen("2,1", "https://drive.google.com/file/d/13S4x2gIa1qSWcp4VslSYroPftjlogn7H/view"),
            webBtnBlockGen("3,1", "https://drive.google.com/file/d/1Fi8P78FO-spX77Gd5RPv7gdinEgOe_CF/view"),
        ]
    ),
]





module.exports = retakeRes2019;