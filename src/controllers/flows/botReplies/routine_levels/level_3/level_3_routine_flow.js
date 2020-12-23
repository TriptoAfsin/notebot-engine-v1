let level3_routines = [
    {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "button",
                "text": "🔰 Choose Term for Level 3 - ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "🔵 Term 1",
                        "payload": "l3t1Routine_flow"
                    },
                    {
                        "type": "postback",
                        "title": "🔵 Term 2",
                        "payload": "l3t2Routine_flow"
                    }
                ],
            },
        },
    }
]





module.exports = level3_routines;