let phy1LabFlow = require('../../../../../../flows/botReplies/lab_levels/level_1/level_1_lab_subs/phy_1/phy_1LabFlow')
let SubTopicTrans = require('../../../../../translaters/SubTopicTrans')


let routePrefix = "app/labs/1/phy1"

let phy1LabApp = SubTopicTrans(routePrefix, phy1LabFlow)

module.exports = phy1LabApp