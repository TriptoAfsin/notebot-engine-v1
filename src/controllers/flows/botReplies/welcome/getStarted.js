/*
//services
require("dotenv").config();


const request = require('request');


let getFacebookUserInfo = (sender_psid) => {

    return new Promise((resolve, reject) => {
        let uri = `https://graph.facebook.com/${sender_psid}?fields=first_name,last_name,profile_pic&access_token=${process.env.PAGE_ACCESS_TOKEN}`
        // Send the HTTP request to the Messenger Platform
        request({
            "uri": uri,
            "method": "GET", //get method here
        }, (err, res, body) => {
            //console.log(body);
            if (!err) {
                userName = `${body.last_name} ${body.first_name}`;
                resolve(userName);
            } else {
                reject("Unable to send message:" + err);
            }
        });
    })
}
*/



const getStarted = [
    {
        "text": `Hello 😄, Welcome to the new BUTEX NoteBOT`,
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