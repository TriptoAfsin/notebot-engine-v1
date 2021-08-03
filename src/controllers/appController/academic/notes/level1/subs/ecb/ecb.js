let ecbFlow = require('../../../../../../flows/botReplies/note_levels/level_1/level_1_subs/ecb/ecb_flow')
let SubTopicTrans = require('../../../../../translaters/SubTopicTrans')


let routePrefix = "app/notes/1/ecb"

let ecbApp = SubTopicTrans(routePrefix, ecbFlow)

module.exports = ecbApp