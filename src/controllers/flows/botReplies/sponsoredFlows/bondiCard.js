let webBtnBlockGen = require("../../../genrators/webBtnBlockGen");
let cardGen = require("../../../genrators/cardGenerator");


let bondiFlow = cardGen(
    "https://i.postimg.cc/HkwhXRXr/tc-chatbot.png",
    "TrueCaller Premium !",
    "মাত্র ৫ টাকায় TrueCaller Premium !",
    "https://hullor.io/#truecaller",
    [
        webBtnBlockGen("Buy Now 👑", "https://i.postimg.cc/HkwhXRXr/tc-chatbot.png")
    ]
)

// let bondiFlow = cardGen(
//     "https://i.imgur.com/fQZqOwW.png",
//     "বন্দি পাঠশালা",
//     "BUTEX NoteBOT is now powered by Bondi Pathshala 😀",
//     "https://www.facebook.com/bp.liveclass",
//     [
//         webBtnBlockGen("Visit 🌍", "https://www.facebook.com/bp.liveclass")
//     ]
// )

// let bondiFlow = cardGen(
//     "https://i.imgur.com/l1i0TJP.png",
//     "⚠️ NoteBot Chatbot might stop working from 20th July,2022",
//     `Please use the brand new NoteBOT App to get the best of NoteBOT \n\n⚠️ NoteBot Chatbot might stop working from 20th July,2022`,
//     "https://play.google.com/store/apps/details?id=com.hawkers.notebot",
//     [
//         webBtnBlockGen("Download", "https://play.google.com/store/apps/details?id=com.hawkers.notebot")
//     ]
// )



module.exports = bondiFlow;
