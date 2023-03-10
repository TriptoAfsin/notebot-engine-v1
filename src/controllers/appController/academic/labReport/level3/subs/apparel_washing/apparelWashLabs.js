let apparelWashLab = require('../../../../../../flows/botReplies/lab_levels/level_3/level_3_lab_subs/apparel_washing/apparelWashingLabAppFlow')
let SubTopicTrans = require('../../../../../translaters/SubTopicTrans')


let routePrefix = "app/labs/3/apparelWash"

let apparelWashLabApp = SubTopicTrans(routePrefix, apparelWashLab)

module.exports = apparelWashLabApp