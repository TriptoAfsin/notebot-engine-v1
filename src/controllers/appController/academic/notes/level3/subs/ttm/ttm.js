let ttmFlow = require('../../../../../../flows/botReplies/note_levels/level_3/level_3_subs/ttm/ttm_flow')
let SubTopicTrans = require('../../../../../translaters/SubTopicTrans')


let routePrefix = "app/notes/3/ttm"

let ttmApp = SubTopicTrans(routePrefix, ttmFlow)

module.exports = ttmApp