let tqmFlow = [
    {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "button",
                "text": "🔰 Select Topics for TQM - ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Lec 1: Total QM",
                        "payload": "tqm_totalQm_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Quality & Reliabil.",
                        "payload": "tqm_qualityReliability_flow"
                    },
                    {
                        "type": "web_url",
                        "url": "https://drive.google.com/file/d/1HNwDmU31ApcnjpWv1gzJC874yUDBlvA9/view",
                        "title": "Fault Tree Analysis",
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
                "text": "🔰 Select Topics for TQM - ",
                "buttons": [
                    {
                        "type": "web_url",
                        "url": "https://drive.google.com/file/d/1CMdh-swegCdRYYf97-Qk-UfmgsSBIUcE/view",
                        "title": "OEE",
                    },
                    {
                        "type": "postback",
                        "title": "Contunuous Improv.",
                        "payload": "tqm_continuous_flow"
                    },
                    {
                        "type": "web_url",
                        "url": "https://drive.google.com/file/d/1gbZo47bLCKpE_IkDfXXr7DZOSApvRyIo/view",
                        "title": "Quality Standards",
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
                "text": "🔰 Select Topics for TQM - ",
                "buttons": [
                    {
                        "type": "web_url",
                        "url": "https://drive.google.com/drive/folders/15byZ4dccfNR9oeUQOv1giUXLoD8DXhcs",
                        "title": "H. Sheikh Sir Sheets",
                    }
                ],
            },
        },
    }
]



module.exports = tqmFlow;