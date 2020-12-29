let sss2Flow = [
    {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "button",
                "text": "🔰 Select Topics for SSS-II   ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Hand Notes",
                        "payload": "sss2_notes_flow"
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
                "text": "🔰 Select Topics for SSS-II - ",
                "buttons": [
                    {
                        "type": "web_url",
                        "url": "https://drive.google.com/file/d/1bizJhdf0-etVOQPQ-wqusabT6O-GboXO/view",
                        "title": "Yarn Conditional MC.",
                    },
                    {
                        "type": "postback",
                        "title": "Ring Frame",
                        "payload": "sss2_ringFrame_flow"
                    },
                    {
                        "type": "web_url",
                        "url": "https://drive.google.com/drive/folders/1bDOhlNbd4j1qqvkRNQ6w2VZZsQYXDIqt",
                        "title": "Autoconer(Folder)",
                    }
                ],
            },
        },
    },
]





module.exports = sss2Flow;