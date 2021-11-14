let emojiIs = (emojiArray, received_reaction) => {
  return emojiArray.some(emoji => received_reaction.emoji.includes(emoji)); //received_message is an object
};

module.exports = emojiIs
