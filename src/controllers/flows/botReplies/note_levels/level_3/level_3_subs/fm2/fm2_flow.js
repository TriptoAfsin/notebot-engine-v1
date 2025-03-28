let grroupedButtonBlockGen = require('simple-messenger-blocks/groupedBtnBlockGen');
let webBtnBlockGen = require('simple-messenger-blocks/webBtnGen');
let payloadBtnGen = require('simple-messenger-blocks/payloadBtnGen');


let fm2Flow = [
    grroupedButtonBlockGen(
        "⭐ Video Lessons - ",
        [
            webBtnBlockGen("Youtube Playlist", "https://www.youtube.com/playlist?list=PLpFoI_N-jBPEq8pI7aSDL5Ql0Q1WdSj9q"),
        ]
    ),
    grroupedButtonBlockGen(
        "📌 Full Hand Notes - ",
        [
            webBtnBlockGen("Part-A(Arindom,2025)", "https://drive.google.com/file/d/1lmfZhjBWC06TDPC_VHU9deDjtKujBZvo/view?usp=sharing"),
            webBtnBlockGen("Part-B(Arindom,2025)", "https://drive.google.com/file/d/16XXDO-BxZfGXCv4W3sX9yP3M5Xw-bqLJ/view?usp=sharing"),
        ]
    ),
    grroupedButtonBlockGen(
        "📌 Select Topics for FM-II -",
        [
            webBtnBlockGen("CT(June,2022)", "https://drive.google.com/file/d/1ljvCzAUku4g9D5eaOgzLSbqn32ej7u_N/view?usp=sharing"),
            webBtnBlockGen("Warp Knit(CT)", "https://drive.google.com/file/d/1T-U2ByCeJ0yGHJr9ShwfwTkYwk8qqEhO/view?usp=sharing"),
        ]
    ),
    grroupedButtonBlockGen(
        "📌 Full Hand Notes - ",
        [
            webBtnBlockGen("A+B(Adee)", "https://drive.google.com/file/d/13V_mnmNw8lTr3LMcmO4_H8ahuK9gQayF/view?usp=sharing"),
            webBtnBlockGen("Part-A(Nahid)", "https://drive.google.com/file/d/1zsT2QiJmwI4VICYTjZwFazbDqkVRIMXp/view?usp=sharing"),
            webBtnBlockGen("Part-B(Nahid)", "https://drive.google.com/file/d/1I1zwNQhzbbOA2YrPLCIdgcPwg9EXRukp/view?usp=sharing"),
        ]
    ),
    grroupedButtonBlockGen(
        "📌 Full Hand Notes - ",
        [
            webBtnBlockGen("Part-A(Razon)", "https://drive.google.com/file/d/1Q0x5t4ZiaHG_Xnk-bWrOIe7Icucdm7M9/view?usp=sharing"),
            webBtnBlockGen("Part-B(2023)", "https://drive.google.com/file/d/1o5X037zHh4vWEu36iHexVRg4GPVEPONK/view?usp=sharing"),
            webBtnBlockGen("Weft Knit(2024)", "https://drive.google.com/file/d/13uaY0cxPEToysTa7DEivdwQUPxRZcbFR/view?usp=sharing"),
        ]
    ),
    grroupedButtonBlockGen(
        "📌 Question Analysis(2023) - ",
        [
            webBtnBlockGen("Arjan+Riaz", "https://drive.google.com/file/d/1vVG-cgpxfoFwRKAxpaqZ-hipFL8HTtkr/view?usp=sharing"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Topics for FM-II -",
        [
            payloadBtnGen("Books", "fm2_books_flow"),
            payloadBtnGen("Class Lecture", "fm2_classlec_flow"),
            payloadBtnGen("Hand Note", "fm2_note_flow"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Topics for FM-II -",
        [
            webBtnBlockGen("Intro", "https://drive.google.com/drive/folders/17qy7I5T9gCrnJqnnSPRxVAC9EQ885qR7?usp=sharing"),
            webBtnBlockGen("Basic Elements", "https://drive.google.com/file/d/1xhP6UI1CAEGXWmfedr9GO6TISMoJCjOi/view?usp=sharing"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Topics for FM-II -",
        [
            payloadBtnGen("Basic Warp Knitting", "fm2_basicWarp_flow"),
            webBtnBlockGen("Non Woven", "https://drive.google.com/drive/folders/1H5ugBuvJQVILoZuINFiz9PVQ-fm27x7O?usp=sharing"),
            webBtnBlockGen("Rib, interlock,sync", "https://drive.google.com/file/d/1-mZz3Ogrh3Xinizyt3IziWp109CbbgnF/view"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Topics for FM-II -",
        [
            webBtnBlockGen("Warp Knitting", "https://drive.google.com/file/d/1ThqGYq_dW03ZlpJ0vrJV0PPLVOdhx2hj/view"),
            payloadBtnGen("Misc", "fm2_misc_flow")
        ]
    ),
]





module.exports = fm2Flow;