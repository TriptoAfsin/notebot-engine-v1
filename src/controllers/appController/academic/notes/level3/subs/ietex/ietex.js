let ietexFlow = require('../../../../../../flows/botReplies/note_levels/level_3/level_3_subs/ietex/ietex_flow')
let SubTopicTrans = require('../../../../../translaters/SubTopicTrans')


let routePrefix = "app/notes/3/ietex"

let ietexApp = SubTopicTrans(routePrefix, ietexFlow)

module.exports = ietexApp
