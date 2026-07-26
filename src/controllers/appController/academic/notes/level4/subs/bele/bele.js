let beleFlow = require('../../../../../../flows/botReplies/note_levels/level_4/level_4_subs/bele/bele_flow')
let SubTopicTrans = require('../../../../../translaters/SubTopicTrans')


let routePrefix = "app/notes/4/bele"

let beleApp = SubTopicTrans(routePrefix, beleFlow)

module.exports = beleApp
