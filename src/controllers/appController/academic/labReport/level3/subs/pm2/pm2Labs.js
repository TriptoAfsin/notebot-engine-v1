let pm2LabFlow = require('../../../../../../flows/botReplies/lab_levels/level_3/level_3_lab_subs/pm2/pm2LabFlow')
let SubTopicTrans = require('../../../../../translaters/SubTopicTrans')


let routePrefix = "app/labs/3/pm2"

let pm2LabApp = SubTopicTrans(routePrefix, pm2LabFlow)

module.exports = pm2LabApp