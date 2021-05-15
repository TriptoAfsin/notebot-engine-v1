let grroupedButtonBlockGen = require("../../genrators/grroupedButtonBlockGen");
let webBtnBlockGen = require("../../genrators/webBtnBlockGen");
let payloadBtnGen = require("../../genrators/payloadBtnGen");
let cardGen = require("../../genrators/cardGenerator");


let quiz_flow = [
    grroupedButtonBlockGen(
        "🔴 Choose quiz subject -",
        [
            webBtnBlockGen("AM-I Quiz", "https://triptoafsin.github.io/TexQuiz/am1.html"), 
            webBtnBlockGen("AM-II Quiz", "https://triptoafsin.github.io/TexQuiz/am2.html"),
            webBtnBlockGen("WP-I Quiz", "https://triptoafsin.github.io/TexQuiz/wp1.html"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔴 Choose quiz subject -",
        [
            webBtnBlockGen("WP-II Quiz", "https://triptoafsin.github.io/TexQuiz/wp2.html"), 
            webBtnBlockGen("NTF Quiz", "https://triptoafsin.github.io/TexQuiz/ntf.html"),
            webBtnBlockGen("EM Quiz", "https://triptoafsin.github.io/TexQuiz/em.html"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔴 Choose quiz subject -",
        [
            webBtnBlockGen("MMTF Quiz", "https://triptoafsin.github.io/TexQuiz/mmtf.html"), 
            webBtnBlockGen("MP Quiz", "https://triptoafsin.github.io/TexQuiz/mp.html"),
            webBtnBlockGen("CP Quiz", "https://triptoafsin.github.io/TexQuiz/cp.html"),
        ]
    ),
]





module.exports = quiz_flow;