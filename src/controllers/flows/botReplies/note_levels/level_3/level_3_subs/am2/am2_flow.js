let grroupedButtonBlockGen = require("simple-messenger-blocks/groupedBtnBlockGen");
let webBtnBlockGen = require("simple-messenger-blocks/webBtnGen");
let payloadBtnGen = require("simple-messenger-blocks/payloadBtnGen");


let am2Flow = [
    grroupedButtonBlockGen(
        "📌 Full Hand Notes(2022) - ",
        [
            webBtnBlockGen("A+B(Adee)", "https://drive.google.com/file/d/1V5FVYklWE1S2ka-nO-Jl-_-p1lFNCwt4/view?usp=sharing"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Topics for AM-II -",
        [
            payloadBtnGen("Books", "am2_books_flow"),
            payloadBtnGen("Class Lecture", "am2_classlec_flow"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Topics for AM-II -",
        [
            payloadBtnGen("Line Balancing", "am2_lineBalancing_flow"),
            webBtnBlockGen("Apparel Industry Inv", "https://drive.google.com/file/d/1zUJYkZ_MRqcPao_rRMG3ALNwpgqjeZ3l/view"),
            webBtnBlockGen("Apparel Washing", "https://drive.google.com/file/d/16Ry0CxGJaR1rhM8oJTPcI-AdIYHPZKII/view"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Topics for AM-II -",
        [
            webBtnBlockGen("Cost & Apparel pro.", "https://drive.google.com/file/d/1XVAobJWj8DdsDTaOjE7QW7bep9xw5KkR/view"),
            webBtnBlockGen("Cutting Room Manag.", "https://drive.google.com/file/d/1lGfaKEsSbbfyKDJEoabEWFbih2Bta5eQ/view"),
            webBtnBlockGen("Dry Process", "https://drive.google.com/file/d/1TF1n9KW7eRQLOV_1CV88ZbW4ufHTxYtR/view"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Topics for AM-II -",
        [
            webBtnBlockGen("Garment Dyeing", "https://drive.google.com/file/d/1nxLSgBJn3UV1IX5RjBZMhtNoWiPXXAO1/view"),
            webBtnBlockGen("Special Apparel", "https://drive.google.com/file/d/1e6NPxbkMROD8qB6IQihIyZyGEksutP8N/view"),
            webBtnBlockGen("Washing", "https://drive.google.com/file/d/1ZX-QpPJL5XKA-c5Z8O7msx-hCymvX7-q/view"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Topics for AM-II -",
        [
            payloadBtnGen("Costing Excel Sheets", "am2_costingExcel_flow"),
        ]
    ),
]





module.exports = am2Flow;