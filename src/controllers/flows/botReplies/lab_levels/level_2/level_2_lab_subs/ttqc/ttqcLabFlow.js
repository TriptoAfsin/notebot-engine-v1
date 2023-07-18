let grroupedButtonBlockGen = require("../../../../../../genrators/grroupedButtonBlockGen");
let webBtnBlockGen = require("../../../../../../genrators/webBtnBlockGen");
let payloadBtnGen = require("../../../../../../genrators/payloadBtnGen");
let cardGenerator = require("../../../../../../genrators/cardGenerator");


let ttqc_lab_flow = [
    grroupedButtonBlockGen("⚡ All Report - ",
        [
            webBtnBlockGen("Dipa(2023)", "https://drive.google.com/file/d/12cy4xEEjPXSGmRchEpSep-CVX4qGJOud/view?usp=sharing"),
            webBtnBlockGen("Naimur(2019)", "https://drive.google.com/file/d/1wS3qCMrRrujFQiRjEKtiVDAn-YnSuIsQ/view"),
            webBtnBlockGen("Hasibul(2019)", "https://drive.google.com/file/d/1l3LJpOCMGnIvol3MQ7RxS6CHjYdTuuqD/view?usp=sharing"),
        ]
    ),
    grroupedButtonBlockGen("⚡ All Report - ",
        [
            webBtnBlockGen("Arindom(2023)", "https://drive.google.com/file/d/1CXePAAOhFR2xx8vPdGrNjN8NpBl3h31A/view?usp=sharing"),
            webBtnBlockGen("Shanto(2023)", "https://drive.google.com/file/d/1YEQvI9dyiCL0JYzMS8T3rLWYShtmz8i9/view?usp=sharing"),
        ]
    ),
    grroupedButtonBlockGen("🔰 Select Experiment for TTQC - ",
        [
            payloadBtnGen("1(Atmospheric Cond.)", "ttqc_lab_atmosphere_flow"),
            payloadBtnGen("2(Fiber Fineness)", "ttqc_lab_fiberFineness_flow"),
            payloadBtnGen("3(Effective length)", "ttqc_lab_effectiveLength_flow"),
        ]
    ),
    grroupedButtonBlockGen("🔰 Select Experiment for TTQC - ",
        [
            payloadBtnGen("Fibre Length.. Iden", "ttqc_lab_fibreLength_flow"),
            payloadBtnGen("Count of Sli..,CSP", "ttqc_lab_count_csp_flow"),
            payloadBtnGen("TPI & Count", "ttqc_lab_tpiCount_flow"),
        ]
    ),
    grroupedButtonBlockGen("🔰 Select Experiment for TTQC - ",
        [
            payloadBtnGen("CSP & TPI", "ttqc_lab_csp_tpi_flow"),
            payloadBtnGen("Thick.., Crimp,GSM", "ttqc_lab_thickCrimp_flow"),
            payloadBtnGen("Fibre Fine..Maturi", "ttqc_lab_fibreFineMaturity_flow"),
        ]
    ),
    grroupedButtonBlockGen("🔰 Select Experiment for TTQC - ",
        [
            payloadBtnGen("4(Sliver Roving)", "ttqc_lab_sliverRoving_flow"),
            payloadBtnGen("5(Bundle Strength)", "ttqc_lab_bundleStrength_flow"),
        ]
    ),
]



module.exports = ttqc_lab_flow;