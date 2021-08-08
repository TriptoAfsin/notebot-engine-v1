let am1Flow = require('../../../../../../flows/botReplies/note_levels/level_2/level_2_subs/am1/am1_flow')
let SubTopicTrans = require('../../../../../translaters/SubTopicTrans')


let routePrefix = "app/notes/2/am1"

let am1App = SubTopicTrans(routePrefix, am1Flow)

module.exports = am1App