let grroupedButtonBlockGen = require("../../../genrators/grroupedButtonBlockGen");
let webBtnBlockGen = require("../../../genrators/webBtnBlockGen");

let BooksQues = [
  grroupedButtonBlockGen(`🟪 Select QB Level - `, [
    webBtnBlockGen(
      "👶 Level 1",
      "https://drive.google.com/drive/folders/1Fu7l9FBq3gdWUKNnTix6RibLvy3e25Ra?usp=sharing"
    ),
    webBtnBlockGen(
      "👦 Level 2",
      "https://drive.google.com/drive/folders/1KZvgEL3f1kDY54H5Ha218l7yZfPn6jM6?usp=sharing"
    ),
    webBtnBlockGen(
      "👨‍🦰 Level 3",
      "https://drive.google.com/drive/folders/1mbygPQPSEDkP6NoRxJxJATWI8aBgzxsZ?usp=sharing"
    ),
  ]),
  grroupedButtonBlockGen(`🟪 Select QB Level - `, [
    webBtnBlockGen(
      "🧑‍🎓 Level 4",
      "https://drive.google.com/drive/folders/17QQ6mXUYe3FL7sf4VMzdBBkRbJAId0VT?usp=sharing"
    ),
  ]),
  grroupedButtonBlockGen(`✅ QB Solves - `, [
    webBtnBlockGen(
      "✅ QB Solves",
      "https://drive.google.com/drive/folders/1hvldnZCyOX412pBbdElbRvh33o7uqg2R?usp=sharing"
    ),
  ]),
];

module.exports = BooksQues;