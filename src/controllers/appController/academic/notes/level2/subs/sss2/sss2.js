let sss2Flow = require('../../../../../../flows/botReplies/note_levels/level_2/level_2_subs/sss2/sss2_flow')
let SubTopicTrans = require('../../../../../translaters/SubTopicTrans')


let routePrefix = "app/notes/2/sss2"

let sss2App = SubTopicTrans(routePrefix, sss2Flow)

module.exports = sss2App