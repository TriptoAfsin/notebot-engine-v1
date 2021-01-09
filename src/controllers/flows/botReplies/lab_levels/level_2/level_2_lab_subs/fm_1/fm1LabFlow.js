let fm1_lab_flow = [
    {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "button",
                "text": "⚡ All Report(Saidul, 2019)- ",
                "buttons": [
                    {
                        "type": "web_url",
                        "url": "hhttps://drive.google.com/file/d/1FEbPctE5twrOgtjp47ei-Na9S0VPhNdg/view",
                        "title": "DownAll Report(Imran)",
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
                "text": "🔰 Select Experiment for FM-I -  ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "1.Layout",
                        "payload": "fm1_lab_layout_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Tappet Shedding",
                        "payload": "fm1_lab_tappetShedding_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Looming",
                        "payload": "fm1_lab_looming_flow"
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
                "text": "🔰 Select Experiment for FM-I -  ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "2. Package",
                        "payload": "fm1_lab_package_flow"
                    },
                    {
                        "type": "postback",
                        "title": "3. Cheese Wind",
                        "payload": "fm1_lab_cheesWinding_flow"
                    },
                    {
                        "type": "postback",
                        "title": "4. High speed wrap",
                        "payload": "fm1_lab_highSpeedWarp_flow"
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
                "text": "🔰 Select Experiment for FM-I -  ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "5. Sectional Warping",
                        "payload": "fm1_lab_sectionalWarping_flow"
                    },
                    {
                        "type": "postback",
                        "title": "6.Conv Sizing",
                        "payload": "fm1_lab_conventionalSizing_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Dobby",
                        "payload": "fm1_lab_dobby_flow"
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
                "text": "🔰 Select Experiment for FM-I -  ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Sizing",
                        "payload": "fm1_lab_sizing_flow"
                    }
                ],
            },
        },
    }
]



module.exports = fm1_lab_flow;