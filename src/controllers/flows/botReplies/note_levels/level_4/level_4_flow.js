let level_4_note = [
    {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "button",
                "text": "🔴 Question Banks - ",
                "buttons": [
                    {
                        "type": "web_url",
                        "url": "https://drive.google.com/drive/folders/1M9QjSqItJW1oZJd1RcG4yeAa41hB_dz-",
                        "title": "All QB",
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
                    }
                ],
            },
        },
    },
]





module.exports = level_4_note;