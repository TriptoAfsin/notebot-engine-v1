let grroupedButtonBlockGen = require('simple-messenger-blocks/groupedBtnBlockGen');
let webBtnBlockGen = require('simple-messenger-blocks/webBtnGen');
let payloadBtnGen = require('simple-messenger-blocks/payloadBtnGen');


let fme_lab_flow = [
    grroupedButtonBlockGen(
        "📌 Lab Manual(2023) - ",
        [
            webBtnBlockGen("Download", "https://drive.google.com/file/d/14hx4HCuRby_LINwMk3VB2kiwniy2ImPs/view?usp=sharing")
        ]
    ),
    grroupedButtonBlockGen(
        "📌 Lab Note(2022)",
        [
            webBtnBlockGen("Sazzad(2022)", "https://drive.google.com/file/d/1sRovtBb0HtblVsmVadr02eh8K1w_sigi/view?usp=sharing")
        ]
    ),
    grroupedButtonBlockGen(
        "📌 All Reports -",
        [
            webBtnBlockGen("Tahin(2025)", "https://drive.google.com/drive/folders/1luUARf52IkP89s-z_wqak2-XqJwTI1NS?usp=sharing"),
            webBtnBlockGen("Naimur(2020)", "https://drive.google.com/file/d/1E_RNhj87kifJFY6JNjM8BQkgxh2fbBF4/view")
        ]
    ),
    grroupedButtonBlockGen(
        "📌 Lab Viva Note(Akib, 2020) -",
        [
            webBtnBlockGen("☄️Download", "https://drive.google.com/file/d/1UE87DBj9yhI6_NQDeHwdPMz4Bzw6s-tI/view")
        ]
    )
]



module.exports = fme_lab_flow;