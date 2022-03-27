let sss2LabFlow = require('../../../../../../flows/botReplies/lab_levels/level_2/level_2_lab_subs/sss_2/sss2LabFlow')
let SubTopicTrans = require('../../../../../translaters/SubTopicTrans')


let routePrefix = "app/labs/2/sss2"

let sss2LabApp = SubTopicTrans(routePrefix, sss2LabFlow)

module.exports = sss2LabApp