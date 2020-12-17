require("dotenv").config();


const request = require('request');

//services
const chatBotService = require('../services/chatBotService');

//keywords
const positiveKeywords = require('./keywords/positiveKeywords');
const negativeKeywords = require('./keywords/negativeKeywords');
const loveMojis = require('./keywords/loveMoji.js');
const greetWords = require('./keywords/greetWords');
//academic
const noteWords = require('./keywords/academic_words/noteWords');
const level_1_note_words = require('./keywords/academic_words/level1_word_note');
const level_2_note_words = require('./keywords/academic_words/level2_word_note');
const level_3_note_words = require('./keywords/academic_words/level3_word_note');
const level_4_note_words = require('./keywords/academic_words/level4_word_note');
//academic -> bce
const bce_words = require('./keywords/academic_words/subjects/bceWords');
//academic -> cp
const cp_words = require('./keywords/academic_words/subjects/cpWords');

const labWords = require('./keywords/academic_words/labWords');

const routineWords = require('./keywords/academic_words/routineWords');
const resultWords = require('./keywords/academic_words/resultWords');
const syllabusWords = require('./keywords/academic_words/syllabusWords');

//default reply
const defaultReply = require('./keywords/replies/defaultReply');
const getStartedMsg = require('./flows/botReplies/welcome/getStarted');

const testReply = require('./keywords/replies/testReply');


//reply words
const loveMojiReplies = require('./keywords/replies/lovemojiReply');
const sadStuffReply = require('./keywords/replies/sadReplies');
const greetReplies = require('./keywords/replies/greetingsReply');


//keyword flows
const notesFlow = require('./flows/botReplies/noteFlow');
const level_1_notes = require('./flows/botReplies/note_levels/level_1/level_1_flow');
const level_2_notes = require('./flows/botReplies/note_levels/level_2/level_2_flow');
const level_3_notes = require('./flows/botReplies/note_levels/level_3/level_3_flow');
const level_4_notes = require('./flows/botReplies/note_levels/level_4/level_4_flow');

//academic flows -> bce
const bce_flow = require('./flows/botReplies/note_levels/level_1/level_1_subs/bce/bce_flow');
const bce_allsheets = require('./flows/botReplies/note_levels/level_1/level_1_subs/bce/topics/allsheetsBce');
const bce_part_a = require('./flows/botReplies/note_levels/level_1/level_1_subs/bce/topics/partABce');
const bce_part_b = require('./flows/botReplies/note_levels/level_1/level_1_subs/bce/topics/partBBce');
const full_part_bce = require('./flows/botReplies/note_levels/level_1/level_1_subs/bce/topics/fullabpartBce');
const bce_questions = require('./flows/botReplies/note_levels/level_1/level_1_subs/bce/topics/bceQuestions');
const bce_letter = require('./flows/botReplies/note_levels/level_1/level_1_subs/bce/topics/letterBce');
const bce_report = require('./flows/botReplies/note_levels/level_1/level_1_subs/bce/topics/reportBce');
const bce_read_writing = require('./flows/botReplies/note_levels/level_1/level_1_subs/bce/topics/reading_writingBce');
const bce_intro = require('./flows/botReplies/note_levels/level_1/level_1_subs/bce/topics/introBce');
const bce_lang_func = require('./flows/botReplies/note_levels/level_1/level_1_subs/bce/topics/langFuncBce');
const bce_comm = require('./flows/botReplies/note_levels/level_1/level_1_subs/bce/topics/communicationBce');

//academic flows -> cp
const labFlow = require('./flows/botReplies/labFlow');
const routineFlow = require('./flows/botReplies/routineFlow');
const resultFlow = require('./flows/botReplies/resultFlow');
const syllabusFlow = require('./flows/botReplies/syllabusFlow');
const cp_flow = require("./flows/botReplies/note_levels/level_1/level_1_subs/cp/cp_flow");




const MY_VERIFY_TOKEN = process.env.MY_VERIFY_TOKEN;

