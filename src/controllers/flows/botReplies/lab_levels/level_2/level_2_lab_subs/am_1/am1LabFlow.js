let am1_lab_flow = [
    {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "button",
                "text": "🔰 Select Experiment for AM-I -  ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Layout Plan",
                        "payload": "am1_lab_layoutPlan_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Standard Body Me.",
                        "payload": "am1_lab_standardBody_flow"
                    },
                    {
                        "type": "postback",
                        "title": "All Report",
                        "payload": "am1_lab_AllReport_flow"
                    }
                ],
            },
        },
    }
]



module.exports = am1_lab_flow;