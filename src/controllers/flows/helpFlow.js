const help = [
    {
        "text": `⛳Usgae Instruction -\n\n🌠For Notes📗-\n1. just type any of these words - note, নোট, চোথা\n\n🌠For Routine 📃-\n\n1. Type  "routine" and send it
        \n\n🌠For Lab Report 🧾-\n\n 1. just type any of these words - report, lab, রিপোর্ট\n\n🌠For Result 📑-\n\n1. just type any of these words - result etc
        `,
        "quick_replies": [
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
            },
            {
                "content_type": "text",
                "title": "Syllabus📘",
                "payload": "syllabus_flow"
            }

        ]
    }
]


module.exports = help;