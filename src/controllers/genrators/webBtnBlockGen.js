let webBtnBlockGen = (title, url) => {
    return {
        "type": "web_url",
        "url": url,
        "title": title,
    }
}

module.exports = webBtnBlockGen;