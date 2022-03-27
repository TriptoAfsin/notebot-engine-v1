let fmeLabFlow = require('../../../../../../flows/botReplies/lab_levels/level_2/level_2_lab_subs/fme/fmeLabFlow')
let SubTopicTrans = require('../../../../../translaters/SubTopicTrans')


let routePrefix = "app/labs/2/fme"

let fmeLabApp = SubTopicTrans(routePrefix, fmeLabFlow)

module.exports = fmeLabApp