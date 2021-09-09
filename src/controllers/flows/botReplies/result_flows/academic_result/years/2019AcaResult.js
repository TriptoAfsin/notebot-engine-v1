let grroupedButtonBlockGen = require("../../../../../genrators/grroupedButtonBlockGen");
let webBtnBlockGen = require("../../../../../genrators/webBtnBlockGen");
let payloadBtnGen = require("../../../../../genrators/payloadBtnGen");
let cardGenerator = require("../../../../../genrators/cardGenerator");



let acdemicRes2019 = [
    grroupedButtonBlockGen(
        "🟡 Select Your Desired Result(New) -",
        [
            webBtnBlockGen("L 1,2(2021)", "https://drive.google.com/file/d/1orh48cQeiOc7OuzwVzm_oi9kPSRrAiLe/view"),
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