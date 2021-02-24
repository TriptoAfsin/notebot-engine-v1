let lengthValidator = require('./validators/lengthValidator');

let webBtnBlockGen = (title, url) => {

    return {
        "type": "web_url",
        "title":  lengthValidator(title, 15),
        "payload": url
    }
    
}

module.exports = webBtnBlockGen;