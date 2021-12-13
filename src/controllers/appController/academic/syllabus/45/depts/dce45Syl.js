let dce45Syl = require('../../../../../../controllers/flows/botReplies/syllabus_batches/45/depts/dce_45/dce45Syllabus')
let SubTopicTrans = require('../../../../translaters/SubTopicTrans')


let routePrefix = "app/syllabus/45/dce"

let dce45SylApp = SubTopicTrans(routePrefix, dce45Syl)

module.exports = dce45SylApp