let academicResult = [
    {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "button",
                "text": "🟡 Select Academic Year - ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "2019",
                        "payload": "academic_res_2019"
                    },
                    {
                        "type": "postback",
                        "title": "2018",
                        "payload": "academic_res_2018"
                    }
                ],
            },
        },
    },
]





module.exports = academicResult;