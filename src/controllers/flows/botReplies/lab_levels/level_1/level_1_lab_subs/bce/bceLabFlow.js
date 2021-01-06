let bce_lab_flow = [
    {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "button",
                "text": "🔰 Select Experiment for BCE- ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Reading Technique",
                        "payload": "bce_lab_read_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Listening Skills",
                        "payload": "bce_lab_listen_flow"
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
                "text": "🔰 Lab  Materials -  ",
                "buttons": [
                    {
                        "type": "web_url",
                        "url": "https://drive.google.com/file/d/1xyoE71MpJL0Hwn2guWsuI9mRxPJBGPas/view?usp=sharing",
                        "title": "Social English",
                    },
                    {
                        "type": "postback",
                        "title": "Lab Sheet(Final Viva",
                        "payload": "bce_lab_sheet_flow"
                    }
                ],
            },
        },
    },
]



module.exports = bce_lab_flow;