let ctcaFlow = [
    {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "button",
                "text": "🔰 Select Topics for CTCA - ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Books",
                        "payload": "ctca_books_flow"
                    },
                    {
                        "type": "web_url",
                        "url": "https://drive.google.com/file/d/1WISMzZ9_jsW3ijr11LMm6LnAUNxDAvJp/view",
                        "title": "Question Bank",
                    },
                    {
                        "type": "postback",
                        "title": "Sheets",
                        "payload": "ctca_sheets_flow"
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
                "text": "🔰 Select Topics for CTCA - ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Thickening Agents",
                        "payload": "ctca_thickAge_flow"
                    }
                    ,
                    {
                        "type": "postback",
                        "title": "Water",
                        "payload": "ctca_water_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Surfactants",
                        "payload": "ctca_surfactants_flow"
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
                "text": "🔰 Select Topics for CTCA - ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Bleaching & Enzyme",
                        "payload": "ctca_bleach_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Solutions",
                        "payload": "ctca_solutions_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Colloid",
                        "payload": "ctca_colloid_flow"
                    }
                ],
            },
        },
    }
]





module.exports = ctcaFlow;