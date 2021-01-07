let aceFlow = [
    {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "button",
                "text": "🔰 Select Topics for ACE - ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Intro to Control Sy.",
                        "payload": "ace_introSys_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Modeling the Freq",
                        "payload": "ace_modleingFreq_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Time Response",
                        "payload": "ace_timeResponse_flow"
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
                "text": "🔰 Select Topics for ACE - ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Sensors",
                        "payload": "ace_sensors_flow"
                    }
                ],
            },
        },
    }
]





module.exports = aceFlow;