let fdceFlow = require('../../../../../../flows/botReplies/note_levels/level_2/level_2_subs/fdce/fdce_flow')
let SubTopicTrans = require('../../../../../translaters/SubTopicTrans')


let routePrefix = "app/notes/2/fdce"

let fdceApp = SubTopicTrans(routePrefix, fdceFlow)

module.exports = fdceApp