let bceLabFlow = require('../../../../../../flows/botReplies/lab_levels/level_1/level_1_lab_subs/bce/bceLabFlow')
let SubTopicTrans = require('../../../../../translaters/SubTopicTrans')


let routePrefix = "app/labs/1/bce"

let bceLabApp = SubTopicTrans(routePrefix, bceLabFlow)

module.exports = bceLabApp