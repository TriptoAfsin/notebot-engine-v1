let fpcFlow = require('../../../../../../flows/botReplies/note_levels/level_1/level_1_subs/fpc/fpc_flow')
let SubTopicTrans = require('../../../../../translaters/SubTopicTrans')


let routePrefix = "app/notes/1/fpc"

let fpcApp = SubTopicTrans(routePrefix, fpcFlow)

module.exports = fpcApp
