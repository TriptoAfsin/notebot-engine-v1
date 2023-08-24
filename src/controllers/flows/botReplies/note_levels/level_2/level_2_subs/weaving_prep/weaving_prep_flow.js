let grroupedButtonBlockGen = require('simple-messenger-blocks/groupedBtnBlockGen');
let webBtnBlockGen = require('simple-messenger-blocks/webBtnGen');
let payloadBtnGen = require('simple-messenger-blocks/payloadBtnGen');


let weavFlow = [
    grroupedButtonBlockGen("🔰 Select Topics for Weaving Preparatory Process -", [
        payloadBtnGen("Books", "weav_books_flow"),
        webBtnBlockGen("Sheets", "https://drive.google.com/drive/folders/1TDandEYgMSe4qUDfJ9dvG51I4B3kdgsV?usp=sharing")
    ]),
    grroupedButtonBlockGen("📌 Hand Notes", [
        webBtnBlockGen("Lingkon(2023)", "https://drive.google.com/file/d/17S2qZjA2oi88k9YQGMhaZsx-BpJWO8UD/view?usp=sharing")
    ]),
]





module.exports = weavFlow;