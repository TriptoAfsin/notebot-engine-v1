let lengthValidator = require('./validators/lengthValidator');
let payloadBtnBlockGen = (title, payload) => {
    return {
        "type": "postback",
        "title":  lengthValidator(title, 20),
        "payload": payload
    }
}

module.exports = payloadBtnBlockGen;