let grroupedButtonBlockGen = require('simple-messenger-blocks/groupedBtnBlockGen');
let webBtnBlockGen = require('simple-messenger-blocks/webBtnGen');
let payloadBtnGen = require('simple-messenger-blocks/payloadBtnGen');

let ieFlow = [
  grroupedButtonBlockGen("📌 Industrial Engineering Notes -", [
    webBtnBlockGen("Prottush-PartA", "https://drive.google.com/file/d/1TlQgjXpEZwP61yadQm0K0YlK9oelJR13/view?usp=sharing"),
    webBtnBlockGen("Prottush-PartB", "https://drive.google.com/file/d/1KIxzlA0er2h3Bqd8SwPYn5FjqnCdlrNM/view?usp=sharing"),
    webBtnBlockGen("Ali Sir-PartA", "https://drive.google.com/file/d/1iA3kwwkuj9Fwanik_uKaeX1rGitfJ3zD/view?usp=sharing"),
  ]),
];

module.exports = ieFlow;
