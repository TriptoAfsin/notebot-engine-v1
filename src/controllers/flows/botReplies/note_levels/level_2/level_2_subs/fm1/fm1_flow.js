let fm1Flow = [
    {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "button",
                "text": "📌 Full Hand Notes - ",
                "buttons": [
                    {
                        "type": "web_url",
                        "url": "https://drive.google.com/file/d/1KLLujcKbcUUTzUxRKKBdXaOYHR9vg9Fr/view",
                        "title": "Maruf(2020)",
                    },
                    {
                        "type": "web_url",
                        "url": "https://drive.google.com/file/d/1ePySdT9CCKFNK009tWYMTQt1dbB0Kqbf/view",
                        "title": "Tanvir(2020)",
                    },
                    {
                        "type": "web_url",
                        "url": "https://drive.google.com/file/d/1Tj9i9cEufH9R-KGXHc0Vf9N5F0IPOIbd/view",
                        "title": "Class Lec(B)",
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
                "text": "🔰 Select Topics for FM-I - ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Hand Notes",
                        "payload": "fm1_hnotes_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Books",
                        "payload": "fm1_books_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Suggestions",
                        "payload": "fm1_sugg_flow"
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
                "text": "🔰 Select Topics for FM-I - ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Questions",
                        "payload": "fm1_ques_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Loom(New)",
                        "payload": "fm1_loom_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Motions in We.",
                        "payload": "fm1_motion_weav_flow"
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
                "text": "🔰 Select Topics for FM-I - ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Intro to FM",
                        "payload": "fm1_intro_fm_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Shedding",
                        "payload": "fm1_shedding_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Weaving",
                        "payload": "fm1_weaving_flow"
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
                "text": "🔰 Select Topics for FM-I - ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Sizing",
                        "payload": "fm1_sizing_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Winding",
                        "payload": "fm1_winding_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Dobby",
                        "payload": "fm1_dobby_flow"
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
                "text": "🔰 Select Topics for FM-I - ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Warping",
                        "payload": "fm1_warping_flow"
                    },
                ],
            },
        },
    },
]





module.exports = fm1Flow;