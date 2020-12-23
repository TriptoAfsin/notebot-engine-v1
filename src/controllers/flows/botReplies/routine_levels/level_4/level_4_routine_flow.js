let level4_routines = [
    {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "button",
                "text": "🔰 Choose Term for Level 4 - ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "🔵 Term 1",
                        "payload": "l4t1Routine_flow"
                    },
                    {
                        "type": "postback",
                        "title": "🔵 Term 2",
                        "payload": "l4t2Routine_flow"
                    }
                ],
            },
        },
    }
]





module.exports = level4_routines;
