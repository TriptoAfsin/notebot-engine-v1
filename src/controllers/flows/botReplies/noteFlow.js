let notes =
{
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
    "part2": {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "button",
                "text": "Choose - ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Level 4",
                        "payload": "level_4"
                    },
                ],
            },
        },
    }

}





module.exports = {
    notes_part1: notes.part1,
    notes_part2: notes.part2
};