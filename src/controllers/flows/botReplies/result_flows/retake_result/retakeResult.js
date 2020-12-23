let retakecResult = [
    {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "button",
                "text": "🟤 Select Academic Year - ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": " Retake 2019",
                        "payload": "retake_res_2019"
                    },
                    {
                        "type": "postback",
                        "title": "Retake 2018",
                        "payload": "retake_res_2018"
                    }
                ],
            },
        },
    },
]





module.exports = retakecResult;