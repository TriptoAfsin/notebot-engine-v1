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
//academic -> chem1
const chem1_words = require('./keywords/academic_words/subjects/chem1Words');
//academic -> phy1
const phy1_words = require('./keywords/academic_words/subjects/phy1Words');
//academic -> math1
const math1_words = require('./keywords/academic_words/subjects/math1Words');


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
const cp_flow = require("./flows/botReplies/note_levels/level_1/level_1_subs/cp/cp_flow");
const cp_books = require("./flows/botReplies/note_levels/level_1/level_1_subs/cp/topics/booksCp");
const cp_ques = require("./flows/botReplies/note_levels/level_1/level_1_subs/cp/topics/quesCp");
const cp_condition = require("./flows/botReplies/note_levels/level_1/level_1_subs/cp/topics/conditionCp");
const cp_fundamental = require("./flows/botReplies/note_levels/level_1/level_1_subs/cp/topics/fundamentalCp");
const cp_loops = require("./flows/botReplies/note_levels/level_1/level_1_subs/cp/topics/loopCp");
const cp_array = require("./flows/botReplies/note_levels/level_1/level_1_subs/cp/topics/arrayCp");
const cp_function = require("./flows/botReplies/note_levels/level_1/level_1_subs/cp/topics/funcCp");
const cp_string = require("./flows/botReplies/note_levels/level_1/level_1_subs/cp/topics/stringCp");
const cp_suggestion = require("./flows/botReplies/note_levels/level_1/level_1_subs/cp/topics/suggestionCp");

//academic flows -> chem1
const chem1_flow = require("./flows/botReplies/note_levels/level_1/level_1_subs/chem1/chem1_flow");
const chem1_books = require("./flows/botReplies/note_levels/level_1/level_1_subs/chem1/topics/chem1Books");
const chem1_ques = require("./flows/botReplies/note_levels/level_1/level_1_subs/chem1/topics/chem1Ques");
const chem1_period = require("./flows/botReplies/note_levels/level_1/level_1_subs/chem1/topics/chem1Perio");
const chem1_dilute = require("./flows/botReplies/note_levels/level_1/level_1_subs/chem1/topics/chem1Dilu");
const chem1_complex = require("./flows/botReplies/note_levels/level_1/level_1_subs/chem1/topics/chem1Complx");
const chem1_bond = require("./flows/botReplies/note_levels/level_1/level_1_subs/chem1/topics/cehm1Bond");
const chem1_kinetic = require("./flows/botReplies/note_levels/level_1/level_1_subs/chem1/topics/cehm1Kinetics");
const chem1_equilibrium = require("./flows/botReplies/note_levels/level_1/level_1_subs/chem1/topics/chem1Equi");
const chem1_photo = require("./flows/botReplies/note_levels/level_1/level_1_subs/chem1/topics/chem1Photo");
const chem1_analy = require("./flows/botReplies/note_levels/level_1/level_1_subs/chem1/topics/chem1Analy");
const chem1_colloid = require("./flows/botReplies/note_levels/level_1/level_1_subs/chem1/topics/chem1Coll");
const chem1_acid_base = require("./flows/botReplies/note_levels/level_1/level_1_subs/chem1/topics/chem1Acibas");

//academic flows -> phy1
const phy1_flow = require("./flows/botReplies/note_levels/level_1/level_1_subs/phy1/phy1_flow");
const phy1_books = require("./flows/botReplies/note_levels/level_1/level_1_subs/phy1/topics/phy1Books");
const phy1_ques = require("./flows/botReplies/note_levels/level_1/level_1_subs/phy1/topics/phy1Ques");
const phy1_circular = require("./flows/botReplies/note_levels/level_1/level_1_subs/phy1/topics/phy1Circular");
const phy1_hydro = require("./flows/botReplies/note_levels/level_1/level_1_subs/phy1/topics/phy1Hydro");
const phy1_diffraction = require("./flows/botReplies/note_levels/level_1/level_1_subs/phy1/topics/phy1Diffrac");
const phy1_interferrence = require("./flows/botReplies/note_levels/level_1/level_1_subs/phy1/topics/phy1Interfe");
const phy1_polar = require("./flows/botReplies/note_levels/level_1/level_1_subs/phy1/topics/phy1Polar");
const phy1_elasticity = require("./flows/botReplies/note_levels/level_1/level_1_subs/phy1/topics/phy1Elasti");
const phy1_viscosity = require("./flows/botReplies/note_levels/level_1/level_1_subs/phy1/topics/phy1Visco");
const phy1_surface = require("./flows/botReplies/note_levels/level_1/level_1_subs/phy1/topics/phy1Surface");


