let textBlockGen = require("simple-messenger-blocks/textBlockGen");
const imgBlockGen = require("../../../genrators/imgBlockGen");
const webBtnBlockGen = require("simple-messenger-blocks/webBtnGen");
const payloadBtnBlockGen = require("../../../genrators/payloadBtnGen");
const phoneBtnGen = require("simple-messenger-blocks/phoneBtnGen");
const groupedBtnBlockGen = require("simple-messenger-blocks/groupedBtnBlockGen");

let manzaContactUs = [
  textBlockGen(`Get in touch -\n\n`),
  textBlockGen(`📞 Call Us : +8801936396220`),
  textBlockGen(`📧 Mail Us : afsintripto@gmail.com`),
  groupedBtnBlockGen(`Address - `, [
    webBtnBlockGen(`🗺 Address`, `https://goo.gl/maps/WDWWYr33PtqVWQqFA`),
  ]),
];

module.exports = manzaContactUs;
