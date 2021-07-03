let grroupedButtonBlockGen = require("../../../../../../genrators/grroupedButtonBlockGen");
let webBtnBlockGen = require("../../../../../../genrators/webBtnBlockGen");
let payloadBtnGen = require("../../../../../../genrators/payloadBtnGen");


let cp_flow = [
    grroupedButtonBlockGen(
        "📌 Practical Practices with Solve(Mim, 2020)-",
        [
            webBtnBlockGen("☄️Download", "https://drive.google.com/file/d/1YTSL0vZbTkmEzY3SgusNhwnR6oJqoKr9/view?usp=sharing")
        ]
    ),
    grroupedButtonBlockGen(
        "📌 Full QB Solve(2021, Arjan-45)- ",
        [
            webBtnBlockGen("☄️Download", "https://drive.google.com/file/d/1JSiqXyn5ddXFkOOJTfXxTvvaqm7UMvZw/view?usp=sharing")
        ]
    ),
    grroupedButtonBlockGen(
        "📌 Full Hand Notes -",
        [
            webBtnBlockGen("Saidul(2019)", "https://drive.google.com/file/d/1KtSiUvkUbWY4gZSARRWqQsD9umXjMy7x/view?usp=sharing"),
            webBtnBlockGen("Rohim(SKTEC,2019)", "https://drive.google.com/file/d/1VJJGdyJPeh6NjtxvLE2RZUlkwj7wiTcE/view?usp=sharing"),
            webBtnBlockGen("Tripto(2018)", "https://drive.google.com/file/d/1ptln03o9lpFsh23L7SIVI2KnuzUK8SsD/view?usp=sharing")
        ]
    ),
    grroupedButtonBlockGen(
        "📌 Full Hand Notes -",
        [
            webBtnBlockGen("Urmi(2021)", "https://drive.google.com/file/d/1AvCKT4q5fvQdq9C_W0OrwE7_pHmMuwOd/view?usp=sharing"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Topic for CP -",
        [
            payloadBtnGen("Books", "books_cp_flow"),
            payloadBtnGen("Questions", "ques_cp_flow"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Topic for CP -",
        [
            payloadBtnGen("Computer Fundam..", "fundamental_cp_flow"),
            payloadBtnGen("Conditional Statem.", "condition_cp_flow"),
            payloadBtnGen("Loop", "loop_cp_flow"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Topic for CP -",
        [
            payloadBtnGen("Array", "array_cp_flow"),
            payloadBtnGen("Function", "function_cp_flow"),
            payloadBtnGen("String", "string_cp_flow"),
        ]
    ),
    grroupedButtonBlockGen(
        "⭐ Useful Suggestion",
        [
            payloadBtnGen("Suggestion 🟢", "suggestion_cp_flow"),
        ]
    ),
]





module.exports = cp_flow;