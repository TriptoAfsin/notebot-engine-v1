let lengthValidator = require('../../controllers/genrators/validators/lengthValidator');
let payloadBtn = (title, payload) => {
    return {
        "type": "postback",
        "title":  lengthValidator(title, 15),
        "payload": payload
    }
}

module.exports = payloadBtn;