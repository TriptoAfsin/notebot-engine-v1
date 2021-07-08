let grroupedButtonBlockGen = require("../../../../../../genrators/grroupedButtonBlockGen");
let webBtnBlockGen = require("../../../../../../genrators/webBtnBlockGen");
let payloadBtnGen = require("../../../../../../genrators/payloadBtnGen");
let bondiFlow = require("../../../../sponsoredFlows/bondiCard");



let math1_flow = [
    bondiFlow,
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
        ]
    ),
]





module.exports = math1_flow;