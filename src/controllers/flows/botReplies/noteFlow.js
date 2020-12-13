let notes =
{
    /*
    "part1": {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "button",
                "text": "Choose - ",
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
            },
        },
    },
    */
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





module.exports = notes;