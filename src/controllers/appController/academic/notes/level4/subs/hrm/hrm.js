let hrmFlow = require('../../../../../../flows/botReplies/note_levels/level_4/level_4_subs/hrm/hrm_flow')
let SubTopicTrans = require('../../../../../translaters/SubTopicTrans')


let routePrefix = "app/notes/4/hrm"

let hrmApp = SubTopicTrans(routePrefix, hrmFlow)

module.exports = hrmApp