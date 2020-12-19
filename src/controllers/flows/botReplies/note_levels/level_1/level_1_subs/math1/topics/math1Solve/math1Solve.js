let math1Solve = [
    {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "button",
                "text": "🟩 Solves - ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Differentiation",
                        "payload": "math1_diff_solve_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Co-ord Geometry",
                        "payload": "math1_coord_solve_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Intreagation",
                        "payload": "math1_integreation_solve_flow"
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
                "text": "🟩 Solves -   ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Linear Algebra",
                        "payload": "math1_linear_solve_flow"
                    },
                ],
            },
        },
    }
]





module.exports = math1Solve;