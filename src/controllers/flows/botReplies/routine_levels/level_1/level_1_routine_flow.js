let level1_routines = [
    {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "button",
                "text": "🔰 Choose Term for Level 1 - ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "🔵 Term 1",
                        "payload": "l1t1Routine_flow"
                    },
                    {
                        "type": "postback",
                        "title": "🔵 Term 2",
                        "payload": "l1t2Routine_flow"
                    }
                ],
            },
        },
    }
]





module.exports = level1_routines;