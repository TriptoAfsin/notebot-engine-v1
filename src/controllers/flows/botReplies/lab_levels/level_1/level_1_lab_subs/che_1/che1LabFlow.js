let che1_lab_flow = [
    {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "button",
                "text": "⚡Practical Books - ",
                "buttons": [
                    {
                        "type": "web_url",
                        "url": "https://drive.google.com/file/d/1Pv19IT1C_8JAZnsNNGFaHDOmdiojEyCP/view",
                        "title": "Vogel's Quantitive.",
                    },
                    {
                        "type": "web_url",
                        "url": "https://drive.google.com/file/d/1bMefQIGJ-6tVERfAbIrtt-alWUPE1zJw/view",
                        "title": "Vogle's Macro and ..",
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
                "text": "🔰 Select Experiment for Che-I- ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Procedure Sheet(All)",
                        "payload": "che1_procedureSheet_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Acid Radical Ident..",
                        "payload": "che1_acidRadical_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Basic Radical Ident.",
                        "payload": "che1_basicRadical_flow"
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
                "text": "🔰 Select Experiment for Che-I-  ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Mohr's Salt(new)",
                        "payload": "che1_mohrsSalt_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Wet Test",
                        "payload": "che1_wetTest_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Titration",
                        "payload": "che1_titration_flow"
                    }
                ],
            },
        },
    }
]



module.exports = che1_lab_flow;