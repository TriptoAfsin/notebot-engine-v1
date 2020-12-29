let ym1Flow = [
    {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "button",
                "text": "📌 Question Bank Solve -   ",
                "buttons": [
                    {
                        "type": "web_url",
                        "url": "https://drive.google.com/file/d/1BKv0ypkstPNvGxxRTMllSOpPU0ZD77d-/view",
                        "title": "Part A(Tiasha)",
                    },
                    {
                        "type": "web_url",
                        "url": "https://drive.google.com/file/d/1_vsRTuexZ1qtwuiPFlr2BaBTLVYtnOJH/view",
                        "title": "Part B(Tiasha)",
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
                "text": "🔰 Select Topics for YM-I - ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Intro to YM",
                        "payload": "ym1_intro_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Indeterminer Stress",
                        "payload": "ym1_indeterminer_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Blowroom",
                        "payload": "ym1_blowroom_flow"
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
                "text": "🔰 Select Topics for YM-I - ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Mixing & Blend",
                        "payload": "ym1_mixing_blend_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Fibre Prop.",
                        "payload": "ym1_fibreProp_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Yarn Condi.",
                        "payload": "ym1_yarnCondi_flow"
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
                "text": "🔰 Select Topics for YM-I - ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Comber",
                        "payload": "ym1_comber_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Draw Frame",
                        "payload": "ym1_drawFrame_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Winding",
                        "payload": "ym1_winding_flow"
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
                "text": "🔰 Select Topics for YM-I - ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Lap Former",
                        "payload": "ym1_lapFormer_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Carding",
                        "payload": "ym1_carding_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Ring Frame",
                        "payload": "ym1_ringFrame_flow"
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
                "text": "🔰 Select Topics for YM-I - ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Speed Frame",
                        "payload": "ym1_speedFrame_flow"
                    }
                ],
            },
        },
    }
]





module.exports = ym1Flow;