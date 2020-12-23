let affliResult = [
    {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "button",
                "text": "🟡 Select Academic Year - ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "2020",
                        "payload": "affli_res_2020"
                    },
                    {
                        "type": "postback",
                        "title": "2019",
                        "payload": "affli_res_2019"
                    }
                ],
            },
        },
    },
]





module.exports = affliResult;