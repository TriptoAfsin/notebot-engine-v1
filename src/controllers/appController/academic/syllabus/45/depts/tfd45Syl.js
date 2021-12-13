let tfd45Syl = require('../../../../../../controllers/flows/botReplies/syllabus_batches/45/depts/tfd_45/tfd45Syllabus')
let SubTopicTrans = require('../../../../translaters/SubTopicTrans')


let routePrefix = "app/syllabus/45/tfd"

let tfd45SylApp = SubTopicTrans(routePrefix, tfd45Syl)

module.exports = tfd45SylApp