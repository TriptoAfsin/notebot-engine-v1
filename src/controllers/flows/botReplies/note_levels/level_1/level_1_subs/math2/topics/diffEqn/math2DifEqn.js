let grroupedButtonBlockGen = require('simple-messenger-blocks/groupedBtnBlockGen');
// let webBtnBlockGen = require('simple-messenger-blocks/webBtnGen');
let payloadBtnGen = require('simple-messenger-blocks/payloadBtnGen');


let math2DifEqn = [
    grroupedButtonBlockGen(
        "🟩 Select -",
        [
            payloadBtnGen("Hand Note", "math2_diffeqn_note_flow"),
            payloadBtnGen("Book Scanned", "math2_diffeqn_book_flow"),
        ]
    )
]





module.exports = math2DifEqn;