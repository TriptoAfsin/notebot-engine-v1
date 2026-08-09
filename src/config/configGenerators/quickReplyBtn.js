let lengthValidator = require('../../controllers/genrators/validators/lengthValidator');


let quickReply = (title, payload) => {
    return {
        "content_type": "text",
        "title": lengthValidator(title, 20),
        "payload": payload,
    }
}

module.exports = quickReply;