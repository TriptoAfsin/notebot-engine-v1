const defaultReply = [
    {
        "text": `Sorry I didn't get what you meant\n Here are some suggestions - `,
        "quick_replies": [{
                "content_type": "text",
                "title": "Help😥",
                "payload": "help_flow"
            },
            {
                "content_type": "text",
                "title": "Notes📗",
                "payload": "notes_flow"
            },
            {
                "content_type": "text",
                "title": "Routine📅",
                "payload": "routine_flow"
            },
            {
                "content_type": "text",
                "title": "Results📝",
                "payload": "result_flow"
            },
            {
                "content_type": "text",
                "title": "Lab Reports📋",
                "payload": "reports_flow"
            }

        ]
    }
]


module.exports = defaultReply;