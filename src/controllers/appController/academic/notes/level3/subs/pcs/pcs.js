let pcsFlow = require('../../../../../../flows/botReplies/note_levels/level_3/level_3_subs/pcs/pcs_flow')
let SubTopicTrans = require('../../../../../translaters/SubTopicTrans')


let routePrefix = "app/notes/3/pcs"

let pcsApp = SubTopicTrans(routePrefix, pcsFlow)

module.exports = pcsApp