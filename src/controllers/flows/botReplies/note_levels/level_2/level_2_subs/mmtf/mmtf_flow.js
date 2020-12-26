let mmtfFlow = [
    {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "button",
                "text": "📌 Full Hand Notes - ",
                "buttons": [
                    {
                        "type": "web_url",
                        "url": "https://drive.google.com/file/d/1mU864Zkt8PGN5Ebs6RV1QJ5AJfYm8ZZA/view",
                        "title": "Maruf(2020)",
                    },
                    {
                        "type": "web_url",
                        "url": "https://drive.google.com/file/d/1yv4UeJ0X_-bIoNG0KBXzVuxAq5l0WXXT/view",
                        "title": "Nahid(2020, A)",
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
                "text": "🔰 Select Topics for MMTF - ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Books",
                        "payload": "mmtf_books_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Hand Notes",
                        "payload": "mmtf_hnotes_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Suggestions",
                        "payload": "mmtf_sugg_flow"
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
                "text": "🔰 Select Topics for MMTF - ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Intro to MMTF",
                        "payload": "mmtf_intro_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Viscose Rayon",
                        "payload": "mmtf_rayon_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Spinning System",
                        "payload": "mmtf_spinning_sys_flow"
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
                "text": "🔰 Select Topics for MMTF - ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "High Per. Fibre",
                        "payload": "mmtf_high_perf_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Polyamide",
                        "payload": "mmtf_polyamaide_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Modal",
                        "payload": "mmtf_modal_flow"
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
                "text": "🔰 Select Topics for MMTF - ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Elastomer",
                        "payload": "mmtf_elastomer_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Polyolefin",
                        "payload": "mmtf_polyolefin_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Carbon Fibre",
                        "payload": "mmtf_carbon_fibre_flow"
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
                "text": "🔰 Select Topics for MMTF - ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Aceta.. Triac.",
                        "payload": "mmtf_acetate_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Bio Comp.. Fibre",
                        "payload": "mmtf_bio_fibre_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Polyester",
                        "payload": "mmtf_polyester_flow"
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
                "text": "🔰 Select Topics for MMTF - ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Acrylics",
                        "payload": "mmtf_acrylic_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Vectran",
                        "payload": "mmtf_vectran_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Regen. Protein Fibre",
                        "payload": "mmtf_regen_protein_fibre_flow"
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
                "text": "🔰 Select Topics for MMTF - ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Glass Fibre",
                        "payload": "mmtf_glassfib_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Lyocell",
                        "payload": "mmtf_lyocell_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Nylon",
                        "payload": "mmtf_nylon_flow"
                    }
                ],
            },
        },
    }
]





module.exports = mmtfFlow;