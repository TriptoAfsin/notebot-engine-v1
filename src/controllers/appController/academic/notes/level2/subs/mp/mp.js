let mpFlow = require('../../../../../../flows/botReplies/note_levels/level_2/level_2_subs/mp/mp_flow')
let SubTopicTrans = require('../../../../../translaters/SubTopicTrans')


let routePrefix = "app/notes/2/mp"

let mpfApp = SubTopicTrans(routePrefix, mpFlow)

module.exports = mpfApp