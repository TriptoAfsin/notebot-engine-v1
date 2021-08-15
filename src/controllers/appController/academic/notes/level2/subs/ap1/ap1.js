let ap1Flow = require('../../../../../../flows/botReplies/note_levels/level_2/level_2_subs/ap1/ap1_flow')
let SubTopicTrans = require('../../../../../translaters/SubTopicTrans')


let routePrefix = "app/notes/2/ap1"

let ap1App = SubTopicTrans(routePrefix, ap1Flow)

module.exports = ap1App