let tmdm45Syl = require('../../../../../../controllers/flows/botReplies/syllabus_batches/45/depts/tmdm_45/tmdm45Syllabus')
let SubTopicTrans = require('../../../../translaters/SubTopicTrans')


let routePrefix = "app/syllabus/45/tmdm"

let tmdm45SylApp = SubTopicTrans(routePrefix, tmdm45Syl)

module.exports = tmdm45SylApp