let testMsg = (req, res) => {
    return res.status(200).send(`Hello from notebot engine v1 ✔✔\n here are some routes - \n/profile\n/homepage`)
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
    let response4;
    let response5;
    let response6;
    let response7;
    let response8;
    let response9;
    let response10;
    
    
    //keywords
    const greets = greetWords;

    //academic
    const notes = noteWords;
    const level1 = level_1_note_words;
    const level2 = level_2_note_words;
    const level3 = level_3_note_words;
    const level4 = level_4_note_words;
    const bce = bce_words;
    const cp = cp_words;
    const lab_report = labWords;
    const result = resultWords;
    const routine = routineWords;
    const syllabus = syllabusWords;


    const greetReply = greetReplies;
    const loveMoji = loveMojis;
    const loveReply = loveMojiReplies;
    const sadReply = sadStuffReply;
    const positive = positiveKeywords;
    const negative = negativeKeywords;

    const getStartedWords = ["Get Started", "get satrted", "Get started", "get Started"];

    const test = ["test", "Test"];

    
    
    // Check if the message
    if (greets.some(word => received_message.text.toLowerCase().includes(word))) {
      // Create the payload for a basic text message
      response = greetReplies[0];
    }



    else if (positive.some(word => received_message.text.toLowerCase().includes(word))) {
      // Create the payload for a basic text message
      response = {
        "text": `${loveReply[Math.floor(Math.random() * loveReply.length)]}`
      }
    }

    else if (getStartedWords.some(word => received_message.text.toLowerCase().includes(word))) {
      // Create the payload for a basic text message
      response = getStartedMsg[0];
    }

    else if (test.includes(received_message.text)) {
      // Create the payload for a basic text message
      return response = testReply[0];
    }


    else if (negative.some(word => received_message.text.toLowerCase().includes(word))) {
      // Create the payload for a basic text message
      response = {
        "text": `${sadReply[Math.floor(Math.random() * sadReply.length)]}`
      }
    }


    //academic
    else if (notes.some(word => received_message.text.toLowerCase().includes(word))) {

      response = notesFlow[0];
      response2 = notesFlow[1];
      callSendAPI2(sender_psid, response2)
      
    }

    else if (level1.some(word => received_message.text.toLowerCase().includes(word))) {

      response = level_1_notes[0];
      response2 = level_1_notes[1];
      response3 = level_1_notes[2];
      response4 = level_1_notes[3];
      response5 = level_1_notes[4];
      response6 = level_1_notes[5];
      response7 = level_1_notes[6];

      callSendAPI2(sender_psid, response2);
      callSendAPI3(sender_psid, response3);
      callSendAPI4(sender_psid, response4);
      callSendAPI5(sender_psid, response5);
      callSendAPI6(sender_psid, response6);
      callSendAPI7(sender_psid, response7);
      
    }

    else if (level2.some(word => received_message.text.toLowerCase().includes(word))) {

      response = level_2_notes[0];
      response2 = level_2_notes[1];
      response3 = level_2_notes[2];
      response4 = level_2_notes[3];
      response5 = level_2_notes[4];
      response6 = level_2_notes[5];
      response7 = level_2_notes[6];
      response8 = level_2_notes[7];

      callSendAPI2(sender_psid, response2);
      callSendAPI3(sender_psid, response3);
      callSendAPI4(sender_psid, response4);
      callSendAPI5(sender_psid, response5);
      callSendAPI6(sender_psid, response6);
      callSendAPI7(sender_psid, response7);
      callSendAPI8(sender_psid, response8);
      
    }

    else if (level3.some(word => received_message.text.toLowerCase().includes(word))) {

      response = level_3_notes[0];
      response2 = level_3_notes[1];
      response3 = level_3_notes[2];
      response4 = level_3_notes[3];
      response5 = level_3_notes[4];
      response6 = level_3_notes[5];
      response7 = level_3_notes[6];

      callSendAPI2(sender_psid, response2);
      callSendAPI3(sender_psid, response3);
      callSendAPI4(sender_psid, response4);
      callSendAPI5(sender_psid, response5);
      callSendAPI6(sender_psid, response6);
      callSendAPI7(sender_psid, response7);
      
      
    }

    else if (level4.some(word => received_message.text.toLowerCase().includes(word))) {

      response = level_4_notes[0];
      response2 = level_4_notes[1];
      response3 = level_4_notes[2];
      response4 = level_4_notes[3];

      callSendAPI2(sender_psid, response2);
      callSendAPI3(sender_psid, response3);
      callSendAPI4(sender_psid, response4);
      
      
    }

    //academic -> bce
    else if (bce.some(word => received_message.text.toLowerCase().includes(word))) {

      response = bce_flow[0];
      response2 = bce_flow[1];
      response3 = bce_flow[2];
      response4 = bce_flow[3];

      callSendAPI2(sender_psid, response2);
      callSendAPI3(sender_psid, response3);
      callSendAPI4(sender_psid, response4);
      
      
    }

    //academic -> cp
    else if (cp.includes(received_message.text.toLowerCase())) {

      response = cp_flow[0];
      response2 = cp_flow[1];
      response3 = cp_flow[2];
      response4 = cp_flow[3];
      response5 = cp_flow[4];
      response6 = cp_flow[5];

      callSendAPI2(sender_psid, response2);
      callSendAPI3(sender_psid, response3);
      callSendAPI4(sender_psid, response4);
      callSendAPI5(sender_psid, response5);
      callSendAPI6(sender_psid, response6);
      
      
    }

    else if (lab_report.includes(received_message.text.toLowerCase())) {

      response = labFlow[0];
      response2 = labFlow[1];
      callSendAPI2(sender_psid, response2)
     
    }

    else if (result.some(word => received_message.text.toLowerCase().includes(word))) {

      response = resultFlow[0];
      response2 = resultFlow[1];
      callSendAPI2(sender_psid, response2)
     
    }

    else if (routine.some(word => received_message.text.toLowerCase().includes(word))) {
      response = routineFlow[0];
      response2 = routineFlow[1];
      callSendAPI2(sender_psid, response2)
    }

    else if (syllabus.some(word => received_message.text.toLowerCase().includes(word))) {

      response = syllabusFlow[0];
    }






    //emoji
    else if (loveMoji.some(word => received_message.text.includes(word))) {
      // Create the payload for a basic text message
      response = {
        "text": `${loveReply[Math.floor(Math.random() * loveReply.length)]}`
      }
    }

    
    

    //default reply
    else if (received_message.text) {
      // Create the payload for a basic text message
      // response = response = testReply[0];
      response = defaultReply[0];
    }
    
  
  
    // Sends the response message
    callSendAPI(sender_psid, response);    
  }



