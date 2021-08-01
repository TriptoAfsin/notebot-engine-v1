let bceFlow = require('../../../../../../flows/botReplies/note_levels/level_1/level_1_subs/bce/bce_flow')
let SubTopicTrans = require('../../../../../translaters/SubTopicTrans')


let routePrefix = "app/notes/1/bce"

let bceApp = SubTopicTrans(routePrefix, bceFlow)

module.exports = bceApp