let phy2LabFlow = require('../../../../../../flows/botReplies/lab_levels/level_1/level_1_lab_subs/phy_2/phy2_lab_flow')
let SubTopicTrans = require('../../../../../translaters/SubTopicTrans')


let routePrefix = "app/labs/1/phy2"

let phy2LabApp = SubTopicTrans(routePrefix, phy2LabFlow)

module.exports = phy2LabApp