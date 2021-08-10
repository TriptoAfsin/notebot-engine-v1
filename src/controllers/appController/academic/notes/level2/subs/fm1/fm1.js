let fm1Flow = require('../../../../../../flows/botReplies/note_levels/level_2/level_2_subs/fm1/fm1_flow')
let SubTopicTrans = require('../../../../../translaters/SubTopicTrans')


let routePrefix = "app/notes/2/fm1"

let fm1App = SubTopicTrans(routePrefix, fm1Flow)

module.exports = fm1App