let grroupedButtonBlockGen = require('simple-messenger-blocks/groupedBtnBlockGen');
let webBtnBlockGen = require('simple-messenger-blocks/webBtnGen');
let payloadBtnGen = require('simple-messenger-blocks/payloadBtnGen');

let fe204_lab_flow = [
    grroupedButtonBlockGen("⚡ All Report -", [
        webBtnBlockGen("Saidul(2019)", "https://drive.google.com/file/d/1Dch2u7TrWBl2ZfT4Y3azqN8qxSqhsdbz/view"),
        webBtnBlockGen("Samia(2023)", "https://drive.google.com/file/d/1OJVbLdEj0BR8t0T-bR-M_bRl80KvfnaI/view?usp=sharing"),
        webBtnBlockGen("Zishan(2022)", "https://drive.google.com/file/d/1qbt6pfZ55aO9oPs5XolUJgWJfMITAMqp/view?usp=sharing")
    ]),
]



module.exports = fe204_lab_flow;