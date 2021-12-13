let tem45Syl = require('../../../../../../controllers/flows/botReplies/syllabus_batches/45/depts/tem_45/tem45Syllabus')
let SubTopicTrans = require('../../../../translaters/SubTopicTrans')


let routePrefix = "app/syllabus/45/tem"

let tem45SylApp = SubTopicTrans(routePrefix, tem45Syl)

module.exports = tem45SylApp