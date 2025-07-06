let grroupedButtonBlockGen = require('simple-messenger-blocks/groupedBtnBlockGen');
let webBtnBlockGen = require('simple-messenger-blocks/webBtnGen');

let am2_lab_flow = [
    grroupedButtonBlockGen("⚡ Viva Note - ",
        [
            webBtnBlockGen("Sazzad(2024)", "https://drive.google.com/file/d/1pjWiI--bSAnv2fYXbgtVbl34Bl_sGZTb/view?usp=sharing"),
            webBtnBlockGen("Estiak(2025)", "https://drive.google.com/file/d/1O4DBPD4TV6Z5lUH3DMNdd07CUhE58ACT/view?usp=sharing"),
        ]
    ),
    grroupedButtonBlockGen("📌 All Reports - ", [
        webBtnBlockGen('Bappi', 'https://drive.google.com/file/d/1u2YX4OyycdHalBxQ0LLYSz42T0-naoJf/view'),
        webBtnBlockGen('Wasima', 'https://drive.google.com/file/d/1xMtBHwCmWrAY_KJsCp9VR5JldYIYxvXv/view?usp=sharing')
    ]),
]



module.exports = am2_lab_flow;