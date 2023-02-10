let grroupedButtonBlockGen = require('simple-messenger-blocks/groupedBtnBlockGen');
let webBtnBlockGen = require('simple-messenger-blocks/webBtnGen');

let am2_lab_flow = [
    grroupedButtonBlockGen("📌 All Reports - ", [
        webBtnBlockGen('Bappi', 'https://drive.google.com/file/d/1u2YX4OyycdHalBxQ0LLYSz42T0-naoJf/view')
    ]),
]



module.exports = am2_lab_flow;