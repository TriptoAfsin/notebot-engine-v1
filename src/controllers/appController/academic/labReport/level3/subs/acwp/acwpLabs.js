let am1LabFlow = require('../../../../../../flows/botReplies/lab_levels/level_3/level_3_lab_subs/acwp/acwpLabFlow')
let SubTopicTrans = require('../../../../../translaters/SubTopicTrans')


let routePrefix = "app/labs/3/acwp"

let acwpApp = SubTopicTrans(routePrefix, am1LabFlow)

module.exports = acwpApp