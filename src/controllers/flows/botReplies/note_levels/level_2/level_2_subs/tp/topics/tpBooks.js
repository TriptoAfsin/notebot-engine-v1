let textBlockGen = require('simple-messenger-blocks/textBlockGen');
let grroupedButtonBlockGen = require('simple-messenger-blocks/groupedBtnBlockGen');
let webBtnBlockGen = require('simple-messenger-blocks/webBtnGen');
let payloadBtnGen = require('simple-messenger-blocks/payloadBtnGen');

let tpBooks = [
    textBlockGen(`🔷Physical Properties of Textiles Fibre -  \n\nhttps://drive.google.com/file/d/12cPDW4IqTYIy5K9fYvfs-LN6F0XsWwIS/view?usp=sharing`),
    grroupedButtonBlockGen(
        "📌 Physical Characterization of Textile Fibres(Jalal Sir)- ",
        [
            webBtnBlockGen("Full Book", "https://drive.google.com/file/d/1ATL2uFGPVZh-jJtoFyTCJPGzel315rQh/view"),
            webBtnBlockGen("Chapter by Chapter", "https://drive.google.com/drive/folders/1xOT2fqNQFXTaArxztHmOMS2HpGlJ33af"),
        ]
    ),
    textBlockGen(`🔷Technical Textiles Yarns by R.Alagirusamy & A.Das - \n\nhttps://drive.google.com/file/d/1E2kSyq7Zvh7y7r8ZEAedWEHL-_ACNrvG/view`)
]





module.exports = tpBooks;