let routines = [
    {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "button",
                "text": "🔰 Online Class Routine(New)- ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "🔵 L2,1 ",
                        "payload": "online_2_1"
                    },
                    {
                        "type": "postback",
                        "title": "🔵 L3,1",
                        "payload": "online_3_1"
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
                "text": "🔰 Choose - ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "🔵 Level 1",
                        "payload": "routine_level_1"
                    },
                    {
                        "type": "postback",
                        "title": "🔵 Level 2",
                        "payload": "routine_level_2"
                    },
                    {
                        "type": "postback",
                        "title": "🔵 Level 3",
                        "payload": "routine_level_3"
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
                "text": "🔰 Choose - ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "🔵 Level 4",
                        "payload": "routine_level_4"
                    },
                ],
            },
        },
    }

]





module.exports = routines;