// Handles messaging_postbacks events(button response)
let handlePostback = async (sender_psid, received_postback) => {

  let response;
  let response2;
  let response3;
  let response4;
  let response5;
  let response6;
  let response7;
  let response8;
  let response9;
  let response10;

    // Get the payload for the postback
    let payload = received_postback.payload;

    // Set the response based on the postback payload
    if (payload === 'GET_STARTED') {
      //getting username
      let username = await chatBotService.getFacebookUserInfo(sender_psid);

      console.log(username);
      response = getStartedMsg[0];
      callSendAPI(sender_psid, response);
    } 

    else if (payload === 'level_1') {
        response = level_1_notes[0];
        response2 = level_1_notes[1];
        response3 = level_1_notes[2];
        response4 = level_1_notes[3];
        response5 = level_1_notes[4];
        response6 = level_1_notes[5];
        response7 = level_1_notes[6];


        callSendAPI(sender_psid, response);
        callSendAPI2(sender_psid, response2);
        callSendAPI3(sender_psid, response3);
        callSendAPI4(sender_psid, response4);
        callSendAPI5(sender_psid, response5);
        callSendAPI6(sender_psid, response6);
        callSendAPI7(sender_psid, response7);
    } 

    else if (payload === 'level_2') {
      response = level_2_notes[0];
      response2 = level_2_notes[1];
      response3 = level_2_notes[2];
      response4 = level_2_notes[3];
      response5 = level_2_notes[4];
      response6 = level_2_notes[5];
      response7 = level_2_notes[6];
      response8 = level_2_notes[7];


      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
      callSendAPI3(sender_psid, response3);
      callSendAPI4(sender_psid, response4);
      callSendAPI5(sender_psid, response5);
      callSendAPI6(sender_psid, response6);
      callSendAPI7(sender_psid, response7);
      callSendAPI8(sender_psid, response8);
  } 
    else if (payload === 'level_3') {
      response = level_3_notes[0];
      response2 = level_3_notes[1];
      response3 = level_3_notes[2];
      response4 = level_3_notes[3];
      response5 = level_3_notes[4];
      response6 = level_3_notes[5];
      response7 = level_3_notes[6];


      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
      callSendAPI3(sender_psid, response3);
      callSendAPI4(sender_psid, response4);
      callSendAPI5(sender_psid, response5);
      callSendAPI6(sender_psid, response6);
      callSendAPI7(sender_psid, response7);
    }
    else if (payload === 'level_4') {
      response = level_4_notes[0];
      response2 = level_4_notes[1];
      response3 = level_4_notes[2];
      response4 = level_4_notes[3];
      


      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
      callSendAPI3(sender_psid, response3);
      callSendAPI4(sender_psid, response4);
    }

    //subject-> bce
    else if (payload === 'bce_flow') {
      response = bce_flow[0];
      response2 = bce_flow[1];
      response3 = bce_flow[2];
      response4 = bce_flow[3];

      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
      callSendAPI3(sender_psid, response3);
      callSendAPI4(sender_psid, response4);
    }

    else if (payload === 'all_sheets_bce_flow') {
      response = bce_allsheets[0];
      response2 = bce_allsheets[1];
     

      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
      
    }

    else if (payload === 'part_a_bce_flow') {
      response = bce_part_a[0];
      response2 = bce_part_a[1];
     

      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
    }
    else if (payload === 'part_b_bce_flow') {
      response = bce_part_b[0];
      response2 = bce_part_b[1];
      response3 = bce_part_b[2];


      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
      callSendAPI3(sender_psid, response3);
    }
    else if (payload === 'full_ab_bce_flow') {
      response = full_part_bce[0];
      response2 = full_part_bce[1];


      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
    }
    else if (payload === 'letter_bce_flow') {
      response = bce_letter[0];
      response2 = bce_letter[1];
      response3 = bce_letter[2];


      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
      callSendAPI3(sender_psid, response3);
    }
    else if (payload === 'communi_bce_flow') {
      response = bce_comm[0];
      response2 = bce_comm[1];


      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
    }
    else if (payload === 'lang_func_bce_flow') {
      response = bce_lang_func[0];
      response2 = bce_lang_func[1];


      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
    }
    else if (payload === 'intro_bce_flow') {
      response = bce_intro[0];

      callSendAPI(sender_psid, response);
    }
    else if (payload === 'bce_ques_flow') {
      response = bce_questions[0];

      callSendAPI(sender_psid, response);
    }
    else if (payload === 'report_bce_flow') {
      response = bce_report[0];

      callSendAPI(sender_psid, response);
    }
    else if (payload === 'read_write_bce_flow') {
      response = bce_read_writing[0];

      callSendAPI(sender_psid, response);
    }

    //subject-> cp
    else if (payload === 'cp_flow') {
      response = cp_flow[0];
      response2 = cp_flow[1];
      response3 = cp_flow[2];
      response4 = cp_flow[3];
      response4 = cp_flow[4];
      response4 = cp_flow[5];

      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
      callSendAPI3(sender_psid, response3);
      callSendAPI4(sender_psid, response4);
      callSendAPI5(sender_psid, response5);
      callSendAPI6(sender_psid, response6);
    }
    
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

// Sends response messages via the Send API2
function callSendAPI2(sender_psid, response2) {
  // Construct the message body
  let request_body = {
    "recipient": {
      "id": sender_psid
    },
    "message": response2
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

// Sends response messages via the Send API3
function callSendAPI3(sender_psid, response3) {
  // Construct the message body
  let request_body = {
    "recipient": {
      "id": sender_psid
    },
    "message": response3
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

// Sends response messages via the Send API4
function callSendAPI4(sender_psid, response4) {
  // Construct the message body
  let request_body = {
    "recipient": {
      "id": sender_psid
    },
    "message": response4
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

// Sends response messages via the Send API5
function callSendAPI5(sender_psid, response5) {
  // Construct the message body
  let request_body = {
    "recipient": {
      "id": sender_psid
    },
    "message": response5
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


// Sends response messages via the Send API6
function callSendAPI6(sender_psid, response6) {
  // Construct the message body
  let request_body = {
    "recipient": {
      "id": sender_psid
    },
    "message": response6
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


// Sends response messages via the Send API7
function callSendAPI7(sender_psid, response7) {
  // Construct the message body
  let request_body = {
    "recipient": {
      "id": sender_psid
    },
    "message": response7
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


// Sends response messages via the Send API8
function callSendAPI8(sender_psid, response8) {
  // Construct the message body
  let request_body = {
    "recipient": {
      "id": sender_psid
    },
    "message": response8
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


// Sends response messages via the Send API9
function callSendAPI9(sender_psid, response9) {
  // Construct the message body
  let request_body = {
    "recipient": {
      "id": sender_psid
    },
    "message": response9
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

// Sends response messages via the Send API10
function callSendAPI10(sender_psid, response10) {
  // Construct the message body
  let request_body = {
    "recipient": {
      "id": sender_psid
    },
    "message": response10
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