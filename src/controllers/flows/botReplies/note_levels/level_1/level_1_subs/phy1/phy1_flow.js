let grroupedButtonBlockGen = require("simple-messenger-blocks/groupedBtnBlockGen");
let webBtnBlockGen = require("simple-messenger-blocks/webBtnGen");
let payloadBtnGen = require("simple-messenger-blocks/payloadBtnGen");
let cardGenerator = require("simple-messenger-blocks/cardGenerator");
let bondiFlow = require("../../../../sponsoredFlows/bondiCard");

let phy1_flow = [
    bondiFlow,
    grroupedButtonBlockGen(`📌 New Sheets(2021)- `,
        [
            webBtnBlockGen("Harun Sir", "https://drive.google.com/drive/folders/10cPcvKA1_zhQN6brXWlcIPxUZzrfH7f7?usp=sharing"),
            webBtnBlockGen("Tanusree Mam", "https://drive.google.com/drive/folders/1ubaw6g2MNG_0D2EjFdFLzeonymPlwuqv?usp=sharing"),
        ]
    ),
    grroupedButtonBlockGen(`📌 Combined Note- `,
        [
            webBtnBlockGen("PHY-I(Badhon, 2023)", "https://drive.google.com/file/d/1Fnpsemrn472S_5t_C-yvhI5KU-H-WCHW/view?usp=sharing"),
            webBtnBlockGen("PHY-I(Maruf,2018)", "https://drive.google.com/file/d/18pOu9YN1fE6czSgwbWyX4rFhvxp0df4Y/view?usp=sharing"),
            webBtnBlockGen("PHY-I(Siam, 2019)", "https://drive.google.com/file/d/1wQarO19IlJaUtc4-86xtQJSmm0ajX4OM/view?usp=sharing"),
        ]
    ),
    grroupedButtonBlockGen(`📌 Sheets- `,
        [
            webBtnBlockGen("Hedayet Sir(2023)", "https://drive.google.com/drive/folders/1Ky7bRi0c-78B1FC7zd1frqaTyB4lyneo?usp=sharing"),
        ]
    ),
    grroupedButtonBlockGen(`📌 Full Book Scanned - `,
        [
            webBtnBlockGen("Phy for Eng.", "https://drive.google.com/drive/folders/1UzVAc4GvGySwpX8tboMhXiRAulTYW2c1?usp=sharing"),
        ]
    ),
    grroupedButtonBlockGen(`🔰 Select Topic for PHY-I - `,
        [
            payloadBtnGen("Books", "phy1_books_flow"),
            payloadBtnGen("Questions", "phy1_ques_flow"),
            payloadBtnGen("Circular Motion", "phy1_circular_flow"),
        ]
    ),
    grroupedButtonBlockGen(`🔰 Select Topic for PHY-I - `,
        [
            payloadBtnGen("HydroDyna/Fluid", "phy1_hydro_flow"),
            payloadBtnGen("Diffraction", "phy1_diffraction_flow"),
            payloadBtnGen("Interference", "phy1_interfer_flow"),
        ]
    ),
    grroupedButtonBlockGen(`🔰 Select Topic for PHY-I - `,
        [
            payloadBtnGen("Polarization", "phy1_polar_flow"),
            payloadBtnGen("Elasticity", "phy1_elas_flow"),
            payloadBtnGen("Viscosity", "phy1_visco_flow"),
        ]
    ),
    grroupedButtonBlockGen(`🔰 Select Topic for PHY-I - `,
        [
            payloadBtnGen("Surface Tension", "phy1_surface_flow"),
            webBtnBlockGen("Fluid Mech..", "https://drive.google.com/file/d/1PfyCtmc1xX9g8pbxZp4eC9hyYAlWf0xa/view?usp=sharing"),
        ]
    ),
]





module.exports = phy1_flow;