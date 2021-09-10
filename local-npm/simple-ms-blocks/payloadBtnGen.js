let lengthValidator = require('./validators/lengthValidator');


//for payload buttons / postback buttons
let payloadBtnGen = (title, payload) => {
    return {
        "type": "postback",
        "title":  lengthValidator(title, 15),
        "payload": payload
    }
}


module.exports = payloadBtnGen