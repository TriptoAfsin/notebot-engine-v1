let ap1Flow = [
    {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "button",
                "text": "📌 Full Hand Note & Slide (2020) -  ",
                "buttons": [
                    {
                        "type": "web_url",
                        "url": "https://drive.google.com/file/d/1MSe7Mc7MlqLCIziwBa3iTJQb6nkYRgM-/view",
                        "title": "Part A (Rifat)",
                    },
                    {
                        "type": "web_url",
                        "url": "https://drive.google.com/file/d/1BtjAiJBU0eL-UkM66Rr3V7n5FUcWMhUx/view",
                        "title": "Part B (Rifat)",
                    },
                    {
                        "type": "web_url",
                        "url": "https://drive.google.com/file/d/1nO_R7oC3MW_Ze9lQS1RjfIKBUrY_SB2M/view",
                        "title": "Slide Part A",
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
                "text": "🔰 Select Topics for AM-I - ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Books",
                        "payload": "am1_books_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Hand Notes",
                        "payload": "am1_hnotes_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Questions",
                        "payload": "am1_ques_flow"
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
                "text": "🔰 Select Topics for AM-I - ",
                "buttons": [
                    {
                        "type": "web_url",
                        "url": "https://drive.google.com/file/d/1oUqikuBVJr5l4LTRF8NAhFe5J1CBMt-D/view",
                        "title": "Basic Terms(Tripto)",
                    },
                    {
                        "type": "postback",
                        "title": "Intro",
                        "payload": "am1_intro_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Structure of Tex In",
                        "payload": "am1_structure_tex_flow"
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
                "text": "🔰 Select Topics for AM-I - ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Sizing System",
                        "payload": "am1_sizing_sys_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Seam & Stitch",
                        "payload": "am1_seam_stitch_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Trims & Acces..",
                        "payload": "am1_trim_acces_flow"
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
                "text": "🔰 Select Topics for AM-I - ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Interlining",
                        "payload": "am1_interlining_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Pattern",
                        "payload": "am1_pattern_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Marker",
                        "payload": "am1_marker_flow"
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
                "text": "🔰 Select Topics for AM-I - ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Spreading",
                        "payload": "am1_spreading_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Fabric Cutting",
                        "payload": "am1_fabric_cut_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Fabric Inspection",
                        "payload": "am1_fabricInspection_flow"
                    }
                ],
            },
        },
    }
]





module.exports = ap1Flow;