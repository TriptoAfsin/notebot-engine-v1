let iaeFlow = require('../../../../../../flows/botReplies/note_levels/level_1/level_1_subs/iae/iae_flow')
let SubTopicTrans = require('../../../../../translaters/SubTopicTrans')


let routePrefix = "app/notes/1/iae"

let iaeApp = SubTopicTrans(routePrefix, iaeFlow)

module.exports = iaeApp