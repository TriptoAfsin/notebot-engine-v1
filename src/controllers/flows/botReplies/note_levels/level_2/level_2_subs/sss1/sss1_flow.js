let grroupedButtonBlockGen = require("simple-messenger-blocks/groupedBtnBlockGen");
let payloadBtnGen = require("simple-messenger-blocks/payloadBtnGen");
let webBtnBlockGen = require("simple-messenger-blocks/webBtnGen");

let sss1Flow = [
    grroupedButtonBlockGen(`📌 Full Notes -`, [
        webBtnBlockGen("Shihab(YE,26)", "https://drive.google.com/file/d/1WInHYBqcoeLYBhYiT-ax6zSpOXI3TJ3M/view?usp=sharing"),
    ]),
    grroupedButtonBlockGen(
        `📌 QB Solve -`,
        [
            webBtnBlockGen("All Math Solve(Nafiz,2026)", "https://drive.google.com/file/d/1G8S0I__GV57z_J0S_lkEvNL8oKB-1M58/view?usp=sharing"),
        ]
    ),
    grroupedButtonBlockGen(
        `🔰 Select Topic for SSS-I - `,
        [
            payloadBtnGen("Books", "sss1_books_flow"),
        ]
    ),
    grroupedButtonBlockGen(
        `🔰 Select Topic for SSS-I - `,
        [
            payloadBtnGen("Blow Room", "sss1_blowRoom_flow"),
            payloadBtnGen("Draw Frame", "sss1_drawFrame_flow"),
            payloadBtnGen("Carding", "sss1_carding_flow"),
        ]
    ),
    grroupedButtonBlockGen(
        `🔰 Select Topic for SSS-I - `,
        [
            payloadBtnGen("Intro to SSS(new)", "sss1_intro_flow"),
            payloadBtnGen("Intro to Fibre & Ya.", "sss1_introFibre_flow"),
        ]
    ),
]

module.exports = sss1Flow;
