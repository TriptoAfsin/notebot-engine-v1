//word is
let wordIs = (keywordArray, received_message) => {
  return keywordArray.includes(received_message.text.toLowerCase());
};

module.exports = wordIs