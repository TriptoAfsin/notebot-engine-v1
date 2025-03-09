const grroupedButtonBlockGen = require("simple-messenger-blocks/groupedBtnBlockGen");
const payloadBtnGen = require("simple-messenger-blocks/payloadBtnGen");

let ntfWool = [
    grroupedButtonBlockGen(
        "🟩 Select Topic for Wool - ",
        [
            payloadBtnGen("Hand Note", "ntf_wool_hand_flow"),
            payloadBtnGen("Slide/Sheet/Books", "ntf_wool_slides_flow"),
            payloadBtnGen("Videos", "ntf_wool_videos_flow")
        ]
    ),
]






module.exports = ntfWool;