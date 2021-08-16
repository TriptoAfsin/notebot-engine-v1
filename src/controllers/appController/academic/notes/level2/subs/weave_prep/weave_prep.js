let weavePrepFlow = require('../../../../../../flows/botReplies/note_levels/level_2/level_2_subs/weaving_prep/weaving_prep_flow')
let SubTopicTrans = require('../../../../../translaters/SubTopicTrans')


let routePrefix = "app/notes/2/weaving_prep"

let weavePrepApp = SubTopicTrans(routePrefix, weavePrepFlow)

module.exports = weavePrepApp