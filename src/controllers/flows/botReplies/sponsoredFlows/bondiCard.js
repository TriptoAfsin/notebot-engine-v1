let webBtnBlockGen = require("../../../genrators/webBtnBlockGen");
let cardGen = require("../../../genrators/cardGenerator");


let bondiFlow = cardGen(
    "https://i.postimg.cc/Jn0Yz2x1/free-palestine.png",
    "Solidarity with Palestine ✊",
    "We stand in solidarity with our brothers and sister of Palestine",
    "https://www.facebook.com/palestinembassydhaka/",
    [
        webBtnBlockGen("Support", "https://www.facebook.com/palestinembassydhaka/")
    ]
)

// let bondiFlow = cardGen(
//     "https://i.postimg.cc/HkwhXRXr/tc-chatbot.png",
//     "TrueCaller Premium!(Genuine)",
//     "মাত্র ৫ টাকায় Genuine TrueCaller Premium !",
//     "https://hullor.io/truecaller/notebot",
//     [
//         webBtnBlockGen("Buy Now 👑", "https://hullor.io/truecaller/notebot")
//     ]
// )

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
