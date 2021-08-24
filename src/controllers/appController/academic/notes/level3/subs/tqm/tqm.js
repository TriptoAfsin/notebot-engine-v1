let tqmFlow = require('../../../../../../flows/botReplies/note_levels/level_3/level_3_subs/tqm/tqm_flow')
let SubTopicTrans = require('../../../../../translaters/SubTopicTrans')


let routePrefix = "app/notes/3/tqm"

let tqmApp = SubTopicTrans(routePrefix, tqmFlow)

module.exports = tqmApp