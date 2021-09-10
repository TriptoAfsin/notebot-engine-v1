let lengthValidator = require('./validators/lengthValidator');


//card block
let cardGenerator = (imgUrl, title, subtitle, defaultLink, BtnObjArr) => {
    if (BtnObjArr.length > 3) {
        console.warn(`⚠ Warning: Max btn(3) amount crossed! only 3 buttons were kept and rest were removed`);
        return {
            "attachment": {
                "type": "template",
                "payload": {
                    "template_type": "generic",
                    "elements": [{
                        "title": lengthValidator(title, 80),
                        "image_url": `${imgUrl}`,
                        "subtitle": lengthValidator(subtitle, 80),
                        "default_action": {
                            "type": "web_url",
                            "url": `${defaultLink}`
                        },
                        "buttons": [BtnObjArr[0], BtnObjArr[1], BtnObjArr[2]],
                    }]
                }
            }
        }
    }

    else {
        return {
            "attachment": {
                "type": "template",
                "payload": {
                    "template_type": "generic",
                    "elements": [{
                        "title": lengthValidator(title, 80),
                        "image_url": `${imgUrl}`,
                        "subtitle": lengthValidator(subtitle, 80),
                        "default_action": {
                            "type": "web_url",
                            "url": `${defaultLink}`
                        },
                        "buttons": BtnObjArr,
                    }]
                }
            }
        }
    }
}


module.exports = cardGenerator