let cp_flow = [
    {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "button",
                "text": "📌 Practical Practises with Solve(Mim, 2020)- -",
                "buttons": [
                    {
                        "type": "web_url",
                        "url": "https://drive.google.com/file/d/1YTSL0vZbTkmEzY3SgusNhwnR6oJqoKr9/view?usp=sharing",
                        "title": "​☄️Downlaod",
                    },
                ],
            },
        },
    },
    {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "button",
                "text": "📌 Full Hand Notes - ",
                "buttons": [
                    {
                        "type": "web_url",
                        "url": "https://drive.google.com/file/d/1KtSiUvkUbWY4gZSARRWqQsD9umXjMy7x/view?usp=sharing",
                        "title": "Saidul(2019)",
                    },
                    {
                        "type": "web_url",
                        "url": "https://drive.google.com/file/d/1VJJGdyJPeh6NjtxvLE2RZUlkwj7wiTcE/view?usp=sharing",
                        "title": "Rohim(SKTEC,2019)",
                    },
                    {
                        "type": "web_url",
                        "url": "https://drive.google.com/file/d/1ptln03o9lpFsh23L7SIVI2KnuzUK8SsD/view?usp=sharing",
                        "title": "Tripto(2018)",
                    },
                ],
            },
        },
    },
    {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "button",
                "text": "🟩 Select Topic for CP -  ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Books",
                        "payload": "books_cp_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Questions",
                        "payload": "ques_cp_flow"
                    },
                ],
            },
        },
    },
    {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "button",
                "text": "🟩 Select Topic for CP -  ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Conditional Statem.",
                        "payload": "condition_cp_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Computer Fundam..",
                        "payload": "fundamental_cp_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Loop",
                        "payload": "loop_cp_flow"
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
                "text": "🟩 Select Topic for CP -  ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Array",
                        "payload": "array_cp_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Function",
                        "payload": "function_cp_flow"
                    },
                    {
                        "type": "postback",
                        "title": "String",
                        "payload": "string_cp_flow"
                    }
                ],
            },
        },
    },
    {
        "text": ``,
        "quick_replies": [{
                "content_type": "text",
                "title": "Friendly Suggestion ☺",
                "payload": "cp_suggestion_flow"
            },

        ]
    }
]





module.exports = cp_flow;