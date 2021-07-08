let webBtnBlockGen = require("../../../genrators/webBtnBlockGen");
let cardGen = require("../../../genrators/cardGenerator");


let bondiFlow = cardGen(
    "https://i.imgur.com/fQZqOwW.png",
    "বন্দী পাঠশালা",
    "BUTEX NoteBOT is now powered by Bondi Pathshala 😀",
    "https://www.facebook.com/bp.liveclass",
    [
        webBtnBlockGen("Visit 🌍", "https://www.facebook.com/bp.liveclass")
    ]
)



module.exports = bondiFlow;
