let wppFlow = require('../../../../../../flows/botReplies/note_levels/level_2/level_2_subs/wpp/wpp_flow')
let SubTopicTrans = require('../../../../../translaters/SubTopicTrans')


let routePrefix = "app/notes/2/wpp"

let wppApp = SubTopicTrans(routePrefix, wppFlow)

module.exports = wppApp