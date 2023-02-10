let fm2LabFlow = require('../../../../../../flows/botReplies/lab_levels/level_3/level_3_lab_subs/fm_2/fm2LabsFlowApp')
let SubTopicTrans = require('../../../../../translaters/SubTopicTrans')


let routePrefix = "app/labs/3/fm2"

let fm2LabApp = SubTopicTrans(routePrefix, fm2LabFlow)

module.exports = fm2LabApp