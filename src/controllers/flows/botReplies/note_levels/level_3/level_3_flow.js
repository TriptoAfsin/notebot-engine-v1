let grroupedButtonBlockGen = require("../../../../genrators/grroupedButtonBlockGen");
let webBtnBlockGen = require("../../../../genrators/webBtnBlockGen");
let payloadBtnGen = require("../../../../genrators/payloadBtnGen");
let cardGen = require("../../../../genrators/cardGenerator");


let level_3_note = [
    cardGen(
        "https://i.imgur.com/JJRZaJI.jpg",
        "কাঠপেন্সিল",
        "Buy Comfy Solid Color T-Shirts at only 250TK",
        "https://www.facebook.com/kathpencil.butex/posts/1643017485885654",
        [
            webBtnBlockGen("🔴 Order Now!", "https://www.facebook.com/kathpencil.butex/posts/1643017485885654")
        ]
    ),
    {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "button",
                "text": "🔴 Question Banks - ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "All Level 3",
                        "payload": "qb_3_flow"
                    }
                ],
            },
        },
    },
    {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "button",
                "text": "🔰 Select Subject for level 3 - ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Economics",
                        "payload": "econo_flow"
                    },
                    {
                        "type": "postback",
                        "title": "TCP",
                        "payload": "tcp_flow"
                    },
                    {
                        "type": "postback",
                        "title": "AM-II",
                        "payload": "am2_flow"
                    }
                ],
            },
        },
    },
    {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "button",
                "text": "🔰 Select Subject for level 3 - ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "IM (new)",
                        "payload": "im_flow"
                    },
                    {
                        "type": "postback",
                        "title": "WP-II",
                        "payload": "wp2_flow"
                    },
                    {
                        "type": "postback",
                        "title": "FM-II",
                        "payload": "fm2_flow"
                    }
                ],
            },
        },
    },
    {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "button",
                "text": "🔰 Select Subject for level 3 - ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "YM-II",
                        "payload": "ym2_flow"
                    },
                    {
                        "type": "postback",
                        "title": "PCS",
                        "payload": "pcs_flow"
                    },
                    {
                        "type": "postback",
                        "title": "LSS",
                        "payload": "lss_flow"
                    }
                ],
            },
        },
    },
    {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "button",
                "text": "🔰 Select Subject for level 3 - ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Knitting-I",
                        "payload": "kint1_flow"
                    },
                    {
                        "type": "postback",
                        "title": "FSD",
                        "payload": "fsd_flow"
                    },
                    {
                        "type": "postback",
                        "title": "AP-II",
                        "payload": "ap2_flow"
                    }
                ],
            },
        },
    },
    {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "button",
                "text": "🔰 Select Subject for level 3 - ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "ACE",
                        "payload": "ace_flow"
                    },
                    {
                        "type": "postback",
                        "title": "PD",
                        "payload": "pd_flow"
                    },
                    {
                        "type": "postback",
                        "title": "MIC",
                        "payload": "mic_flow"
                    }
                ],
            },
        },
    },
    {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "button",
                "text": "🔰 Select Subject for level 3 - ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "ACM",
                        "payload": "acm_flow"
                    },
                    {
                        "type": "postback",
                        "title": "TQM",
                        "payload": "tqm_flow"
                    },
                ],
            },
        },
    },

]





module.exports = level_3_note;