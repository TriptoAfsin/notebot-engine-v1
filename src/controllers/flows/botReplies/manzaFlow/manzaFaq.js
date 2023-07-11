let textBlockGen = require("simple-messenger-blocks/textBlockGen");
const imgBlockGen = require("simple-messenger-blocks/imgBlockGen");
const quickReplyGen = require("simple-messenger-blocks/quickReplyBlockGen");
const webBtnBlockGen = require("../../../genrators/webBtnBlockGen");
const payloadBtnBlockGen = require("../../../genrators/payloadBtnGen");
const groupedBtnBlockGen = require("../../../genrators/grroupedButtonBlockGen");

let manzaFaq = [
  textBlockGen(
    `1. What is WebManza?  \nWebManza is an eCommerce solution that offers custom drag-and-drop website design and development, eCommerce functionality, inventory management, shipping and logistics to build businesses and easily manage their online presence.\n\n
    2. Do I need coding experience to use WebManza?  \n No.\n\n
    3. How can I onboard with WebManza?\n With WebManza, you will have your site immediately! No delay, no waiting. Visit: www.webmanza.com/store-create and complete your WebManza subscription. You will instantly get access to your admin panel to start working on your website.`
  ),
];

module.exports = manzaFaq;
