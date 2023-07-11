let textBlockGen = require("../../../genrators/textBlockGen");
const imgBlockGen = require("../../../genrators/imgBlockGen");
const webBtnBlockGen = require("simple-messenger-blocks/webBtnGen");
const payloadBtnBlockGen = require("../../../genrators/payloadBtnGen");
const phoneBtnGen = require("simple-messenger-blocks/phoneBtnGen");
const groupedBtnBlockGen = require("simple-messenger-blocks/groupedBtnBlockGen");

let manzaContactUs = [
  groupedBtnBlockGen(`Get in touch - `, [
    phoneBtnGen(`📞 Call Us`, `+8801936396220`),
    webBtnBlockGen(`📧 Mail Us`, `mailto:afsintripto@gmail.com`),
    webBtnBlockGen(`🗺 Address`, `https://goo.gl/maps/WDWWYr33PtqVWQqFA`),
  ]),
];

module.exports = manzaContactUs;
