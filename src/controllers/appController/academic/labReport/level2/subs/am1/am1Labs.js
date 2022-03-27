let am1LabFlow = require('../../../../../../flows/botReplies/lab_levels/level_2/level_2_lab_subs/am_1/am1LabFlow')
let SubTopicTrans = require('../../../../../translaters/SubTopicTrans')


let routePrefix = "app/labs/2/am1"

let am1LabApp = SubTopicTrans(routePrefix, am1LabFlow)

module.exports = am1LabApp