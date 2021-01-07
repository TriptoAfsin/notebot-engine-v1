let phy2_lab_flow = [
    {
        "attachment":{
            "type":"image", 
            "payload":{
              "is_reusable": false,
              "url":"https://manybot-thumbnails.s3.eu-central-1.amazonaws.com/fb243958719599028/ca/big_9c59ca1c6005f0305772d40f5d0177be.png"
            }
          }
    },
    {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "button",
                "text": "🔰 Select Experiment for PHY-II- ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "E1",
                        "payload": "phy2_lab_e1_flow"
                    },
                    {
                        "type": "postback",
                        "title": "E2",
                        "payload": "phy2_lab_e2_flow"
                    },
                    {
                        "type": "postback",
                        "title": "E3",
                        "payload": "phy2_lab_e3_flow"
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
                "text": "🔰 Select Experiment for Phy-II-  ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "E4",
                        "payload": "phy2_lab_e4_flow"
                    },
                    {
                        "type": "postback",
                        "title": "E5",
                        "payload": "phy2_lab_e5_flow"
                    },
                    {
                        "type": "postback",
                        "title": "E6",
                        "payload": "phy2_lab_e6_flow"
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
                "text": "🔰 Select Experiment for Phy-II-  ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "E7",
                        "payload": "phy2_lab_e7_flow"
                    },
                    {
                        "type": "postback",
                        "title": "E8",
                        "payload": "phy2_lab_e8_flow"
                    },
                    {
                        "type": "postback",
                        "title": "M1",
                        "payload": "phy2_lab_m1_flow"
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
                "text": "🔰 Select Experiment for Phy-II-  ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "H1",
                        "payload": "phy2_lab_h1_flow"
                    },
                    {
                        "type": "postback",
                        "title": "H2",
                        "payload": "phy2_lab_h2_flow"
                    },
                    {
                        "type": "postback",
                        "title": "H3",
                        "payload": "phy2_lab_h3_flow"
                    }
                ],
            },
        },
    }
]



module.exports = phy2_lab_flow;