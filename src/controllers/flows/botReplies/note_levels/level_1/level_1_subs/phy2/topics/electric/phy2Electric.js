let grroupedButtonBlockGen = require("../../../../../../../../genrators/grroupedButtonBlockGen");
let webBtnBlockGen = require("../../../../../../../../genrators/webBtnBlockGen");
let payloadBtnGen = require("../../../../../../../../genrators/payloadBtnGen");

let phy2_electric_flow = [

    grroupedButtonBlockGen(
        "🟩 Select -",
        [
            webBtnBlockGen("Book(Gias Uddin)", "https://drive.google.com/file/d/1AVySpBuCw8PHNFY06sXiyaI2BSAEnS52/view?usp=sharing"),
            payloadBtnGen("Hand Note", "phy2_electric_notes_flow"),
            payloadBtnGen("Slides", "phy2_electric_slides_flow"),
        ]
    ),
    grroupedButtonBlockGen(
        "🟩 Select -",
        [
            webBtnBlockGen("MCQ(Sabiha)", "https://drive.google.com/file/d/19J5OyRksMin03T5GjZro_eSzBSXxJzqG/view?usp=sharing"),
            webBtnBlockGen("Hand Note(2021)", "https://drive.google.com/file/d/1n2LsMY9NfyuXp4qn4fYFVi7VCfVgTnMM/view?usp=sharing"),
        ]
    ),
]





module.exports = phy2_electric_flow;