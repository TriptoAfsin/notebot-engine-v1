let result = [
    {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "button",
                "text": "🔰 Choose - ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "🔴 Academic Result",
                        "payload": "result_academic"
                    },
                    {
                        "type": "postback",
                        "title": "🔴 Retake Result",
                        "payload": "result_retake"
                    },
                    {
                        "type": "postback",
                        "title": "🔴 Affl. Result",
                        "payload": "result_affli"
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
                "text": "⚡Admission Results - ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "🟠 BUTEX Admission",
                        "payload": "result_admission"
                    },
                ],
            },
        },
    }
]





module.exports = result;