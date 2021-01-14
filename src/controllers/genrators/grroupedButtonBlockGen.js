//groupedBtn block
let groupedBtnBlockGen = (headerText, BtnObjArr) => {
    return {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "button",
                "text": headerText,
                "buttons": BtnObjArr,
            },
        },
    }
}


module.exports = groupedBtnBlockGen;