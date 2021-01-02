let imLecture = [
    {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "button",
                "text": "🔰 Select Topics for IM - ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Munir Sir",
                        "payload": "im_munirSir_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Maeen Sir",
                        "payload": "im_maeenSir_flow"
                    }
                ],
            },
        },
    }
]





module.exports = imLecture;