let textBlockGen = require("../../../genrators/textBlockGen");
const imgBlockGen = require('../../../genrators/imgBlockGen');
const webBtnBlockGen = require('../../../genrators/webBtnBlockGen');
const payloadBtnBlockGen = require('../../../genrators/payloadBtnGen');
const groupedBtnBlockGen = require('../../../genrators/grroupedButtonBlockGen');


const jokeBtn = "😀 Another Joke"

let jokes = [
    groupedBtnBlockGen(
        `Mom: Anton, do you think I’m a bad mother?\n\nSon: Mom, My name is Paul.`,
        [
            payloadBtnBlockGen(jokeBtn, `another_joke_flow`)
        ]
    ),
    groupedBtnBlockGen(
        `Women really know how to hold a grudge. My wife asked me to pass her a lip balm. And by mistake, I gave her a tube of Super Glue. It’s been a month now and she’s still not speaking to me!`,
        [
            payloadBtnBlockGen(jokeBtn, `another_joke_flow`)
        ]
    ),
    groupedBtnBlockGen(
        `Give a man a gun and he will rob a bank.\n\nGive a man a bank and he will rob everyone.`,
        [
            payloadBtnBlockGen(jokeBtn, `another_joke_flow`)
        ]
    ),
    groupedBtnBlockGen(
        `What is the difference between a snowman and a snowwoman?-\n\n"Snowballs."`,
        [
            payloadBtnBlockGen(jokeBtn, `another_joke_flow`)
        ]
    ),
    groupedBtnBlockGen(
        `Of course I should clean my windows. But privacy is important too.`,
        [
            payloadBtnBlockGen(jokeBtn, `another_joke_flow`)
        ]
    ),
    groupedBtnBlockGen(
        `My girlfriend accused me of cheating. I told her she was starting to sound like my wife.`,
        [
            payloadBtnBlockGen(jokeBtn, `another_joke_flow`)
        ]
    ),
    groupedBtnBlockGen(
        `Two men were talking about their wives\n\nThe first man says “My wife is an angel.” The second man says “You’re lucky, mine’s still alive.”`,
        [
            payloadBtnBlockGen(jokeBtn, `another_joke_flow`)
        ]
    ),
    groupedBtnBlockGen(
        `When you send nudes to your roblox gf and your uncle’s phone sounds with a text tone…`,
        [
            payloadBtnBlockGen(jokeBtn, `another_joke_flow`)
        ]
    ),
    groupedBtnBlockGen(
        `I hate 2 faced people because I don’t know which face to slap first.`,
        [
            payloadBtnBlockGen(jokeBtn, `another_joke_flow`)
        ]
    ),
    groupedBtnBlockGen(
        `I wasn’t planning on going for a run today, but those cops came out of nowhere`,
        [
            payloadBtnBlockGen(jokeBtn, `another_joke_flow`)
        ]
    ),
    groupedBtnBlockGen(
        `Wife: “I look fat. Can you give me a compliment?” Husband: “You have perfect eyesight.”`,
        [
            payloadBtnBlockGen(jokeBtn, `another_joke_flow`)
        ]
    ),
    groupedBtnBlockGen(
        `Doctor: Hello, did you come to see me with an eye problem?\n\nPatient: Wow, yes, how can you tell?\n\nDoctor: Because you came in through the window instead of the door.`,
        [
            payloadBtnBlockGen(jokeBtn, `another_joke_flow`)
        ]
    ),
    groupedBtnBlockGen(
        `I can’t believe I forgot to go to the gym today. That’s 7 years in a row now.`,
        [
            payloadBtnBlockGen(jokeBtn, `another_joke_flow`)
        ]
    ),
    groupedBtnBlockGen(
        `Why is women’s soccer so rare?\n\n-It’s quite hard to find enough women willing to wear the same outfit.`,
        [
            payloadBtnBlockGen(jokeBtn, `another_joke_flow`)
        ]
    ),
    groupedBtnBlockGen(
        `I’m selling my talking parrot. Why? Because yesterday, the bastard tried to sell me.`,
        [
            payloadBtnBlockGen(jokeBtn, `another_joke_flow`)
        ]
    ),
    groupedBtnBlockGen(
        `What is dangerous?\n\n-Sneezing while having diarrhea!`,
        [
            payloadBtnBlockGen(jokeBtn, `another_joke_flow`)
        ]
    ),
    groupedBtnBlockGen(
        `A wife is like a hand grenade. Take off the ring and say good bye to your house.`,
        [
            payloadBtnBlockGen(jokeBtn, `another_joke_flow`)
        ]
    ),
    groupedBtnBlockGen(
        `TEACHER : Pappu, your composition on “My Dog” is exactly the same as your brother’s. Did you copy this ?\n\nPAPPU : No, Teacher, it’s the same Dog.`,
        [
            payloadBtnBlockGen(jokeBtn, `another_joke_flow`)
        ]
    )
]





module.exports = jokes;