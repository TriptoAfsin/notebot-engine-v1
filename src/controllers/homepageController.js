
require("dotenv").config();
const request = require('request');

//bot config
const botConfig = require("../config/botConfig")

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
        "greeting":[
            {
              "locale":"default",
              "text": botConfig.defaultGreeting,
            }, {
              "locale":"en_US",
              "text": botConfig.enGreeting,
            }
        ],
        "persistent_menu": [
            {
                "locale": "default",
                "composer_input_disabled": false,
                "call_to_actions": botConfig.persistentMenuButtons,
            }
        ],
        
            "whitelisted_domains":[
              "https://notebot-engine-v1.herokuapp.com/",
              "https://triptex.me/",
              "https://notebot.triptex.me/"
            ]
    }


    request({
        "uri": "https://graph.facebook.com/v21.0/me/messenger_profile",
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