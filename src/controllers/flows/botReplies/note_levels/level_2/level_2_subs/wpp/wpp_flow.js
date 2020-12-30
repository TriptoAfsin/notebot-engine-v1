let wppFlow = [
    {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "button",
                "text": "🔰 Select Topics for WPP - ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Questions",
                        "payload": "wpp_quess_flow"
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
                "text": "🔰 Select Topics for WPP - ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Pretreatment",
                        "payload": "wpp_pretreatment_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Singeing",
                        "payload": "wpp_singeing_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Desizing",
                        "payload": "wpp_desizing_flow"
                    }
                ],
            },
        },
    }
]





module.exports = wppFlow;