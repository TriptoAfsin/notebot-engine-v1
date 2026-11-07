let grroupedButtonBlockGen = require('simple-messenger-blocks/groupedBtnBlockGen');
let webBtnBlockGen = require('simple-messenger-blocks/webBtnGen');


let nfs_lab_flow = [
    grroupedButtonBlockGen(
        "📌 All Lab Reports - ",
        [
            webBtnBlockGen("Jeba(2026)", "https://drive.google.com/file/d/1F56w-cYGUq2KkDh4Qtle2z7q6wZblM38/view?usp=sharing"),
        ]
    ),
]



module.exports = nfs_lab_flow;
