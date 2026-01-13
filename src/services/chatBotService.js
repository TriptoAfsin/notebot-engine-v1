require("dotenv").config();

const request = require("request");

let getFacebookUserInfo = sender_psid => {
  return new Promise((resolve, reject) => {
    try {
      let uri = `https://graph.facebook.com/${sender_psid}?fields=first_name,last_name,profile_pic&access_token=${process.env.PAGE_ACCESS_TOKEN}`;
      // Send the HTTP request to the Messenger Platform
      request(
        {
          uri: uri,
          method: "GET", //get method here
        },
        (err, res, body) => {
          //console.log(body);
          if (!err) {
            let parsedBody = JSON.parse(body)
            let userName = `${parsedBody.last_name} ${parsedBody.first_name}`;
            resolve(userName);
          } else {
            reject("Unable to send message:" + err);
          }
        }
      );
    } catch (e) {
      reject("Unable to send message:" + err);
    }
  });
};

let markMessageRead = (sender_psid) => {
  return new Promise((resolve, reject) => {
    try {
      let uri = `https://graph.facebook.com/v21.0/me/messages?access_token=${process.env.PAGE_ACCESS_TOKEN}`;
      // Send the HTTP request to the Messenger Platform
      request(
        {
          uri: uri,
          method: "POST",
          json: {
            "recipient":{
              "id": sender_psid
            },
            "sender_action":"mark_seen "
          }
        },
        (err, res, body) => {
          //console.log(body);
          if (!err) {
            resolve("done !");
          } else {
            reject("Unable to post sender action" + err);
          }
        }
      );
    } catch (e) {
      reject(err);
    }
  });
}

let sendTypingOn = (sender_psid) => {
  return new Promise((resolve, reject) => {
    try {
      let uri = `https://graph.facebook.com/v21.0/me/messages?access_token=${process.env.PAGE_ACCESS_TOKEN}`;
      // Send the HTTP request to the Messenger Platform
      request(
        {
          uri: uri,
          method: "POST",
          json: {
            "recipient":{
              "id": sender_psid
            },
            "sender_action":"typing_on"
          }
        },
        (err, res, body) => {
          //console.log(body);
          if (!err) {
            resolve("done !");
          } else {
            reject("Unable to post sender action" + err);
          }
        }
      );
    } catch (e) {
      reject(err);
    }
  });
}

let sendTypingOff = (sender_psid) => {
  return new Promise((resolve, reject) => {
    try {
      let uri = `https://graph.facebook.com/v21.0/me/messages?access_token=${process.env.PAGE_ACCESS_TOKEN}`;
      // Send the HTTP request to the Messenger Platform
      request(
        {
          uri: uri,
          method: "POST",
          json: {
            "recipient":{
              "id": sender_psid
            },
            "sender_action":"typing_off"
          }
        },
        (err, res, body) => {
          //console.log(body);
          if (!err) {
            resolve("done !");
          } else {
            reject("Unable to post sender action" + err);
          }
        }
      );
    } catch (e) {
      reject(err);
    }
  });
}

let passThreadControl = (sender_psid, app) => {
  return new Promise(async (resolve, reject) => {
    try {
      let target_app_id = ""
      let metadata = ""

      if(app === "page_inbox"){
        target_app_id = process.env.SECONDARY_RECEIVER_ID;
        metadata = "Pass control to human"
      }
      if(app === "primary"){
        target_app_id = process.env.FACEBOOK_APP_ID;
        metadata = "Pass control to bot"
      }
      let uri = `https://graph.facebook.com/v21.0/me/pass_thread_control`;
      // Send the HTTP request to the Messenger Platform
      request(
        {
          uri: uri,
          qs: {"access_token": process.env.PAGE_ACCESS_TOKEN},
          method: "POST",
          json: {
            "recipient":{
              "id": sender_psid
            },
            "target_app_id": target_app_id,
            "metadata": metadata
          }
        },
        (err, res, body) => {
          //console.log(body);
          if (!err) {
            resolve("done !");
          } else {
            reject("Unable to post sender action" + err);
          }
        }
      );
    }catch (e) {
      reject(err);
    }
  });
}

let takeThreadControl = (sender_psid) => {
  return new Promise(async (resolve, reject) => {
    try {
      let uri = `https://graph.facebook.com/v21.0/me/take_thread_control`;
      // Send the HTTP request to the Messenger Platform
      request(
        {
          uri: uri,
          qs: {"access_token": process.env.PAGE_ACCESS_TOKEN},
          method: "POST",
          json: {
            "recipient":{
              "id": sender_psid
            },
            // "target_app_id": process.env.FACEBOOK_APP_ID,
            "metadata": "Pass control to bot"
          }
        },
        (err, res, body) => {
          //console.log(body);
          if (!err) {
            resolve("done !");
          } else {
            reject("Unable to post sender action" + err);
          }
        }
      );
    }catch (e) {
      reject(err);
    }
  });
}

let talkToHuman = async (sender_psid) => {
  return new Promise(async (resolve, reject) => {
    try {
      let res1 = {
        "text": "A person will get in touch with you"
      }
      await passThreadControl(sender_psid, "page_inbox")
    } catch (e) {
      reject(err);
    }
  });
}

let restartBot = async (sender_psid) => {
  return new Promise(async (resolve, reject) => {
    try {
      let res1 = {
        "text": "A person will get in touch with you"
      }
      await takeThreadControl(sender_psid)
    } catch (e) {
      reject(err);
    }
  });
}

module.exports = {
  getFacebookUserInfo: getFacebookUserInfo,
  sendTypingOn: sendTypingOn,
  markMessageRead: markMessageRead,
  sendTypingOff: sendTypingOff,
  talkToHuman: talkToHuman,
  restartBot: restartBot,
  takeThreadControl: takeThreadControl,
};
