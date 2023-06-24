let grroupedButtonBlockGen = require("../../../../../../genrators/grroupedButtonBlockGen");
let webBtnBlockGen = require("../../../../../../genrators/webBtnBlockGen");
let payloadBtnGen = require("../../../../../../genrators/payloadBtnGen");

let ym2_lab_flow = [
    grroupedButtonBlockGen("🔰 Select Experiment for YM-II -", [
        webBtnBlockGen("Layout", "https://drive.google.com/file/d/14gYtkxMSQGTo2sq8avT1tv7U-GK6_lVF/view?usp=sharing"),
        webBtnBlockGen("Layout(2023)", "https://drive.google.com/file/d/1iM2h2RVYkq-8dfY2GH8Z6WdQrfV-sP9r/view?usp=sharing"),
    ]),
    grroupedButtonBlockGen("🔰 Select Experiment for YM-II -", [
        webBtnBlockGen("All Report(Bappi)", "https://drive.google.com/file/d/1kOoYsSOA9s3HMX1COsPZhDRoD3_wjhJE/view"),
    ]),
    grroupedButtonBlockGen("🔰 Select Experiment for YM-II -", [
        webBtnBlockGen("All Report(Bandhan)", "https://drive.google.com/file/d/1meblX-51CX0OKGGpx0qn-lIHLxARx6ey/view"),
    ])
]



module.exports = ym2_lab_flow;