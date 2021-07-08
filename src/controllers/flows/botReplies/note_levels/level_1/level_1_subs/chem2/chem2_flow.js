let grroupedButtonBlockGen = require("../../../../../../genrators/grroupedButtonBlockGen");
let webBtnBlockGen = require("../../../../../../genrators/webBtnBlockGen");
let payloadBtnGen = require("../../../../../../genrators/payloadBtnGen");
let cardGenerator = require("../../../../../../genrators/cardGenerator");
let bondiFlow = require("../../../../sponsoredFlows/bondiCard");


let chem2_flow = [
    bondiFlow,
    grroupedButtonBlockGen("📌 Hand Notes -",
        [
            webBtnBlockGen("Hand Note(Maruf)", "https://drive.google.com/file/d/12LLcW92t1BTLFENL9DQH9xkJOvn0VIVe/view?usp=sharing"),
            webBtnBlockGen("Hand Note(Hasibul)", "https://drive.google.com/file/d/19XzX0HOyJjE7pHBxaO8LIEqt2apDB_Xg/view?usp=sharing"),
            webBtnBlockGen("Important Rea.", "https://drive.google.com/file/d/1CzG8tPqz50-Byx72oGolh0u72Hx--rZM/view?usp=sharing"),

        ]
    ),
    grroupedButtonBlockGen("📌 Hand Notes -",
        [
            webBtnBlockGen("Rushad(2021)", "https://drive.google.com/file/d/1VzbsuNV1WRoPdfGAJ7DO-sWZQGELvNx_/view?usp=sharing"),
        ]
    ),
    grroupedButtonBlockGen("📌 QB Solve - ",
        [
            webBtnBlockGen("By AE-45", "https://drive.google.com/file/d/1kV5Jfj-JFY_9GjTO7uu4L6_vcZn3EOUK/view?usp=sharing"),
        ]
    ),
    grroupedButtonBlockGen("🔰 Select Topic for CHE-II - ",
        [
            payloadBtnGen("Books", "chem2_books_flow"),
            payloadBtnGen("Questions", "chem2_ques_flow"),
            payloadBtnGen("Organ Metalic Com.", "chem2_org_meta_flow"),

        ]
    ),
    grroupedButtonBlockGen("🔰 Select Topic for CHE-II - ",
        [
            payloadBtnGen("Carbonyl Comp.", "chem2_carbonyl_flow"),
            payloadBtnGen("Organic Reaction Me", "chem2_org_reac_flow"),
            payloadBtnGen("Alcohol & Phenol", "chem2_alc_phe_flow"),

        ]
    ),
    grroupedButtonBlockGen("🔰 Select Topic for CHE-II - ",
        [
            payloadBtnGen("Amino Acid", "chem2_amino_flow"),
            payloadBtnGen("Carbohydrates", "chem2_carbo_flow"),
            payloadBtnGen("Color, Dye, Pigment", "chem2_color_dye_flow"),

        ]
    ),
    grroupedButtonBlockGen("🔰 Select Topic for CHE-II - ",
        [
            payloadBtnGen("Carboxylic Acid", "chem2_carboxylic_flow"),
            payloadBtnGen("Amine", "chem2_amine_flow"),
            payloadBtnGen("Solubulity Boiling", "chem2_solubulity_flow"),

        ]
    ),
    grroupedButtonBlockGen("📌 Sheets Folder - ",
        [
            webBtnBlockGen("Samiul Sir(2021)", "https://drive.google.com/drive/folders/1bD3cZb_HzjhIiX1sPJhcBwfM6SgBCFZY?usp=sharing"),
        ]
    ),
]





module.exports = chem2_flow;