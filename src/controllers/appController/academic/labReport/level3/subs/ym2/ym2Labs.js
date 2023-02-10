let ym2LabFlow = require('../../../../../../flows/botReplies/lab_levels/level_3/level_3_lab_subs/ym_2/ym2LabFlow')
let SubTopicTrans = require('../../../../../translaters/SubTopicTrans')


let routePrefix = "app/labs/3/ym2"

let ym2LabApp = SubTopicTrans(routePrefix, ym2LabFlow)

module.exports = ym2LabApp