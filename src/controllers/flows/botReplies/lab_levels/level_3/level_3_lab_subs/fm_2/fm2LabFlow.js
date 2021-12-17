let grroupedButtonBlockGen = require('simple-messenger-blocks/groupedBtnBlockGen');
let webBtnBlockGen = require('simple-messenger-blocks/webBtnGen');
let payloadBtnGen = require('simple-messenger-blocks/payloadBtnGen');
let imgBlockGen = require('simple-messenger-blocks/imgBlockGen');


let fm2_lab_flow = [
    imgBlockGen("https://manybot-thumbnails.s3.eu-central-1.amazonaws.com/fb243958719599028/ca/big_4ea8034e14dee64657b53bd213d86ebf.png"),
    grroupedButtonBlockGen(
        "🔰 Select Experiment for FM-II -",
        [
            payloadBtnGen("1", "fm2_lab_1_flow"),
            webBtnBlockGen("2", "https://drive.google.com/file/d/1-l9Px8604LD47pj2yL4Isv036-0SqGtr/view"),
            webBtnBlockGen("3", "https://drive.google.com/file/d/11AAIHd9I__F40kCqLIf-UfEnQAYMOpJs/view"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Experiment for FM-II -",
        [
            payloadBtnGen("4", "fm2_lab_4_flow"),
            payloadBtnGen("5", "fm2_lab_5_flow"),
            webBtnBlockGen("6", "https://drive.google.com/file/d/12tve4NrikjDvTEHuOGjgosNqZTjUUCyu/view"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Experiment for FM-II -",
        [
            webBtnBlockGen("All Report(Bappi)", "https://drive.google.com/file/d/1Y72PDOYkFwW9_l8yoSJ2e27Dh1iLaWiE/view"),
        ]
    )
]



module.exports = fm2_lab_flow;