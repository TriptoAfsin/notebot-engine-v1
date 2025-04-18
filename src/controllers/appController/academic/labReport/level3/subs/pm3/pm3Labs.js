let pm3LabFlow = require('../../../../../../flows/botReplies/lab_levels/level_3/level_3_lab_subs/pm3/pm3LabFlow')
let SubTopicTrans = require('../../../../../translaters/SubTopicTrans')


let routePrefix = "app/labs/3/pm3"

let pm3LabApp = SubTopicTrans(routePrefix, pm3LabFlow)

module.exports = pm3LabApp