let grroupedButtonBlockGen = require("simple-messenger-blocks/groupedBtnBlockGen");
let webBtnBlockGen = require("simple-messenger-blocks/webBtnGen");
let payloadBtnGen = require("simple-messenger-blocks/payloadBtnGen");
let imgBLockGen = require("simple-messenger-blocks/imgBlockGen");

let lss_lab_flow = [
    imgBLockGen("https://manybot-thumbnails.s3.eu-central-1.amazonaws.com/fb243958719599028/ca/big_76abac7d9ee9cfa84b7af60d00bbcd2f.jpeg"),
    grroupedButtonBlockGen(
        "📌 All Lab Reports -",
        [
            webBtnBlockGen("2022", "https://drive.google.com/file/d/16ac7m-8zzx_e4eFRhpXc3G8mDmIsVEjZ/view?usp=sharing"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Experiment for LSS -",
        [
            webBtnBlockGen("1", "https://drive.google.com/file/d/10hGcpnGjUnvBnFO7YVclNgzcRSGYvH4U/view"),
            webBtnBlockGen("2", "https://drive.google.com/file/d/10Bt6Vzlo9J9LBa_loLA3oFB5c_RgeELz/view"),
            webBtnBlockGen("3", "https://drive.google.com/file/d/10noow13sbr03Gfy6Atx2iQfBgSEk9dKD/view"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Experiment for LSS -",
        [
            webBtnBlockGen("4", "https://drive.google.com/file/d/10v9yef34Ifd-J_x-T4OkLl5AEpCVu5Xs/view"),
            webBtnBlockGen("5", "https://drive.google.com/file/d/11qjKQSxBdHq7UEPgcxIzaJRXAWs_y9Ru/view"),
            webBtnBlockGen("6", "https://drive.google.com/file/d/11ykW5X-tlv6hsxpAWLGcANC_AIGUvZKn/view"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Experiment for LSS -",
        [
            webBtnBlockGen("7", "https://drive.google.com/file/d/12HJsOjtSgWWhgrj3SvxXGuKOvWAMxTNP/view"),
            webBtnBlockGen("8", "https://drive.google.com/file/d/1EU1_2EFb8pjpTZP3Xjj-x0DmY3RpXGyA/view"),
            webBtnBlockGen("9", "https://drive.google.com/file/d/12XvWxiNwmDfRA8k0E5hJRLYoN0YJfR54/view"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Experiment for LSS -",
        [
            webBtnBlockGen("10", "https://drive.google.com/file/d/12bOXOIbttmqOMS302OaifeeIdIq8SBnh/view"),
            webBtnBlockGen("11", "https://drive.google.com/file/d/12saxh6UnVSx39OucdHrcWqc8HNJDL-aC/view"),
            webBtnBlockGen("12", "https://drive.google.com/file/d/13YXxLg_V0WICYiv8Fm1Bbu3bgLE9nbKT/view"),
        ]
    ),
]



module.exports = lss_lab_flow;