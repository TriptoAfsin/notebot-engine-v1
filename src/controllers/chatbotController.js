require("dotenv").config();


const request = require('request');

//keywords
const positiveKeywords = require('./keywords/positiveKeywords');
const negativeKeywords = require('./keywords/negativeKeywords');
const loveMojis = require('./keywords/loveMoji.js');
const greetWords = require('./keywords/greetWords');
const noteWords = require('./keywords/academic_words/noteWords');


//reply words
const loveMojiReplies = require('./keywords/replies/lovemojiReply');
const sadStuffReply = require('./keywords/replies/sadReplies');
const greetReplies = require('./keywords/replies/greetingsReply');


//keyword flows
const notesFlow = require('./flows/botReplies/noteFlow');

const MY_VERIFY_TOKEN = process.env.MY_VERIFY_TOKEN;

let testMsg = (req, res) => {
    return res.status(200).send("Hello from notebot engine v1 ✔✔")
}

//get webhook
let getWebhook = (req, res) => {

    // Your verify token. Should be a random string.
    let VERIFY_TOKEN = MY_VERIFY_TOKEN;

    // Parse the query params
    let mode = req.query['hub.mode'];
    let token = req.query['hub.verify_token'];
    let challenge = req.query['hub.challenge'];

    // Checks if a token and mode is in the query string of the request
    if (mode && token) {

        // Checks the mode and token sent is correct
        if (mode === 'subscribe' && token === VERIFY_TOKEN) {

            // Responds with the challenge token from the request
            console.log('WEBHOOK_VERIFIED');
            res.status(200).send(challenge);

        }
        else {
            // Responds with '403 Forbidden' if verify tokens do not match
            res.sendStatus(403);
        }
    }
}


//post webhook
let postWebhook = (req, res) => {

    let body = req.body;

    // Checks this is an event from a page subscription
    if (body.object === 'page') {

        // Iterates over each entry - there may be multiple if batched
        body.entry.forEach(function(entry) {

            // Gets the message. entry.messaging is an array, but 
            // will only ever contain one message, so we get index 0
            let webhook_event = entry.messaging[0];
            console.log(webhook_event);

            // Get the sender PSID
            let sender_psid = webhook_event.sender.id;
            console.log('Sender PSID: ' + sender_psid);

            // Check if the event is a message or postback and
            // pass the event to the appropriate handler function
            if (webhook_event.message) {
                handleMessage(sender_psid, webhook_event.message);
            } else if (webhook_event.postback) {
                handlePostback(sender_psid, webhook_event.postback);
            }
        });

    // Returns a '200 OK' response to all requests
        res.status(200).send('EVENT_RECEIVED');
  } 
    else {
        // Returns a '404 Not Found' if event is not from a page subscription
        res.sendStatus(404);
    } 
    
}



// Handles messages events
function handleMessage(sender_psid, received_message) {

    let response;
    let response2;
    let response3;
    
    
    //keywords
    const greets = greetWords;
    const notes = noteWords;
    const greetReply = greetReplies;
    const loveMoji = loveMojis;
    const loveReply = loveMojiReplies;
    const sadReply = sadStuffReply;
    const positive = positiveKeywords;
    const negative = negativeKeywords;

  
    
    // Check if the message
    if(greets.some(word => received_message.text.toLowerCase().includes(word))){
        // Create the payload for a basic text message
      response = {
        "text": `${greetReply[Math.floor(Math.random()*greetReply.length)]}`
      }
    }

   

    else if(positive.some(word => received_message.text.toLowerCase().includes(word))){
        // Create the payload for a basic text message
      response = {
        "text": `${loveReply[Math.floor(Math.random()*loveReply.length)]}`
      }
    }

    else if(negative.some(word => received_message.text.toLowerCase().includes(word))){
        // Create the payload for a basic text message
      response = {
        "text": `${sadReply[Math.floor(Math.random()*sadReply.length)]}`
      }
    }

    else if(notes.some(word => received_message.text.toLowerCase().includes(word))){
        response = notesFlow;
        response2 = notesFlow;
    }

     //emoji
     else if(loveMoji.some(word => received_message.text.includes(word))){
        // Create the payload for a basic text message
      response = {
        "text": `${loveReply[Math.floor(Math.random()*loveReply.length)]}`
      }
    }


    
    //default reply
    else if (received_message.text) {    
      // Create the payload for a basic text message
      response = {
        "text": `Sorry I didn't get what you meant by - "${received_message.text}"😥`
      }
    }  
    
    // Sends the response message
    callSendAPI(sender_psid, response);    
  }



// Handles messaging_postbacks events(button response)
function handlePostback(sender_psid, received_postback) {

    let response;

    // Get the payload for the postback
    let payload = received_postback.payload;

    // Set the response based on the postback payload
    if (payload === 'get_started') {
        response = { "text": `Welcome to ____` }
    } 
    else if (payload === 'level_1') {
        response = { "text": "Notes for level 1" }
    } 
    else if (payload === 'level_2') {
        response = { "text": "Notes for level 2" }
    }
    else if (payload === 'level_3') {
        response = { "text": "Notes for level 3" }
    }
    else if (payload === 'level_4') {
        response = { "text": "Notes for level 4" }
    }
    // Send the message to acknowledge the postback
    callSendAPI(sender_psid, response);


}

// Sends response messages via the Send API
function callSendAPI(sender_psid, response) {
    // Construct the message body
    let request_body = {
      "recipient": {
        "id": sender_psid
      },
      "message": response
    }
  
    // Send the HTTP request to the Messenger Platform
    request({
      "uri": "https://graph.facebook.com/v7.0/me/messages",
      "qs": { "access_token": process.env.PAGE_ACCESS_TOKEN },
      "method": "POST",
      "json": request_body
    }, (err, res, body) => {
      if (!err) {
        console.log('message sent!')
      } else {
        console.error("Unable to send message:" + err);
      }
    }); 
}


module.exports = {
    testMsg: testMsg,
    getWebhook: getWebhook,
    postWebhook: postWebhook
}