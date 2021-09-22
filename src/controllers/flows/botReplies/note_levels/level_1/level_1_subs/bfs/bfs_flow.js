let grroupedButtonBlockGen = require("simple-messenger-blocks/groupedBtnBlockGen");
let webBtnBlockGen = require("simple-messenger-blocks/webBtnGen");
let payloadBtnGen = require("simple-messenger-blocks/payloadBtnGen");
let cardGenerator = require("simple-messenger-blocks/cardGenerator");
let bondiFlow = require("../../../../sponsoredFlows/bondiCard");



let bfs_flow = [
    grroupedButtonBlockGen(
        "🔰 Select Topic for BFS -",
        [
            webBtnBlockGen("All Slide(2021)", "https://drive.google.com/drive/folders/132FN_kPTdwiCn4HHspHQ7xBREf35JP9P?usp=sharing"),
            payloadBtnGen("Lecture 3", "bfs_lec3_flow")
        ]
    ),
]





module.exports = bfs_flow;