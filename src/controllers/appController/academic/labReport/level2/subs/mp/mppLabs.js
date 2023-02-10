let mpLabFlow = require('../../../../../../flows/botReplies/lab_levels/level_2/level_2_lab_subs/mp/mpLabsFlowApp')
let SubTopicTrans = require('../../../../../translaters/SubTopicTrans')


let routePrefix = "app/labs/2/mp"

let mpLabApp = SubTopicTrans(routePrefix, mpLabFlow)

module.exports = mpLabApp