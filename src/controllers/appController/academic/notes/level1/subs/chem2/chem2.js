let chem2Flow = require('../../../../../../flows/botReplies/note_levels/level_1/level_1_subs/chem2/chem2_flow')
let SubTopicTrans = require('../../../../../translaters/SubTopicTrans')


let routePrefix = "app/notes/1/chem2"

let chem2App = SubTopicTrans(routePrefix, chem2Flow)

module.exports = chem2App