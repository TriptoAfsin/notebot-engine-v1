let fe45Syl = require('../../../../../../controllers/flows/botReplies/syllabus_batches/45/depts/fe_45/fe45Syllabus')
let SubTopicTrans = require('../../../../translaters/SubTopicTrans')


let routePrefix = "app/syllabus/45/fe"

let fe45SylApp = SubTopicTrans(routePrefix, fe45Syl)

module.exports = fe45SylApp