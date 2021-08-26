let fsdFlow = require('../../../../../../flows/botReplies/note_levels/level_3/level_3_subs/fsd/fsd_flow')
let SubTopicTrans = require('../../../../../translaters/SubTopicTrans')


let routePrefix = "app/notes/3/fsd"

let fsdApp = SubTopicTrans(routePrefix, fsdFlow)

module.exports = fsdApp