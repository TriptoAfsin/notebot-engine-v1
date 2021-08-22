let lssFlow = require('../../../../../../flows/botReplies/note_levels/level_3/level_3_subs/lss/lss_flow')
let SubTopicTrans = require('../../../../../translaters/SubTopicTrans')


let routePrefix = "app/notes/3/lss"

let lssApp = SubTopicTrans(routePrefix, lssFlow)

module.exports = lssApp