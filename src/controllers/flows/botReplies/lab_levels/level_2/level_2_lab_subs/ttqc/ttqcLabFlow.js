let ttqc_lab_flow = [
    {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "button",
                "text": "⚡ All Lab Report(Naimur, 2020)- ",
                "buttons": [
                    {
                        "type": "web_url",
                        "url": "https://drive.google.com/file/d/1wS3qCMrRrujFQiRjEKtiVDAn-YnSuIsQ/view",
                        "title": "Download",
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
                "text": "🔰 Select Experiment for TTQC -  ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "1(Atmospheric Cond.)",
                        "payload": "ttqc_lab_atmosphere_flow"
                    },
                    {
                        "type": "postback",
                        "title": "2(Fiber Fineness)",
                        "payload": "ttqc_lab_fiberFineness_flow"
                    },
                    {
                        "type": "postback",
                        "title": "3(Effective length)",
                        "payload": "ttqc_lab_effectiveLength_flow"
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
                "text": "🔰 Select Experiment for TTQC -  ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Fibre Length.. Iden",
                        "payload": "ttqc_lab_fibreLength_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Count of Sli..,CSP",
                        "payload": "ttqc_lab_count_csp_flow"
                    },
                    {
                        "type": "postback",
                        "title": "TPI & Count",
                        "payload": "ttqc_lab_tpiCount_flow"
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
                "text": "🔰 Select Experiment for TTQC -  ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "CSP & TPI",
                        "payload": "ttqc_lab_csp_tpi_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Thick.., Crimp,GSM",
                        "payload": "ttqc_lab_thickCrimp_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Fibre Fine..Maturi",
                        "payload": "ttqc_lab_fibreFineMaturity_flow"
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
                "text": "🔰 Select Experiment for TTQC -  ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "4(Sliver Roving)",
                        "payload": "ttqc_lab_sliverRoving_flow"
                    },
                    {
                        "type": "postback",
                        "title": "5(Bundle Strength)",
                        "payload": "ttqc_lab_bundleStrength_flow"
                    }
                ],
            },
        },
    }
]



module.exports = ttqc_lab_flow;