let ttqcLabFlow = require('../../../../../../flows/botReplies/lab_levels/level_2/level_2_lab_subs/ttqc/ttqcLabFlow')
let SubTopicTrans = require('../../../../../translaters/SubTopicTrans')


let routePrefix = "app/labs/2/ttqc"

let ttqcLabApp = SubTopicTrans(routePrefix, ttqcLabFlow)

module.exports = ttqcLabApp