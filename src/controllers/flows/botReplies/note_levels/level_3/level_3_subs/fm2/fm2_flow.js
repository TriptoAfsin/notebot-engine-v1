let fm2Flow = [
    {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "button",
                "text": "🔰 Select Topics for FM-II - ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Books",
                        "payload": "fm2_books_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Class Lecture",
                        "payload": "fm2_classlec_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Hand Note",
                        "payload": "fm2_note_flow"
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
                "text": "🔰 Select Topics for FM-II -  ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Basic Warp Knitting",
                        "payload": "fm2_basicWarp_flow"
                    },
                    {
                        "type": "web_url",
                        "url": "https://drive.google.com/file/d/1k89-nPCOWNnF8iXC43aUEBexY1yvlB0T/view",
                        "title": "Non Woven",
                    },
                    {
                        "type": "web_url",
                        "url": "https://drive.google.com/file/d/1-mZz3Ogrh3Xinizyt3IziWp109CbbgnF/view",
                        "title": "Rib, interlock,sync",
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
                "text": "🔰 Select Topics for FM-II - ",
                "buttons": [
                    {
                        "type": "web_url",
                        "url": "https://drive.google.com/file/d/1ThqGYq_dW03ZlpJ0vrJV0PPLVOdhx2hj/view",
                        "title": "Warp Knitting",
                    },
                    {
                        "type": "postback",
                        "title": "Misc",
                        "payload": "fm2_misc_flow"
                    }
                ],
            },
        },
    },
]





module.exports = fm2Flow;