let ap1LabFlow = require('../../../../../../flows/botReplies/lab_levels/level_1/level_1_lab_subs/ap_1/ap1LabFlow')
let SubTopicTrans = require('../../../../../translaters/SubTopicTrans')


let routePrefix = "app/labs/2/ap1"

let ap1LabApp = SubTopicTrans(routePrefix, ap1LabFlow)

module.exports = ap1LabApp