//academic flows -> math1
const math1_flow = require("./flows/botReplies/note_levels/level_1/level_1_subs/math1/math1_flow");
const math1_books = require("./flows/botReplies/note_levels/level_1/level_1_subs/math1/topics/math1Books");
const math1_question = require("./flows/botReplies/note_levels/level_1/level_1_subs/math1/topics/math1Ques");
const math1_solve = require("./flows/botReplies/note_levels/level_1/level_1_subs/math1/topics/math1Solve/math1Solve");
const math1_solve_diff = require("./flows/botReplies/note_levels/level_1/level_1_subs/math1/topics/math1Solve/solves/diffSolve");
const math1_solve_coord = require("./flows/botReplies/note_levels/level_1/level_1_subs/math1/topics/math1Solve/solves/coOrdSolve");
const math1_solve_integre = require("./flows/botReplies/note_levels/level_1/level_1_subs/math1/topics/math1Solve/solves/integrationSolve");
const math1_solve_linear = require("./flows/botReplies/note_levels/level_1/level_1_subs/math1/topics/math1Solve/solves/linearSolve");
const math1_convergence = require("./flows/botReplies/note_levels/level_1/level_1_subs/math1/topics/math1Conver");
const math1_expansion = require("./flows/botReplies/note_levels/level_1/level_1_subs/math1/topics/math1Exapnasion");
const math1_differntitation = require("./flows/botReplies/note_levels/level_1/level_1_subs/math1/topics/math1Differnti");
const math1_integration = require("./flows/botReplies/note_levels/level_1/level_1_subs/math1/topics/math1Integreation");
const math1_extrema = require("./flows/botReplies/note_levels/level_1/level_1_subs/math1/topics/math1Extremea");
const math1_conics = require("./flows/botReplies/note_levels/level_1/level_1_subs/math1/topics/math1Conics");
const math1_vector = require("./flows/botReplies/note_levels/level_1/level_1_subs/math1/topics/math1Vector");
const math1_matrix = require("./flows/botReplies/note_levels/level_1/level_1_subs/math1/topics/math1Matrix");
const math1_coOrd = require("./flows/botReplies/note_levels/level_1/level_1_subs/math1/topics/math1CoOrd");
const math1_linear = require("./flows/botReplies/note_levels/level_1/level_1_subs/math1/topics/math1Linear");
const math1_axes = require("./flows/botReplies/note_levels/level_1/level_1_subs/math1/topics/math1Axes");





