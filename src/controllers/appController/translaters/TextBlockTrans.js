let UrlCatcher = require("./utils/UrlCatcher")

let TextBlockTrans = (textBLock) => {
    let topicContents = []

    for (let i = 0; i < textBLock.length; i++) {
        topicContents.push(UrlCatcher(textBLock[i].text))
    }

    return topicContents
}


module.exports = TextBlockTrans