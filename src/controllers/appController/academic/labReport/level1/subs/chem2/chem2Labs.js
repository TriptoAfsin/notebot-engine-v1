let chem2LabFlow = require('../../../../../../flows/botReplies/lab_levels/level_1/level_1_lab_subs/che_2/che2LabFlow')
let SubTopicTrans = require('../../../../../translaters/SubTopicTrans')


let routePrefix = "app/labs/1/chem2"

let chem2LabApp = SubTopicTrans(routePrefix, chem2LabFlow)

module.exports = chem2LabApp