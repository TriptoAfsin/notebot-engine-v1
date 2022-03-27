let wppLabFlow = require('../../../../../../flows/botReplies/lab_levels/level_2/level_2_lab_subs/wpe_202/wpe202LabFlow')
let SubTopicTrans = require('../../../../../translaters/SubTopicTrans')


let routePrefix = "app/labs/2/wpp"

let wppLabApp = SubTopicTrans(routePrefix, wppLabFlow)

module.exports = wppLabApp