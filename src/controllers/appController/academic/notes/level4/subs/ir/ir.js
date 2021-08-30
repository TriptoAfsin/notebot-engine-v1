let irFlow = require('../../../../../../flows/botReplies/note_levels/level_4/level_4_subs/ir/ir_flow')
let SubTopicTrans = require('../../../../../translaters/SubTopicTrans')


let routePrefix = "app/notes/4/ir"

let irApp = SubTopicTrans(routePrefix, irFlow)

module.exports = irApp