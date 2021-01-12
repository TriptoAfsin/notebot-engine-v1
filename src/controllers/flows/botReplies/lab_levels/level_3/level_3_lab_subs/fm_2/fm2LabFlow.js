let fm2_lab_flow = [
    {
        "attachment":{
            "type":"image", 
            "payload":{
              "is_reusable": false,
              "url":"https://manybot-thumbnails.s3.eu-central-1.amazonaws.com/fb243958719599028/ca/big_4ea8034e14dee64657b53bd213d86ebf.png"
            }
          }
    },
    {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "button",
                "text": "🔰 Select Experiment for FM-II -  ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "1",
                        "payload": "fm2_lab_1_flow"
                    },
                    {
                        "type": "web_url",
                        "url": "https://drive.google.com/file/d/1-l9Px8604LD47pj2yL4Isv036-0SqGtr/view",
                        "title": "2",
                    },
                    {
                        "type": "web_url",
                        "url": "https://drive.google.com/file/d/11AAIHd9I__F40kCqLIf-UfEnQAYMOpJs/view",
                        "title": "3",
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
                "text": "🔰 Select Experiment for FM-II -  ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "4",
                        "payload": "fm2_lab_4_flow"
                    },
                    {
                        "type": "postback",
                        "title": "5",
                        "payload": "fm2_lab_5_flow"
                    },
                    {
                        "type": "web_url",
                        "url": "https://drive.google.com/file/d/12tve4NrikjDvTEHuOGjgosNqZTjUUCyu/view",
                        "title": "6",
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
                "text": "🔰 Select Experiment for FM-II -  ",
                "buttons": [
                    {
                        "type": "web_url",
                        "url": "https://drive.google.com/file/d/1Y72PDOYkFwW9_l8yoSJ2e27Dh1iLaWiE/view",
                        "title": "All Report(Bappi)",
                    }
                ],
            },
        },
    }
]



module.exports = fm2_lab_flow;