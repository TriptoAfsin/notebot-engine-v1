let imFlow = [
    {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "button",
                "text": "🔰 Select Topics for IM - ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Lectures",
                        "payload": "im_lecture_flow"
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
                "text": "🔰 Select Topics for IM - ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Lec 1: Intro to IM",
                        "payload": "im_lec1_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Lec 2: Manegerial ..",
                        "payload": "im_lec2_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Lec 3: Environment.",
                        "payload": "im_lec3_flow"
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
                "text": "🔰 Select Topics for IM - ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Lec 4: Motivating E",
                        "payload": "im_lec4_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Market",
                        "payload": "im_market_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Market Mix",
                        "payload": "im_marketMix_flow"
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
                "text": "🔰 Select Topics for IM - ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Project & Feasi..",
                        "payload": "im_projectFeasible_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Nature & Scope of B.",
                        "payload": "im_natureScope_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Management & Func",
                        "payload": "im_managementFunc_flow"
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
                "text": "🔰 Select Topics for IM - ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Industrial Manag.",
                        "payload": "im_indusManage_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Technology Manage",
                        "payload": "im_techManage_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Production Mange.",
                        "payload": "im_prodMange_flow"
                    }
                ],
            },
        },
    }
]



module.exports = imFlow;