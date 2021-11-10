let UrlCatcher = require("./utils/UrlCatcher")

let TextBlockTrans = (textBLock) => {
    let topicContents = []

    for (let i = 0; i < textBLock.length; i++) {
        try{
            if(textBLock[i].text){
                topicContents.push(UrlCatcher(textBLock[i].text))
            }
    
            //when a url button is present
            else if(textBLock[i].attachment.payload.buttons[0].url){
                for(let j=0;j<textBLock[i].attachment.payload.buttons.length;j++){
                    topicContents.push({
                        title: `${textBLock[i].attachment.payload.text} - ${textBLock[i].attachment.payload.buttons[j].title}`,
                        url: `${textBLock[i].attachment.payload.buttons[j].url}`
                    }) 
                }
     
            }
        }catch(err){
            console.error("🔴 Invalid Textblock Given")
        }
    }

    return topicContents
}


module.exports = TextBlockTrans