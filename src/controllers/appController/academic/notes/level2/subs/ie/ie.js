let ieFlow = require('../../../../../../flows/botReplies/note_levels/level_2/level_2_subs/ie/ie_flow')
let SubTopicTrans = require('../../../../../translaters/SubTopicTrans')


let routePrefix = "app/notes/2/ie"

let ieApp = SubTopicTrans(routePrefix, ieFlow)

module.exports = ieApp
