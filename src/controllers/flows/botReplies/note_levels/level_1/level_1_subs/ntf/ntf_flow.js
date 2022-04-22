let grroupedButtonBlockGen = require('simple-messenger-blocks/groupedBtnBlockGen');
let webBtnBlockGen = require('simple-messenger-blocks/webBtnGen');
let payloadBtnGen = require('simple-messenger-blocks/payloadBtnGen');
let bondiFlow = require("../../../../sponsoredFlows/bondiCard");


let ntf_flow = [
    bondiFlow,
    grroupedButtonBlockGen(`📌 Hand Notes & Questions -`,
        [
            webBtnBlockGen("Wasy(2021)", "https://drive.google.com/file/d/1DmMmmwzpUErfcn3yeG58tnXg7bzXJ0PR/view?usp=sharing"),
        ]
    ),
    grroupedButtonBlockGen(`📌 Hand Notes & Questions -`,
        [
            webBtnBlockGen("Important Que.", "https://drive.google.com/file/d/16xe5aLVA1cTGM2aEJXmEbmG527Ewz7Hb/view?usp=sharing"),
            webBtnBlockGen("Short Note", "https://drive.google.com/file/d/1ssWOEjOj1qJrfRO_sKM3uqit1zIbBOKT/view?usp=sharing"),
            webBtnBlockGen("🔵 Akib(2019)", "https://drive.google.com/file/d/19JIpGWPQVP9SWFHfZdisdvNgaSlwxaW5/view?usp=drivesdk")
        ]
    ),
    grroupedButtonBlockGen(`⭐ All Properties Short Note -`,
        [
            webBtnBlockGen("Nadia(2021)", "https://drive.google.com/file/d/1FqA7R5jziHOHPiTUUyXuoWxmIg99M99j/view?usp=sharing"),
        ]
    ),

    grroupedButtonBlockGen(`🔰 Select Topics for NTF -`,
        [
            payloadBtnGen("Books", "ntf_books_flow"),
            payloadBtnGen("Hand Notes", "ntf_hnotes_flow"),
            payloadBtnGen("Questions", "ntf_ques_flow")
        ]
    ),
    grroupedButtonBlockGen(`🔰 Select Topics for NTF -`,
        [
            payloadBtnGen("Suggestions/Solve", "ntf_suggestion_flow"),
            payloadBtnGen("Intro to NTF", "ntf_intro_flow"),
            payloadBtnGen("Cotton Fibre", "ntf_cotton_flow")
        ]
    ),
    grroupedButtonBlockGen(`🔰 Select Topics for NTF -`,
        [
            payloadBtnGen("Flax Fibre", "ntf_flax_flow"),
            payloadBtnGen("Wool Fibre", "ntf_wool_flow"),
            payloadBtnGen("Jute Fibre", "ntf_jute_flow")
        ]
    ),
    grroupedButtonBlockGen(`🔰 Select Topics for NTF -`,
        [
            payloadBtnGen("Silk Fibre", "ntf_silk_flow"),
            payloadBtnGen("Sisal", "ntf_sisal_flow"),
            payloadBtnGen("Hemp", "ntf_hemp_flow")
        ]
    ),
    grroupedButtonBlockGen(`🔰 Select Topics for NTF -`,
        [
            payloadBtnGen("PALF", "ntf_palf_flow"),
            payloadBtnGen("Kapok", "ntf_kapok_flow"),
            payloadBtnGen("Asbestos", "ntf_asbestos_flow")
        ]
    ),
    grroupedButtonBlockGen(`🔰 Select Topics for NTF -`,
        [
            payloadBtnGen("Other Fibres", "ntf_other_fib_flow"),
            payloadBtnGen("Play Quiz", "quiz_flow"),
        ]
    )
]





module.exports = ntf_flow;