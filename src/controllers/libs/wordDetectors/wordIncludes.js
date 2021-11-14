let wordIncludes = (keywordArray, received_message) => {
  return keywordArray.some(word =>
    received_message.text.toLowerCase().includes(word)
  ); //received_message is an object
};

module.exports = wordIncludes