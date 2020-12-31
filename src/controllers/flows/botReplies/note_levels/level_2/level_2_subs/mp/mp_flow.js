let mpFlow = [
    {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "button",
                "text": "🔰 Select Topics for MP - ",
                "buttons": [
                    {
                        "type": "web_url",
                        "url": "https://drive.google.com/file/d/13VOsvTc6rk28xlxCrpklgKrCoSA1INeA/view",
                        "title": "Production Process",
                    },
                    {
                        "type": "web_url",
                        "url": "https://drive.google.com/file/d/1DmVxIsqFiDkbfayM4lHgsPiFjJbgpXXA/view",
                        "title": "MC Opera.. & MC Tool",
                    },
                    {
                        "type": "postback",
                        "title": "Defects",
                        "payload": "mp_defects_flow"
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
                "text": "🔰 Select Topics for MP - ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Lathe M/C(New)",
                        "payload": "mp_latheMc_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Milling M/C",
                        "payload": "mp_millingMc_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Casting Video",
                        "payload": "mp_castingVideo_flow"
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
                "text": "🔰 Select Topics for MP - ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Welding",
                        "payload": "mp_welding_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Hot & Cold Working",
                        "payload": "mp_hotCold_flow"
                    },
                    {
                        "type": "web_url",
                        "url": "https://drive.google.com/file/d/1PX02MP7cFK6KJhjwqIKouiBfYAuRbd-l/view",
                        "title": "Forging, Ring Roll.",
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
                "text": "🔰 Select Topics for MP - ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Ceramics",
                        "payload": "mp_ceramics_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Plastic",
                        "payload": "mp_plastic_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Slideways",
                        "payload": "mp_slideways_flow"
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
                "text": "🔰 Select Topics for WP-I - ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Shaper MC",
                        "payload": "mp_shaperMc_flow"
                    },
                    {
                        "type": "postback",
                        "title": "EDM M/C",
                        "payload": "mp_edm_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Non-Conventional M/C",
                        "payload": "mp_non_conventional_flow"
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
                "text": "🔰 Select Topics for MP - ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Machining Economics",
                        "payload": "mp_mcEconomics_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Casting",
                        "payload": "mp_casting_flow"
                    }
                ],
            },
        },
    }
]





module.exports = mpFlow;