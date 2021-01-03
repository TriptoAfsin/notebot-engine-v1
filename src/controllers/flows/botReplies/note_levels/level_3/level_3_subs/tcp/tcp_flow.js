let tcpLecture = [
    {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "button",
                "text": "🔰 Select Topics for TCP - ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "KPC",
                        "payload": "tcp_kpc_flow"
                    }
                ],
            },
        },
    }
]





module.exports = tcpLecture;