let iae_flow = [
    {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "button",
                "text": "📌Combined Note-",
                "buttons": [
                    {
                        "type": "web_url",
                        "url": "https://drive.google.com/file/d/18pOu9YN1fE6czSgwbWyX4rFhvxp0df4Y/view?usp=sharing",
                        "title": "PHY-I(Maruf,2018)",
                    },
                    {
                        "type": "web_url",
                        "url": "https://drive.google.com/file/d/1wQarO19IlJaUtc4-86xtQJSmm0ajX4OM/view?usp=sharing",
                        "title": "PHY-I(Siam, 2019)",
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
                "text": "🟩 Select Topic for PHY-I -  ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Books",
                        "payload": "phy1_books_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Questions",
                        "payload": "phy1_ques_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Circular Motion",
                        "payload": "phy1_circular_flow"
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
                "text": "🟩 Select Topic for PHY-I - ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "HydroDyna/Fluid",
                        "payload": "phy1_hydro_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Diffraction",
                        "payload": "phy1_diffraction_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Interference",
                        "payload": "phy1_interfer_flow"
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
                "text": "🟩 Select Topic for PHY-I -  ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Polarization",
                        "payload": "phy1_polar_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Elasticity",
                        "payload": "phy1_elas_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Viscosity",
                        "payload": "phy1_visco_flow"
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
                "text": "🟩 Select Topic for PHY-I -  ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Surface Tension",
                        "payload": "phy1_surface_flow"
                    },
                ],
            },
        },
    }
]





module.exports = iae_flow;