let fsdLabFlow = require('../../../../../../flows/botReplies/lab_levels/level_3/level_3_lab_subs/fsd/fsdLabFlow')
let SubTopicTrans = require('../../../../../translaters/SubTopicTrans')


let routePrefix = "app/labs/3/fsd"

let fsdLabApp = SubTopicTrans(routePrefix, fsdLabFlow)

module.exports = fsdLabApp