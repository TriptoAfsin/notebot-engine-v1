let UrlCatcher =  (string) => {
    //regex: /(https?:\/\/[^ ]*)/
    let urlRegex = /(https?:\/\/[^ ]*)/
    let titleRegex = /\n/g
    let url = ''
    try{
        url = string.match(urlRegex)[1]
    }catch (err){
        
    }
    

    let title = string.replace(urlRegex, '').replace(titleRegex, '').replace(/-/g,"").trim()
    /*
    title.replace(titleRegex, '')
    let withoutLineBreaks = title.replace(titleRegex, '')
    let unTrimmed = withoutLineBreaks.replace(/-/g,"")
    let finalTitle = unTrimmed.trim()
    */

    return {title, url}
}


module.exports = UrlCatcher