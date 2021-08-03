let ieeFlow = require('../../../../../../flows/botReplies/note_levels/level_1/level_1_subs/iee/iee_flow')
let SubTopicTrans = require('../../../../../translaters/SubTopicTrans')


let routePrefix = "app/notes/1/iee"

let ieeApp = SubTopicTrans(routePrefix, ieeFlow)

module.exports = ieeApp