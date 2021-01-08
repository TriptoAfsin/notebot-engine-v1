let sss1_lab_flow = [
    {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "button",
                "text": "⚡ All Combined - ",
                "buttons": [
                    {
                        "type": "web_url",
                        "url": "https://drive.google.com/file/d/1zwRYYJMPrBBumhtinFjxsTL9ecT11jrq/view?usp=sharing",
                        "title": "Shuchi",
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
                "text": "🔰 Select Experiment for SSS-I -  ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Layout Plan",
                        "payload": "sss1_lab_layoutPlan_flow"
                    }
                ],
            },
        },
    }
]



module.exports = sss1_lab_flow;