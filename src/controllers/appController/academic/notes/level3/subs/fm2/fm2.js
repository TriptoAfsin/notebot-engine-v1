let fm2Flow = require('../../../../../../flows/botReplies/note_levels/level_3/level_3_subs/fm2/fm2_flow')
let SubTopicTrans = require('../../../../../translaters/SubTopicTrans')


let routePrefix = "app/notes/3/fm2"

let fm2App = SubTopicTrans(routePrefix, fm2Flow)

module.exports = fm2App