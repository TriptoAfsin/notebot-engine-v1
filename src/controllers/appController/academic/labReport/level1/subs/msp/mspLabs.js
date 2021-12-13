let mspLabFlow = require('../../../../../../flows/botReplies/lab_levels/level_1/level_1_lab_subs/msp/mspLabFlow')
let SubTopicTrans = require('../../../../../translaters/SubTopicTrans')


let routePrefix = "app/labs/1/msp"

let mspLabApp = SubTopicTrans(routePrefix, mspLabFlow)

module.exports = mspLabApp