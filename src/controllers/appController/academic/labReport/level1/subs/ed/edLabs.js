let edLabFlow = require('../../../../../../flows/botReplies/lab_levels/level_1/level_1_lab_subs/ed/edLabFlow')
let SubTopicTrans = require('../../../../../translaters/SubTopicTrans')


let routePrefix = "app/labs/1/ed"

let edLabApp = SubTopicTrans(routePrefix, edLabFlow)

module.exports = edLabApp