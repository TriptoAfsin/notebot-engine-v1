let wp1LabFlow = require('../../../../../../flows/botReplies/lab_levels/level_2/level_2_lab_subs/wp_1/wp1LabFlow')
let SubTopicTrans = require('../../../../../translaters/SubTopicTrans')


let routePrefix = "app/labs/2/wp1"

let wp1LabApp = SubTopicTrans(routePrefix, wp1LabFlow)

module.exports = wp1LabApp