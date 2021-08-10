let ym1Flow = require('../../../../../../flows/botReplies/note_levels/level_2/level_2_subs/ym1/ym1_flow')
let SubTopicTrans = require('../../../../../translaters/SubTopicTrans')


let routePrefix = "app/notes/2/ym1"

let ym1App = SubTopicTrans(routePrefix, ym1Flow)

module.exports = ym1App