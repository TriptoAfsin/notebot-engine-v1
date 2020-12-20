let tmm_flow = [
    {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "button",
                "text": "🟩 Select Topic For TMM  - ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Questions",
                        "payload": "tmm_quess_flow"
                    },
                    {
                        "type": "web_url",
                        "url": "https://drive.google.com/drive/folders/1e_EtAoY3WirXN1YINKgfnBJ4oSgZQHhk",
                        "title": "Dalim Sir(All)",
                    },
                    {
                        "type": "web_url",
                        "url": "https://drive.google.com/drive/folders/1g92WjD1gCEDjl1FwZmhEOHsdJRwko7Rm",
                        "title": "Tanjheel Sir(All)",
                    },
                ],
            },
        },
    },
]





module.exports = tmm_flow;