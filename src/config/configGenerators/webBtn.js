let lengthValidator = require('../../controllers/genrators/validators/lengthValidator');


let webBtn = (title, url) => {
    return {
        "type": "web_url",
        "title": lengthValidator(title, 15),
        "url": url,
        "webview_height_ratio": "full"
    }
}

module.exports = webBtn;