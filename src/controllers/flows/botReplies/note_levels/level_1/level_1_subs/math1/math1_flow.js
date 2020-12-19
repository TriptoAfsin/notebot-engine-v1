let math1_flow = [
    {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "button",
                "text": "🟩 Select Topic for Math-I -  ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Books",
                        "payload": "math1_books_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Questions",
                        "payload": "math1_ques_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Solve(2018)",
                        "payload": "math1_solve18_flow"
                    }
                ],
            },
        },
    },
    {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "button",
                "text": "🟩 Select Topic for Math-I -  ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Convergence/Di.",
                        "payload": "math1_conv_div_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Expansion of Fun.",
                        "payload": "math1_exapnsion_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Differentiation",
                        "payload": "math1_diff_flow"
                    }
                ],
            },
        },
    },
    {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "button",
                "text": "🟩 Select Topic for Math-I - ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Integration",
                        "payload": "math1_integre_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Extrema",
                        "payload": "math1_extreme_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Conics",
                        "payload": "math1_conics_flow"
                    }
                ],
            },
        },
    },
    {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "button",
                "text": "🟩 Select Topic for Math-I -  ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Vector Space",
                        "payload": "math1_vector_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Matrix",
                        "payload": "math1_matrix_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Co-ord geometry",
                        "payload": "math1_co_ord_flow"
                    }
                ],
            },
        },
    },
    {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "button",
                "text": "🟩 Select Topic for Math-I - ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Linear Algebra",
                        "payload": "math1_linear_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Change of Axes",
                        "payload": "math1_change_axes_flow"
                    }
                ],
            },
        },
    }
]





module.exports = math1_flow;