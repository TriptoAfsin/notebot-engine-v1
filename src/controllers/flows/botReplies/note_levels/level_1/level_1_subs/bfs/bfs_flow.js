let bfs_flow = [
    {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "button",
                "text": "🟩 Select Topic for BFS -",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Lecture 3",
                        "payload": "bfs_lec3_flow"
                    }
                ],
            },
        },
    }
]





module.exports = bfs_flow;