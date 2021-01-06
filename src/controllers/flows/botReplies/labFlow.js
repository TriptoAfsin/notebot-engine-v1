let lab = [
    {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "button",
                "text": "🔰 Choose - ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "🟣 Level 1",
                        "payload": "level_1_lab"
                    },
                    {
                        "type": "postback",
                        "title": "🟣 Level 2",
                        "payload": "level_2_lab"
                    },
                    {
                        "type": "postback",
                        "title": "🟣 Level 3",
                        "payload": "level_3_lab"
                    }
                ],
            },
        },
    }
]





module.exports = lab;