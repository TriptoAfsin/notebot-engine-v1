const testReply = [
   {
      "attachment": {
        "type": "template",
        "payload": {
          "template_type": "generic",
          "elements": [
            {
              "title": "Swipe left/right for more options.",
              "buttons": [
                {
                  "type": "postback",
                  "title": "Button 1",
                  "payload": "button1"
                },
                {
                  "type": "postback",
                  "title": "Button 2",
                  "payload": "button2"
                },
                {
                  "type": "postback",
                  "title": "Button 3",
                  "payload": "button3"
                }
              ]
            },
            {
              "title": "Swipe left/right for more options.",
              "buttons": [
                {
                  "type": "postback",
                  "title": "Button 4",
                  "payload": "button4"
                },
                {
                  "type": "postback",
                  "title": "Button 5",
                  "payload": "button5"
                },
                {
                  "type": "postback",
                  "title": "Button 6",
                  "payload": "button6"
                }
              ]
            }
          ]
        }
      }
    }
]



module.exports = testReply;