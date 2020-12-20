let iae_flow = [
    {
        "attachment": {
            "type": "template",
            "payload": {
                "template_type": "button",
                "text": "🟩 Select Topics for IAE-  ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Books",
                        "payload": "iae_books_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Questions",
                        "payload": "iae_ques_flow"
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
                "text": "🟩 Select Topics for IAE- ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Intro to Apparel",
                        "payload": "iae_intro_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Full Slide",
                        "payload": "iae_full_slide_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Different T.. Woven",
                        "payload": "iae_diff_woven_flow"
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
                "text": "🟩 Select Topics for IAE-  ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Apparel Brands",
                        "payload": "iae_brands_flow"
                    },
                    {
                        "type": "postback",
                        "title": "Quota & Cate..",
                        "payload": "iae_quota_flow"
                    },
                    {
                        "type": "postback",
                        "title": "CAD & CAM",
                        "payload": "iae_cam_flow"
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
                "text": "🟩 Select Topics for IAE-  ",
                "buttons": [
                    {
                        "type": "postback",
                        "title": "Components of Shirt",
                        "payload": "iae_shirt_flow"
                    },
                ],
            },
        },
    }
]





module.exports = iae_flow;