const labFlow = require('./flows/botReplies/labFlow');
const routineFlow = require('./flows/botReplies/routineFlow');
const resultFlow = require('./flows/botReplies/resultFlow');
const syllabusFlow = require('./flows/botReplies/syllabusFlow');





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
    const chem1 = chem1_words;
    const phy1 = phy1_words;
    const math1 = math1_words;
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

     //academic -> chem1
     else if (chem1.includes(received_message.text.toLowerCase())) {

      response = chem1_flow[0];
      response2 = chem1_flow[1];
      response3 = chem1_flow[2];
      response4 = chem1_flow[3];

      callSendAPI2(sender_psid, response2);
      callSendAPI3(sender_psid, response3);
      callSendAPI4(sender_psid, response4);
    }

     //academic -> phy1
     else if (phy1.includes(received_message.text.toLowerCase())) {

      response = phy1_flow[0];
      response2 = phy1_flow[1];
      response3 = phy1_flow[2];
      response4 = phy1_flow[3];
      response5 = phy1_flow[4];

      callSendAPI2(sender_psid, response2);
      callSendAPI3(sender_psid, response3);
      callSendAPI4(sender_psid, response4);
      callSendAPI5(sender_psid, response5);
    }

    //academic -> math1
    else if (math1.includes(received_message.text.toLowerCase())) {

      response = math1_flow[0];
      response2 = math1_flow[1];
      response3 = math1_flow[2];
      response4 = math1_flow[3];
      response5 = math1_flow[4];

      callSendAPI2(sender_psid, response2);
      callSendAPI3(sender_psid, response3);
      callSendAPI4(sender_psid, response4);
      callSendAPI5(sender_psid, response5);
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
      response5 = cp_flow[4];
      response6 = cp_flow[5];

      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
      callSendAPI3(sender_psid, response3);
      callSendAPI4(sender_psid, response4);
      callSendAPI5(sender_psid, response5);
      callSendAPI6(sender_psid, response6);
    }

    else if (payload === 'books_cp_flow') {
      response = cp_books[0];
      response2 = cp_books[1];
      response3 = cp_books[2];

      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
      callSendAPI3(sender_psid, response3);
    }
    else if (payload === 'ques_cp_flow') {
      response = cp_ques[0];
      response2 = cp_ques[1];
      response3 = cp_ques[2];
      response4 = cp_ques[3];

      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
      callSendAPI3(sender_psid, response3);
      callSendAPI4(sender_psid, response4);
    }

    else if (payload === 'condition_cp_flow') {
      response = cp_condition[0];
     
      callSendAPI(sender_psid, response);
    }

    else if (payload === 'fundamental_cp_flow') {
      response = cp_fundamental[0];
     
      callSendAPI(sender_psid, response);
    }
    else if (payload === 'loop_cp_flow') {
      response = cp_loops[0];
     
      callSendAPI(sender_psid, response);
    }

    else if (payload === 'array_cp_flow') {
      response = cp_array[0];
      response2 = cp_array[1];
     
      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
    }
    else if (payload === 'function_cp_flow') {
      response = cp_function[0];
      response2 = cp_function[1];
     
      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
    }
    else if (payload === 'string_cp_flow') {
      response = cp_string[0];
      response2 = cp_string[1];
     
      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
    }
    else if (payload === 'suggestion_cp_flow') {
      response = cp_suggestion[1];
      callSendAPI(sender_psid, response);
    }


    //subject-> chem1
    else if (payload === 'che1_flow') {
      response = chem1_flow[0];
      response2 = chem1_flow[1];
      response3 = chem1_flow[2];
      response4 = chem1_flow[3];

      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
      callSendAPI3(sender_psid, response3);
      callSendAPI4(sender_psid, response4);
    }

    else if (payload === 'chem1_books_flow') {
      response = chem1_books[0];
      response2 = chem1_books[1];
      response3 = chem1_books[2];
      response4 = chem1_books[3];
      response5 = chem1_books[4];

      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
      callSendAPI3(sender_psid, response3);
      callSendAPI4(sender_psid, response4);
      callSendAPI5(sender_psid, response5);
    }

    else if (payload === 'chem1_ques_flow') {
      response = chem1_ques[0];
      response2 = chem1_ques[1];
      response3 = chem1_ques[2];

      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
      callSendAPI3(sender_psid, response3);
    }

    else if (payload === 'chem1_periodic_flow') {
      response = chem1_period[0];
      response2 = chem1_period[1];

      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
    }

    else if (payload === 'chem1_dilute_flow') {
      response = chem1_dilute[0];
      response2 = chem1_dilute[1];
      response3 = chem1_dilute[2];
      response4 = chem1_dilute[3];
      response5 = chem1_dilute[4];
      response6 = chem1_dilute[5];

      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
      callSendAPI3(sender_psid, response3);
      callSendAPI4(sender_psid, response4);
      callSendAPI5(sender_psid, response5);
      callSendAPI6(sender_psid, response6);
    }

    else if (payload === 'chem1_complx_flow') {
      response = chem1_complex[0];
      response2 = chem1_complex[1];
      response3 = chem1_complex[2];
      response4 = chem1_complex[3];
      response5 = chem1_complex[4];
      

      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
      callSendAPI3(sender_psid, response3);
      callSendAPI4(sender_psid, response4);
      callSendAPI5(sender_psid, response5);
      
    }

    else if (payload === 'chem1_bond_flow') {
      response = chem1_bond[0];
      response2 = chem1_bond[1];
      

      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
    }

    else if (payload === 'chem1_equi_flow') {
      response = chem1_equilibrium[0];
      response2 = chem1_equilibrium[1];
      response3 = chem1_equilibrium[2];
      response4 = chem1_equilibrium[3];
      

      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
      callSendAPI3(sender_psid, response3);
      callSendAPI4(sender_psid, response4);
    }

    else if (payload === 'chem1_photo_flow') {
      response = chem1_photo[0];
      response2 = chem1_photo[1];
      response3 = chem1_photo[2];
      

      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
      callSendAPI3(sender_psid, response3);
    }

    else if (payload === 'chem1_analy_flow') {
      response = chem1_analy[0];
      response2 = chem1_analy[1];
      response3 = chem1_analy[2];
      response4 = chem1_analy[3];
      response5 = chem1_analy[4];
      

      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
      callSendAPI3(sender_psid, response3);
      callSendAPI4(sender_psid, response4);
      callSendAPI5(sender_psid, response5);
    }

    else if (payload === 'chem1_coll_flow') {
      response = chem1_colloid[0];
      response2 = chem1_colloid[1];
      response3 = chem1_colloid[2];
      

      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
      callSendAPI3(sender_psid, response3);
    }

    else if (payload === 'chem1_acid_base_flow') {
      response = chem1_acid_base[0];
      response2 = chem1_acid_base[1];
      

      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
    }

    else if (payload === 'chem1_kinetics_flow') {
      response = chem1_kinetic[0];
      response2 = chem1_kinetic[1];
      response3 = chem1_kinetic[2];
      response4 = chem1_kinetic[3];
      

      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
      callSendAPI3(sender_psid, response3);
      callSendAPI4(sender_psid, response4);
    }

    //subject-> phy1
    else if (payload === 'phy1_flow') {
      response = phy1_flow[0];
      response2 = phy1_flow[1];
      response3 = phy1_flow[2];
      response4 = phy1_flow[3];
      response5 = phy1_flow[4];

      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
      callSendAPI3(sender_psid, response3);
      callSendAPI4(sender_psid, response4);
      callSendAPI5(sender_psid, response5);
    }

    else if (payload === 'phy1_books_flow') {
      response = phy1_books[0];
      response2 = phy1_books[1];
      response3 = phy1_books[2];

      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
      callSendAPI3(sender_psid, response3);
    }

    else if (payload === 'phy1_ques_flow') {
      response = phy1_ques[0];
     
      callSendAPI(sender_psid, response);
    }

    else if (payload === 'phy1_circular_flow') {
      response = phy1_circular[0];
      response2 = phy1_circular[1];
      response3 = phy1_circular[2];
      response4 = phy1_circular[3];

      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
      callSendAPI3(sender_psid, response3);
      callSendAPI4(sender_psid, response4);
    }

    else if (payload === 'phy1_hydro_flow') {
      response = phy1_hydro[0];
      response2 = phy1_hydro[1];
      response3 = phy1_hydro[2];
      
      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
      callSendAPI3(sender_psid, response3);
    }

    else if (payload === 'phy1_diffraction_flow') {
      response = phy1_diffraction[0];
     
      callSendAPI(sender_psid, response);
    }

    else if (payload === 'phy1_interfer_flow') {
      response = phy1_interferrence[0];
      response2 = phy1_interferrence[1];
      response3 = phy1_interferrence[2];
      response4 = phy1_interferrence[3];
      
      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
      callSendAPI3(sender_psid, response3);
      callSendAPI4(sender_psid, response4);
    }

    else if (payload === 'phy1_polar_flow') {
      response = phy1_polar[0];
      response2 = phy1_polar[1];
      response3 = phy1_polar[2];
      response4 = phy1_polar[3];
      response5 = phy1_polar[4];
      
      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
      callSendAPI3(sender_psid, response3);
      callSendAPI4(sender_psid, response4);
      callSendAPI5(sender_psid, response5);
    }

    else if (payload === 'phy1_elas_flow') {
      response = phy1_elasticity[0];
      response2 = phy1_elasticity[1];
      response3 = phy1_elasticity[2];
      response4 = phy1_elasticity[3];
      response5 = phy1_elasticity[4];
      
      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
      callSendAPI3(sender_psid, response3);
      callSendAPI4(sender_psid, response4);
      callSendAPI5(sender_psid, response5);
    }

    else if (payload === 'phy1_visco_flow') {
      response = phy1_viscosity[0];
      response2 = phy1_viscosity[1];
      
      
      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
    }

    else if (payload === 'phy1_surface_flow') {
      response = phy1_surface[0];
      response2 = phy1_surface[1];
      response3 = phy1_surface[2];
      response4 = phy1_surface[3];
      response5 = phy1_surface[4];
      
      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
      callSendAPI3(sender_psid, response3);
      callSendAPI4(sender_psid, response4);
      callSendAPI5(sender_psid, response5);
    }

    //subject-> math1
    else if (payload === 'math1_flow') {
      response = math1_flow[0];
      response2 = math1_flow[1];
      response3 = math1_flow[2];
      response4 = math1_flow[3];
      response5 = math1_flow[4];

      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
      callSendAPI3(sender_psid, response3);
      callSendAPI4(sender_psid, response4);
      callSendAPI5(sender_psid, response5);
    }

    else if (payload === 'math1_books_flow') {
      response = math1_books[0];
      response2 = math1_books[1];
      response3 = math1_books[2];

      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
      callSendAPI3(sender_psid, response3);
    }

    else if (payload === 'math1_ques_flow') {
      response = math1_question[0];

      callSendAPI(sender_psid, response);
    }

    else if (payload === 'math1_solve18_flow') {
      response = math1_solve[0];
      response2 = math1_solve[1];

      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
    }

    else if (payload === 'math1_diff_solve_flow') {
      response = math1_solve_diff[0];
      response2 = math1_solve_diff[1];
      response3 = math1_solve_diff[2];

      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
      callSendAPI3(sender_psid, response3);
    }

    else if (payload === 'math1_coord_solve_flow') {
      response = math1_solve_coord[0];

      callSendAPI(sender_psid, response);
    }

    else if (payload === 'math1_integreation_solve_flow') {
      response = math1_solve_integre[0];

      callSendAPI(sender_psid, response);
    }

    
    else if (payload === 'math1_linear_solve_flow') {
      response = math1_solve_linear[0];
      response2 = math1_solve_linear[1];
      response3 = math1_solve_linear[2];

      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
      callSendAPI3(sender_psid, response3);
    }

    else if (payload === 'math1_conv_div_flow') {
      response = math1_convergence[0];
      response2 = math1_convergence[1];
      

      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
    }

    else if (payload === 'math1_exapnsion_flow') {
      response = math1_expansion[0];
      
      callSendAPI(sender_psid, response);
    }

    else if (payload === 'math1_diff_flow') {
      response = math1_differntitation[0];
      response2 = math1_differntitation[1];
      response3 = math1_differntitation[2];
      response4 = math1_differntitation[3];
      response5 = math1_differntitation[4];
      

      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
      callSendAPI3(sender_psid, response3);
      callSendAPI4(sender_psid, response4);
      callSendAPI5(sender_psid, response5);
    }

    else if (payload === 'math1_integre_flow') {
      response = math1_integration[0];
      response2 = math1_integration[1];
      response3 = math1_integration[2];
      response4 = math1_integration[3];
      
      

      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
      callSendAPI3(sender_psid, response3);
      callSendAPI4(sender_psid, response4);
    }

    else if (payload === 'math1_extreme_flow') {
      response = math1_extrema[0];
      response2 = math1_extrema[1];
      
      

      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
    }

    else if (payload === 'math1_conics_flow') {
      response = math1_conics[0];
      
      callSendAPI(sender_psid, response);
    }

    else if (payload === 'math1_vector_flow') {
      response = math1_vector[0];
      response2 = math1_vector[1];
      
      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
    }

    else if (payload === 'math1_matrix_flow') {
      response = math1_matrix[0];
      response2 = math1_matrix[1];
      response3 = math1_matrix[2];
    
      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
      callSendAPI3(sender_psid, response3);
    }

    else if (payload === 'math1_co_ord_flow') {
      response = math1_coOrd[0];
      response2 = math1_coOrd[1];
      response3 = math1_coOrd[2];
      response4 = math1_coOrd[3];
      response5 = math1_coOrd[4];
      

      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
      callSendAPI3(sender_psid, response3);
      callSendAPI4(sender_psid, response4);
      callSendAPI5(sender_psid, response5);
    }

    else if (payload === 'math1_linear_flow') {
      response = math1_linear[0];
      response2 = math1_linear[1];
    
      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
    }

    else if (payload === 'math1_change_axes_flow') {
      response = math1_axes[0];
      response2 = math1_axes[1];
    
      callSendAPI(sender_psid, response);
      callSendAPI2(sender_psid, response2);
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