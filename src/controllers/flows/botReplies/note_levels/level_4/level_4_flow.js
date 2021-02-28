let grroupedButtonBlockGen = require("../../../../genrators/grroupedButtonBlockGen");
let webBtnBlockGen = require("../../../../genrators/webBtnBlockGen");
let payloadBtnGen = require("../../../../genrators/payloadBtnGen");


let level_4_note = [
    grroupedButtonBlockGen(
        `🔴 Question Banks -`,
        [
            webBtnBlockGen("All QB", "https://drive.google.com/drive/folders/1M9QjSqItJW1oZJd1RcG4yeAa41hB_dz-")
        ]
    ),
    grroupedButtonBlockGen(
        `🔰 Select Subject for level 4 -`,
        [
            payloadBtnGen("EPD", "epd_flow"),
            payloadBtnGen("IR", "ir_flow"),
            payloadBtnGen("TAM", "tam_flow")
        ]
    ), 
    grroupedButtonBlockGen(
        `🔰 Select Subject for level 4 -`,
        [
            payloadBtnGen("PPC", "ppc_flow"),
            payloadBtnGen("HRM", "hrm_flow"),
            payloadBtnGen("BS", "bs_flow")
        ]
    ), 
    grroupedButtonBlockGen(
        `🔰 Select Subject for level 4 -`,
        [
            payloadBtnGen("B&IL", "bil_flow"),
            payloadBtnGen("HRM", "hrm_flow"),
            payloadBtnGen("BS", "bs_flow")
        ]
    ), 
    grroupedButtonBlockGen(
        `🟣 Final Viva, Industrial Attachments Resources -`,
        [
            webBtnBlockGen("Drive Folder", "https://drive.google.com/drive/folders/1m-WnO6hdaJ2W7cRJ0v5UdKarvKen4hCM?usp=sharing"),
        ]
    ), 
]





module.exports = level_4_note;