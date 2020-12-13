let notes =
{
    "attachment": {
        "type": "template",
        "payload": {
            "template_type": "generic",
            "elements": [
                {
                    "title": "Choose",
                     "buttons": [
                {
                    "type": "postback",
                    "title": "Level 1",
                    "payload": "level_1"
                },
                {
                    "type": "postback",
                    "title": "Level 2",
                    "payload": "level_2"
                },
                {
                    "type": "postback",
                    "title": "Level 3",
                    "payload": "level_3"
                }
            ],
                }
                
            ]
           
        },
    },

}





module.exports = notes;