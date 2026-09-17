let grroupedButtonBlockGen = require('simple-messenger-blocks/groupedBtnBlockGen');
let webBtnBlockGen = require('simple-messenger-blocks/webBtnGen');
let payloadBtnGen = require('simple-messenger-blocks/payloadBtnGen');
let cardGenerator = require('simple-messenger-blocks/cardGenerator');
let bondiFlow = require("../../../../sponsoredFlows/bondiCard");


let tc1Flow = [
    bondiFlow,
    grroupedButtonBlockGen(
        "📌 QB Solve (Akash, NTEC) - ",
        [
            webBtnBlockGen("Download", "https://drive.google.com/file/d/1EcTnQY49Cp5EQqmaLBvzCrKnNBWneBMl/view?usp=sharing"),
        ]
    ),
    grroupedButtonBlockGen(
        "📌 QB Solve (Prev. Year) - ",
        [
            webBtnBlockGen("Download", "https://www.dropbox.com/scl/fi/mpnaxe348iski7iyq97m9/DOC-20260809-WA0005-1.pdf?rlkey=3z1gjoi3pgc1ykl3iac8r3g5h&st=czhzbmaw&dl=0"),
        ]
    ),
    grroupedButtonBlockGen(
        "📌 Drive Folder - ",
        [
            webBtnBlockGen("Download", "https://drive.google.com/drive/folders/1Tg0ruIBuznlNWYGNYZVxGHnwu8UUNa2r?usp=sharing"),
        ]
    ),
]





module.exports = tc1Flow;