let grroupedButtonBlockGen = require("../../../genrators/grroupedButtonBlockGen");
let webBtnBlockGen = require("../../../genrators/webBtnBlockGen");
let payloadBtnGen = require("../../../genrators/payloadBtnGen");



let BooksQues = [
    grroupedButtonBlockGen(`বই, প্রশ্ন-পত্র নোট সেকশনে আছে -`,
        [
            payloadBtnGen("📗 Go To Notes", "notes_flow"),
            webBtnBlockGen("☁ Cloud Lib", "https://triptoafsin.github.io/Cloud-Lib-React/")
        ]
    ),
]





module.exports = BooksQues;