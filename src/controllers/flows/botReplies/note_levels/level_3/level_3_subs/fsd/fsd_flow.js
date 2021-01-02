let fsdFlow = [
    {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "button",
                "text": "🔰 Select Topics for FSD - ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Intro to FSD",
                        "payload": "fsd_intro_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Plain Weave",
                        "payload": "fsd_plainWeave_flow"
                    },
                ],
            },
        },
    }
]



module.exports = fsdFlow;