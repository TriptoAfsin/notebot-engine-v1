let fytFlow = require('../../../../../../flows/botReplies/note_levels/level_2/level_2_subs/fyt/fyt_flow')
let SubTopicTrans = require('../../../../../translaters/SubTopicTrans')


let routePrefix = "app/notes/2/fyt"

let fytApp = SubTopicTrans(routePrefix, fytFlow)

module.exports = fytApp