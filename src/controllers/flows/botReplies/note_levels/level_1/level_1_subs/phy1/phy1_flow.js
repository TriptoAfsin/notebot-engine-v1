let grroupedButtonBlockGen = require("../../../../../../genrators/grroupedButtonBlockGen");
let webBtnBlockGen = require("../../../../../../genrators/webBtnBlockGen");
let payloadBtnGen = require("../../../../../../genrators/payloadBtnGen");
let bondiFlow = require("../../../../sponsoredFlows/bondiCard");

let phy1_flow = [
    bondiFlow,
    grroupedButtonBlockGen(`📌Combined Note- `,
        [
            webBtnBlockGen("PHY-I(Maruf,2018)", "https://drive.google.com/file/d/18pOu9YN1fE6czSgwbWyX4rFhvxp0df4Y/view?usp=sharing"),
            webBtnBlockGen("PHY-I(Siam, 2019)", "https://drive.google.com/file/d/1wQarO19IlJaUtc4-86xtQJSmm0ajX4OM/view?usp=sharing"),
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
        ]
    ),
]





module.exports = phy1_flow;