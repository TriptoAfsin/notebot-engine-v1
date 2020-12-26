let ttqcFlow = [
    {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "button",
                "text": "📌 Full Hand Notes - ",
                "buttons": [
                    {
                        "type": "web_url",
                        "url": "https://drive.google.com/file/d/117BxjlWQoCQDxpHPjPKK2LnwJ9ZOf0GT/view",
                        "title": "Nahid(A,2020)",
                    },
                    {
                        "type": "web_url",
                        "url": "https://drive.google.com/file/d/10tgBY4GOUW4uG1JSLaI4gGfNXmtsuHVl/view",
                        "title": "Nahid(B, 2020)",
                    },
                    {
                        "type": "web_url",
                        "url": "https://drive.google.com/file/d/1OBMtlEA2Tdivk5oKHfTUjuluBbGp96Rn/view?usp=sharing",
                        "title": "Rifat(2020)",
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
                "text": "🔰 Select Topics for TTQC - ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Books",
                        "payload": "ttqc_books_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Hand Notes",
                        "payload": "ttqc_hnotes_flow"
                    },
                    {
                        "type": "web_url",
                        "url": "https://drive.google.com/drive/folders/1QZ2EQKlzUNk4tXYzfsdzXjXbtwTlobZc",
                        "title": "Sheets",
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
                "text": "🔰 Select Topics for TTQC - ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Count",
                        "payload": "ttqc_count_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Crimp",
                        "payload": "ttqc_crimp_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Twist",
                        "payload": "ttqc_twist_flow"
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
                "text": "🔰 Select Topics for TTQC - ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Intro to TTQC",
                        "payload": "ttqc_intro_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Moisture, RH",
                        "payload": "ttqc_mositure_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Neps",
                        "payload": "ttqc_neps_flow"
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
                "text": "🔰 Select Topics for TTQC - ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Sampling",
                        "payload": "ttqc_sampling_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Fibre Pro.",
                        "payload": "ttqc_fibre_prop_flow"
                    },
                    {
                        "type": "postback",
                        "title": "HVI",
                        "payload": "ttqc_hvi_flow"
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
                "text": "🔰 Select Topics for TTQC - ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "AFIS",
                        "payload": "ttqc_afis_flow"
                    },
                ],
            },
        },
    },
    {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "button",
                "text": "⚡ Online Count Converter -  ",
                "buttons": [
                    {
                        "type": "web_url",
                        "url": "https://triptoafsin.github.io/CountKoto-/",
                        "title": "🌎Count Koto",
                    },
                ],
            },
        },
    }
]





module.exports = ttqcFlow;