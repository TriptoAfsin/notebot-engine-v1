let pseFlow = require('../../../../../../flows/botReplies/note_levels/level_1/level_1_subs/pse/pse_flow')
let SubTopicTrans = require('../../../../../translaters/SubTopicTrans')


let routePrefix = "app/notes/1/pse"

let pseApp = SubTopicTrans(routePrefix, pseFlow)

module.exports = pseApp