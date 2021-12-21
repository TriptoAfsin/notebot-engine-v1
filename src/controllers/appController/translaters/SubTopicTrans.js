let wordIncludes = (keywordArray, received_message) => {
    return keywordArray.some(word =>
      received_message.toLowerCase().includes(word)
    ); //received_message is an object
};

let SubTopicTrans = (routePrefix, chatbotSubjFlow) => {

    let cleanedObjArr = []

    for(let i=0; i<chatbotSubjFlow.length; i++){
        try{
            if(chatbotSubjFlow[i].attachment.payload.template_type === "button"){
                //console.log(payload.text)
                for(let j=0;j<chatbotSubjFlow[i].attachment.payload.buttons.length;j++){
                    if(chatbotSubjFlow[i].attachment.payload.buttons[j].payload){
                        cleanedObjArr.push({
                            topic: chatbotSubjFlow[i].attachment.payload.buttons[j].title,
                            route: `${routePrefix}/${chatbotSubjFlow[i].attachment.payload.buttons[j].payload}`
                        }) 
                    }
                    if(chatbotSubjFlow[i].attachment.payload.buttons[j].url){
                        cleanedObjArr.push({
                            topic: wordIncludes(["📌 full", "📌 all", "⚡"], chatbotSubjFlow[i].attachment.payload.text) ? `${chatbotSubjFlow[i].attachment.payload.text}${chatbotSubjFlow[i].attachment.payload.buttons[j].title}` : `${chatbotSubjFlow[i].attachment.payload.buttons[j].title}`,
                            url: `${chatbotSubjFlow[i].attachment.payload.buttons[j].url}`
                        }) 
                    }
                }
            }
            if(chatbotSubjFlow[i].attachment.type === "image"){
                cleanedObjArr.push({
                    topic: `Index`,
                    url: `${chatbotSubjFlow[i].attachment.payload.url}`
                })
            }
            continue
        }catch(err){
            console.log(err)
            console.error("🔴 Invalid chatbotSubjFlow Given")
        }
    }
    

    return cleanedObjArr
}

module.exports = SubTopicTrans ;