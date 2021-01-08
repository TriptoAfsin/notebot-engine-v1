let ap1_lab_flow = [
    {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "button",
                "text": "🔰 Select Experiment for AP-I- ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Attaching Interli.",
                        "payload": "ap1_lab_attachingInterline_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Standard Body Mea.",
                        "payload": "ap1_lab_standardBody_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Continuous Fusing MC",
                        "payload": "ap1_lab_continuousFusing_flow"
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
                "text": "🔰 Select Experiment for AP-I-  ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Staright Knife & ",
                        "payload": "ap1_lab_straightKnife_flow"
                    }
                ],
            },
        },
    }
]



module.exports = ap1_lab_flow;