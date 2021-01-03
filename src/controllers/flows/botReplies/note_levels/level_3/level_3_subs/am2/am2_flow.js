let am2Flow = [
    {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "button",
                "text": "🔰 Select Topics for AM-II - ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Books",
                        "payload": "am2_books_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Class Lecture",
                        "payload": "am2_classlec_flow"
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
                "text": "🔰 Select Topics for AM-II -  ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Line Balancing",
                        "payload": "am2_lineBalancing_flow"
                    },
                    {
                        "type": "web_url",
                        "url": "https://drive.google.com/file/d/1zUJYkZ_MRqcPao_rRMG3ALNwpgqjeZ3l/view",
                        "title": "Apparel Industry Inv",
                    },
                    {
                        "type": "web_url",
                        "url": "https://drive.google.com/file/d/16Ry0CxGJaR1rhM8oJTPcI-AdIYHPZKII/view",
                        "title": "Apparel Washing",
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
                "text": "🔰 Select Topics for AM-II - ",
                "buttons": [
                    {
                        "type": "web_url",
                        "url": "https://drive.google.com/file/d/1XVAobJWj8DdsDTaOjE7QW7bep9xw5KkR/view",
                        "title": "Cost & Apparel pro.",
                    },
                    {
                        "type": "web_url",
                        "url": "https://drive.google.com/file/d/1lGfaKEsSbbfyKDJEoabEWFbih2Bta5eQ/view",
                        "title": "Cutting Room Manag.",
                    },
                    {
                        "type": "web_url",
                        "url": "https://drive.google.com/file/d/1TF1n9KW7eRQLOV_1CV88ZbW4ufHTxYtR/view",
                        "title": "Dry Process",
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
                "text": "🔰 Select Topics for AM-II - ",
                "buttons": [
                    {
                        "type": "web_url",
                        "url": "https://drive.google.com/file/d/1nxLSgBJn3UV1IX5RjBZMhtNoWiPXXAO1/view",
                        "title": "Garment Dyeing",
                    },
                    {
                        "type": "web_url",
                        "url": "https://drive.google.com/file/d/1e6NPxbkMROD8qB6IQihIyZyGEksutP8N/view",
                        "title": "Special Apparel",
                    },
                    {
                        "type": "web_url",
                        "url": "https://drive.google.com/file/d/1ZX-QpPJL5XKA-c5Z8O7msx-hCymvX7-q/view",
                        "title": "Washing",
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
                "text": "🔰 Others -  - ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Costing Excel Sheets",
                        "payload": "am2_costingExcel_flow"
                    },
                ],
            },
        },
    },
]





module.exports = am2Flow;