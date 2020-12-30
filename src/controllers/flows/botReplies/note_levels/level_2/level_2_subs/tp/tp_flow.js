let tpFlow = [
    {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "button",
                "text": "📌 Full Hand Notes - ",
                "buttons": [
                    {
                        "type": "web_url",
                        "url": "https://drive.google.com/file/d/1N1wxgwmp-ltxPYkOB6UfPPjuOfsz9FTz/view",
                        "title": "Akib's All Note",
                    },
                    {
                        "type": "web_url",
                        "url": "https://drive.google.com/file/d/19oQyEktkXu1n4Cpxa8f_O-s2EQs-gTSG/view",
                        "title": "Jalal Sir Part(Emon)",
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
                "text": "📌 Full TP Sheet(Lutfur Rahman, Affiliated Clg, 2020) - ",
                "buttons": [
                    {
                        "type": "web_url",
                        "url": "https://drive.google.com/file/d/15vQaaVfyd5gOQX_yg4-L18wVWLWkujwc/view",
                        "title": "☄️Download",
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
                "text": "🔰 Select Topics for TP - ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Books",
                        "payload": "tp_books_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Hand Notes",
                        "payload": "tp_notes_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Suggestions",
                        "payload": "tp_sugg_flow"
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
                "text": "🔰 Select Topics for TP - ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Questions",
                        "payload": "tp_ques_flow"
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
                "text": "🔰 Select Topics for TP - ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Swelling",
                        "payload": "tp_swelling_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Friction",
                        "payload": "tp_friction_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Yarn Jamming",
                        "payload": "tp_yarnJamming_flow"
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
                "text": "🔰 Select Topics for TP - ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Optical Property",
                        "payload": "tp_optical_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Fiber Migration",
                        "payload": "tp_fibreMig_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Thermal Properties",
                        "payload": "tp_thermalProp_flow"
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
                "text": "🔰 Select Topics for TP - ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Fibre Drawing",
                        "payload": "tp_fibredraw_flow"
                    },
                    {
                        "type": "postback",
                        "title": "X-Ray Diffra ..",
                        "payload": "tp_x_ray_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Yarn Structure & Pr.",
                        "payload": "tp_yarnStructure_flow"
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
                "text": "🔰 Select Topics for TP - ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Fabric Geometry",
                        "payload": "tp_fabgemometry_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Tensile Properties",
                        "payload": "tp_tensile_flow"
                    }
                ],
            },
        },
    }
]





module.exports = tpFlow;