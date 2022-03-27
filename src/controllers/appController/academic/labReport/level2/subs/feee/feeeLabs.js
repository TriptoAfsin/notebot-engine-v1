let feeLabFlow = require('../../../../../../flows/botReplies/lab_levels/level_2/level_2_lab_subs/feee/feeeLabFlow')
let SubTopicTrans = require('../../../../../translaters/SubTopicTrans')


let routePrefix = "app/labs/2/feee"

let feeLabApp = SubTopicTrans(routePrefix, feeLabFlow)

module.exports = feeLabApp