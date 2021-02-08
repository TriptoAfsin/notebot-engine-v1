let greetText = [
    "Hey!", 
    "Hello", 
    "Hello!", 
    "Hi 😊", 
    "Wassup 😀", 
    "Hello 😀"
];


let greetReplies = [
    {
        "text": `${greetText[Math.floor(Math.random()*greetText.length)]}`,
        "quick_replies": [{
                "content_type": "text",
                "title": "Notes 📗",
                "payload": "notes_flow"
            },
            {
                "content_type": "text",
                "title": "Routine 📅",
                "payload": "routine_flow"
            },
            {
                "content_type": "text",
                "title": "Results 📝",
                "payload": "result_flow"
            },
            {
                "content_type": "text",
                "title": "Lab Reports 📋",
                "payload": "reports_flow"
            },
            {
                "content_type": "text",
                "title": "Syllabus 📘",
                "payload": "syllabus_flow"
            },
        ]
    }
]

module.exports = greetReplies;