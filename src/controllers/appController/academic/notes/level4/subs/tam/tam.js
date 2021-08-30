let tamFlow = require('../../../../../../flows/botReplies/note_levels/level_4/level_4_subs/tam/tam_flow')
let SubTopicTrans = require('../../../../../translaters/SubTopicTrans')


let routePrefix = "app/notes/4/tam"

let tamApp = SubTopicTrans(routePrefix, tamFlow)

module.exports = tamApp