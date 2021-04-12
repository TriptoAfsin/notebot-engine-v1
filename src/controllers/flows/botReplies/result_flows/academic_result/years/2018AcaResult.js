let grroupedButtonBlockGen = require("../../../../../genrators/grroupedButtonBlockGen");
let webBtnBlockGen = require("../../../../../genrators/webBtnBlockGen");
let payloadBtnGen = require("../../../../../genrators/payloadBtnGen");
let cardGenerator = require("../../../../../genrators/cardGenerator");



let acdemicRes2018 = [
    grroupedButtonBlockGen(
        "🟡 Select Your Desired Result -",
        [
            webBtnBlockGen("L 4,2", "https://drive.google.com/file/d/1qkNZBpUp_5CNx4qhPAFw2dAN9XkVowVx/view"),
            webBtnBlockGen("L 1,2(2019)", "https://drive.google.com/file/d/15y51lZK5ZbhvHFB3LIEVMU4ZKk1oM7iu/view"),
            webBtnBlockGen("L 2,2(2019)", "https://drive.google.com/file/d/1sm6cMIsrNrjZG7Wu6thqgZi5L5R9ZSR-/view")
        ]
    ),
    grroupedButtonBlockGen(
        "🟡 Select Your Desired Result -",
        [
            webBtnBlockGen("L3,2(2019)", "https://drive.google.com/file/d/174v5tYlnTeTDP5lSIFL7F9QyMOo-pkzt/view"),
        ]
    )
]





module.exports = acdemicRes2018;