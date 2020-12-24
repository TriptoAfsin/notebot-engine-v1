let bothPhy_flow = [
    {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "button",
                "text": "🟩 Choose -  ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Physics-I",
                        "payload": "phy1_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Physics-II",
                        "payload": "phy2_flow"
                    },
                ],
            },
        },
    }
]





module.exports = bothPhy_flow;