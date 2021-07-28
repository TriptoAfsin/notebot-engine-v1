let emFlow = require('../../../../../../flows/botReplies/note_levels/level_1/level_1_subs/em/em_flow')
let SubTopicTrans = require('../../../../../translaters/SubTopicTrans')


let routePrefix = "app/notes/1/em"

let emApp = SubTopicTrans(routePrefix, emFlow)

module.exports = emApp