let grroupedButtonBlockGen = require('simple-messenger-blocks/groupedBtnBlockGen');
let webBtnBlockGen = require('simple-messenger-blocks/webBtnGen');
let payloadBtnGen = require('simple-messenger-blocks/payloadBtnGen');


let ctcaFlow = [
    grroupedButtonBlockGen("📌 Hand Notes - ", [
        webBtnBlockGen("Mamun(SKTEC,2023)", "https://drive.google.com/file/d/16qUQd3LetYvr5Btn-ljbu20s4f9w-dtI/view?usp=sharing"),
    ]),
    grroupedButtonBlockGen("🔰 Select Topics for CTCA -", [
        payloadBtnGen("Books", "ctca_books_flow"),
        webBtnBlockGen("Question Bank", "https://drive.google.com/file/d/1WISMzZ9_jsW3ijr11LMm6LnAUNxDAvJp/view"),
        payloadBtnGen("Sheets", "ctca_sheets_flow"),
    ]),
    grroupedButtonBlockGen("🔰 Select Topics for CTCA -", [
        payloadBtnGen("Thickening Agents", "ctca_thickAge_flow"),
        payloadBtnGen("Water", "ctca_water_flow"),
        payloadBtnGen("Surfactants", "ctca_surfactants_flow"),
    ]),
    grroupedButtonBlockGen("🔰 Select Topics for CTCA -", [
        payloadBtnGen("Bleaching & Enzyme", "ctca_bleach_flow"),
        payloadBtnGen("Solutions", "ctca_solutions_flow"),
        payloadBtnGen("Colloid", "ctca_colloid_flow"),
    ]),
]





module.exports = ctcaFlow;