let tpFlow = require('../../../../../../flows/botReplies/note_levels/level_2/level_2_subs/tp/tp_flow')
let SubTopicTrans = require('../../../../../translaters/SubTopicTrans')


let routePrefix = "app/notes/2/tp"

let tpApp = SubTopicTrans(routePrefix, tpFlow)

module.exports = tpApp