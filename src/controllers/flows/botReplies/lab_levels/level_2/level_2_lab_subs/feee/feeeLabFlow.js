let feee_lab_flow = [
    {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "button",
                "text": "📌Select Experiment for FEEE-   ",
                "buttons": [
                    {
                        "type": "web_url",
                        "url": "https://drive.google.com/file/d/1nGS7r0MKzv7c0VSl6q1UMaI6t7KslSlW/view",
                        "title": "All Report(Emon)",
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
                "text": "🔰 Select Experiment for FEEE-   ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Multimetre",
                        "payload": "feee_lab_multiMetre_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Ohm's law Ve.",
                        "payload": "feee_lab_ohmslaw_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Kirchoff's law",
                        "payload": "feee_lab_kirchoffsLaw_flow"
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
                "text": "🔰 Select Experiment for FEEE-   ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "RC Circuit",
                        "payload": "feee_lab_rcCirct_flow"
                    },
                    {
                        "type": "postback",
                        "title": "RL Circuit",
                        "payload": "feee_lab_rlCirct_flow"
                    },
                    {
                        "type": "postback",
                        "title": "RLC Circuit",
                        "payload": "feee_lab_rlcCirct_flow"
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
                "text": "🔰 Select Experiment for FEEE-   ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Carbon Reistor",
                        "payload": "feee_lab_carbonResistor_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Fan Regulator",
                        "payload": "feee_lab_fanRegulator_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Wiring Tubelight",
                        "payload": "feee_lab_wiringTubelight_flow"
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
                "text": "🔰 Select Experiment for FEEE-   ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Full Bridge Rect",
                        "payload": "feee_lab_fullBridgeRect_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Fuse, Switch Ckt B",
                        "payload": "feee_lab_fuseSwitch_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Study on Oscillosc.",
                        "payload": "feee_lab_Oscillosc_flow"
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
                "text": "🔰 Select Experiment for FEEE-   ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Wire Gauge",
                        "payload": "feee_lab_wireGauge_flow"
                    },
                    {
                        "type": "postback",
                        "title": "2 Way Light Swi..",
                        "payload": "feee_lab_2waySwitch_flow"
                    }
                ],
            },
        },
    }
]



module.exports = feee_lab_flow;