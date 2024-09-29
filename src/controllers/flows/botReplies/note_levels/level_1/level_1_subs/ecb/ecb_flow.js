const webBtnBlockGen = require("simple-messenger-blocks/webBtnGen");
const groupedBtnBlockGen = require("simple-messenger-blocks/groupedBtnBlockGen");
const payloadBtnBlockGen = require("simple-messenger-blocks/payloadBtnGen");

let ecb_flow = [
    groupedBtnBlockGen(`🔰Select Topic for ECB - `,
        [
            webBtnBlockGen("Sheets(2024)", "https://drive.google.com/drive/folders/1ORnhnkKeo2K3ZoqnobFe398qAdXocf76?usp=sharing"),
            payloadBtnBlockGen(`Hand Note`,`ecb_handNote_flow`),
            payloadBtnBlockGen(`Intro to ECB`,`ecb_intro_flow`)
        ]
    )
]





module.exports = ecb_flow;