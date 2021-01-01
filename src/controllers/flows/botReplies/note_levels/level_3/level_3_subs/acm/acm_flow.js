let acmFlow = [
    {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "button",
                "text": "🔰 Select Topics for ACM - ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Books",
                        "payload": "acm_book_flow"
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
                "text": "🔰 Select Topics for ACM - ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Intro to Cost Ma.",
                        "payload": "acm_introCostManage_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Interested users .",
                        "payload": "acm_interestedUsers_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Accounting in action",
                        "payload": "acm_accountingAction_flow"
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
                "text": "🔰 Select Topics for ACM - ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "The recording pro.",
                        "payload": "acm_recordingProcess_flow"
                    }
                ],
            },
        },
    }
]



module.exports = acmFlow;