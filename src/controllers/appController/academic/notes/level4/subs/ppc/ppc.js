let ppcFlow = require('../../../../../../flows/botReplies/note_levels/level_4/level_4_subs/ppc/ppc_flow')
let SubTopicTrans = require('../../../../../translaters/SubTopicTrans')


let routePrefix = "app/notes/4/ppc"

let ppcApp = SubTopicTrans(routePrefix, ppcFlow)

module.exports = ppcApp