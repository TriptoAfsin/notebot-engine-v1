const lengthValidator = require("./validators/lengthValidator");

let webBtnBlockGen = (title, url) => {
    return {
        "type": "web_url",
        "url": url,
        "title": lengthValidator(title, 20),
    }
}

module.exports = webBtnBlockGen;