let ym2Flow = require('../../../../../../flows/botReplies/note_levels/level_3/level_3_subs/ym2/ym2_flow')
let SubTopicTrans = require('../../../../../translaters/SubTopicTrans')


let routePrefix = "app/notes/3/ym2"

let ym2App = SubTopicTrans(routePrefix, ym2Flow)

module.exports = ym2App