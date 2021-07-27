let phy1Flow = require('../../../../../../flows/botReplies/note_levels/level_1/level_1_subs/phy1/phy1_flow')
let SubTopicTrans = require('../../../../../translaters/SubTopicTrans')


let routePrefix = "app/notes/1/phy1"

let phy1App = SubTopicTrans(routePrefix, phy1Flow)

module.exports = phy1App