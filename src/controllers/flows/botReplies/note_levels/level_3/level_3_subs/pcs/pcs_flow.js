let pcsFlow = [
    {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "button",
                "text": "🔰 Select Topics for PCS - ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Boosk",
                        "payload": "pcs_books_flow"
                    },
                ],
            },
        },
    },
]



module.exports = pcsFlow;