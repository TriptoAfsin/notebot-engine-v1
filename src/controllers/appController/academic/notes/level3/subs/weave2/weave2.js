let weave2Flow = require('../../../../../../flows/botReplies/note_levels/level_3/level_3_subs/weaving2/weave2_flow')
let SubTopicTrans = require('../../../../../translaters/SubTopicTrans')


let routePrefix = "app/notes/3/weave2"

let weave2App = SubTopicTrans(routePrefix, weave2Flow)

module.exports = weave2App