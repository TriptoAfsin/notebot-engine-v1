let textBlockGen = require("../../../genrators/textBlockGen");
const imgBlockGen = require('../../../genrators/imgBlockGen');
const webBtnBlockGen = require('../../../genrators/webBtnBlockGen');
const payloadBtnBlockGen = require('../../../genrators/payloadBtnGen');
const groupedBtnBlockGen = require('../../../genrators/grroupedButtonBlockGen');


let quotes = [
    groupedBtnBlockGen(
        `START WHERE YOU  ARE.\nUSE WHAT YOU HAVE.\nDO WHAT YOU CAN. \n\n- Arthur Ashe`,
        [
            payloadBtnBlockGen(`Another Quote`, `another_quote_flow`)
        ]
    ),
    groupedBtnBlockGen(
        `Everything you’ve ever wanted is on the other side of fear. \n\n— George Addair`,
        [
            payloadBtnBlockGen(`Another Quote`, `another_quote_flow`)
        ]
    ),
    groupedBtnBlockGen(
        `Too many of us are not living our dreams because we are living our fears.\n\n– Les Brown`,
        [
            payloadBtnBlockGen(`Another Quote`, `another_quote_flow`)
        ]
    ),
    groupedBtnBlockGen(
        `Remember that not getting what you want is sometimes a wonderful stroke of luck. \n\n—Dalai Lama`,
        [
            payloadBtnBlockGen(`Another Quote`, `another_quote_flow`)
        ]
    ),
    groupedBtnBlockGen(
        `"Pera nai, Chill" \n\n- Random University Guy`,
        [
            payloadBtnBlockGen(`Another Quote`, `another_quote_flow`)
        ]
    ),
    groupedBtnBlockGen(
        `life is short.\nDo syuff that matetrs`,
        [
            payloadBtnBlockGen(`Another Quote`, `another_quote_flow`)
        ]
    ),
    groupedBtnBlockGen(
        `"IT DOES NOT MATTER HOW SLOWLY YOU GO \nAS LONG AS YOU DO NOT STOP" \n\n- CONFUCIUS `,
        [
            payloadBtnBlockGen(`Another Quote`, `another_quote_flow`)
        ]
    ),
    groupedBtnBlockGen(
        `Your mind is a powerful thing. When you fill it with positive thoughts, your life will start to change.`,
        [
            payloadBtnBlockGen(`Another Quote`, `another_quote_flow`)
        ]
    ),
    groupedBtnBlockGen(
        `Fortune always favors the brave, and never helps a man who does not help himself. \n\n– P. T. Barnum`,
        [
            payloadBtnBlockGen(`Another Quote`, `another_quote_flow`)
        ]
    ),
    groupedBtnBlockGen(
        `If you don’t like something, change it. If you can’t change it, change your attitude. \n\n– Maya Angelou`,
        [
            payloadBtnBlockGen(`Another Quote`, `another_quote_flow`)
        ]
    ),
    groupedBtnBlockGen(
        `“Things change. And friends leave. Life doesn't stop for anybody.”\n\n― Stephen Chbosky`,
        [
            payloadBtnBlockGen(`Another Quote`, `another_quote_flow`)
        ]
    ),
    groupedBtnBlockGen(
        `“Those who cannot change their minds cannot change anything.”\n\n― George Bernard Shaw`,
        [
            payloadBtnBlockGen(`Another Quote`, `another_quote_flow`)
        ]
    ),
    groupedBtnBlockGen(
        `“It's not the load that breaks you down, it's the way you carry it.”\n\n― Lou Holtz `,
        [
            payloadBtnBlockGen(`Another Quote`, `another_quote_flow`)
        ]
    ),
    groupedBtnBlockGen(
        `“Do you want to know who you are? Don't ask. Act! Action will delineate and define you.”\n\n― Thomas Jefferson `,
        [
            payloadBtnBlockGen(`Another Quote`, `another_quote_flow`)
        ]
    ),
    groupedBtnBlockGen(
        `“The way to get started is to quit talking and begin doing. ”\n\n― Walt Disney `,
        [
            payloadBtnBlockGen(`Another Quote`, `another_quote_flow`)
        ]
    ),
    groupedBtnBlockGen(
        `Don’t wish it were easier. Wish you were better. \n\n― Jim Rohn`,
        [
            payloadBtnBlockGen(`Another Quote`, `another_quote_flow`)
        ]
    ),
    groupedBtnBlockGen(
        `“Do what is right, not what is easy nor what is popular.”\n\n― Roy T. Bennett, The Light in the Heart `,
        [
            payloadBtnBlockGen(`Another Quote`, `another_quote_flow`)
        ]
    ),
    groupedBtnBlockGen(
        `It is during our darkest moments that we must focus to see the light. \n\n— Aristotle Onassis`,
        [
            payloadBtnBlockGen(`Another Quote`, `another_quote_flow`)
        ]
    ),
    groupedBtnBlockGen(
        `We may encounter many defeats but we must not be defeated.\n\n– Maya Angelou`,
        [
            payloadBtnBlockGen(`Another Quote`, `another_quote_flow`)
        ]
    ),
    groupedBtnBlockGen(
        `TALK TO YOUR PARENTS OR LOVING ONE❤`,
        [
            payloadBtnBlockGen(`I want more!`, `another_quote_flow`)
        ]
    )
]





module.exports = quotes;