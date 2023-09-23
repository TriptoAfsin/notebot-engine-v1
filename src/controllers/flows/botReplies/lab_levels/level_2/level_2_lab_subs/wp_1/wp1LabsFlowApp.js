let grroupedButtonBlockGen = require('simple-messenger-blocks/groupedBtnBlockGen');
let webBtnBlockGen = require('simple-messenger-blocks/webBtnGen');
let payloadBtnGen = require('simple-messenger-blocks/payloadBtnGen');



let wp1_lab_flow = [
    grroupedButtonBlockGen(
        "⚡ All Combined -",
        [
            webBtnBlockGen("ইয়ামিন", "https://drive.google.com/file/d/11E9-rVvkh0lFe6lXxfqkhY3HZfLeBKAB/view?usp=sharing"),
            webBtnBlockGen("Emran Sir", "https://drive.google.com/file/d/1Ub8pYoYqSYSJLdOUu4qBRX6c11PuYvGG/view?usp=sharing"),
            webBtnBlockGen("Nihat(2023)", "https://drive.google.com/file/d/1oeq2w6GJUMwi2x-Bi0TPdrrlLQHcHss5/view?usp=sharing"),
        ]
    ),
    grroupedButtonBlockGen(
        "⚡ All Combined -",
        [
            webBtnBlockGen("Samia", "https://drive.google.com/file/d/1ki_Z6BLw3kgaaiULCqaj5EjiiCoWWM40/view?usp=sharing"),
            webBtnBlockGen("Jabbar", "https://drive.google.com/file/d/1ZtJibS0ezGacPSRi1x4n6vWN0KAufCD8/view?usp=sharing"),
        ]
    ),
    grroupedButtonBlockGen(
        "⚡ All Combined -",
        [
            webBtnBlockGen("Layout(2023)", "https://drive.google.com/file/d/1nbdQQ0dfS5A9J3DDx-k9MU5O4bHjpYEn/view?usp=sharing"),
        ]
    )
]



module.exports = wp1_lab_flow;