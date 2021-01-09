let ym1_lab_flow = [
    {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "button",
                "text": "⚡ All Report(Saidul, 2019)- ",
                "buttons": [
                    {
                        "type": "web_url",
                        "url": "https://drive.google.com/file/d/1Cp6EuJvXW6YqWeDDRX8k_kPu4WR5Nieb/view",
                        "title": "Download",
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
                "text": "⚡ Lab Viva Note(Naimur, 2020)- ",
                "buttons": [
                    {
                        "type": "web_url",
                        "url": "https://drive.google.com/file/d/1roX4eDoc75v2Mfk-8jHm8t9YuXRDb5Rk/view",
                        "title": "Download",
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
                "text": "🔰 Select Experiment for YM-I -  ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "1. Layout",
                        "payload": "ym1_lab_layout_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Principle of SSS",
                        "payload": "ym1_lab_pricipleSSS_flow"
                    },
                    {
                        "type": "postback",
                        "title": "2. Bale Opener",
                        "payload": "ym1_lab_baleOpener_flow"
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
                "text": "🔰 Select Experiment for YM-I -  ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Porcupine ... Scut",
                        "payload": "ym1_lab_porcupine_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Ring Frame",
                        "payload": "ym1_lab_ringFrame_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Simplex",
                        "payload": "ym1_lab_simplex_flow"
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
                "text": "🔰 Select Experiment for YM-I -  ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Comber",
                        "payload": "ym1_lab_comber_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Drawframe",
                        "payload": "ym1_lab_drawFrame_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Carding",
                        "payload": "ym1_lab_carding_flow"
                    }
                ],
            },
        },
    }
]



module.exports = ym1_lab_flow;