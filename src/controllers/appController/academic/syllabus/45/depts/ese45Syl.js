let ese45Syl = require('../../../../../../controllers/flows/botReplies/syllabus_batches/45/depts/ese_45/ese45Syllabus')
let SubTopicTrans = require('../../../../translaters/SubTopicTrans')


let routePrefix = "app/syllabus/45/ese"

let ese45SylApp = SubTopicTrans(routePrefix, ese45Syl)

module.exports = ese45SylApp