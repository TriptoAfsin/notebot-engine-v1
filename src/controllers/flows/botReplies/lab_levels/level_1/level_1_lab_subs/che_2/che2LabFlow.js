let che2_lab_flow = [
    {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "button",
                "text": "⚡Procedure Sheet - ",
                "buttons": [
                    {
                        "type": "web_url",
                        "url": "https://drive.google.com/file/d/1vc36SxJl7wF7urvEKgDfAUxvWRRRdwK6/view",
                        "title": "4-7",
                    },
                    {
                        "type": "web_url",
                        "url": "https://drive.google.com/file/d/1kDoK2ePtQ83cvOvxvpxt18DAxw3glAWO/view",
                        "title": "Water Hardness",
                    },
                    {
                        "type": "web_url",
                        "url": "https://drive.google.com/file/d/1-85nyDhEAJ4xiBWjFiboXeBLLDb4ueZk/view",
                        "title": "All Sheet",
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
                "text": "🔰 Select Experiment for Che-II- ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Physical Pro.. Orga.",
                        "payload": "che2_lab_physicalProp_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Lassaignes Test_1",
                        "payload": "che2_lab_lassaignesTest_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Solubility Test",
                        "payload": "che2_lab_solubilityTest_flow"
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
                "text": "🔰 Select Experiment for Che-II-  ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Alcohol Identify",
                        "payload": "che2_lab_alcoholIdentify_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Lassaignes Test_2",
                        "payload": "che2_lab_lassaignesTest2_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Strength of H2O2",
                        "payload": "che2_lab_h2o2_flow"
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
                "text": "🔰 Select Experiment for Che-II-  ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Amount of Fe(II)",
                        "payload": "che2_lab_amountofFe2_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Carbonyl Identify",
                        "payload": "che2_lab_carbonylIdentify_flow"
                    },
                    {
                        "type": "postback",
                        "title": "-N Identify",
                        "payload": "che2_lab_Nidentity_flow"
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
                "text": "🔰 Select Experiment for Che-II-  ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Amount of Na2CO3",
                        "payload": "che2_lab_amountna2co3_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Carboxylic Identify",
                        "payload": "che2_lab_carboxylicIdentity_flow"
                    }
                ],
            },
        },
    }
]



module.exports = che2_lab_flow;