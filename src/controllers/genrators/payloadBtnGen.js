let payloadBtnBlockGen = (title, payload) => {

    if (title.length > 15) {
        console.warn(`⚠ Warning: Max btn title length(15) crossed! First 15 chars were kept`);
        let newTitle = "";
        for(let i = 0; i < 14; i++){
            newTitle += title[i];
        }
        return {
            "type": "postback",
            "title": newTitle,
            "payload": payload
        }
    }

    else{
        return {
            "type": "postback",
            "title": title,
            "payload": payload
        }
    }
    
}

module.exports = payloadBtnBlockGen;