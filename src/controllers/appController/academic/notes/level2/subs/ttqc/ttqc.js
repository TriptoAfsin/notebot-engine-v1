let ttqcFlow = require('../../../../../../flows/botReplies/note_levels/level_2/level_2_subs/ttqc/ttqc_flow')
let SubTopicTrans = require('../../../../../translaters/SubTopicTrans')


let routePrefix = "app/notes/2/ttqc"

let ttqcApp = SubTopicTrans(routePrefix, ttqcFlow)

module.exports = ttqcApp