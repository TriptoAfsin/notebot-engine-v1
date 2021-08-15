let ctcaFlow = require('../../../../../../flows/botReplies/note_levels/level_2/level_2_subs/ctca/ctca_flow')
let SubTopicTrans = require('../../../../../translaters/SubTopicTrans')


let routePrefix = "app/notes/2/ctca"

let ctcaApp = SubTopicTrans(routePrefix, ctcaFlow)

module.exports = ctcaApp