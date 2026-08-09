let lengthValidator = require('../../controllers/genrators/validators/lengthValidator');
let payloadBtn = (title, payload) => {
    return {
        "type": "postback",
        "title":  lengthValidator(title, 20),
        "payload": payload
    }
}

module.exports = payloadBtn;