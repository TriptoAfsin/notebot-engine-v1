let payloadBtnBlockGen = (title, payload) => {
    return {
        "type": "postback",
        "title": title,
        "payload": payload
    }
}

module.exports = payloadBtnBlockGen;