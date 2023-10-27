let grroupedButtonBlockGen = require('simple-messenger-blocks/groupedBtnBlockGen');
let webBtnBlockGen = require('simple-messenger-blocks/webBtnGen');
let payloadBtnGen = require('simple-messenger-blocks/payloadBtnGen');
let imgBlockGen = require('simple-messenger-blocks/imgBlockGen');


let wp2_lab_flow = [
    imgBlockGen("https://manybot-thumbnails.s3.eu-central-1.amazonaws.com/fb243958719599028/ca/big_5804a1d185b0eb2ba836a2262e32d963.png"),
    grroupedButtonBlockGen(
        "📌 All Reports -",
        [
            webBtnBlockGen("All Combined(Bappi)", "https://drive.google.com/file/d/1996L45VwUk4jS1CwnozbVzU1PVD358ed/view"),
            webBtnBlockGen("All Combined(Akib)", "https://drive.google.com/file/d/130wy9e5FxOUgqT1kQTt7Xhpxhj1-RpLR/view"),
            webBtnBlockGen("All Combined(Shakil)", "https://drive.google.com/file/d/1hOP3webjVzkF2XTuxHiX1fUU2iLDZWOZ/view?usp=sharing")
        ]
    ),
    grroupedButtonBlockGen(
        "📌 All Reports -",
        [
            webBtnBlockGen("All Report(Sakib,2023)", "https://drive.google.com/file/d/1HxyY2WSxJJRiWo4xvKBugIginh8U6MWT/view?usp=sharing"),
            webBtnBlockGen("All Report(Tarek,2023)", "https://drive.google.com/file/d/1GRtnjniYOsGVaDZ70RvduPijrg9z5b_a/view?usp=sharing"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Experiment for WP-II -",
        [
            webBtnBlockGen("1", "https://drive.google.com/file/d/10PC4gqZhNOa9xw6badWvJh6YZxzAc2yT/view"),
            webBtnBlockGen("2", "https://drive.google.com/file/d/10YNxnebGEmHAiwnQZ82pLV20AQp19bci/view"),
            webBtnBlockGen("3", "https://drive.google.com/file/d/1-xD8pyJ2kljx2FKYxUqNHCouNdKkBqxx/view"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Experiment for WP-II -",
        [
            webBtnBlockGen("4", "https://drive.google.com/file/d/10KI-OIWx5o-G8RbzuAusbiyQB1BRcXBF/view"),
            webBtnBlockGen("5", "https://drive.google.com/file/d/10MNurY0WBtdthjVy0dXl1nHVqE2RfWk1/view"),
            webBtnBlockGen("6", "https://drive.google.com/file/d/10YSrsqQW3PgoE1Er0UnBh7f4zt7hvt21/view"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Experiment for WP-II -",
        [
            webBtnBlockGen("7", "https://drive.google.com/file/d/10adoUW--7cO6BaZm276Rdb0SUzF94BWu/view"),
            webBtnBlockGen("8", "https://drive.google.com/file/d/119kWxXZWNMFjXuibcGOlQ5JFPMHZO_iW/view"),
            webBtnBlockGen("9", "https://drive.google.com/file/d/12jRMWA5nQSaUd66X6mr2mvcaizodAaHL/view"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Experiment for WP-II -",
        [
            webBtnBlockGen("10", "https://drive.google.com/file/d/12vNBMjpZv1euhGoAzzXXEJdOnvaeKwRo/view"),
            webBtnBlockGen("11", "https://drive.google.com/file/d/13su4KFQ5I4Yn61FgWLltmjyd26_jiyvR/view"),
            webBtnBlockGen("12", "https://drive.google.com/file/d/16Ve2GQoe9fXz6-N121uUDir7EzlctUnV/view"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Experiment for WP-II -",
        [
            webBtnBlockGen("13", "https://drive.google.com/file/d/16XGkyADpBxCJKwPe9OQe7rCIXl5cIQsm/view"),
            webBtnBlockGen("14", "https://drive.google.com/file/d/16mNhjrg8h4mVIpU-uYU-jb1wDtp2SYv7/view"),
            webBtnBlockGen("Cotton & OBA", "https://drive.google.com/file/d/1U2Ib-0-ca0N-URqKe5AduqM8i113aMGN/view"),
        ]
    ),
]



module.exports = wp2_lab_flow;