let wordIncludesWhole = (keywordArray, searchText) => {
    searchText = searchText.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
    let verdict = false
    if(Array.isArray(keywordArray)){
      for(let i = 0; i < keywordArray.length; i++){
          if(searchText.match(new RegExp("\\b" + keywordArray[i] + "\\b", "i")) != null){
              verdict = true
              //console.log(`Matching word: ${keywordArray[i]}, with string ${searchText} || verdict: ${verdict}`)
              return verdict
          }
          //console.log(`Matching word: ${keywordArray[i]}, with string ${searchText} || verdict: ${verdict}`)
        }
        return verdict
    }
    else{
        return console.log("Invalid params")
    }
  }

module.exports = wordIncludesWhole;
