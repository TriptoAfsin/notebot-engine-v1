let mppFlow = require('../../../../../../flows/botReplies/note_levels/level_3/level_3_subs/mpp/mppFlow')
let SubTopicTrans = require('../../../../../translaters/SubTopicTrans')


let routePrefix = "app/notes/3/mpp"

let mppApp = SubTopicTrans(routePrefix, mppFlow)

module.exports = mppApp