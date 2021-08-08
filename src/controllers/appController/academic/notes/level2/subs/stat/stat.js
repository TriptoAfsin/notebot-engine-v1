let statFlow = require('../../../../../../flows/botReplies/note_levels/level_2/level_2_subs/stat/stat_flow')
let SubTopicTrans = require('../../../../../translaters/SubTopicTrans')


let routePrefix = "app/notes/2/stat"

let statApp = SubTopicTrans(routePrefix, statFlow)

module.exports = statApp