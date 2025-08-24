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
            payloadBtnGen("KPC", "tcp_kpc_flow"),
            webBtnBlockGen("All Sheets", "https://drive.google.com/drive/folders/1OspCyD-pLeYZ907d5N_dt20he-FY8mzV?usp=sharing"),
            webBtnBlockGen("Hand Notes", "https://drive.google.com/drive/folders/1kWOg1ZTp3u0KQpjbMbS0PwyqHSnpsIqL?usp=sharing"),
        ]
    )
]





module.exports = tcpLecture;