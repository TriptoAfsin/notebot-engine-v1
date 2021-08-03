let fmgFlow = require('../../../../../../flows/botReplies/note_levels/level_1/level_1_subs/fmg/fmg_flow')
let SubTopicTrans = require('../../../../../translaters/SubTopicTrans')


let routePrefix = "app/notes/1/fmg"

let fmgApp = SubTopicTrans(routePrefix, fmgFlow)

module.exports = fmgApp