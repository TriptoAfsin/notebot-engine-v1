let imFlow = require('../../../../../../flows/botReplies/note_levels/level_3/level_3_subs/im/im_flow')
let SubTopicTrans = require('../../../../../translaters/SubTopicTrans')


let routePrefix = "app/notes/3/im"

let imApp = SubTopicTrans(routePrefix, imFlow)

module.exports = imApp