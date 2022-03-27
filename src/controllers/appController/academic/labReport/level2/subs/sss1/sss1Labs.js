let sss1LabFlow = require('../../../../../../flows/botReplies/lab_levels/level_2/level_2_lab_subs/sss_1/sss1LabFlow')
let SubTopicTrans = require('../../../../../translaters/SubTopicTrans')


let routePrefix = "app/labs/2/sss1"

let sss1LabApp = SubTopicTrans(routePrefix, sss1LabFlow)

module.exports = sss1LabApp