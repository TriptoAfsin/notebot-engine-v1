let grroupedButtonBlockGen = require("../../../../../../genrators/grroupedButtonBlockGen");
let webBtnBlockGen = require("../../../../../../genrators/webBtnBlockGen");
let payloadBtnGen = require("../../../../../../genrators/payloadBtnGen");



let ntf_flow = [

    grroupedButtonBlockGen(`📌 Hand Notes & Questions -`,
        [
            webBtnBlockGen("Important Que.", "https://drive.google.com/file/d/16xe5aLVA1cTGM2aEJXmEbmG527Ewz7Hb/view?usp=sharing"),
            webBtnBlockGen("Short Note", "https://drive.google.com/file/d/1ssWOEjOj1qJrfRO_sKM3uqit1zIbBOKT/view?usp=sharing"),
            webBtnBlockGen("Full Note", "https://drive.google.com/file/d/19JIpGWPQVP9SWFHfZdisdvNgaSlwxaW5/view?usp=drivesdk")
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