
require("dotenv").config();
const request = require('request');

let getHomepage = (req, res) => {
    return res.render("homepage.ejs");
};

let getFacebookUserProfile = (req, res) => {
    return res.render("profile.ejs");
}

let setUpUserFacebookProfile = (req, res) => {


    // Send the HTTP request to the Messenger Platform

    let data = {
        "get_started": {
            "payload": "GET_STARTED"
        },
        "persistent_menu": [
            {
                "locale": "default",
                "composer_input_disabled": false,
                "call_to_actions": [
                    {
                        "type": "postback",
                        "title": "Talk to an agent",
                        "payload": "CARE_HELP"
                    },
                    {
                        "type": "postback",
                        "title": "Outfit suggestions",
                        "payload": "CURATION"
                    },
                    {
                        "type": "web_url",
                        "title": "Shop now",
                        "url": "https://www.originalcoastclothing.com/",
                        "webview_height_ratio": "full"
                    }
                ]
            }
        ],
        
            "whitelisted_domains":[
              "https://notebot-engine-v1.herokuapp.com/",
              "https://triptex.me/",
              "https://notebot.triptex.me/"
            ]
    }


    request({
        "uri": "https://graph.facebook.com/v9.0/me/messenger_profile",
        "qs": { "access_token": process.env.PAGE_ACCESS_TOKEN },
        "method": "POST",
        "json": data
      }, (err, res, body) => {
        if (!err) {
           console.log("Done")
        } else {
         console.log("Error")
        }
      }); 

    return res.status(200).json({
        message: "Okay ✔"
    })
}



module.exports = {
    getHomepage: getHomepage,
    getFacebookUserProfile: getFacebookUserProfile,
    setUpUserFacebookProfile: setUpUserFacebookProfile
}