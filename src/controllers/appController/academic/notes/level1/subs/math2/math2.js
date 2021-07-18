let math2Flow = require('../../../../../../flows/botReplies/note_levels/level_1/level_1_subs/math2/math2_flow')
let SubTopicTrans = require('../../../../../translaters/SubTopicTrans')


let routePrefix = "notes/1/math2"

let math2App = SubTopicTrans(routePrefix, math2Flow)

module.exports = math2App