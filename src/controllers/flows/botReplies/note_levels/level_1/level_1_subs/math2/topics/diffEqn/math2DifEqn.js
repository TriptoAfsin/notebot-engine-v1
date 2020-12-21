let math2DifEqn = [
    {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "button",
                "text": "🟩 Select - ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Handnote",
                        "payload": "math2_diffeqn_note_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Book Scanned",
                        "payload": "math2_diffeqn_book_flow"
                    }
                ],
            },
        },
    }
]





module.exports = math2DifEqn;