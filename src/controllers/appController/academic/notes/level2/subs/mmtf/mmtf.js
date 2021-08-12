let mmtfFlow = require('../../../../../../flows/botReplies/note_levels/level_2/level_2_subs/mmtf/mmtf_flow')
let SubTopicTrans = require('../../../../../translaters/SubTopicTrans')


let routePrefix = "app/notes/2/mmtf"

let mmtfApp = SubTopicTrans(routePrefix, mmtfFlow)

module.exports = mmtfApp