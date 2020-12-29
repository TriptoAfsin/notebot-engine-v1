let sss1Flow = [
    {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "button",
                "text": "🔰 Select Topic for SSS-I - ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Books",
                        "payload": "sss1_books_flow"
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
                "text": "🔰 Select Topic for SSS-I - ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Blow Room",
                        "payload": "sss1_blowRoom_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Draw Frame",
                        "payload": "sss1_drawFrame_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Carding",
                        "payload": "sss1_carding_flow"
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
                "text": "🔰 Select Topic for SSS-I - ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Intro to SSS(new)",
                        "payload": "sss1_intro_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Intro to Fibre & Ya.",
                        "payload": "sss1_introFibre_flow"
                    }
                ],
            },
        },
    },
]





module.exports = sss1Flow;