let grroupedButtonBlockGen = require("../../../../genrators/grroupedButtonBlockGen");
let webBtnBlockGen = require("../../../../genrators/webBtnBlockGen");
let payloadBtnGen = require("../../../../genrators/payloadBtnGen");


let level_4_note = [
    grroupedButtonBlockGen(
        `🟣 Comprehensive Viva, Project Work/Thesis Resources -`,
        [
            webBtnBlockGen("Comprehensive Viva", "https://drive.google.com/drive/folders/1X3OIcJLAAc9maPhR0oUCK4smh-vA_mjG?usp=sharing"),
            webBtnBlockGen("Project Work", "https://drive.google.com/drive/folders/1O3LQxlMBWrWTblO0LcsnnishsliMsu8h?usp=sharing"),
            webBtnBlockGen("Industrial Attachments", "https://drive.google.com/drive/folders/1txN44rDdppKq77b2qi51-EqSf3DW5zwg?usp=sharing"),
        ]
    ),
    grroupedButtonBlockGen(
        `🟣 Comprehensive Viva, Project Work/Thesis Resources -`,
        [
            webBtnBlockGen("Emdad Sir(2025)", "https://drive.google.com/file/d/1CrIBYkTKJMwL45g7gZ8xk4qziB975TRu/view?usp=sharing"),
        ]
    ), 
    grroupedButtonBlockGen(
        `🔴 Question Banks -`,
        [
            webBtnBlockGen("All QB", "https://drive.google.com/drive/folders/17QQ6mXUYe3FL7sf4VMzdBBkRbJAId0VT?usp=sharing"),
            webBtnBlockGen("IPE Ques(42)", "https://drive.google.com/file/d/17og6Ea9pYJnrEVO3_fKRLEfQMtbxhcza/view?usp=sharing"),
            webBtnBlockGen("IPE - 4-1 Ques(2022)", "https://drive.google.com/file/d/1h0QFixuMTYPzSVZjtckhYFGqX4QTnj8-/view?usp=sharing")
        ]
    ),
    grroupedButtonBlockGen(
        `🔰 Department wise Notes -`,
        [
            webBtnBlockGen("IPE(4-1)", "https://drive.google.com/drive/folders/1oH_OZZPFNhDJx6azfiHFOxpQ5iRmXVbp?usp=sharing"),
        ]
    ), 
    grroupedButtonBlockGen(
        `🔰 Select Subject for level 4 -`,
        [
            payloadBtnGen("EPD", "epd_flow"),
            payloadBtnGen("IR", "ir_flow"),
            payloadBtnGen("TAM", "tam_flow")
        ]
    ), 
    grroupedButtonBlockGen(
        `🔰 Select Subject for level 4 -`,
        [
            webBtnBlockGen("Sociology", "https://drive.google.com/drive/folders/1dp46oYLKPp2Iruv0mM01uTCB-x0Hvn3r?usp=sharing"),
            webBtnBlockGen("IEAP", "https://drive.google.com/drive/folders/1YqLpLaP9KUMcnBsecumdwQ6hzOYLNsIQ?usp=sharing"),
        ]
    ), 
    grroupedButtonBlockGen(
        `🔰 Select Subject for level 4 -`,
        [
            payloadBtnGen("PPC", "ppc_flow"),
            payloadBtnGen("HRM", "hrm_flow"),
            payloadBtnGen("BS", "bs_flow")
        ]
    ), 
    grroupedButtonBlockGen(
        `🔰 Select Subject for level 4 -`,
        [
            webBtnBlockGen("MRPD", "https://drive.google.com/drive/folders/1EC_kgYVyMgWezfg_8K1vGfYdY9M9GfNW?usp=sharing"),
            webBtnBlockGen("Project Dev.", "https://drive.google.com/drive/folders/1tEOihIpW3BqD1V3svkZwQ8x0zcnR6AFJ?usp=sharing"),
            webBtnBlockGen("Entrepreneurship", "https://drive.google.com/drive/folders/12mCadz9PEMlcjP5jMhXfcQTycv39vlWQ?usp=sharing")
        ]
    ), 
    grroupedButtonBlockGen(
        `🔰 Select Subject for level 4 -`,
        [
            webBtnBlockGen("TAM", "https://drive.google.com/drive/folders/1ePn1Q8xzepigVE1iujjMZ6H91_qCc3VH?usp=sharing"),
            webBtnBlockGen("FTQC", "https://drive.google.com/drive/folders/1r0fyyCs71xrAgvhqYZ4N4Tt8_rCkxP5E?usp=sharing"),
            webBtnBlockGen("TFT", "https://drive.google.com/drive/folders/1Th9_Pv1rfwtlC-o-uYFYxHGvsL-V93r1?usp=sharing"),
        ]
    ), 
    grroupedButtonBlockGen(
        `🔰 Select Subject for level 4 -`,
        [
            payloadBtnGen("B&IL", "bil_flow"),
            webBtnBlockGen("IE(Old Syl.)", "https://drive.google.com/drive/folders/1qrbsRc4WWRKjCO3bqQDp0JK5S6Tvl6b6?usp=sharing"),
            webBtnBlockGen("SDC-II", "https://drive.google.com/drive/folders/1HgZ8tqEPGiLInSRenFox7x8F2-hNWrX5?usp=sharing"),
        ]
    ),
    grroupedButtonBlockGen(
        `🔰 Select Subject for level 4 -`,
        [
            webBtnBlockGen("BE", "https://drive.google.com/drive/folders/15t7jFvyddy2D6qH2R3gbMyWxuAkUBior?usp=sharing"),
            webBtnBlockGen("Managerial Economics", "https://drive.google.com/drive/folders/1mRlKZyUP65B7iRwTMfhqdcXoIVRjFHex?usp=sharing"),
            webBtnBlockGen("IA", "https://drive.google.com/drive/folders/1cgWwjWY8zeTmcSfElW96pAuqKRT7UPhj?usp=sharing"),
        ]
    ),
    grroupedButtonBlockGen(
        `🔰 Select Subject for level 4 -`,
        [
            webBtnBlockGen("WPE 405: Technical & Functional Textiles", "https://drive.google.com/drive/folders/1B8TcqI3FTWFzd3VTKDJrAnKelHu5CinS?usp=sharing"),
        ]
    ),
]





module.exports = level_4_note;