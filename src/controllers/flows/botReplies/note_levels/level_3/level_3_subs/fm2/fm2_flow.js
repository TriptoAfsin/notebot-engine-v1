let grroupedButtonBlockGen = require('simple-messenger-blocks/groupedBtnBlockGen');
let webBtnBlockGen = require('simple-messenger-blocks/webBtnGen');
let payloadBtnGen = require('simple-messenger-blocks/payloadBtnGen');


let fm2Flow = [
    grroupedButtonBlockGen(
        "📌 Select Topics for FM-II -",
        [
            webBtnBlockGen("CT(June,2022)", "https://drive.google.com/file/d/1ljvCzAUku4g9D5eaOgzLSbqn32ej7u_N/view?usp=sharing"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Topics for FM-II -",
        [
            payloadBtnGen("Books", "fm2_books_flow"),
            payloadBtnGen("Class Lecture", "fm2_classlec_flow"),
            payloadBtnGen("Hand Note", "fm2_note_flow"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Topics for FM-II -",
        [
            webBtnBlockGen("Intro", "https://drive.google.com/drive/folders/17qy7I5T9gCrnJqnnSPRxVAC9EQ885qR7?usp=sharing"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Topics for FM-II -",
        [
            payloadBtnGen("Basic Warp Knitting", "fm2_basicWarp_flow"),
            webBtnBlockGen("Non Woven", "https://drive.google.com/file/d/1k89-nPCOWNnF8iXC43aUEBexY1yvlB0T/view"),
            webBtnBlockGen("Rib, interlock,sync", "https://drive.google.com/file/d/1-mZz3Ogrh3Xinizyt3IziWp109CbbgnF/view"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Topics for FM-II -",
        [
            webBtnBlockGen("Warp Knitting", "https://drive.google.com/file/d/1ThqGYq_dW03ZlpJ0vrJV0PPLVOdhx2hj/view"),
            payloadBtnGen("Misc", "fm2_misc_flow")
        ]
    ),
]





module.exports = fm2Flow;