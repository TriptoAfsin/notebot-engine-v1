let wpe45Syl = require('../../../../../../controllers/flows/botReplies/syllabus_batches/45/depts/wpe_45/wpe45Syllabus')
let SubTopicTrans = require('../../../../translaters/SubTopicTrans')


let routePrefix = "app/syllabus/45/wpe"

let wpe45SylApp = SubTopicTrans(routePrefix, wpe45Syl)

module.exports = wpe45SylApp