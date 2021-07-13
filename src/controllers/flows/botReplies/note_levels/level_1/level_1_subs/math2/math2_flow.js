let grroupedButtonBlockGen = require("../../../../../../genrators/grroupedButtonBlockGen");
let webBtnBlockGen = require("../../../../../../genrators/webBtnBlockGen");
let payloadBtnGen = require("../../../../../../genrators/payloadBtnGen");
let cardGenerator = require("../../../../../../genrators/cardGenerator");
let bondiFlow = require("../../../../sponsoredFlows/bondiCard");



let math2_flow = [
    bondiFlow,
    grroupedButtonBlockGen(
        "📌 Hand Notes(Sabiha, TFD-45,2021) -",
        [
            webBtnBlockGen("Short Note", "https://drive.google.com/file/d/1XpSq3P0_bXNSvrkK_shSPDNZa2aInlbs/view?usp=sharing"),
            webBtnBlockGen("Definitions", "https://drive.google.com/file/d/16PsJLtBfXE2ovP3bXqJgtTYb7FRUWvi1/view?usp=sharing"),
            webBtnBlockGen("MCQ", "https://drive.google.com/drive/folders/1pTYAebVn77kJfhhKs6YK4q-bk9yEmniq?usp=sharing")
        ]
    ),
    grroupedButtonBlockGen(
        "📌 Select Topic for Math-II -",
        [
            payloadBtnGen("Books", "math2_books_flow"),
            payloadBtnGen("Questions", "math2_ques_flow"),
            payloadBtnGen("Suggestion", "math2_suggestion_flow")
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Topic for Math-II -",
        [
            payloadBtnGen("Moivre's Theorem", "math2_moivre_flow"),
            payloadBtnGen("Homogenous Eqn", "math2_homo_flow"),
            payloadBtnGen("Exact Equation", "math2_exact_flow")
        ]
    ), 
    grroupedButtonBlockGen(
        "🔰 Select Topic for Math-II -",
        [
            payloadBtnGen("Linear Diff Eqn(LDE)", "math2_lde_flow"),
            payloadBtnGen("Reducible Homo Eqn", "math2_red_homo_flow"),
            payloadBtnGen("Differential Eqn", "math2_dif_eqn_flow")
        ]
    ), 
    grroupedButtonBlockGen(
        "🔰 Select Topic for Math-II -",
        [
            payloadBtnGen("Linear eqn", "math2_linear_eqn_flow"),
            payloadBtnGen("Residue", "math2_residue_flow"),
            payloadBtnGen("Line Integration", "math2_line_int_flow")
        ]
    ), 
    grroupedButtonBlockGen(
        "🔰 Select Topic for Math-II -",
        [
            payloadBtnGen("Method of Var", "math2_method_var_flow"),
            payloadBtnGen("Analytic function", "math2_analy_func_flow"),
            payloadBtnGen("Vector Analysis", "math2_vector_flow")
        ]
    ), 
    grroupedButtonBlockGen(
        "🔰 Select Topic for Math-II -",
        [
            payloadBtnGen("ODE", "math2_ode_flow"),
            payloadBtnGen("Separation of varia", "math2_separation_flow"),
            payloadBtnGen("Laplace Transform", "math2_laplace_flow")
        ]
    ), 
    grroupedButtonBlockGen(
        "🔰 Select Topic for Math-II -",
        [
            payloadBtnGen("Complex Number", "math2_cx_num_flow"),
        ]
    ), 
]





module.exports = math2_flow;