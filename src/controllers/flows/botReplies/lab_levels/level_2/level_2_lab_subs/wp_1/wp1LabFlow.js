let wp1_lab_flow = [
    {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "button",
                "text": "🔰 Select Experiment for WP-I -  ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "1)layout",
                        "payload": "wp1_lab_layout_flow"
                    },
                    {
                        "type": "postback",
                        "title": "2)Alk Scouring",
                        "payload": "wp1_lab_alkScouring_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Combined(Cot)",
                        "payload": "wp1_lab_combinedScouringCotton_flow"
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
                "text": "🔰 Select Experiment for WP-I -  ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Combined(Jute)",
                        "payload": "wp1_lab_combinedScouringJute_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Direct Dye",
                        "payload": "wp1_lab_directDye_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Reactive Dye",
                        "payload": "wp1_lab_reactiveDye_flow"
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
                "text": "🔰 Select Experiment for WP-I -  ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Disperse Dye",
                        "payload": "wp1_lab_disperseDye_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Acid Dye",
                        "payload": "wp1_lab_acidDye_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Basic Dye",
                        "payload": "wp1_lab_basicDye_flow"
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
                "text": "🔰 Select Experiment for WP-I -  ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Vat Dye",
                        "payload": "wp1_lab_vatDye_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Rubbing Fast..",
                        "payload": "wp1_lab_rubbing_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Pigment on Cotton",
                        "payload": "wp1_lab_pigmentCotton_flow"
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
                "text": "⚡ All Combined - ",
                "buttons": [
                    {
                        "type": "web_url",
                        "url": "https://drive.google.com/file/d/11E9-rVvkh0lFe6lXxfqkhY3HZfLeBKAB/view?usp=sharing",
                        "title": "ইয়ামিন",
                    },
                    {
                        "type": "web_url",
                        "url": "https://drive.google.com/file/d/1Ub8pYoYqSYSJLdOUu4qBRX6c11PuYvGG/view?usp=sharing",
                        "title": "Emran Sir",
                    }
                ],
            },
        },
    }
]



module.exports = wp1_lab_flow;