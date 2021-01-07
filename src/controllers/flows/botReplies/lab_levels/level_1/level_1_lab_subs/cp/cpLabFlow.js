let cp_lab_flow = [
    {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "button",
                "text": "🔰 Select Experiment for CP- ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "1(Intro to C)",
                        "payload": "cp_lab_intro"
                    },
                    {
                        "type": "postback",
                        "title": "2(Conditional sta)",
                        "payload": "cp_lab_condition"
                    },
                    {
                        "type": "postback",
                        "title": "3(Arithmetic)",
                        "payload": "cp_lab_arithmetic"
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
                "text": "🔰 Select Experiment for CP-  ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "4(Sum of Series)",
                        "payload": "cp_lab_sumSeries"
                    },
                    {
                        "type": "postback",
                        "title": "5(Array)",
                        "payload": "cp_lab_array"
                    },
                    {
                        "type": "postback",
                        "title": "6(Recursion:Fact..)",
                        "payload": "cp_lab_recursionFactorial"
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
                "text": "🔰 Select Experiment for CP-  ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "7(Recursion: Fibo..)",
                        "payload": "cp_lab_recursionFibo"
                    },
                    {
                        "type": "postback",
                        "title": "Chapter(1,3,5)(2019)",
                        "payload": "cp_lab_Chapter(1-5)"
                    }
                ],
            },
        },
    }
]



module.exports = cp_lab_flow;