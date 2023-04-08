let grroupedButtonBlockGen = require("../../../../../../genrators/grroupedButtonBlockGen");
let webBtnBlockGen = require("../../../../../../genrators/webBtnBlockGen");
let payloadBtnGen = require("../../../../../../genrators/payloadBtnGen");
let cardGenerator = require("../../../../../../genrators/cardGenerator");


let ttqc_lab_flow = [
    grroupedButtonBlockGen("⚡ All Report - ",
        [
            webBtnBlockGen("Dipa(2023)", "https://drive.google.com/file/d/12cy4xEEjPXSGmRchEpSep-CVX4qGJOud/view?usp=sharing"),
            webBtnBlockGen("Naimur(2019)", "https://drive.google.com/file/d/1wS3qCMrRrujFQiRjEKtiVDAn-YnSuIsQ/view"),
            webBtnBlockGen("Hasibul(2019)", "https://drive.google.com/file/d/1l3LJpOCMGnIvol3MQ7RxS6CHjYdTuuqD/view?usp=sharing"),
        ]
    ),
    grroupedButtonBlockGen("⚡ All Report - ",
        [
            webBtnBlockGen("Arindom(2023)", "https://drive.google.com/file/d/12cy4xEEjPXSGmRchEpSep-CVX4qGJOud/view?usp=sharing"),
        ]
    ),
]



module.exports = ttqc_lab_flow;