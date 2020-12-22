let phy2_electric_flow = [
    {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "button",
                "text": "🟩 Select- ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Hand Note",
                        "payload": "phy2_electric_notes_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Slides",
                        "payload": "phy2_electric_slides_flow"
                    }
                ],
            },
        },
    },
]





module.exports = phy2_electric_flow;