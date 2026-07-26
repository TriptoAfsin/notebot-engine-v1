let speFlow = require('../../../../../../flows/botReplies/note_levels/level_2/level_2_subs/spe/spe_flow')
let SubTopicTrans = require('../../../../../translaters/SubTopicTrans')


let routePrefix = "app/notes/2/spe"

let speApp = SubTopicTrans(routePrefix, speFlow)

module.exports = speApp
