//let lengthValidator = require('./validators/lengthValidator');



//quick reply
let quickReplyBlockGen = (title, quickRepliesArr) => {
    return {
        "text": `${title}`,
        "quick_replies": quickRepliesArr
    }
}


module.exports = quickReplyBlockGen