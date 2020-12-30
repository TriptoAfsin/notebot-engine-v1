let fdceFlow = [
    {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "button",
                "text": "🔰 Select Topics for FDCE - ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Dyes & Pigments",
                        "payload": "fdce_dyesPigments_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Chromatography",
                        "payload": "fdce_chromatography_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Polarity",
                        "payload": "fdce_polarity_flow"
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
                "text": "🔰 Select Topics for FDCE - ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Separation & Purifi.",
                        "payload": "fdce_sepaPurifi_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Balancing Chemical",
                        "payload": "fdce_balancingChem_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Filtration Method",
                        "payload": "fdce_filtration_flow"
                    }
                ],
            },
        },
    }
]





module.exports = fdceFlow;