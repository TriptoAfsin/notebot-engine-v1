let pdFlow = require('../../../../../../flows/botReplies/note_levels/level_3/level_3_subs/pd/pd_flow')
let SubTopicTrans = require('../../../../../translaters/SubTopicTrans')


let routePrefix = "app/notes/3/pd"

let pdApp = SubTopicTrans(routePrefix, pdFlow)

module.exports = pdApp