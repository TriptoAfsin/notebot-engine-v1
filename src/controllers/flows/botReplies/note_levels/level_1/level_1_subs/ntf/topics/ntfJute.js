let textBlockGen = require("../../../../../../../genrators/textBlockGen");
let grroupedButtonBlockGen = require("../../../../../../../genrators/grroupedButtonBlockGen");
let webBtnBlockGen = require("../../../../../../../genrators/webBtnBlockGen");


let ntfJute = [
    textBlockGen(`🔷 Hand Note(Akib, 2019)-\n\nhttps://drive.google.com/file/d/10Mj6aGOHxmyhuhGwmzX9RZIHE2AIBpPk/view?usp=drivesdk`),
    textBlockGen(`🔷 Hand Note(Tripto,2019, partial)-\n\nhttps://drive.google.com/file/d/1IELE8_1MUI1prDi-QWaMmKUGpV1lSzfp/view?usp=sharing`),
    textBlockGen(`🔷 Hand Note(Azim, TEM-46, 2021)-\n\nhttps://drive.google.com/file/d/1AJXuB35NiBG3zETb0Gkl1Zh73je5C0F3/view?usp=sharing`),
    textBlockGen(`🔷 Hand Note(Sazzad, FE-46, 2021)-\n\nhttps://drive.google.com/file/d/1hoEPIvuL_0y6FVnMEkXBHJcJVnXiA1VO/view?usp=sharing`),
    grroupedButtonBlockGen(`🔷 Slide Bashar Sir(2018) -`,
        [
            webBtnBlockGen("1st Part", "https://drive.google.com/file/d/1fVkMLGknZ7rlWjVujhzGMcFkkFqe8GRV/view?usp=sharing"),
            webBtnBlockGen("2nd Part", "https://drive.google.com/file/d/1TCdAFngBdVW4proXy8Fo_Hfw8DyUN1Oc/view?usp=drivesdk"),
            webBtnBlockGen("3rd Part", "https://drive.google.com/file/d/1j0Fpmvpg3b9-KWn9fMvgw0CuZ5Z9WjgB/view?usp=drivesdk")
        ]
    ),
    grroupedButtonBlockGen(`🔷 Slide Bashar Sir(2018) -`,
        [
            webBtnBlockGen("4th Part", "https://drive.google.com/file/d/1rSfbukf8ntcs8C3DTt9dYzKX1vaVXZ0k/view?usp=drivesdk"),
        ]
    ),
    textBlockGen(`🔷 Toufiqa Madam Sheet-\n\nhttps://drive.google.com/file/d/1oas42zAzvCi53QmBlY5TbI33ZeBekBsp/view`),
]





module.exports = ntfJute;