let eeeFlow = [
    {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "button",
                "text": "📌 ♦Asad Sir's Slide♦ -  ",
                "buttons": [
                    {
                        "type": "web_url",
                        "url": "https://drive.google.com/file/d/16mFkXWt7gAeeYpCpcQp-dQLf43Jocdpx/view?usp=sharing",
                        "title": "⚡ Downlaod",
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
                "text": "🔰 Select Topics for FEEE - ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Books",
                        "payload": "eee_books_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Hand Notes",
                        "payload": "eee_hnotes_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Questions",
                        "payload": "eee_ques_flow"
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
                "text": "🔰 Select Topics for FEEE - ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Ch 1",
                        "payload": "eee_ch1_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Ch 2:Method of An",
                        "payload": "eee_ch2_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Ch 3",
                        "payload": "eee_ch3_flow"
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
                "text": "🔰 Select Topics for FEEE - ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Ch 4:3 & 1 Phase Sys",
                        "payload": "eee_ch4_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Ch 5: Electronics",
                        "payload": "eee_ch5_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Ch 8: Power System",
                        "payload": "eee_ch8_flow"
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
                "text": "🔰 Select Topics for FEEE - ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Wye-Delta",
                        "payload": "eee_wye_delta_flow"
                    },
                    {
                        "type": "postback",
                        "title": "RMS",
                        "payload": "eee_rms_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Circuit Analysis",
                        "payload": "eee_circuit_analy_flow"
                    }
                ],
            },
        },
    },
]





module.exports = eeeFlow;