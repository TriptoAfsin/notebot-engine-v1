let phy2_flow = [
    {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "button",
                "text": "📌Combined Note-",
                "buttons": [
                    {
                        "type": "web_url",
                        "url": "https://drive.google.com/file/d/1fIgUIBddhWxMaS7hKrKViD5eNNhvhtXL/view",
                        "title": "Maruf(2019)",
                    },
                    {
                        "type": "web_url",
                        "url": "https://drive.google.com/file/d/18SqLs8J-wnMhdfALqaklgj21hGCqDxLc/view",
                        "title": "Hasibul(2019)",
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
                "text": "🟩 Select Topic for PHY-II -  ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Books",
                        "payload": "phy2_books_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Questions",
                        "payload": "phy2_ques_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Kinetic Theory Gas",
                        "payload": "phy2_kinetic_flow"
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
                "text": "🟩 Select Topic for PHY-II - ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Electricity",
                        "payload": "phy2_electricity_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Thermo Dynamics",
                        "payload": "phy2_thermodynamics_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Radiation",
                        "payload": "phy2_radiation_flow"
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
                "text": "🟩 Select Topic for PHY-II -  ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Magnetism",
                        "payload": "phy2_magnet_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Modern Physics",
                        "payload": "phy2_modern_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Entropy",
                        "payload": "phy2_entropy_flow"
                    }
                ],
            },
        },
    },
]





module.exports = phy2_flow;