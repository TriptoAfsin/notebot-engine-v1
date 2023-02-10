let fm1LabFlow = require('../../../../../../flows/botReplies/lab_levels/level_2/level_2_lab_subs/fm_1/fm1LabFlow')
let SubTopicTrans = require('../../../../../translaters/SubTopicTrans')


let routePrefix = "app/labs/2/fm1"

let fm1LabApp = SubTopicTrans(routePrefix, fm1LabFlow)

module.exports = fm1LabApp