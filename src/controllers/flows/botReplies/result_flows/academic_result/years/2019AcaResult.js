let grroupedButtonBlockGen = require("../../../../../genrators/grroupedButtonBlockGen");
let webBtnBlockGen = require("../../../../../genrators/webBtnBlockGen");
let payloadBtnGen = require("../../../../../genrators/payloadBtnGen");
let cardGenerator = require("../../../../../genrators/cardGenerator");



let acdemicRes2019 = [
    grroupedButtonBlockGen(
        "🟡 Select Your Desired Result(New) -",
        [
            webBtnBlockGen("L 1,2(2021)", "https://drive.google.com/file/d/1orh48cQeiOc7OuzwVzm_oi9kPSRrAiLe/view"),
            webBtnBlockGen("L 2,2(2021)", "https://www.butex.edu.bd/wp-content/uploads/2021/09/Result-of-B.Sc_.-in-Textile-Engineering-L-2-T-2-Examination-2019.pdf"),
        ]
    ),
    grroupedButtonBlockGen(
        "🟡 Select Your Desired Result -",
        [
            webBtnBlockGen("4,2", "https://drive.google.com/file/d/1yDAwb4KD9ll3E8nbKWeOEUuk77Fv2OO0/view"),
            webBtnBlockGen("4,1", "https://drive.google.com/file/d/1xvC4juzIEenVz6kCc0foXh786dz__IX6/view")
        ]
    ),
    grroupedButtonBlockGen(
        "🟡 Select Your Desired Result -",
        [
            webBtnBlockGen("L 1,1", "https://drive.google.com/file/d/1fmPiEbrfo18XTJCDOTt9gIwdm3Tr4WR1/edit"),
            webBtnBlockGen("L 2,1", "https://drive.google.com/file/d/1fS32L995qlfihI58g1zTNw4Hfg1iXinc/view"),
            webBtnBlockGen("L 3,1", "https://drive.google.com/file/d/1XPngtQSHx6isFMqhY_1BoNbu5OT272eX/view")
        ]
    ),
]





module.exports = acdemicRes2019;