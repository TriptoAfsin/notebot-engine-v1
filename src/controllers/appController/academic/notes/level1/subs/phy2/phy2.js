let phy2Flow = require('../../../../../../flows/botReplies/note_levels/level_1/level_1_subs/phy2/phy2_flow')
let SubTopicTrans = require('../../../../../translaters/SubTopicTrans')


let routePrefix = "app/notes/1/phy2"

let phy2App = SubTopicTrans(routePrefix, phy2Flow)

module.exports = phy2App