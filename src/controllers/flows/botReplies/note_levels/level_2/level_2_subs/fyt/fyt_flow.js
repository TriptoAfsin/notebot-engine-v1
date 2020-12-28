let fytFlow = [
    {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "button",
                "text": "🔰 Select Topics for FYT - ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Books",
                        "payload": "fyt_books_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Hand Notes",
                        "payload": "fyt_hnotes_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Suggestions",
                        "payload": "fyt_sugg_flow"
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
                "text": "🔰 Select Topics for FYT - ",
                "buttons": [
                    {
                        "type": "web_url",
                        "url": "https://drive.google.com/file/d/1KrJAnDwKiKwC-7rHmdZAzQRZu2TFAdKf/view",
                        "title": "Yarn Testing(2019)",
                    },
                    {
                        "type": "postback",
                        "title": "Yarn Numbering",
                        "payload": "fyt_yarnNum_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Yarn Twist",
                        "payload": "fyt_yarnTwist_flow"
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
                "text": "🔰 Select Topics for FYT - ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Evenness tester",
                        "payload": "fyt_evennessTester_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Yarn Counting",
                        "payload": "fyt_yarnCounting_flow"
                    },
                    {
                        "type": "postback",
                        "title": "AFIS",
                        "payload": "fyt_afis_flow"
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
                "text": "🔰 Select Topics for FYT - ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "ISO",
                        "payload": "fyt_iso_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Capacitance Optical.",
                        "payload": "fyt_capaOptical_flow"
                    }
                ],
            },
        },
    },
]





module.exports = fytFlow;