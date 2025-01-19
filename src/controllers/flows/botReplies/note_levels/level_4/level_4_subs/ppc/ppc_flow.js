const grroupedButtonBlockGen = require("simple-messenger-blocks/groupedBtnBlockGen");
const webBtnBlockGen = require("simple-messenger-blocks/webBtnGen");

const ppcFlow = [
    grroupedButtonBlockGen(
        "🔰 YouTube Playlist ",
        [
            webBtnBlockGen("Rafi(2025)", "https://www.youtube.com/playlist?list=PLpFoI_N-jBPHj4ptY35QehI-1TdzOX-eD"),
            webBtnBlockGen("Maths", "https://www.youtube.com/playlist?list=PLpFoI_N-jBPHj4ptY35QehI-1TdzOX-eD"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Choose Topic - ",
        [
            webBtnBlockGen("Capacity Palnning", "https://drive.google.com/file/d/1ifGgEPw3m97_e23dUC-wl2XW-vdI4xfW/view"),
            webBtnBlockGen("Production System", "https://drive.google.com/file/d/1Cbrgx_n00NGDq9_jWdCn6liuoAnmkQJY/view"),
            webBtnBlockGen("Production Planning", "https://drive.google.com/file/d/1Yky-5C2ZiAUkF2ubkvmfJE0uD2Q1QR_O/view"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Choose Topic - ",
        [
            webBtnBlockGen("Forecasting", "https://drive.google.com/file/d/1uXzSiGJelufv3999U_08KiwrOmUPVUVz/view"),
            webBtnBlockGen("Productivity", "https://drive.google.com/file/d/1L1BaTeNJd_O7p267fWtwmsaFEoHI8dQH/view"),
            webBtnBlockGen("Reazaul Sir Sheets", "https://drive.google.com/drive/folders/1eFN2SRB7OnNmsLVATGaHrSVWiDFBqTQ3"),
        ]
    ),
]





module.exports = ppcFlow;