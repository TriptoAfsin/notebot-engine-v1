let grroupedButtonBlockGen = require("../../genrators/grroupedButtonBlockGen");
let webBtnBlockGen = require("../../genrators/webBtnBlockGen");
let payloadBtnGen = require("../../genrators/payloadBtnGen");
let cardGen = require("../../genrators/cardGenerator");


let usefulFlow = [
    grroupedButtonBlockGen(
        `⭐ Useful Web Apps - `,
        [
            webBtnBlockGen("Online Calc", "https://www.desmos.com/scientific"),
            webBtnBlockGen("Count Koto", "https://triptoafsin.github.io/CountKoto-/"),
            webBtnBlockGen("BUTEX ID Gen", "https://triptoafsin.github.io/BUTEX_ID-Gen/"),
        ]
    ),
    grroupedButtonBlockGen(
        `⭐ Useful Web Apps - `,
        [
            webBtnBlockGen("BUTEX PhoneBook", "https://triptoafsin.github.io/BUTEX-PhoneBook/"),
        ]
    ),
    grroupedButtonBlockGen(
        `⭐ Useful Mobile Apps - `,
        [
            webBtnBlockGen("CXX Droid", "https://play.google.com/store/apps/details?id=ru.iiec.cxxdroid&hl=en&gl=US"),
            webBtnBlockGen("Count Koto", "https://play.google.com/store/apps/details?id=newcampusa.newproject.countkoto"),
            webBtnBlockGen("BUTEX Notice", "https://play.google.com/store/apps/details?id=newcampusa.newproject.texNotice71"),
        ]
    ),
]



module.exports = usefulFlow;