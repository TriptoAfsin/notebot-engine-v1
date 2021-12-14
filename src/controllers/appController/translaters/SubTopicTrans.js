let SubTopicTrans = (routePrefix, chatbotSubjFlow) => {

    let cleanedObjArr = []

    for(let i=0; i<chatbotSubjFlow.length; i++){
        try{
            if(chatbotSubjFlow[i].attachment.payload.template_type === "button"){
                for(let j=0;j<chatbotSubjFlow[i].attachment.payload.buttons.length;j++){
                    if(chatbotSubjFlow[i].attachment.payload.buttons[j].payload){
                        cleanedObjArr.push({
                            topic: chatbotSubjFlow[i].attachment.payload.buttons[j].title,
                            route: `${routePrefix}/${chatbotSubjFlow[i].attachment.payload.buttons[j].payload}`
                        }) 
                    }
                    if(chatbotSubjFlow[i].attachment.payload.buttons[j].url){
                        cleanedObjArr.push({
                            topic: chatbotSubjFlow[i].attachment.payload.buttons[j].title,
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
            console.error("🔴 Invalid chatbotSubjFlow Given")
        }
    }
    

    return cleanedObjArr
}

module.exports = SubTopicTrans ;