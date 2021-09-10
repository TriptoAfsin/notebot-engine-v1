let lengthValidator = require('./validators/lengthValidator');


//for web link buttons
let webBtnGen = (title, url) => {
    return {
        "type": "web_url",
        "url": url,
        "title": lengthValidator(title, 15),
    }
}


module.exports = webBtnGen