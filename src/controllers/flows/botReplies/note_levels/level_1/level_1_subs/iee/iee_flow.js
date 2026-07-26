let iee_flow = [
    { "attachment": { "type": "template", "payload": { "template_type": "button", "text": "📌 IESE Notes -", "buttons": [ { "type": "web_url", "url": "https://drive.google.com/file/d/1uecIaB8IbxqHp7IOEfBfJ2nLhnu0Um89/view?usp=sharing", "title": "Environment" }, { "type": "web_url", "url": "https://drive.google.com/file/d/1I0eTXh8-EtEVHQdkQL17RFepG40_sT2t/view?usp=sharing", "title": "Env. Science" } ] } } },
    {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "button",
                "text": "🟩 Select Topics for IAE-  ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Books",
                        "payload": "iee_books_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Sheets",
                        "payload": "iee_sheets_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Hand Notes",
                        "payload": "iee_handnotes_flow"
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
                "text": "🟩 Select Topics for IAE- ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Man & Environment",
                        "payload": "iee_man_env_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Soil",
                        "payload": "iee_soil_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Environmnetal Issue",
                        "payload": "iee_env_issue_flow"
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
                "text": "🟩 Select Topics for IAE-  ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Nature & Envi",
                        "payload": "iee_nature_env_flow"
                    },
                    {
                        "type": "postback",
                        "title": "SPF & UPF",
                        "payload": "iee_spf_upf_flow"
                    }
                ],
            },
        },
    },
]





module.exports = iee_flow;