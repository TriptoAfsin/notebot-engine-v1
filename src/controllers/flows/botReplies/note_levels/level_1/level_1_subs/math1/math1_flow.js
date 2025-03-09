let grroupedButtonBlockGen = require("simple-messenger-blocks/groupedBtnBlockGen");
let webBtnBlockGen = require("simple-messenger-blocks/webBtnGen");
let payloadBtnGen = require("simple-messenger-blocks/payloadBtnGen");
let cardGenerator = require("simple-messenger-blocks/cardGenerator");
let bondiFlow = require("../../../../sponsoredFlows/bondiCard");



let math1_flow = [
    bondiFlow,
    grroupedButtonBlockGen(
        "📌 Exam Ques  ",
        [
            webBtnBlockGen("Online exam 2021", "https://drive.google.com/file/d/1o--oA-HRcx6uzDM1vxHw8fbX4p-J6246/view?usp=sharing"),
            webBtnBlockGen("Chapter Wise", "https://drive.google.com/drive/folders/1cFTQbokoiOerJ4LyMxtvK0wBF53HF8oB?usp=sharing"),
        ]
    ),
    grroupedButtonBlockGen(
        "📌 Full Notes(2024) - ",
        [
            webBtnBlockGen("Part-B(Saad)", "https://drive.google.com/file/d/1sLB0RcKlKEnyPf0cPZpu6cSlxwoK-5CW/view?usp=sharing"),
        ]
    ),
    grroupedButtonBlockGen(
        "📌 Full Notes - ",
        [
            webBtnBlockGen("Linear, Mat.", "https://drive.google.com/file/d/1MbOxlNbEgtg2J1HNClPNLYfkm5DFt8PL/view?usp=sharing"),
            webBtnBlockGen("Tonmoy(2023)", "https://drive.google.com/file/d/17BSLjEZmOZ6FY6WziTUknrergBe8KvW0/view?usp=sharing"),
            webBtnBlockGen("Shakib(2024)", "https://drive.google.com/file/d/1udynjguTpG0Jsa41l6yEUHHarA2wLQFS/view?usp=sharing"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Topic for Math-I -  ",
        [
            payloadBtnGen("Books", "math1_books_flow"),
            payloadBtnGen("Questions", "math1_ques_flow"),
            payloadBtnGen("Solve(2018)", "math1_solve18_flow"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Topic for Math-I -  ",
        [
            payloadBtnGen("Convergence/Di.", "math1_conv_div_flow"),
            payloadBtnGen("Expansion of Fun.", "math1_exapnsion_flow"),
            payloadBtnGen("Differentiation", "math1_diff_flow"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Topic for Math-I -  ",
        [
            payloadBtnGen("Integration", "math1_integre_flow"),
            payloadBtnGen("Extrema", "math1_extreme_flow"),
            payloadBtnGen("Conics", "math1_conics_flow"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Topic for Math-I -  ",
        [
            payloadBtnGen("Vector Space", "math1_vector_flow"),
            payloadBtnGen("Matrix", "math1_matrix_flow"),
            payloadBtnGen("Co-ord geometry", "math1_co_ord_flow"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Topic for Math-I -  ",
        [
            payloadBtnGen("Linear Algebra", "math1_linear_flow"),
            payloadBtnGen("Change of Axes", "math1_change_axes_flow"),
            webBtnBlockGen("Before Calculus.", "https://drive.google.com/file/d/167Wtl3qKXhA6AiQpSrWD1lDlwxbgjqhD/view?usp=sharing"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Topic for Math-I -  ",
        [
            webBtnBlockGen("Limit", "https://drive.google.com/file/d/1Wk27of00y7Jtb15M9pPsvIL0HAniVTxm/view?usp=sharing"),
            webBtnBlockGen("Area", "https://drive.google.com/file/d/1GogoXrOneMcm-wEcO3M_Nrlsn5UOZFHR/view?usp=sharing"),
            webBtnBlockGen("Before Calculus.", "https://drive.google.com/file/d/167Wtl3qKXhA6AiQpSrWD1lDlwxbgjqhD/view?usp=sharing"),
        ]
    ),
]





module.exports = math1_flow;