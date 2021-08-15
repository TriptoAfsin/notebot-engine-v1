let wp1Flow = require('../../../../../../flows/botReplies/note_levels/level_2/level_2_subs/wp1/wp1_flow')
let SubTopicTrans = require('../../../../../translaters/SubTopicTrans')


let routePrefix = "app/notes/2/wp1"

let wp1App = SubTopicTrans(routePrefix, wp1Flow)

module.exports = wp1App