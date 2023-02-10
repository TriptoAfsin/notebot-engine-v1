let ap1LabFlow = require('../../../../../../flows/botReplies/lab_levels/level_3/level_3_lab_subs/ap_2/ap2LabFlow')
let SubTopicTrans = require('../../../../../translaters/SubTopicTrans')


let routePrefix = "app/labs/3/ap2"

let ap2LabApp = SubTopicTrans(routePrefix, ap1LabFlow)

module.exports = ap2LabApp