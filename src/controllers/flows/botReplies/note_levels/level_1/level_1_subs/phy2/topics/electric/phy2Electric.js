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
]





module.exports = phy2_electric_flow;