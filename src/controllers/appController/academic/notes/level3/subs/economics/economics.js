let econoFlow = require('../../../../../../flows/botReplies/note_levels/level_3/level_3_subs/econo/econo_flow')
let SubTopicTrans = require('../../../../../translaters/SubTopicTrans')


let routePrefix = "app/notes/3/economics"

let econoApp = SubTopicTrans(routePrefix, econoFlow)

module.exports = econoApp