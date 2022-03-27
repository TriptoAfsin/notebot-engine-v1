let  feWppLabFlow = require('../../../../../../flows/botReplies/lab_levels/level_2/level_2_lab_subs/fe_204_wpp/fe_wppLabFlow')
let SubTopicTrans = require('../../../../../translaters/SubTopicTrans')


let routePrefix = "app/labs/2/fe_wpp"

let  feWppLabApp = SubTopicTrans(routePrefix,  feWppLabFlow)

module.exports = feWppLabApp