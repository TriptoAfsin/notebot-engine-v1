let pm1LabFlow = require('../../../../../../flows/botReplies/lab_levels/level_2/level_2_lab_subs/pm_1/pm1LabFlow')
let SubTopicTrans = require('../../../../../translaters/SubTopicTrans')


let routePrefix = "app/labs/2/pm1"

let pm1LabApp = SubTopicTrans(routePrefix, pm1LabFlow)

module.exports = pm1LabApp