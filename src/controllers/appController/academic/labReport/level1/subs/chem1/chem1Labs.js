let chem1LabFlow = require('../../../../../../flows/botReplies/lab_levels/level_1/level_1_lab_subs/che_1/che1LabFlow')
let SubTopicTrans = require('../../../../../translaters/SubTopicTrans')


let routePrefix = "app/labs/1/chem1"

let chem1LabApp = SubTopicTrans(routePrefix, chem1LabFlow)

module.exports = chem1LabApp