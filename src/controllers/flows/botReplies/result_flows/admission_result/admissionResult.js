let admissionRes = [
    {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "button",
                "text": "🟡 Select Year - ",
                "buttons": [
                    {
                        "type": "web_url",
                        "url": "https://drive.google.com/file/d/1HabkRymQ2D2MY8ypR6ppxUcC2YGMQJ9y/view",
                        "title": "Admission 2019",
                    },
                    {
                        "type": "web_url",
                        "url": "https://drive.google.com/file/d/1glzQ9CojGOiLOGYAersKskV4Z2wzL1dl/view",
                        "title": "Admission 2018",
                    }
                ],
            },
        },
    }
]





module.exports = admissionRes;