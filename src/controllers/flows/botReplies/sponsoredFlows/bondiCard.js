let webBtnBlockGen = require("../../../genrators/webBtnBlockGen");
let cardGen = require("../../../genrators/cardGenerator");


// let bondiFlow = cardGen(
//     "https://i.imgur.com/fQZqOwW.png",
//     "বন্দি পাঠশালা",
//     "BUTEX NoteBOT is now powered by Bondi Pathshala 😀",
//     "https://www.facebook.com/bp.liveclass",
//     [
//         webBtnBlockGen("Visit 🌍", "https://www.facebook.com/bp.liveclass")
//     ]
// )

let bondiFlow = cardGen(
    "https://i.imgur.com/l1i0TJP.png",
    "NoteBOT App",
    "Use the brand new NoteBOT App to get the best of NoteBOT",
    "https://play.google.com/store/apps/details?id=com.hawkers.notebot",
    [
        webBtnBlockGen("Download", "https://play.google.com/store/apps/details?id=com.hawkers.notebot")
    ]
)



module.exports = bondiFlow;
