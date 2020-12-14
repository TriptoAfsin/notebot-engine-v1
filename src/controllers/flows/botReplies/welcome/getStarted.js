//services
const chatBotService = require('../../../../services/chatBotService');

let username = await chatBotService.getFacebookUserInfo(sender_psid);

const getStarted = [
    {
        "text": `Hello ${username}, Welcome to the new BUTEX NoteBOT`,
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