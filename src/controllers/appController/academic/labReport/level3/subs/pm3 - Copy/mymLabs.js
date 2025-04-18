let mymLabFlow = require('../../../../../../flows/botReplies/lab_levels/level_3/level_3_lab_subs/mym/mymLabFlow')
let SubTopicTrans = require('../../../../../translaters/SubTopicTrans')


let routePrefix = "app/labs/3/mym"

let mymLabApp = SubTopicTrans(routePrefix, mymLabFlow)

module.exports = mymLabApp