const grroupedButtonBlockGen = require("simple-messenger-blocks/groupedBtnBlockGen");

const payloadBtnGen = require("simple-messenger-blocks/payloadBtnGen");

let ntfCotton = [
    grroupedButtonBlockGen(
        "🟩 Select Topic for Cotton - ",
        [
            payloadBtnGen("Hand Note", "ntf_cotton_hand_flow"),
            payloadBtnGen("Slide/Sheet/Books", "ntf_slides_flow"),
            payloadBtnGen("Videos", "ntf_videos_flow")
        ]
    ),
]





module.exports = ntfCotton;