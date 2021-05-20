let quickReplyBlockGen = require("../../genrators/quickReplyBlockGen");
let quickReply = require("../../genrators/quickReply");



const defaultReply = [
    quickReplyBlockGen(
        "🔴 Sorry I didn't get what you meant\n Here are some suggestions - ",
        [
            quickReply("Help😥", "help_flow"),
            quickReply("Notes📗", "notes_flow"),
            quickReply("Routine📅", "routine_flow"),
            quickReply("Results📝", "result_flow"),
            quickReply("Lab Reports📋", "reports_flow")
        ]
    ),
    quickReplyBlockGen(
        "🔴 সরি বুঝলাম না কি বললেন 😓",
        [
            quickReply("Help😥", "help_flow"),
            quickReply("Notes📗", "notes_flow"),
            quickReply("Routine📅", "routine_flow"),
            quickReply("Results📝", "result_flow"),
            quickReply("Lab Reports📋", "reports_flow")
        ]
    ),
    quickReplyBlockGen(
        "🔴 বুঝি নাই 😶, দেখেন তো নিচের কিছু খুজছেন কিনা -",
        [
            quickReply("Help😥", "help_flow"),
            quickReply("Notes📗", "notes_flow"),
            quickReply("Routine📅", "routine_flow"),
            quickReply("Results📝", "result_flow"),
            quickReply("Lab Reports📋", "reports_flow")
        ]
    ),
    {
        "text": `🔴 Sorry I didn't understand you, here are few some suggestions -`,
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
    },
]


module.exports = defaultReply;