let grroupedButtonBlockGen = require('simple-messenger-blocks/groupedBtnBlockGen');
let webBtnBlockGen = require('simple-messenger-blocks/webBtnGen');
let payloadBtnGen = require('simple-messenger-blocks/payloadBtnGen');


let fme_lab_flow = [
    grroupedButtonBlockGen(
        "📌 Lab Manual(2023) - ",
        [
            webBtnBlockGen("Download", "https://drive.google.com/file/d/14hx4HCuRby_LINwMk3VB2kiwniy2ImPs/view?usp=sharing")
        ]
    ),
    grroupedButtonBlockGen(
        "📌 Lab Note(2022) - ",
        [
            webBtnBlockGen("Sazzad(2022)", "https://drive.google.com/file/d/1sRovtBb0HtblVsmVadr02eh8K1w_sigi/view?usp=sharing")
        ]
    ),
    grroupedButtonBlockGen(
        "📌 All Reports -",
        [
            webBtnBlockGen("Tahin(2025)", "https://drive.google.com/drive/folders/1luUARf52IkP89s-z_wqak2-XqJwTI1NS?usp=sharing"),
            webBtnBlockGen("Naimur(2020)", "https://drive.google.com/file/d/1E_RNhj87kifJFY6JNjM8BQkgxh2fbBF4/view")
        ]
    ),
    grroupedButtonBlockGen(
        "📌 All Report",
        [
            webBtnBlockGen("Arindom,2023", "https://drive.google.com/file/d/14hcaJsEEpVJuHOYieawiV-O7uMsRlKDi/view?usp=sharing"),
            webBtnBlockGen("Samia,2023", "https://drive.google.com/file/d/12I_nHv1RIAj1N8r_JRL3nIv_tlGx1J4T/view?usp=sharing"),
            webBtnBlockGen("Nirob,BHETI", "https://drive.google.com/file/d/15whW22s-mBei5mFm4gZn5yj8OXk_rGm0/view?usp=sharing")
        ]
    ),
    grroupedButtonBlockGen(
        "📌 Lab Viva Note(Akib, 2020) -",
        [
            webBtnBlockGen("☄️Download", "https://drive.google.com/file/d/1UE87DBj9yhI6_NQDeHwdPMz4Bzw6s-tI/view")
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Experiment for FME -",
        [
            payloadBtnGen("Air Compress.", "fme_lab_airCompressor_flow"),
            payloadBtnGen("Steam Turbine", "fme_lab_steamTurbine_flow"),
            payloadBtnGen("Petrol & Disel", "fme_lab_petrolDisel_flow")
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Experiment for FME -",
        [
            payloadBtnGen("Boiler", "fme_lab_boiler_flow"),
            payloadBtnGen("Boiler Mounting", "fme_lab_boilerMOunting_flow"),
            webBtnBlockGen("Ex8: UTM", "https://drive.google.com/file/d/19q4C6I0BogOAIxPpmT5_wP05BetjPxiG/view")
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Experiment for FME -",
        [
            payloadBtnGen("Reci.. Pump", "fme_lab_reciPump_flow"),
            payloadBtnGen("Centri.. Pump", "fme_lab_centriPump_flow"),
            payloadBtnGen("Disel Engine", "fme_lab_diselEng_flow")
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Experiment for FME -",
        [
            payloadBtnGen("Reci.. Pump", "fme_lab_reciPump_flow"),
            payloadBtnGen("Centri.. Pump", "fme_lab_centriPump_flow"),
            payloadBtnGen("Disel Engine", "fme_lab_diselEng_flow")
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Experiment for FME -",
        [
            payloadBtnGen("IC Engine(new)", "fme_lab_icEngine_flow"),
        ]
    )
]



module.exports = fme_lab_flow;