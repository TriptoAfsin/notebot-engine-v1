let chem2_flow = [
    {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "button",
                "text": "📌 Hand Note -  ",
                "buttons": [
                    {
                        "type": "web_url",
                        "url": "https://drive.google.com/file/d/12LLcW92t1BTLFENL9DQH9xkJOvn0VIVe/view?usp=sharing",
                        "title": "Hand Note(Maruf)",
                    },
                    {
                        "type": "web_url",
                        "url": "https://drive.google.com/file/d/1CzG8tPqz50-Byx72oGolh0u72Hx--rZM/view?usp=sharing",
                        "title": "Important Rea.",
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
                "text": "🟩 Select Topic for CHE-II -  ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Books",
                        "payload": "chem2_books_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Questions",
                        "payload": "chem2_ques_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Organ Metalic Com.",
                        "payload": "chem2_org_meta_flow"
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
                "text": "🟩 Select Topic for CHE-II -  ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Carbonyl Comp.",
                        "payload": "chem2_carbonyl_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Organic Reaction Me",
                        "payload": "chem2_org_reac_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Alcohol & Phenol",
                        "payload": "chem2_alc_phe_flow"
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
                "text": "🟩 Select Topic for CHE-II -  ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Amino Acid",
                        "payload": "chem2_amino_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Carbohydrates",
                        "payload": "chem2_carbo_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Color, Dye, Pigment",
                        "payload": "chem2_color_dye_flow"
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
                "text": "🟩 Select Topic for CHE-II -  ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Carboxylic Acid",
                        "payload": "chem2_carboxylic_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Amine",
                        "payload": "chem2_amine_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Solubulity Boiling",
                        "payload": "chem2_solubulity_flow"
                    }
                ],
            },
        },
    }
]





module.exports = chem2_flow;