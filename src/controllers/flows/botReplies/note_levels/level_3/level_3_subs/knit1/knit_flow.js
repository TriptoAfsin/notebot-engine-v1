let knit1Flow = [
    {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "button",
                "text": "🔰 Select Topics for Knitting-I - ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Lecture",
                        "payload": "knit_lecture_flow"
                    },
                ],
            },
        },
    }
]





module.exports = knit1Flow;