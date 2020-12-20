let pse_flow = [
    {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "button",
                "text": "🟩 Select Topics for PSE -  ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Books",
                        "payload": "pse_books_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Questions",
                        "payload": "pse_ques_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Hand Notes",
                        "payload": "pse_handnotes_flow"
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
                "text": "🟩 Select Topics for PSE -  ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Intro to Polymers",
                        "payload": "pse_intro_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Physical Structure",
                        "payload": "pse_physical_struc_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Chemical Structure",
                        "payload": "pse_chemical_struc_flow"
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
                "text": "🟩 Select Topics for PSE -  ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Molecular Weight",
                        "payload": "pse_molWei_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Step Growth",
                        "payload": "pse_step_growth_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Chain Growth",
                        "payload": "pse_chain_growth_flow"
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
                "text": "🟩 Select Topics for PSE -  ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Thermal Transition",
                        "payload": "pse_thermal_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Polymer Degradation",
                        "payload": "pse_degrad_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Polymerization Tec.",
                        "payload": "pse_polymer_tec_flow"
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
                "text": "🟩 Select Topics for PSE -  ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Applic.. of Polymers",
                        "payload": "pse_application_flow"
                    }
                ],
            },
        },
    }
]





module.exports = pse_flow;