let grroupedButtonBlockGen = require('simple-messenger-blocks/groupedBtnBlockGen');
let webBtnBlockGen = require('simple-messenger-blocks/webBtnGen');
let payloadBtnGen = require('simple-messenger-blocks/payloadBtnGen');


let che1_lab_flow = [
    grroupedButtonBlockGen(
        "📌 All Lab Reports(New) - ",
        [
            webBtnBlockGen("Kamal(2025)", "https://drive.google.com/drive/folders/1cWWupOc3zJhgZbATHM8CLc6XCa0yzRap?usp=sharing"),
            webBtnBlockGen("Emon(2022)", "https://drive.google.com/file/d/1fou-8FqdjtKuxrfAong4L-yAovzA04Rv/view?usp=sharing"),
        ]
    ),
    grroupedButtonBlockGen(
        "⚡Practical Books -",
        [
            webBtnBlockGen("Vogel's Quantitive.", "https://drive.google.com/file/d/1Pv19IT1C_8JAZnsNNGFaHDOmdiojEyCP/view"),
            webBtnBlockGen("Vogle's Macro and ..", "https://drive.google.com/file/d/1bMefQIGJ-6tVERfAbIrtt-alWUPE1zJw/view")
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Experiment for Chem-I-",
        [
            payloadBtnGen("Procedure Sheet(All)", "che1_procedureSheet_flow"),
            payloadBtnGen("Acid Radical Ident.", "che1_acidRadical_flow"),
            payloadBtnGen("Basic Radical Ident.", "che1_basicRadical_flow")
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Experiment for Chem-I-",
        [
            payloadBtnGen("Mohr's Salt(new)", "che1_mohrsSalt_flow"),
            payloadBtnGen("Wet Test", "che1_wetTest_flow"),
            payloadBtnGen("Titration", "che1_titration_flow")
        ]
    ),
]



module.exports = che1_lab_flow;