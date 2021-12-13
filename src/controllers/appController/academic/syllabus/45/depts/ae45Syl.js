let ae45Syl = require('../../../../../../controllers/flows/botReplies/syllabus_batches/45/depts/ae_45/ae45Syllabus')
let SubTopicTrans = require('../../../../translaters/SubTopicTrans')


let routePrefix = "app/syllabus/45/ae"

let ae45SylApp = SubTopicTrans(routePrefix, ae45Syl)

module.exports = ae45SylApp