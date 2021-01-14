//groupedBtn block
let groupedBtnBlockGen = (headerText, BtnObjArr) => {

    if(BtnObjArr.length > 3){
        console.warn(`⚠ Warning: Max btn(3) amount crossed! only 3 buttons were kept and rest were removed`);
        return {
            "attachment": {
                "type": "template",
                "payload": {
                    "template_type": "button",
                    "text": headerText,
                    "buttons": [BtnObjArr[0], BtnObjArr[1], BtnObjArr[2]],
                },
            },
        }
    }

    else{
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
}


module.exports = groupedBtnBlockGen;