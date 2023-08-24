let grroupedButtonBlockGen = require("../../../../genrators/grroupedButtonBlockGen");
let webBtnBlockGen = require("../../../../genrators/webBtnBlockGen");
let payloadBtnGen = require("../../../../genrators/payloadBtnGen");


let level_4_note = [
    grroupedButtonBlockGen(
        `🔴 Question Banks -`,
        [
            webBtnBlockGen("All QB", "https://drive.google.com/drive/folders/17QQ6mXUYe3FL7sf4VMzdBBkRbJAId0VT?usp=sharing"),
            webBtnBlockGen("IPE Ques(42)", "https://drive.google.com/file/d/17og6Ea9pYJnrEVO3_fKRLEfQMtbxhcza/view?usp=sharing"),
            webBtnBlockGen("IPE - 4-1 Ques(2022)", "https://drive.google.com/file/d/1h0QFixuMTYPzSVZjtckhYFGqX4QTnj8-/view?usp=sharing")
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
            webBtnBlockGen("Sociology", "https://drive.google.com/drive/folders/1dp46oYLKPp2Iruv0mM01uTCB-x0Hvn3r?usp=sharing"),
            webBtnBlockGen("IEAP", "https://drive.google.com/drive/folders/1YqLpLaP9KUMcnBsecumdwQ6hzOYLNsIQ?usp=sharing"),
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
            webBtnBlockGen("IE(Old Syl.)", "https://drive.google.com/drive/folders/1qrbsRc4WWRKjCO3bqQDp0JK5S6Tvl6b6?usp=sharing")
        ]
    ), 
    grroupedButtonBlockGen(
        `🟣 Final Viva, Industrial Attachments Resources -`,
        [
            webBtnBlockGen("Drive Folder", "https://drive.google.com/drive/folders/1m-WnO6hdaJ2W7cRJ0v5UdKarvKen4hCM?usp=sharing"),
            webBtnBlockGen("YE Project Work", "https://drive.google.com/file/d/1dEfe-DrJo6fvLDXAOzR7O4yger_fTUtH/view?usp=sharing"),
        ]
    ), 
]





module.exports = level_4_note;