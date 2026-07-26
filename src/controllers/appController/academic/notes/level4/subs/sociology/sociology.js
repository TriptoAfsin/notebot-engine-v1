let sociologyFlow = require('../../../../../../flows/botReplies/note_levels/level_4/level_4_subs/sociology/sociology_flow')
let SubTopicTrans = require('../../../../../translaters/SubTopicTrans')


let routePrefix = "app/notes/4/sociology"

let sociologyApp = SubTopicTrans(routePrefix, sociologyFlow)

module.exports = sociologyApp
