let fhFlow = require('../../../../../../flows/botReplies/note_levels/level_1/level_1_subs/fh/fh_flow')
let SubTopicTrans = require('../../../../../translaters/SubTopicTrans')


let routePrefix = "app/notes/1/fh"

let fhApp = SubTopicTrans(routePrefix, fhFlow)

module.exports = fhApp