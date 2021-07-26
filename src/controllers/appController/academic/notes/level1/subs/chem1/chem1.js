let chem1Flow = require('../../../../../../flows/botReplies/note_levels/level_1/level_1_subs/chem1/chem1_flow')
let SubTopicTrans = require('../../../../../translaters/SubTopicTrans')


let routePrefix = "app/notes/1/chem1"

let chem1App = SubTopicTrans(routePrefix, chem1Flow)

module.exports = chem1App