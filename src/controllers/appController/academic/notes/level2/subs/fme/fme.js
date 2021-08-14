let fmeFlow = require('../../../../../../flows/botReplies/note_levels/level_2/level_2_subs/fme/fme_flow')
let SubTopicTrans = require('../../../../../translaters/SubTopicTrans')


let routePrefix = "app/notes/2/fme"

let fmeApp = SubTopicTrans(routePrefix, fmeFlow)

module.exports = fmeApp