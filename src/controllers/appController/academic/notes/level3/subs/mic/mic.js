let micFlow = require('../../../../../../flows/botReplies/note_levels/level_3/level_3_subs/mic/mic_flow')
let SubTopicTrans = require('../../../../../translaters/SubTopicTrans')


let routePrefix = "app/notes/3/mic"

let micApp = SubTopicTrans(routePrefix, micFlow)

module.exports = micApp