let feeeFlow = require('../../../../../../flows/botReplies/note_levels/level_2/level_2_subs/eee/eee_flow')
let SubTopicTrans = require('../../../../../translaters/SubTopicTrans')


let routePrefix = "app/notes/2/eee"

let feeeApp = SubTopicTrans(routePrefix, feeeFlow)

module.exports = feeeApp