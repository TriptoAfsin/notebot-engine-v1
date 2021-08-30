let bilFlow = require('../../../../../../flows/botReplies/note_levels/level_4/level_4_subs/bil/bil_flow')
let SubTopicTrans = require('../../../../../translaters/SubTopicTrans')


let routePrefix = "app/notes/4/bil"

let bilApp = SubTopicTrans(routePrefix, bilFlow)

module.exports = bilApp