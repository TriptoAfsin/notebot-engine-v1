let ap1_lab_flow = [
    {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "button",
                "text": "🔰 Select Experiment for AP-I - ",
                "buttons": [
                    {
                        "type": "web_url",
                        "url": "https://drive.google.com/file/d/19tctktOTrE43SWbs6GuZtNjDV2cDP8ir/view",
                        "title": "Layout(Akib, 2019)",
                    },
                    {
                        "type": "web_url",
                        "url": "https://drive.google.com/file/d/1DPuPQXIp5QC6aAq89Qp1w5gSNBA2DtMX/view",
                        "title": "2",
                    },
                    {
                        "type": "web_url",
                        "url": "https://drive.google.com/file/d/1GUbL_jgQT0khQmNVZxM8l61XhqKsa_iq/view",
                        "title": "5",
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
                "text": "🔰 Select Experiment for AP-I - ",
                "buttons": [
                    {
                        "type": "web_url",
                        "url": "https://drive.google.com/file/d/1GeEHLY7XPhvWIBrWGkMrm9lHLKW7eWt6/view",
                        "title": "6",
                    },
                    {
                        "type": "web_url",
                        "url": "https://drive.google.com/file/d/1J2doDnr4vqdE17rmeunXXW62JLXN73vX/view",
                        "title": "7 & 8",
                    },
                    {
                        "type": "web_url",
                        "url": "https://drive.google.com/file/d/1J3rJBiLZtT5j3ZfN2qUtSIm2VTiSqmvU/view",
                        "title": "9",
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
                "text": "🔰 Select Experiment for AP-I- ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Attaching Interli.",
                        "payload": "ap1_lab_attachingInterline_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Standard Body Mea.",
                        "payload": "ap1_lab_standardBody_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Continuous Fusing MC",
                        "payload": "ap1_lab_continuousFusing_flow"
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
                "text": "🔰 Select Experiment for AP-I-  ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Staright Knife & ",
                        "payload": "ap1_lab_straightKnife_flow"
                    }
                ],
            },
        },
    }
]



module.exports = ap1_lab_flow;