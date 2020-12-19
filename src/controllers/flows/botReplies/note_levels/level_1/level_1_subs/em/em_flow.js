let em_flow = [
    {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "button",
                "text": "📌 Short Hand Note All(Saidul, 2019) -   ",
                "buttons": [
                    {
                        "type": "web_url",
                        "url": "https://drive.google.com/file/d/11lnmfUbsrYQa0dwJvCoe3uU2JmNPAOUE/view?usp=sharing",
                        "title": "⚡Download",
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
                "text": "🟩 Select Topics for EM -  ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Books",
                        "payload": "em_books_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Questions",
                        "payload": "em_ques_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Math Chotha",
                        "payload": "em_math_flow"
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
                "text": "🟩 Select Topics for EM -   ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Blast Furnance",
                        "payload": "em_blast_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Heat Treatment",
                        "payload": "em_heat_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Wrought, cast iron",
                        "payload": "em_wrought_flow"
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
                "text": "🟩 Select Topics for EM -  ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Crystal Structure",
                        "payload": "em_crystal_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Iron,Ceramic,Lub",
                        "payload": "em_iron_ceramic_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Glass",
                        "payload": "em_glass_flow"
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
                "text": "🟩 Select Topics for EM -  ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Ceramics",
                        "payload": "em_ceramic_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Corrosion",
                        "payload": "em_corrosion_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Alloy",
                        "payload": "em_alloy_flow"
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
                "text": "🟩 Select Topics for EM -  ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Composites",
                        "payload": "em_composites_flow"
                    }
                ],
            },
        },
    }
]





module.exports = em_flow;