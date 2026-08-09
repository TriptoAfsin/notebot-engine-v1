let tc1Flow = require('../../../../../../flows/botReplies/note_levels/level_3/level_3_subs/tc1/tc1_flow')
let SubTopicTrans = require('../../../../../translaters/SubTopicTrans')


let routePrefix = "app/notes/3/tc1"

let tc1App = SubTopicTrans(routePrefix, tc1Flow)

module.exports = tc1App
