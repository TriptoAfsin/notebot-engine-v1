let bce_flow = [
    {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "button",
                "text": "🟩 Select Topic For BCE - ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Questions",
                        "payload": "bce_ques_flow"
                    },
                    {
                        "type": "postback",
                        "title": "All Sheets",
                        "payload": "all_sheets_bce_flow"
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
                        "type": "postback",
                        "title": "Part A",
                        "payload": "part_a_bce_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Part B",
                        "payload": "part_b_bce_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Full(A+B)",
                        "payload": "full_ab_bce_flow"
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
                "text": "🟩 Select Topic For BCE - ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Intro to Language",
                        "payload": "intro_bce_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Language Functions",
                        "payload": "lang_func_bce_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Communication",
                        "payload": "communi_bce_flow"
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
                "text": "🟩 Select Topic For BCE - ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Business Letter",
                        "payload": "letter_bce_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Business Report",
                        "payload": "report_bce_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Reading,Writing..",
                        "payload": "read_write_bce_flow"
                    }
                ],
            },
        },
    },
]





module.exports = bce_flow;