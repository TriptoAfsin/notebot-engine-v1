const webBtnBlockGen = require('../../../../../../genrators/webBtnBlockGen');
const textBlockGen = require('../../../../../../genrators/textBlockGen');
const payloadBtnBlockGen = require('../../../../../../genrators/payloadBtnGen');
const groupedBtnBlockGen = require('../../../../../../genrators/grroupedButtonBlockGen');

let ecb_flow = [
    groupedBtnBlockGen(`🔰Select Topic for ECB - `,
        [
            payloadBtnBlockGen(`Hand Note`,`ecb_handNote_flow`),
            payloadBtnBlockGen(`Intro to ECB`,`ecb_intro_flow`)
        ]
    )
]





module.exports = ecb_flow;