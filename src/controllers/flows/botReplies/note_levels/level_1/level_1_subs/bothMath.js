let bothMath_flow = [
    {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "button",
                "text": "🟩 Select Topic for PHY-I -  ",
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