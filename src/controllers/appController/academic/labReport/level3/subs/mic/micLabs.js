let micLabFlow = require('../../../../../../flows/botReplies/lab_levels/level_3/level_3_lab_subs/mic/micLabsApp')
let SubTopicTrans = require('../../../../../translaters/SubTopicTrans')


let routePrefix = "app/labs/3/mic"

let micLabApp = SubTopicTrans(routePrefix, micLabFlow)

module.exports = micLabApp