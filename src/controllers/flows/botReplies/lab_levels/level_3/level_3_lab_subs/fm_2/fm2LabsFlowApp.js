let grroupedButtonBlockGen = require('simple-messenger-blocks/groupedBtnBlockGen');
let webBtnBlockGen = require('simple-messenger-blocks/webBtnGen');
let payloadBtnGen = require('simple-messenger-blocks/payloadBtnGen');
let imgBlockGen = require('simple-messenger-blocks/imgBlockGen');


let fm2_lab_flow = [
    imgBlockGen("https://manybot-thumbnails.s3.eu-central-1.amazonaws.com/fb243958719599028/ca/big_4ea8034e14dee64657b53bd213d86ebf.png"),
    grroupedButtonBlockGen(
        "📌 All Report - ",
        [
            webBtnBlockGen("All Report(Bappi)", "https://drive.google.com/file/d/1Y72PDOYkFwW9_l8yoSJ2e27Dh1iLaWiE/view"),
            webBtnBlockGen("All Report(Osmani,2022)", "https://drive.google.com/file/d/1Of6rRBvlEOT_OLCcUPF7y9M0BiExS8oM/view?usp=sharing"),
        ]
    ),
]



module.exports = fm2_lab_flow;