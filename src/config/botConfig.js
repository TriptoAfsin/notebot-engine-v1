let webBtn = require('./configGenerators/webBtn')
let payloadBtn = require('./configGenerators/payloadBtn')
let quickReplyBtn = require('./configGenerators/quickReplyBtn')


let botConfig = {
    defaultGreeting: "This BOT Provides Study Materials for BUTEX(Bangladesh University of Textiles)😀Moreover It Has Casual Talking Abilities(Bangla & English)☺",
    enGreeting: "This BOT Provides Study Materials for BUTEX(Bangladesh University of Textiles)😀Moreover It Has Casual Talking Abilities(Bangla & English)☺",

    //Persistent Menu Buttons
    persistentMenuButtons: [
        payloadBtn("Help 😥", "help_payload"),
        payloadBtn("Donate 💰", "donation_payload"),
        webBtn("Submit Notes 📗", "https://goo.gl/forms/akfj9X8vxuoj2xQg2"),
        webBtn("NoteBOT Web 🌍", "https://notebot.netlify.app/#/"),
    ],

    //welcome message
    getStartedText: "Hello 😄, Welcome to the new BUTEX NoteBOT powered by বন্দি পাঠশালা",
    getStartedButtons: [
        quickReplyBtn("Help😥", "help_flow"),
        quickReplyBtn("Notes📗", "notes_flow"),
        quickReplyBtn("Routine📅", "routine_flow"),
        quickReplyBtn("Results📝", "result_flow"),
        quickReplyBtn("Lab Reports📋", "reports_flow"),
    ]
}
    

module.exports = {
    defaultGreeting: botConfig.defaultGreeting,
    enGreeting: botConfig.enGreeting,
    persistentMenuButtons: botConfig.persistentMenuButtons,
    getStartedText: botConfig.getStartedText,
    getStartedButtons: botConfig.getStartedButtons,
}