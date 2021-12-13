let ipe45Syl = require('../../../../../../controllers/flows/botReplies/syllabus_batches/45/depts/ipe_45/ipe45Syllabus')
let SubTopicTrans = require('../../../../translaters/SubTopicTrans')


let routePrefix = "app/syllabus/45/ipe"

let ipe45SylApp = SubTopicTrans(routePrefix, ipe45Syl)

module.exports = ipe45SylApp