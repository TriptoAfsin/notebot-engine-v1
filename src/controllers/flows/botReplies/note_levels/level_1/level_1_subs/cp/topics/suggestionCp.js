let grroupedButtonBlockGen = require("../../../../../../../genrators/grroupedButtonBlockGen");
let webBtnBlockGen = require("../../../../../../../genrators/webBtnBlockGen");
let payloadBtnGen = require("../../../../../../../genrators/payloadBtnGen");
let textBlockGen = require("../../../../../../../genrators/textBlockGen");
let cardGenerator = require("../../../../../../../genrators/cardGenerator");


let suggCp = [
    textBlockGen(`Programing প্র্যাক্টিস এর বিষয়, তাই নিজ হাতে প্র্যাক্টিস করাই সর্বোত্তম, মুখস্ত করে সব পারা যাবে না😃`),
    grroupedButtonBlockGen(
        "তাই অনলাইন ঘেঁটে ঘেঁটে প্রোগ্রামিং শেখাই ভালো, আর বইয়ের জন্য তামিম ভাইয়ের বইটা ফলো করা যেতে পারে☺ \nHappy Coding❤",
        [
            webBtnBlockGen("Book Downlaod", "https://drive.google.com/file/d/1vtnEQKKXSV6XAaoEVhrRPRbPcakhh6c_/view?usp=sharing"),
            webBtnBlockGen("C for Smartphone", "https://play.google.com/store/apps/details?id=name.antonsmirnov.android.cppdroid&hl=en")
        ]
    ),
]





module.exports = suggCp;