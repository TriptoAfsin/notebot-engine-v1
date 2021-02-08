let grroupedButtonBlockGen = require("../../genrators/grroupedButtonBlockGen");
let webBtnBlockGen = require("../../genrators/webBtnBlockGen");
let payloadBtnGen = require("../../genrators/payloadBtnGen");




let notes = [

    grroupedButtonBlockGen(
        `🔰 Choose - `,
        [
            payloadBtnGen("🟢 Level 1", "level_1"),
            payloadBtnGen("🟢 Level 2", "level_2"),
            payloadBtnGen("🟢 Level 3", "level_3")
        ]
    ),
    grroupedButtonBlockGen(
        `🔰 Choose - `,
        [
            payloadBtnGen("🟢 Level 4", "level_4"),
        ]
    ),
    grroupedButtonBlockGen(
        `🔰 Random Books - `,
        [
            webBtnBlockGen("🍀 ESE", "https://drive.google.com/drive/folders/14l4zL2oYlNgC-Nygr0spz5s_juiNSFr0"),
        ]
    ),
    grroupedButtonBlockGen(
        `🔰 Web Apps - `,
        [
            webBtnBlockGen("Cloud lib ☁", "https://triptoafsin.github.io/Cloud-Lib-React/#/"),
            webBtnBlockGen("Tex Quiz", "https://triptoafsin.github.io/TexQuiz/"),
            webBtnBlockGen("Count Koto", "https://triptoafsin.github.io/CountKoto-/")
        ]
    ),
]





module.exports = notes;