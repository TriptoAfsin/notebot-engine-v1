let am2Flow = require('../../../../../../flows/botReplies/note_levels/level_3/level_3_subs/am2/am2_flow')
let SubTopicTrans = require('../../../../../translaters/SubTopicTrans')


let routePrefix = "app/notes/3/am2"

let am2App = SubTopicTrans(routePrefix, am2Flow)

module.exports = am2App