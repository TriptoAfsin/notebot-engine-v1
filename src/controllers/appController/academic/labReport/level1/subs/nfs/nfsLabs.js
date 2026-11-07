let nfsLabFlow = require('../../../../../../flows/botReplies/lab_levels/level_1/level_1_lab_subs/nfs/nfsLabFlow')
let SubTopicTrans = require('../../../../../translaters/SubTopicTrans')


let routePrefix = "app/labs/1/nfs"

let nfsLabApp = SubTopicTrans(routePrefix, nfsLabFlow)

module.exports = nfsLabApp
