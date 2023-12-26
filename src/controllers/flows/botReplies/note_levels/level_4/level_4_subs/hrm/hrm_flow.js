let grroupedButtonBlockGen = require("simple-messenger-blocks/groupedBtnBlockGen");
let webBtnBlockGen = require("simple-messenger-blocks/webBtnGen");
let payloadBtnGen = require("simple-messenger-blocks/payloadBtnGen");


let hrmFlow = [
    grroupedButtonBlockGen("📌 Choose Topic For HRM - ", [
        webBtnBlockGen("QB Solve", "https://drive.google.com/drive/folders/1bJ3lSvmSuee8tdeZuyLGmJA8KNI1FdrK?usp=sharing"),
    ]),
    grroupedButtonBlockGen("📌 Full Hand Notes - ", [
        webBtnBlockGen("Part - A(Razon)", "https://drive.google.com/file/d/1qdZywQxTKlyM6UDEqb2iwFuVsaMwhUHc/view?usp=sharing"),
        webBtnBlockGen("Part - B(Razon)", "https://drive.google.com/file/d/1M4RJ95kjn0nBJI3_dxxuC7LwH6fmaydo/view?usp=sharing"),
    ]),
    grroupedButtonBlockGen("🔰 Choose Topic For HRM - ", [
        webBtnBlockGen("Intro to HRM", "https://drive.google.com/file/d/1NXI5NbOavqzFQ03p2qWAszR_OssdoAsT/view"),
        webBtnBlockGen("Job Analysis & Job.", "https://drive.google.com/file/d/1q8o2a7u1ADdRzKykL04s8k6T8G0JWi29/view"),
        webBtnBlockGen("Recruit & Selection", "https://drive.google.com/file/d/1fnwVNwmaIBdzY3MF62PqYqmCUVZ852Ml/view"),
    ]),
    grroupedButtonBlockGen("🔰 Choose Topic For HRM - ", [
        webBtnBlockGen("Training & Develop..", "https://drive.google.com/file/d/1zXzCfcjkgpxAExCDcuq1FA6kA-I419Lf/view"),
        webBtnBlockGen("Socia.. and Dev Empl", "https://drive.google.com/file/d/1-egGYTCvDkC-qZFpWIAGFYpz8x8vT8Do/view"),
        webBtnBlockGen("Career Development", "https://drive.google.com/file/d/1ncheRdzG6g_HccONhVoMr4kVYqJz4v9i/view"),
    ]),
    grroupedButtonBlockGen("🔰 Choose Topic For HRM - ", [
        webBtnBlockGen("Compensation", "https://drive.google.com/file/d/1rt6KHZryHa76OTZKP0cNK-rohZGtOQd_/view"),
        webBtnBlockGen("Perf Management Sys", "https://drive.google.com/file/d/1tMwqjXc6sIgGR3t2-OghiPWh03HLcq57/view"),
        webBtnBlockGen("Motivation", "https://drive.google.com/file/d/1tMwqjXc6sIgGR3t2-OghiPWh03HLcq57/view"),
    ]),
   
]





module.exports = hrmFlow;