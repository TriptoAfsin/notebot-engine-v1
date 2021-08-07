let sss1Flow = require('../../../../../../flows/botReplies/note_levels/level_2/level_2_subs/sss1/sss1_flow')
let SubTopicTrans = require('../../../../../translaters/SubTopicTrans')


let routePrefix = "app/notes/2/sss1"

let sss1App = SubTopicTrans(routePrefix, sss1Flow)

module.exports = sss1App