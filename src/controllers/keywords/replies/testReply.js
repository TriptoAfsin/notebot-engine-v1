const testReply = {
    "attachment": {
        "type": "template",
        "payload": {
            "template_type": "generic",
            "elements": [{
                "title": "group of options part 1",                    
                "buttons": [ {
                    "type": "postback",
                    "title": "option 1",
                    "payload": "option 1",
                }, ...,
                {
                    "type": "postback",
                    "title": "option 3",
                    "payload": "option 3",
                }],
            }, ..., 
            {
                "title": "group of options 10",
                "buttons": [{
                    "type": "postback",
                    "title": "option 28",
                    "payload": "option 28",
                }, ...,
                {
                    "type": "postback",
                    "title": "option 30",
                    "payload": "option 30",
                }],
            }]
        }
    }
}


module.exports = testReply;