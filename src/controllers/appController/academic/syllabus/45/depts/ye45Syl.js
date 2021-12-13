let ye45Syl = require('../../../../../../controllers/flows/botReplies/syllabus_batches/45/depts/ye_45/ye45Syllabus')
let SubTopicTrans = require('../../../../translaters/SubTopicTrans')


let routePrefix = "app/syllabus/45/ye"

let ye45SylApp = SubTopicTrans(routePrefix, ye45Syl)

module.exports = ye45SylApp