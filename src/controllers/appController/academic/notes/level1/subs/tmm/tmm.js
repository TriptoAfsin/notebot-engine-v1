let tmmFlow = require('../../../../../../flows/botReplies/note_levels/level_1/level_1_subs/tmm/tmm_flow')
let SubTopicTrans = require('../../../../../translaters/SubTopicTrans')


let routePrefix = "app/notes/1/tmm"

let tmmApp = SubTopicTrans(routePrefix, tmmFlow)

module.exports = tmmApp