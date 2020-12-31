let ap1Flow = [
    {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "button",
                "text": "📌 Full Hand Note -",
                "buttons": [
                    {
                        "type": "web_url",
                        "url": "https://drive.google.com/file/d/1PcYlsGRhig4gxmynG9wVx-_FdGeK7a1v/view",
                        "title": "Akib",
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
                "text": "🔰 Select Topics for AP-I - ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Books",
                        "payload": "ap1_books_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Questions",
                        "payload": "ap1_ques_flow"
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
                "text": "🔰 Select Topics for AP-I - ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Sizing System",
                        "payload": "ap1_sizing_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Trimming",
                        "payload": "ap1_trimmimg_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Interlining",
                        "payload": "ap1_interlining_flow"
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
                "text": "🔰 Select Topics for AP-I - ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Fabric Cutting",
                        "payload": "ap1_fabricCut_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Pattern Making",
                        "payload": "ap1_patternMaking_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Fabric Spreading",
                        "payload": "ap1_fabricSpreading_flow"
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
                "text": "🔰 Select Topics for AP-I - ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Marker Making",
                        "payload": "ap1_markerMaking_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Sewing Thread",
                        "payload": "ap1_sewingTherad_flow"
                    }
                ],
            },
        },
    },
]





module.exports = ap1Flow;