let imgBlockGen = (url) => {
    return {
        "attachment":{
            "type":"image", 
            "payload":{
              "is_reusable": false,
              "url": url
            }
          }
    }
}


module.exports = imgBlockGen;