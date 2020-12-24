let notes = [
    {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "button",
                "text": "🔰 Choose - ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "🟢 Level 1",
                        "payload": "level_1"
                    },
                    {
                        "type": "postback",
                        "title": "🟢 Level 2",
                        "payload": "level_2"
                    },
                    {
                        "type": "postback",
                        "title": "🟢 Level 3",
                        "payload": "level_3"
                    }
                ],
            },
        },
    },
    {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "button",
                "text": "🔰 Choose - ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "🟢 Level 4",
                        "payload": "level_4"
                    },
                ],
            },
        },
    },
    {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "button",
                "text": "🔰 Random Books -   ",
                "buttons": [
                    {
                        "type": "web_url",
                        "url": "https://drive.google.com/drive/folders/14l4zL2oYlNgC-Nygr0spz5s_juiNSFr0",
                        "title": "🍀ESE",
                    },
                ],
            },
        },
    },
    {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "button",
                "text": "🔰 Web Apps -  ",
                "buttons": [
                    {
                        "type": "web_url",
                        "url": "https://triptoafsin.github.io/Cloud-Lib-React/#/",
                        "title": "Cloud lib ☁",
                    },
                    {
                        "type": "web_url",
                        "url": "https://triptoafsin.github.io/TexQuiz/",
                        "title": "Tex Quiz",
                    },
                    {
                        "type": "web_url",
                        "url": "https://triptoafsin.github.io/CountKoto-/",
                        "title": "Count Koto",
                    }
                ],
            },
        },
    }

]





module.exports = notes;