let grroupedButtonBlockGen = require("simple-messenger-blocks/groupedBtnBlockGen");
let webBtnBlockGen = require("simple-messenger-blocks/webBtnGen");
let payloadBtnGen = require("simple-messenger-blocks/payloadBtnGen");



let fpc_flow = [
    grroupedButtonBlockGen(
        "🔰 Select Topics for FPC - ",
        [
            webBtnBlockGen("PolymerCharacterization(Jeba,2026)", "https://drive.google.com/file/d/1wxtc7I2hOCeqMPhT1GmKVOTAJk39ZHzY/view?usp=sharing"),
            webBtnBlockGen("Conductive Polymer(Jeba,2026)", "https://drive.google.com/file/d/1BEdCQZ_MP2oRD8Zr4iCJR0jN2qa-OlOc/view?usp=sharing"),
            payloadBtnGen("Polymer Degrad.", "fpc_degrad_flow"),
        ]
    ),
]




module.exports = fpc_flow;
