let fd2Flow = require('../../../../../../flows/botReplies/note_levels/level_2/level_2_subs/fd2/fd2_flow')
let SubTopicTrans = require('../../../../../translaters/SubTopicTrans')


let routePrefix = "app/notes/2/fd2"

let fd2App = SubTopicTrans(routePrefix, fd2Flow)

module.exports = fd2App