let grroupedButtonBlockGen = require('simple-messenger-blocks/groupedBtnBlockGen');
let webBtnBlockGen = require('simple-messenger-blocks/webBtnGen');
let payloadBtnGen = require('simple-messenger-blocks/payloadBtnGen');
let cardGenerator = require('simple-messenger-blocks/cardGenerator');
let bondiFlow = require("../../../../sponsoredFlows/bondiCard");

let tcpLecture = [
    grroupedButtonBlockGen(
        "📌 Full Hand Notes- ",
        [
            webBtnBlockGen("Part-A(Osmani)", "https://drive.google.com/file/d/1zo6Z7YtUkINfI5ihVLSHVspJ9NwunBY1/view?usp=sharing"),
            webBtnBlockGen("Part-B(Osmani)", "https://drive.google.com/file/d/1nTWfMe806UWE3btXkOcOlkZksbrAIT7x/view?usp=sharing"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Topics for TCP -",
        [
            payloadBtnGen("KPC", "tcp_kpc_flow")
        ]
    )
]





module.exports = tcpLecture;