let grroupedButtonBlockGen = require("../../../genrators/grroupedButtonBlockGen");
let webBtnBlockGen = require("../../../genrators/webBtnBlockGen");
let payloadBtnGen = require("../../../genrators/payloadBtnGen");
let cardGen = require("../../../genrators/cardGenerator");
let textBlockGen = require("../../../genrators/textBlockGen");


let sureFlow = [
    textBlockGen("019363962200"),
    textBlockGen("🔴 Instructions - \n\n1. Choose 'Send Money' option for your donation\n2. Use 'bot donation' as reference"),
]



module.exports = sureFlow;