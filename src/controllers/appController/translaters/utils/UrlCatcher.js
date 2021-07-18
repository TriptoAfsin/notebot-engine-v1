let UrlCatcher =  (string) => {
    //regex: /(https?:\/\/[^ ]*)/
    let urlRegex = /(https?:\/\/[^ ]*)/
    let titleRegex = /\n/g
    let url = string.match(urlRegex)[1]

    let title = string.replace(urlRegex, '')
    title.replace(titleRegex, '')
    let withoutLineBreaks = title.replace(titleRegex, '')
    let finalTitle = withoutLineBreaks.replace(/-/g,"")

    return {finalTitle, url}
}


module.exports = UrlCatcher