let bsFlow = require('../../../../../../flows/botReplies/note_levels/level_4/level_4_subs/bs/bs_flow')
let SubTopicTrans = require('../../../../../translaters/SubTopicTrans')


let routePrefix = "app/notes/4/bs"

let bsApp = SubTopicTrans(routePrefix, bsFlow)

module.exports = bsApp