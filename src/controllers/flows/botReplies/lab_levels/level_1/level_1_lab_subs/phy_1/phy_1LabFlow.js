let phy1_lab_flow = [
    {
        "attachment":{
            "type":"image", 
            "payload":{
              "is_reusable": false,
              "url":"https://manybot-thumbnails.s3.eu-central-1.amazonaws.com/fb243958719599028/ca/big_43439688e574c75733a93d3207ce0c16.png"
            }
          }
    },
    {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "button",
                "text": "🔰 Select Experiment for PHY-I- ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "M1",
                        "payload": "phy1_m1_flow"
                    },
                    {
                        "type": "postback",
                        "title": "M2",
                        "payload": "phy1_m2_flow"
                    },
                    {
                        "type": "postback",
                        "title": "M3",
                        "payload": "phy1_m3_flow"
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
                "text": "🔰 Select Experiment for Phy-I-  ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "M4",
                        "payload": "phy1_m4_flow"
                    },
                    {
                        "type": "postback",
                        "title": "M5",
                        "payload": "phy1_m5_flow"
                    },
                    {
                        "type": "postback",
                        "title": "M6",
                        "payload": "phy1_m6_flow"
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
                "text": "🔰 Select Experiment for Phy-I-  ",
                "buttons": [
                    {
                        "type": "web_url",
                        "url": "https://drive.google.com/file/d/1YUx_u2jxctaD-2Rl6MVBLzy0Ct0fOt9f/view?usp=sharing",
                        "title": "M7",
                    },
                    {
                        "type": "web_url",
                        "url": "https://drive.google.com/file/d/1Kf0pLMtstFkQLUaoRsHlEM8339N7_alR/view?usp=sharing",
                        "title": "M10",
                    },
                    {
                        "type": "postback",
                        "title": "O1",
                        "payload": "phy1_o1_flow"
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
                "text": "🔰 Select Experiment for Phy-I-  ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "O2",
                        "payload": "phy1_o2_flow"
                    },
                    {
                        "type": "postback",
                        "title": "O3",
                        "payload": "phy1_o3_flow"
                    },
                    {
                        "type": "postback",
                        "title": "O4",
                        "payload": "phy1_o4_flow"
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
                "text": "🔰 Find Rest of the experiments in this book -  ",
                "buttons": [
                    {
                        "type": "web_url",
                        "url": "https://drive.google.com/file/d/1AGP280Qf8lD6es6yTtJBHbExDePOY-Rl/view?usp=sharing",
                        "title": "Practical Physics",
                    }
                ],
            },
        },
    }
]



module.exports = phy1_lab_flow;