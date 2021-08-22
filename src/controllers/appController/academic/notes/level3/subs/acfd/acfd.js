let acfdFlow = require('../../../../../../flows/botReplies/note_levels/level_3/level_3_subs/acfd/acfd_flow')
let SubTopicTrans = require('../../../../../translaters/SubTopicTrans')


let routePrefix = "app/notes/3/acfd"

let acfdApp = SubTopicTrans(routePrefix, acfdFlow)

module.exports = acfdApp