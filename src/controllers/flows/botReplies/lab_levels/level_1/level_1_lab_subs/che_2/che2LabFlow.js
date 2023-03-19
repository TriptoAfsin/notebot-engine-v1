let grroupedButtonBlockGen = require("simple-messenger-blocks/groupedBtnBlockGen");
let webBtnBlockGen = require("simple-messenger-blocks/webBtnGen");
let payloadBtnGen = require("simple-messenger-blocks/payloadBtnGen");
let cardGenerator = require("simple-messenger-blocks/cardGenerator");

let che2_lab_flow = [
    grroupedButtonBlockGen("⚡ Procedure Sheet -",
    [
        webBtnBlockGen("4-7", "https://drive.google.com/file/d/1vc36SxJl7wF7urvEKgDfAUxvWRRRdwK6/view"),
        webBtnBlockGen("Water Hardness", "https://drive.google.com/file/d/1kDoK2ePtQ83cvOvxvpxt18DAxw3glAWO/view"),
        webBtnBlockGen("All Sheet", "https://drive.google.com/file/d/1-85nyDhEAJ4xiBWjFiboXeBLLDb4ueZk/view"),
    ]),
    grroupedButtonBlockGen("📌 All Combined -",
    [
        webBtnBlockGen("Jabbar(IPE-47,2023)", "https://drive.google.com/file/d/1yVJK6W4DzF696FNaw5J4enqKnBaSPk5d/view?usp=sharing"),
    ]),
    grroupedButtonBlockGen("🔰 Select Experiment for Che-II -",
    [
        payloadBtnGen("Physical Pro.. Orga.", "che2_lab_physicalProp_flow"),
        payloadBtnGen("Lassaignes Test_1", "che2_lab_lassaignesTest_flow"),
        payloadBtnGen("Solubility Test", "che2_lab_solubilityTest_flow"),
    ]),
    grroupedButtonBlockGen("🔰 Select Experiment for Che-II -",
    [
        payloadBtnGen("Alcohol Identify", "che2_lab_alcoholIdentify_flow"),
        payloadBtnGen("Lassaignes Test_2", "che2_lab_lassaignesTest2_flow"),
        payloadBtnGen("Strength of H2O2", "che2_lab_h2o2_flow"),
    ]),
    grroupedButtonBlockGen("🔰 Select Experiment for Che-II -",
    [
        payloadBtnGen("Amount of Fe(II)", "che2_lab_amountofFe2_flow"),
        payloadBtnGen("Carbonyl Identify", "che2_lab_carbonylIdentify_flow"),
        payloadBtnGen("-N Identify", "che2_lab_Nidentity_flow"),
    ]),
    grroupedButtonBlockGen("🔰 Select Experiment for Che-II -",
    [
        payloadBtnGen("Amount of Na2CO3", "che2_lab_amountna2co3_flow"),
        payloadBtnGen("Carboxylic Identify", "che2_lab_carboxylicIdentity_flow"),
    ]),
]



module.exports = che2_lab_flow;