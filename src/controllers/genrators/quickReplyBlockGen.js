let quickReplyBlockGen = (title, quickRepliesArr) => {
    return {
        "text": `${title}`,
        "quick_replies": quickRepliesArr
    }
}

module.exports = quickReplyBlockGen;