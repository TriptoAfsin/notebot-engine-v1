let grroupedButtonBlockGen = require('simple-messenger-blocks/groupedBtnBlockGen');
let webBtnBlockGen = require('simple-messenger-blocks/webBtnGen');
let payloadBtnGen = require('simple-messenger-blocks/payloadBtnGen');


let cp_lab_flow = [
    grroupedButtonBlockGen(
        "📌 All Lab Reports(New) - ",
        [
            webBtnBlockGen("Tahin(2025)", "https://drive.google.com/file/d/1BRilEFrf_Nai12rotBq_Idtuo1cWxJHh/view?usp=sharing"),
            webBtnBlockGen("Sagar(2021)", "https://drive.google.com/file/d/1KUfs791LWjh4VPfPbOs04KsiBhJqAkim/view?usp=sharing"),
            webBtnBlockGen("Emon(2022)", "https://drive.google.com/file/d/12k8aQCUNkANkl-_7HOzznrHA_hj5YANt/view?usp=sharing"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Experiment for CP -",
        [
            payloadBtnGen("1.Intro to C", "cp_lab_intro"),
            payloadBtnGen("2.Conditional sta)", "cp_lab_condition"),
            payloadBtnGen("3.Arithmetic", "cp_lab_arithmetic")
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Experiment for CP -",
        [
            payloadBtnGen("4.Sum of Series", "cp_lab_sumSeries"),
            payloadBtnGen("5.Array", "cp_lab_array"),
            payloadBtnGen("6Recursion:Fact..", "cp_lab_recursionFactorial")
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Experiment for CP -",
        [
            payloadBtnGen("7.Recursion: Fibo..", "cp_lab_recursionFibo"),
            payloadBtnGen("Chapter(1,3,5)(2019)", "cp_lab_Chapter")
        ]
    )
]



module.exports = cp_lab_flow;