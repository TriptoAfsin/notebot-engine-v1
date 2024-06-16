let quickReplyBlockGen = require("../../genrators/quickReplyBlockGen");
let quickReply = require("../../genrators/quickReply");

let grroupedButtonBlockGen = require("simple-messenger-blocks/groupedBtnBlockGen");
let webBtnBlockGen = require("simple-messenger-blocks/webBtnGen");
let payloadBtnGen = require("simple-messenger-blocks/payloadBtnGen");



const defaultReply = [
    grroupedButtonBlockGen(
        "🔴 Sorry I didn't get what you meant\n Here are some suggestions - ",
        [
            payloadBtnGen("Notes📗", "notes_flow"),
            payloadBtnGen("Lab Reports📋", "reports_flow"),
            payloadBtnGen("Help😥", "help_flow"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔴 সরি বুঝলাম না কি বললেন 😓",
        [
            payloadBtnGen("Notes📗", "notes_flow"),
            payloadBtnGen("Lab Reports📋", "reports_flow"),
            payloadBtnGen("Help😥", "help_flow"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔴 বুঝি নাই 😶, দেখেন তো নিচের কিছু খুজছেন কিনা -",
        [
            
            payloadBtnGen("Notes📗", "notes_flow"),
            payloadBtnGen("Lab Reports📋", "reports_flow"),
            payloadBtnGen("Help😥", "help_flow"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔴 Sorry I didn't understand you, here are few some suggestions -",
        [
            payloadBtnGen("Notes📗", "notes_flow"),
            payloadBtnGen("Lab Reports📋", "reports_flow"),
            payloadBtnGen("Help😥", "help_flow"),
        ]
    ),
]


module.exports = defaultReply;