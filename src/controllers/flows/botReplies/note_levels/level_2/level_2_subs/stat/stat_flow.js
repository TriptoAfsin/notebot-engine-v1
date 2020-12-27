let statFlow = [
    {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "button",
                "text": "📌 Full Hand Notes - ",
                "buttons": [
                    {
                        "type": "web_url",
                        "url": "https://drive.google.com/file/d/1buy5jwu1gR44OYS_srTuviCwpAEuPuq7/view",
                        "title": "Nahid(2020)",
                    },
                    {
                        "type": "web_url",
                        "url": "https://drive.google.com/file/d/1HsUaV_Y4AGjOXAMe4bjHO5y7Ooun9Da-/view",
                        "title": "Rifat(B, 2020)",
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
                "text": "📌 Stat Assignment 2020(Rabbi Sir)- ",
                "buttons": [
                    {
                        "type": "web_url",
                        "url": "https://drive.google.com/file/d/1VTjqvPRw5cAxlDnOselChSK1VgClMVbj/view",
                        "title": "⚡ Download",
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
                "text": "🔰 Select Topics for Stat - ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Books",
                        "payload": "stat_books_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Hand Notes",
                        "payload": "stat_hnotes_flow"
                    },
                ],
            },
        },
    },
    {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "button",
                "text": "🔰 Select Topics for Stat - ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Probability",
                        "payload": "stat_probab_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Introduction",
                        "payload": "stat_intro_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Central Tendency",
                        "payload": "stat_central_tend_flow"
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
                "text": "🔰 Select Topics for Stat - ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "CV, SD, Varia",
                        "payload": "stat_cv_sd_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Moments",
                        "payload": "stat_moments_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Shape Charc.",
                        "payload": "stat_shapes_flow"
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
                "text": "🔰 Select Topics for Stat - ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Design of Exp",
                        "payload": "stat_design_exp_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Normal Distri..",
                        "payload": "stat_normal_distri_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Binomial Distri",
                        "payload": "stat_binomial_distri_flow"
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
                "text": "🔰 Select Topics for Stat - ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Poission Distri",
                        "payload": "stat_poission_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Regression",
                        "payload": "stat_regression_flow"
                    }
                ],
            },
        },
    }
]





module.exports = statFlow;