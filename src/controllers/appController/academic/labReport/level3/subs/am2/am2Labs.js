let am1LabFlow = require('../../../../../../flows/botReplies/lab_levels/level_3/level_3_lab_subs/am_2/am2LabsFlowApps')
let SubTopicTrans = require('../../../../../translaters/SubTopicTrans')


let routePrefix = "app/labs/3/am2"

let am1LabApp = SubTopicTrans(routePrefix, am1LabFlow)

module.exports = am1LabApp