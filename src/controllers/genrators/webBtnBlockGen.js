let webBtnBlockGen = (title, url) => {

    if (title.length > 15) {
        console.warn(`⚠ Warning: Max btn title length(15) crossed! First 15 chars were kept`);
        let newTitle = "";
        for(let i = 0; i < 14; i++){
            newTitle += title[i];
        }
        return {
            "type": "web_url",
            "url": url,
            "title": newTitle,
        }
    }

    else{
        return {
            "type": "web_url",
            "url": url,
            "title": title,
        }
    }
    
}

module.exports = webBtnBlockGen;