let tcpFlow = require('../../../../../../flows/botReplies/note_levels/level_3/level_3_subs/tcp/tcp_flow')
let SubTopicTrans = require('../../../../../translaters/SubTopicTrans')


let routePrefix = "app/notes/3/tcp"

let tcpApp = SubTopicTrans(routePrefix, tcpFlow)

module.exports = tcpApp