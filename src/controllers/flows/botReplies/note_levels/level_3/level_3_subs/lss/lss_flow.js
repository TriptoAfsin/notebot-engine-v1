let lssFlow = [
    {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "button",
                "text": "🔰 Select Topics for LSS - ",
                "buttons": [
                    {
                        "type": "web_url",
                        "url": "https://drive.google.com/drive/folders/1ZUFn6WYpCpQqFelEjlNkni9WvcSf9AUE",
                        "title": "Books",
                    },
                    {
                        "type": "web_url",
                        "url": "https://drive.google.com/drive/folders/11Arr591u9frELe15mUjXTCOcCjSWE91I",
                        "title": "Lectures",
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
                "text": "🔰 Select Topics for LSS - ",
                "buttons": [
                    {
                        "type": "web_url",
                        "url": "https://drive.google.com/file/d/1wWMiO2syNMCHIK4IQb947F8MnrzYJwCh/view",
                        "title": "Math DF & Spinning",
                    },
                    {
                        "type": "web_url",
                        "url": "https://drive.google.com/file/d/1UFAzeWvMVUYsVhipp_OVpJJCGm7BBtjo/view",
                        "title": "Jute Spin.",
                    },
                    {
                        "type": "web_url",
                        "url": "https://drive.google.com/file/d/1P9BW9nEOw0n1U1yGl1QGk90wmgyaycjM/view",
                        "title": "Jute Diver.",
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
                "text": "🔰 Select Topics for LSS - ",
                "buttons": [
                    {
                        "type": "web_url",
                        "url": "https://drive.google.com/file/d/1a8yAU_EVtKLedoZP35rmzCM5DXKraN21/view",
                        "title": "Jute Composite Div.",
                    },
                    {
                        "type": "postback",
                        "title": "Drawframe",
                        "payload": "lss_drawFrame_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Spreader & Carding",
                        "payload": "lss_spreader_flow"
                    }
                ],
            },
        },
    }
]



module.exports = lssFlow;