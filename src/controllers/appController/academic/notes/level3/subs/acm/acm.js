let acmFlow = require('../../../../../../flows/botReplies/note_levels/level_3/level_3_subs/acm/acm_flow')
let SubTopicTrans = require('../../../../../translaters/SubTopicTrans')


let routePrefix = "app/notes/3/acm"

let acmApp = SubTopicTrans(routePrefix, acmFlow)

module.exports = acmApp