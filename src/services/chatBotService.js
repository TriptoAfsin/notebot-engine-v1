
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
                let userName = `${body.last_name} ${body.first_name}`;
                resolve(userName);
            } else {
                reject("Unable to send message:" + err);
            }
        });
    })
}

module.exports = {
    getFacebookUserInfo: getFacebookUserInfo
};