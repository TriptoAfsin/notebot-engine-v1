let grroupedButtonBlockGen = require("simple-messenger-blocks/groupedBtnBlockGen");
let webBtnBlockGen = require("simple-messenger-blocks/webBtnGen");
let payloadBtnGen = require("simple-messenger-blocks/payloadBtnGen");

let greetText = [
    "Hey!", 
    "Hello", 
    "Hello!", 
    "Hi 😊", 
    "Wassup 😀", 
    "Hello 😀",
    "Hey 😊",
    "Hi, How can i help you?",
];


let greetReplies = [
    grroupedButtonBlockGen(
        `${greetText[Math.floor(Math.random()*greetText.length)]}`,
        [
            payloadBtnGen("Notes 📗", "notes_flow"),
            payloadBtnGen("Lab Reports 📋", "reports_flow"),
            payloadBtnGen("QB 📑", "qb_flow")
        ]
    ),
    // {
    //     "text": `${greetText[Math.floor(Math.random()*greetText.length)]}`,
    //     "quick_replies": [{
    //             "content_type": "text",
    //             "title": "Notes 📗",
    //             "payload": "notes_flow"
    //         },
    //         {
    //             "content_type": "text",
    //             "title": "Routine 📅",
    //             "payload": "routine_flow"
    //         },
    //         {
    //             "content_type": "text",
    //             "title": "Results 📝",
    //             "payload": "result_flow"
    //         },
    //         {
    //             "content_type": "text",
    //             "title": "Lab Reports 📋",
    //             "payload": "reports_flow"
    //         },
    //         {
    //             "content_type": "text",
    //             "title": "Syllabus 📘",
    //             "payload": "syllabus_flow"
    //         },
    //     ]
    // }
]

module.exports = greetReplies;