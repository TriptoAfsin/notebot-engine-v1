let grroupedButtonBlockGen = require("../../genrators/grroupedButtonBlockGen");
let webBtnBlockGen = require("../../genrators/webBtnBlockGen");
let payloadBtnGen = require("../../genrators/payloadBtnGen");
let cardGen = require("../../genrators/cardGenerator");

let routines = [
    grroupedButtonBlockGen(
        "🔴 Online Exam Routine(2021)-",
        [
            webBtnBlockGen("🔵 L1,1 ", "https://www.butex.edu.bd/wp-content/uploads/2021/08/20210809_173940.jpg"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Online Class Routine(New)-",
        [
            payloadBtnGen("🔵 L2,1 ", "online_2_1"),
            payloadBtnGen("🔵 L3,1 ", "online_3_1"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Choose(Academic) -",
        [
            payloadBtnGen("🔵 Level 1", "routine_level_1"),
            payloadBtnGen("🔵 Level 2", "routine_level_2"),
            payloadBtnGen("🔵 Level 3", "routine_level_3"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Choose(Academic) -",
        [
            payloadBtnGen("🔵 Level 4", "routine_level_4"),
        ]
    ),
]





module.exports = routines;