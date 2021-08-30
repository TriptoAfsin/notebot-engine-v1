let epdFlow = require('../../../../../../flows/botReplies/note_levels/level_4/level_4_subs/epd/epd_flow')
let SubTopicTrans = require('../../../../../translaters/SubTopicTrans')


let routePrefix = "app/notes/4/epd"

let epdApp = SubTopicTrans(routePrefix, epdFlow)

module.exports = epdApp