let grroupedButtonBlockGen = require("../../../../../../genrators/grroupedButtonBlockGen");
let webBtnBlockGen = require("../../../../../../genrators/webBtnBlockGen");
let payloadBtnGen = require("../../../../../../genrators/payloadBtnGen");
let bondiFlow = require("../../../../sponsoredFlows/bondiCard");


let cp_flow = [
    bondiFlow,
    grroupedButtonBlockGen(
        "⭐ New Notes(2025) - ",
        [
            webBtnBlockGen("Python Theories", "https://drive.google.com/file/d/1ci9dKXE2o93mg3VxnsswkwYKYFmuiZiU/view?usp=sharing"),
            webBtnBlockGen("Python Notes(2025)", "https://drive.google.com/drive/folders/1FM7ZWeUXMMoCjMOTzUeDMlj9NbqAWzy9?usp=sharing"),
        ]
    ),
    grroupedButtonBlockGen(
        "📌 Practical Practices with Solve-",
        [
            webBtnBlockGen("Mim(2020)", "https://drive.google.com/file/d/1YTSL0vZbTkmEzY3SgusNhwnR6oJqoKr9/view?usp=sharing"),
            webBtnBlockGen("Jami(46, 2021)", "https://drive.google.com/file/d/1C2V_SXddc9HIGt9qpw3pC7XtmGda7_Tc/view?usp=sharing")
        ]
    ),
    grroupedButtonBlockGen(
        "📌 QB Solve- ",
        [
            webBtnBlockGen("Arjan(2021)", "https://drive.google.com/file/d/1JSiqXyn5ddXFkOOJTfXxTvvaqm7UMvZw/view?usp=sharing"),
            webBtnBlockGen("Mehedi(Code Solve)", "https://drive.google.com/file/d/1UnVfXUZPMGPjlhK5nBMEvbCk1fKyo0Am/view?usp=sharing")
        ]
    ),
    grroupedButtonBlockGen(
        "📌 Full Hand Notes -",
        [
            webBtnBlockGen("Urmi(2021)", "https://drive.google.com/file/d/1AvCKT4q5fvQdq9C_W0OrwE7_pHmMuwOd/view?usp=sharing"),
            webBtnBlockGen("Sobuj(2021)", "https://drive.google.com/file/d/1L_WkLg6EsBlgN6IIpb_nXBL3zlLVqQD4/view?usp=sharing"),
            webBtnBlockGen("Shomir(2022)", "https://drive.google.com/file/d/1cBJKIyMjjPfqTBaDmpVAvQ1WsXM2aKLn/view?usp=sharing"),
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
            webBtnBlockGen("Lingkon(CTEC,2023)", "https://drive.google.com/file/d/1aTa8nrLfEXDSb3GwbWVnrGvx2Jt_ZThd/view?usp=sharing"),
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