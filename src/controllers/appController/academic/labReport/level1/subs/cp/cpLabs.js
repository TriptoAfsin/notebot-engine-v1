let cpLabFlow = require('../../../../../../flows/botReplies/lab_levels/level_1/level_1_lab_subs/cp/cpLabFlow')
let SubTopicTrans = require('../../../../../translaters/SubTopicTrans')


let routePrefix = "app/labs/1/cp"

let cpLabApp = SubTopicTrans(routePrefix, cpLabFlow)

module.exports = cpLabApp