let ym1LabFlow = require('../../../../../../flows/botReplies/lab_levels/level_2/level_2_lab_subs/ym_1/ym1LabFlowApp')
let SubTopicTrans = require('../../../../../translaters/SubTopicTrans')


let routePrefix = "app/labs/1/ym1"

let ym1LabApp = SubTopicTrans(routePrefix, ym1LabFlow)

module.exports = ym1LabApp