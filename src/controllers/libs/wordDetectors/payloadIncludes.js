//payload include
let payloadIncludes = (keywordArray, payload) => {
  return keywordArray.some(word => payload.toLowerCase().includes(word)); //payload is a string
};


module.exports = payloadIncludes