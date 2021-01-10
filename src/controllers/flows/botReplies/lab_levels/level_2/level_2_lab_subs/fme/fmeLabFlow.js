let fme_lab_flow = [
    {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "button",
                "text": "📌All Report (2019-2020, Naimur)-  ",
                "buttons": [
                    {
                        "type": "web_url",
                        "url": "https://drive.google.com/file/d/1E_RNhj87kifJFY6JNjM8BQkgxh2fbBF4/view",
                        "title": "☄️Download",
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
                "text": "📌Lab Viva Note(Akib, 2020)-  ",
                "buttons": [
                    {
                        "type": "web_url",
                        "url": "https://drive.google.com/file/d/1UE87DBj9yhI6_NQDeHwdPMz4Bzw6s-tI/view",
                        "title": "☄️Download",
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
                "text": "🔰 Select Experiment for FME -  ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Air Compress.",
                        "payload": "fme_lab_airCompressor_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Steam Turbine",
                        "payload": "fme_lab_steamTurbine_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Petrol & Disel",
                        "payload": "fme_lab_petrolDisel_flow"
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
                "text": "🔰 Select Experiment for FME -  ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Boiler",
                        "payload": "fme_lab_boiler_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Boiler Mounting",
                        "payload": "fme_lab_boilerMOunting_flow"
                    },
                    {
                        "type": "web_url",
                        "url": "https://drive.google.com/file/d/19q4C6I0BogOAIxPpmT5_wP05BetjPxiG/view",
                        "title": "Ex8: UTM",
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
                "text": "🔰 Select Experiment for FME -  ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Reci.. Pump",
                        "payload": "fme_lab_reciPump_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Centri.. Pump",
                        "payload": "fme_lab_centriPump_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Disel Engine",
                        "payload": "fme_lab_diselEng_flow"
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
                "text": "🔰 Select Experiment for FME -  ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "IC Engine(new)",
                        "payload": "fme_lab_icEngine_flow"
                    }
                ],
            },
        },
    }
]



module.exports = fme_lab_flow;