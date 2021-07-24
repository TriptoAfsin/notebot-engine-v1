let math1Flow = require('../../../../../../flows/botReplies/note_levels/level_1/level_1_subs/math1/math1_flow')
let SubTopicTrans = require('../../../../../translaters/SubTopicTrans')


let routePrefix = "app/notes/1/math1"

let math1App = SubTopicTrans(routePrefix, math1Flow)

module.exports = math1App