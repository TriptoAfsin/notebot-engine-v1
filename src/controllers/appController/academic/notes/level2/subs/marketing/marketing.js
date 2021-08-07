let marketingFlow = require('../../../../../../flows/botReplies/note_levels/level_2/level_2_subs/marketing/marketing_flow')
let SubTopicTrans = require('../../../../../translaters/SubTopicTrans')


let routePrefix = "app/notes/2/marketing"

let marketingApp = SubTopicTrans(routePrefix, marketingFlow)

module.exports = marketingApp