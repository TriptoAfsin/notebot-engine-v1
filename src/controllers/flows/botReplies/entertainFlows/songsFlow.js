let textBlockGen = require("../../../genrators/textBlockGen");
const imgBlockGen = require('../../../genrators/imgBlockGen');
const webBtnBlockGen = require('../../../genrators/webBtnBlockGen');
const payloadBtnBlockGen = require('../../../genrators/payloadBtnGen');
const groupedBtnBlockGen = require('../../../genrators/grroupedButtonBlockGen');


let songs = [
    groupedBtnBlockGen(
        `কি গান শুনবেন - `,
        [
            webBtnBlockGen(`English Songs`, `https://www.youtube.com/playlist?list=PLakGb0S4SwU2dDY18nLVpV3xujYyyqWoD`),
            webBtnBlockGen(`Bangla Songs`, `https://www.youtube.com/playlist?list=PLakGb0S4SwU2rq4t6pHfPKSj6v0fiDZ1R`),
            webBtnBlockGen(`Hindi Songs Songs`, `https://www.youtube.com/playlist?list=PLakGb0S4SwU1Bzz_wBTnnGcJMEwE3IUu6`)
        ]
    )
]





module.exports = songs;