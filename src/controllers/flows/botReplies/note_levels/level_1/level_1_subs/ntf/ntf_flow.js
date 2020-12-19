let ntf_flow = [
    {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "button",
                "text": "📌 Hand Notes & Questions -  ",
                "buttons": [
                    {
                        "type": "web_url",
                        "url": "https://drive.google.com/file/d/16xe5aLVA1cTGM2aEJXmEbmG527Ewz7Hb/view?usp=sharing",
                        "title": "Important Que.",
                    },
                    {
                        "type": "web_url",
                        "url": "https://drive.google.com/file/d/1ssWOEjOj1qJrfRO_sKM3uqit1zIbBOKT/view?usp=sharing",
                        "title": "Short Note",
                    },
                    {
                        "type": "web_url",
                        "url": "https://drive.google.com/file/d/19JIpGWPQVP9SWFHfZdisdvNgaSlwxaW5/view?usp=drivesdk",
                        "title": "Full Note",
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
                "text": "🟩 Select Topic for NTF -  ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Books",
                        "payload": "ntf_books_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Hand Notes",
                        "payload": "ntf_hnotes_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Questions",
                        "payload": "ntf_ques_flow"
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
                "text": "🟩 Select Topic for NTF - ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Suggestions/Solve",
                        "payload": "ntf_suggestion_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Intro to NTF",
                        "payload": "ntf_intro_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Cotton Fibre",
                        "payload": "ntf_cotton_flow"
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
                "text": "🟩 Select Topic for NTF -  ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Flax Fibre",
                        "payload": "ntf_flax_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Wool Fibre",
                        "payload": "ntf_wool_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Jute Fibre",
                        "payload": "ntf_jute_flow"
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
                "text": "🟩 Select Topic for NTF - ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Silk Fibre",
                        "payload": "ntf_silk_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Sisal",
                        "payload": "ntf_sisal_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Hemp",
                        "payload": "ntf_hemp_flow"
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
                "text": "🟩 Select Topic for NTF - ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "PALF",
                        "payload": "ntf_palf_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Kapok",
                        "payload": "ntf_kapok_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Asbestos",
                        "payload": "ntf_asbestos_flow"
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
                "text": "🟩 Select Topic for NTF - ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Other Fibres",
                        "payload": "ntf_other_fib_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Play Quiz",
                        "payload": "quiz_flow"
                    },
                ],
            },
        },
    }
]





module.exports = ntf_flow;