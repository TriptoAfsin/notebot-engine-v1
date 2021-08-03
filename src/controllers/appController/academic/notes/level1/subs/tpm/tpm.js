let tpmFlow = require('../../../../../../flows/botReplies/note_levels/level_1/level_1_subs/tpm/tpm_flow')
let SubTopicTrans = require('../../../../../translaters/SubTopicTrans')


let routePrefix = "app/notes/1/tpm"

let tpmApp = SubTopicTrans(routePrefix, tpmFlow)

module.exports = tpmApp