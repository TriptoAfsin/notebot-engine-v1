let wp2LabFlow = require('../../../../../../flows/botReplies/lab_levels/level_3/level_3_lab_subs/wp_2/wp2LabFlow')
let SubTopicTrans = require('../../../../../translaters/SubTopicTrans')


let routePrefix = "app/labs/3/wp2"

let wp2LabApp = SubTopicTrans(routePrefix, wp2LabFlow)

module.exports = wp2LabApp