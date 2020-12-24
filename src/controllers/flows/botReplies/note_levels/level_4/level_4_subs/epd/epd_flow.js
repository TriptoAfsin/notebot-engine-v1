let epdFlow = [
    {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "button",
                "text": "🔴 Question Banks - ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "All Level 4",
                        "payload": "qb_4_flow"
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
                "text": "🔰 Select Subject for level  4- ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "EPD",
                        "payload": "epd_flow"
                    },
                    {
                        "type": "postback",
                        "title": "IR",
                        "payload": "ir_flow"
                    },
                    {
                        "type": "postback",
                        "title": "TAM",
                        "payload": "tam_flow"
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
                "text": "🔰 Select Subject for level 4 - ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "PPC",
                        "payload": "ppc_flow"
                    },
                    {
                        "type": "postback",
                        "title": "HRM",
                        "payload": "hrm_flow"
                    },
                    {
                        "type": "postback",
                        "title": "BS",
                        "payload": "bs_flow"
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
                "text": "🔰 Select Subject for level 4 - ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "B&IL",
                        "payload": "bil_flow"
                    },
                    {
                        "type": "postback",
                        "title": "QM",
                        "payload": "qm_flow"
                    },
                ],
            },
        },
    },
]





module.exports = epdFlow;