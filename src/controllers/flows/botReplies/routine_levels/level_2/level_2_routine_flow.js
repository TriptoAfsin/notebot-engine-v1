let level2_routines = [
    {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "button",
                "text": "🔰 Choose Term for Level 2 - ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "🔵 Term 1",
                        "payload": "l2t1Routine_flow"
                    },
                    {
                        "type": "postback",
                        "title": "🔵 Term 2",
                        "payload": "l2t2Routine_flow"
                    }
                ],
            },
        },
    }
]





module.exports = level2_routines;