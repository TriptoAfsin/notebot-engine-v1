let ap2Flow = [
    {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "button",
                "text": "🔰 Select Topics for Ap-II - ",
                "buttons": [
                    {
                        "type": "web_url",
                        "url": "https://drive.google.com/file/d/11GC_11zU5gnXMsURqVJUw6Tfgejrzw57/view",
                        "title": "Part-A Outline",
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
                "text": "🔰 Select Topics for Ap-II - ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Folding & Packaging",
                        "payload": "ap2_folding_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Stictch",
                        "payload": "ap2_stitch_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Lock Stitch",
                        "payload": "ap2_lockStitch_flow"
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
                "text": "🔰 Select Topics for Ap-II - ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Pressing & Finish..",
                        "payload": "ap2_pressingFinish_flow"
                    },
                ],
            },
        },
    }
]





module.exports = ap2Flow;
