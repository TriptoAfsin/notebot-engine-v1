let level_1_lab = [
    {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "button",
                "text": "🔰 Select Subject Your Lab Report - ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Physics-I",
                        "payload": "phy1_lab_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Chemistry-I",
                        "payload": "che1_lab_flow"
                    },
                    {
                        "type": "postback",
                        "title": "MSP",
                        "payload": "msp_lab_flow"
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
                "text": "🔰 Select Subject Your Lab Report -  ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "ED",
                        "payload": "ed_lab_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Physics-II",
                        "payload": "phy2_lab_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Chemistry-II",
                        "payload": "che2_lab_flow"
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
                "text": "🔰 Select Subject Your Lab Report - ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "AP-I",
                        "payload": "ap1_lab_flow"
                    },
                    {
                        "type": "postback",
                        "title": "BCE",
                        "payload": "bce_lab_flow"
                    },
                    {
                        "type": "postback",
                        "title": "CP",
                        "payload": "cp_lab_flow"
                    }
                ],
            },
        },
    }
]



module.exports = level_1_lab;