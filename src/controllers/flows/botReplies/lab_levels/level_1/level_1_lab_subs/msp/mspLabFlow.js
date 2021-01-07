let che2_lab_flow = [
    {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "button",
                "text": "🔰 Select Experiment for MSP- ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Layout",
                        "payload": "msp_lab_layout_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Hand tools",
                        "payload": "msp_lab_handTools_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Grinding machine",
                        "payload": "msp_lab_grindingMC_flow"
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
                "text": "🔰 Select Experiment for MSP-  ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Lathe M/C",
                        "payload": "msp_lab_lathe_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Square Key",
                        "payload": "msp_lab_sqKey_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Matching Parts",
                        "payload": "msp_lab_matchingParts_flow"
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
                "text": "🔰 Select Experiment for MSP-  ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Milling Machine",
                        "payload": "msp_lab_milling_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Drilling Machine",
                        "payload": "msp_lab_drilling_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Shaper Machine",
                        "payload": "msp_lab_shaper_flow"
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
                "text": "🔰 Select Experiment for MSP-  ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Welding",
                        "payload": "msp_lab_welding_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Intro Light Machines",
                        "payload": "msp_lab_introLight_flow"
                    },
                    {
                        "type": "web_url",
                        "url": "https://drive.google.com/file/d/1-UfadXXyJUZ8PQ5S0STpfrLFwWN18sth/view",
                        "title": "Turning Op Lathe MC",
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
                "text": "🔰 Select Experiment for MSP-  ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Arc Welding",
                        "payload": "msp_lab_arcWelding_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Manufact.. of Assem",
                        "payload": "msp_lab_manuAssm_flow"
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
                "text": "🔰 Select Experiment for MSP-  ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "MSP Quiz Question",
                        "payload": "msp_lab_mspQuiz_flow"
                    }
                ],
            },
        },
    }
]



module.exports = che2_lab_flow;