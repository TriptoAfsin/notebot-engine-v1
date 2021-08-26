let ap2Flow = require('../../../../../../flows/botReplies/note_levels/level_3/level_3_subs/ap2/ap2_flow')
let SubTopicTrans = require('../../../../../translaters/SubTopicTrans')


let routePrefix = "app/notes/3/ap2"

let ap2App = SubTopicTrans(routePrefix, ap2Flow)

module.exports = ap2App