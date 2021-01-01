let pdFlow = [
    {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "button",
                "text": "🔰 Select Topics for PD - ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Intro to PD",
                        "payload": "pd_intro_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Understaing customer",
                        "payload": "pd_understandingCustomer_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Planning for design",
                        "payload": "pd_planningDesign_flow"
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
                "text": "🔰 Select Topics for PD - ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Quality Func Deplo",
                        "payload": "pd_qualityFunc_flow"
                    }
                ],
            },
        },
    }
]





module.exports = pdFlow;