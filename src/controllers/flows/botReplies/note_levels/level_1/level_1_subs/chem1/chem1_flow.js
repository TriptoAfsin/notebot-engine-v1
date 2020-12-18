let chem1_flow = [
    {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "button",
                "text": "🟩 Select Topics for CHE-I -  ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Books",
                        "payload": "chem1_books_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Questions",
                        "payload": "chem1_ques_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Periodic Properties",
                        "payload": "chem1_periodic_flow"
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
                "text": "🟩 Select Topics for CHE-I - ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Dilute Solution",
                        "payload": "chem1_dilute_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Complex Compound",
                        "payload": "chem1_complx_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Chemical Bond",
                        "payload": "chem1_bond_flow"
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
                "text": "🟩 Select Topics for CHE-I - ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Chemical Kinetics",
                        "payload": "chem1_kinetics_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Chemical Equilibrium",
                        "payload": "chem1_equi_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Photo Chemistry",
                        "payload": "chem1_photo_flow"
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
                "text": "🟩 Select Topics for CHE-I - ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Analytical Analysis",
                        "payload": "chem1_analy_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Colloid",
                        "payload": "chem1_coll_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Acid & Base",
                        "payload": "chem1_acid_base_flow"
                    }
                ],
            },
        },
    },
]





module.exports = chem1_flow;