let ntfCotton = [
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
                        "payload": "ntf_cotton_hand_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Slide/Sheet/Books",
                        "payload": "ntf_slides_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Videos",
                        "payload": "ntf_videos_flow"
                    }
                ],
            },
        },
    }
   
]





module.exports = ntfCotton;