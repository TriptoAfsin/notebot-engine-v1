let wp2Flow = require('../../../../../../flows/botReplies/note_levels/level_3/level_3_subs/wp2/wp2_flow')
let SubTopicTrans = require('../../../../../translaters/SubTopicTrans')


let routePrefix = "app/notes/3/wp2"

let wp2App = SubTopicTrans(routePrefix, wp2Flow)

module.exports = wp2App