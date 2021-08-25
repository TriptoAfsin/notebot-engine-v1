let aceFlow = require('../../../../../../flows/botReplies/note_levels/level_3/level_3_subs/ace/ace_flow')
let SubTopicTrans = require('../../../../../translaters/SubTopicTrans')


let routePrefix = "app/notes/3/ace"

let aceApp = SubTopicTrans(routePrefix, aceFlow)

module.exports = aceApp