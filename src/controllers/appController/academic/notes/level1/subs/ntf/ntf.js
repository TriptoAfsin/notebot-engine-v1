let ntfFlow = require('../../../../../../flows/botReplies/note_levels/level_1/level_1_subs/ntf/ntf_flow')
let SubTopicTrans = require('../../../../../translaters/SubTopicTrans')


let routePrefix = "app/notes/1/ntf"

let ntfApp = SubTopicTrans(routePrefix, ntfFlow)

module.exports = ntfApp