let weavFlow = [
    {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "button",
                "text": "🔰 Select Topics for Weaving Prepatory Process - ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Books",
                        "payload": "weav_books_flow"
                    }
                ],
            },
        },
    },
]





module.exports = weavFlow;