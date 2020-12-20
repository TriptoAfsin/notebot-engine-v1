let tpm_flow = [
    {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "button",
                "text": "📌Part A Note(Imran, 2019)-",
                "buttons": [
                    {
                        "type": "web_url",
                        "url": "https://drive.google.com/file/d/1DU-9bYRe7evvp5u8stZJnkvoXv7pziyU/view?usp=sharing",
                        "title": "☄️ Downlaod ☄️",
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
                "text": "🟩 Select Topics for TPM -  ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Questions",
                        "payload": "tpm_ques_flow"
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
                "text": "🟩 Select Topics for TPM -  ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Woven Fab Wet..",
                        "payload": "tpm_wov_fab_wet_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Woven Fab Manu Pro",
                        "payload": "tpm_wov_fab_manu_flow"
                    }
                ],
            },
        },
    },
]





module.exports = tpm_flow;