let cpFlow = require('../../../../../../flows/botReplies/note_levels/level_1/level_1_subs/cp/cp_flow')
let SubTopicTrans = require('../../../../../translaters/SubTopicTrans')


let routePrefix = "app/notes/1/cp"

let cpApp = SubTopicTrans(routePrefix, cpFlow)

module.exports = cpApp