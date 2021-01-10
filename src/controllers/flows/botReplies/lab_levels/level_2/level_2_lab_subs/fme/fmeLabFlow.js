let mp_lab_flow = [
    {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "button",
                "text": "⚡ Select Experiment for MP -  ",
                "buttons": [
                    {
                        "type": "web_url",
                        "url": "https://drive.google.com/file/d/10k2Xuts_y8zgum2BhLCCcPdbbF4xdBDx/view",
                        "title": "General Guidline",
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
                "text": "🔰 Select Experiment for MP -  ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Exp 1: Lathe MC",
                        "payload": "mp_lab_lathe_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Exp3: Milling M/C",
                        "payload": "mp_lab_milling_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Exp 5:CNC Mill",
                        "payload": "mp_lab_cncMill_flow"
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
                "text": "🔰 Select Experiment for MP -  ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Chips Temp.",
                        "payload": "mp_lab_chipsTemp_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Jack Screw",
                        "payload": "mp_lab_jackScrew_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Exp 7:Inj. Mold",
                        "payload": "mp_lab_injectionMoulding_flow"
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
                "text": "🔰 Select Experiment for MP -  ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Exp10:Sand Mold",
                        "payload": "mp_lab_sandMold_flow"
                    }
                ],
            },
        },
    }
]



module.exports = mp_lab_flow;