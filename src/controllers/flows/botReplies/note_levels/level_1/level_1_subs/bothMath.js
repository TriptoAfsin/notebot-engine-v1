let bothMath_flow = [
    {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "button",
                "text": "🟩 Choose -  ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Math-I",
                        "payload": "math1_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Math-II",
                        "payload": "math2_flow"
                    },
                ],
            },
        },
    }
]





module.exports = bothMath_flow;