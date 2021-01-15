let textBlockGen = require("../../../genrators/textBlockGen");
const imgBlockGen = require('../../../genrators/imgBlockGen');
const webBtnBlockGen = require('../../../genrators/webBtnBlockGen');
const payloadBtnBlockGen = require('../../../genrators/payloadBtnGen');
const groupedBtnBlockGen = require('../../../genrators/grroupedButtonBlockGen');


let depressed = [
    groupedBtnBlockGen(
        `Don't be Sad 😢, I can offer you - `,
        [
            payloadBtnBlockGen(`Jokes 🤣`, `another_joke_flow`),
            payloadBtnBlockGen(`Motivation 😊`, `another_quote_flow`),
            payloadBtnBlockGen(`Songs 🎵`, `another_song_flow`)
        ]
    )
]





module.exports = depressed;