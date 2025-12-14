let grroupedButtonBlockGen = require('simple-messenger-blocks/groupedBtnBlockGen');
let webBtnBlockGen = require('simple-messenger-blocks/webBtnGen');
let SubTopicTrans = require('../../../../../translaters/SubTopicTrans');

const fytLabFlow = [
    grroupedButtonBlockGen(
        "📌 Select Topic For FYT -",
        [
            webBtnBlockGen("FYT", "https://drive.google.com/drive/folders/1UKeBH7hsqxUe6ah3mKXdYoFsONncqMfC?usp=sharing"),
        ]
    )
];

let routePrefix = "app/labs/2/fyt";

let fytLabApp = SubTopicTrans(routePrefix, fytLabFlow);

module.exports = fytLabApp;
