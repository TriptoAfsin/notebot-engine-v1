let bfsFlow = require('../../../../../../flows/botReplies/note_levels/level_1/level_1_subs/bfs/bfs_flow')
let SubTopicTrans = require('../../../../../translaters/SubTopicTrans')


let routePrefix = "app/notes/1/bfs"

let bfsApp = SubTopicTrans(routePrefix, bfsFlow)

module.exports = bfsApp