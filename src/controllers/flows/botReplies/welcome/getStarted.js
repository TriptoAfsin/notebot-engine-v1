const getStarted = [
    {
        "text": `Hello there, Welcome to the new BUTEX NoteBOT`,
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


module.exports = getStarted;