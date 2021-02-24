let lengthValidator = require('./validators/lengthValidator');

let webBtnBlockGen = (title, url) => {

    return {
        "type": "postback",
        "title":  lengthValidator(title, 15),
        "payload": url
    }
    
}

module.exports = webBtnBlockGen;