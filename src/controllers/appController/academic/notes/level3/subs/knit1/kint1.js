let knit1Flow = require('../../../../../../flows/botReplies/note_levels/level_3/level_3_subs/knit1/knit_flow')
let SubTopicTrans = require('../../../../../translaters/SubTopicTrans')


let routePrefix = "app/notes/3/knit1"

let knit1App = SubTopicTrans(routePrefix, knit1Flow)

module.exports = knit1App