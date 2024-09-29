let grroupedButtonBlockGen = require('simple-messenger-blocks/groupedBtnBlockGen');
let webBtnBlockGen = require('simple-messenger-blocks/webBtnGen');
let payloadBtnGen = require('simple-messenger-blocks/payloadBtnGen');


let am2_lab_flow = [
    {
        "attachment":{
            "type":"image", 
            "payload":{
              "is_reusable": false,
              "url":"https://manybot-thumbnails.s3.eu-central-1.amazonaws.com/fb243958719599028/ca/big_e1ae0572a5b4021e16f05d74c71b424e.png"
            }
          }
    },
    grroupedButtonBlockGen("📌 All Reports - ", [
        webBtnBlockGen('Bappi', 'https://drive.google.com/file/d/1u2YX4OyycdHalBxQ0LLYSz42T0-naoJf/view'),
        webBtnBlockGen('Wasima', 'https://drive.google.com/file/d/1xMtBHwCmWrAY_KJsCp9VR5JldYIYxvXv/view?usp=sharing'),
        webBtnBlockGen('Samia', 'https://drive.google.com/file/d/12-k3-UwlJaQ2ceO2yiIocCJK429NSS0Z/view?usp=sharing')
    ]),
    grroupedButtonBlockGen("⚡ Select Experiment for AM-II - ", 
        [
            webBtnBlockGen("Study on Sewing .", "https://drive.google.com/file/d/1UfTFXJHTskieR0gqglieUV9Wh_yqi9RI/view"),
            webBtnBlockGen("Feed of the arm", "https://drive.google.com/file/d/1qFG2Xc_OiiDrX6-kcIdNpvOs_O2ipIpa/view"),
        ]
    ),
    grroupedButtonBlockGen("⚡ Select Experiment for AM-II - ", 
        [
            webBtnBlockGen("1", "https://drive.google.com/file/d/10bSv-Ry1gjX-yBrJXpVjjLlp8qAGMnI9/view"),
            webBtnBlockGen("2", "https://drive.google.com/file/d/10eQZVLiUKeGv3XwU2enK_vNehqon_CqY/view"),
            webBtnBlockGen("3", "https://drive.google.com/file/d/12CD9UanN_DbpVA0C975iqj_ij8jfQ8_H/view"),
            
        ]
    ),
    grroupedButtonBlockGen("⚡ Select Experiment for AM-II - ", 
        [
            webBtnBlockGen("4", "https://drive.google.com/file/d/1EqBM4Un8ZaPqSU30ty82wseAw6fxZ1Gl/view"),
            webBtnBlockGen("5", "https://drive.google.com/file/d/1FGiDdUeYspw-XN9O7LELGThDNo1YnCQ2/view"),
            webBtnBlockGen("6", "https://drive.google.com/file/d/1FPkkx1bmbSE1jC9OpuAlm8zo1wSynOro/view"),
            
        ]
    ),
    grroupedButtonBlockGen("⚡ Select Experiment for AM-II - ", 
        [
            webBtnBlockGen("7", "https://drive.google.com/file/d/1J0Xcks5U09BvN5U3NFQOsMvpU4d93E2j/view"),
            webBtnBlockGen("8", "https://drive.google.com/file/d/13T733NMSiXH6w0Cda6TOmcePTRrPrffI/view"),
            webBtnBlockGen("9", "https://drive.google.com/file/d/13IjVmshY842DmTdQujjVowTGGybgsm12/view"),
        ]
    ),
]



module.exports = am2_lab_flow;