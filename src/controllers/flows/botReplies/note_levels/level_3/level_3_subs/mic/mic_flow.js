let micFlow = [
    {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "button",
                "text": "🔰 Select Topics for MIC - ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Books",
                        "payload": "mic_book_flow"
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
                "text": "🔰 Select Topics for MIC - ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Ch 1: Intro to .",
                        "payload": "mic_ch1_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Ch 2: System Elem.",
                        "payload": "mic_ch2_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Ch 4: Control Sys.",
                        "payload": "mic_ch4_flow"
                    }
                ],
            },
        },
    }
]



module.exports = micFlow;