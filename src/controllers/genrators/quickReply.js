let lengthValidator = require('./validators/lengthValidator');
let quickReply = (title, payload) => {
    return {
        "content_type": "text",
        "title":  lengthValidator(title, 15),
        "payload": payload
    }
}

module.exports = quickReply;

