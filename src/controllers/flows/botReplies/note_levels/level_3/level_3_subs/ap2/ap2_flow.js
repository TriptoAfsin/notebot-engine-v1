let grroupedButtonBlockGen = require("simple-messenger-blocks/groupedBtnBlockGen");
let webBtnBlockGen = require("simple-messenger-blocks/webBtnGen");
let payloadBtnGen = require("simple-messenger-blocks/payloadBtnGen");
let cardGenerator = require("simple-messenger-blocks/cardGenerator");
let bondiFlow = require("../../../../sponsoredFlows/bondiCard");



let ap2Flow = [
    grroupedButtonBlockGen(
        "📌 Select Topics for Ap-II -",
        [
            webBtnBlockGen("Books", "https://drive.google.com/drive/u/0/folders/10IzL36zSGSr3Ehal1VJI4qehdj6wo_09")
        ]
    ),
    grroupedButtonBlockGen(
        "📌 Select Topics for Ap-II -",
        [
            webBtnBlockGen("Part-A Outline", "https://drive.google.com/file/d/11GC_11zU5gnXMsURqVJUw6Tfgejrzw57/view")
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Topics for Ap-II -",
        [
            payloadBtnGen("Folding & Packaging", "ap2_folding_flow"),
            payloadBtnGen("Stictch", "ap2_stitch_flow"),
            payloadBtnGen("Lock Stitch", "ap2_lockStitch_flow"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Topics for Ap-II -",
        [
            payloadBtnGen("Pressing & Finish..", "ap2_pressingFinish_flow"),
            payloadBtnGen("Apparel Inspec.", "ap2_Inspection_flow"),
            payloadBtnGen("Lock Stitch", "ap2_lockStitch_flow"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Topics for Ap-II -",
        [
            webBtnBlockGen("Quality Con.", "https://drive.google.com/file/d/1220TkDdXyB3RfCKYXbg76QRJChGeTcnm/view"),
            webBtnBlockGen("Alt. Met. Join", "https://drive.google.com/file/d/12ChjLgK4QNwMNpglggif-oWeLfAKqXPB/view"),
            webBtnBlockGen("Embroidery", "https://drive.google.com/file/d/12AQGkBF9Bk3jSrlj256EBJVcpEmLmt4k/view"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Topics for Ap-II -",
        [
            webBtnBlockGen("Apparel test.", "https://drive.google.com/file/d/12AcC4-1qkQdKcHMc2IB1w5AuwTQCn8fo/view"),
            webBtnBlockGen("Feed Mech.", "https://drive.google.com/file/d/1PBL-AP8Wac-wa_DkWahOqPBS8jRvz1iz/view"),
            webBtnBlockGen("Sewing M/C", "https://drive.google.com/file/d/1U-S7i53uZvgVHtl0pvRK26UfDaEnvusy/view"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Topics for Ap-II -",
        [
            webBtnBlockGen("Work Aids", "https://drive.google.com/file/d/1-UyTrxVFP4VthEA3GqvEK0sbYfKMHS12/view"),
        ]
    ),
]





module.exports = ap2Flow;
