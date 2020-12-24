let bothChem_flow = [
    {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "button",
                "text": "🟩 Select Topic for PHY-I -  ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Chemistry-I",
                        "payload": "che1_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Chemistry-II",
                        "payload": "che2_flow"
                    },
                ],
            },
        },
    }
]





module.exports = bothChem_flow;