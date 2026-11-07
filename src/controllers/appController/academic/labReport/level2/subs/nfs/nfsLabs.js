let nfsLabFlow = require('../../../../../../flows/botReplies/lab_levels/level_2/level_2_lab_subs/nfs/nfsLabFlow')
let SubTopicTrans = require('../../../../../translaters/SubTopicTrans')


let routePrefix = "app/labs/2/nfs"

let nfsLabApp = SubTopicTrans(routePrefix, nfsLabFlow)

module.exports = nfsLabApp
