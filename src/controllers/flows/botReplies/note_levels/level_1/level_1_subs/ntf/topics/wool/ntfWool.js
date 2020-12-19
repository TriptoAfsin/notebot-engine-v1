let ntfWool = [
    {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "button",
                "text": "🟩 Select Topic for Cotton - ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Hand Note",
                        "payload": "ntf_wool_hand_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Slide/Sheet/Books",
                        "payload": "ntf_wool_slides_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Videos",
                        "payload": "ntf_wool_videos_flow"
                    }
                ],
            },
        },
    }
   
]





module.exports = ntfWool;