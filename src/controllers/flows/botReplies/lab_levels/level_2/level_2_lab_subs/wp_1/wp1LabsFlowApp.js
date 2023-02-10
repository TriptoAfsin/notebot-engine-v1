let grroupedButtonBlockGen = require('simple-messenger-blocks/groupedBtnBlockGen');
let webBtnBlockGen = require('simple-messenger-blocks/webBtnGen');
let payloadBtnGen = require('simple-messenger-blocks/payloadBtnGen');



let wp1_lab_flow = [
    grroupedButtonBlockGen(
        "⚡ All Combined -",
        [
            webBtnBlockGen("ইয়ামিন", "https://drive.google.com/file/d/11E9-rVvkh0lFe6lXxfqkhY3HZfLeBKAB/view?usp=sharing"),
            webBtnBlockGen("Emran Sir", "https://drive.google.com/file/d/1Ub8pYoYqSYSJLdOUu4qBRX6c11PuYvGG/view?usp=sharing"),
        ]
    )
]



module.exports = wp1_lab_flow;