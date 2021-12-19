let grroupedButtonBlockGen = require("simple-messenger-blocks/groupedBtnBlockGen");
let webBtnBlockGen = require("simple-messenger-blocks/webBtnGen");
let payloadBtnGen = require("simple-messenger-blocks/payloadBtnGen");

let fsd_lab_flow = [
    grroupedButtonBlockGen("🔰 Select Experiment for FSD -", 
        [
            webBtnBlockGen("Plain Weave","https://drive.google.com/file/d/14h9Na_yupg_Qv_MSCLRwBQ2zKtTKt1K-/view?usp=sharing"),
            webBtnBlockGen("Warp Rib","https://drive.google.com/file/d/1mUoIBDKuopeET6svweVQc77IFrxjAEo1/view?usp=sharing"),
            webBtnBlockGen("S Twill","https://drive.google.com/file/d/11gu3RxvBMA2HSoMGgottB64pJgBDyVOG/view?usp=sharing"),
        ]
    ),
    grroupedButtonBlockGen("🔰 Select Experiment for FSD -", 
        [
            webBtnBlockGen("Warp Satin","https://drive.google.com/file/d/1EcGyl6et3-v8D72EFG0YC3Zyw9gyYNM1/view?usp=sharing"),
            webBtnBlockGen("H. Zig Zag","https://drive.google.com/file/d/1RW2Meg813jN2vLfH_Kf9Av-qFMoHtRqT/view?usp=sharing"),
            webBtnBlockGen("Diamond","https://drive.google.com/file/d/14IkDrH-EpJ-SeUj5hJmSqbG-MfJ3O7ng/view?usp=sharing"),
        ]
    ),
    grroupedButtonBlockGen("🔰 Select Experiment for FSD -", 
        [
            webBtnBlockGen("Mock Leno","https://drive.google.com/file/d/1-xHy6_FSptWGk4QsOhAx5AqeB-7j9Lh5/view?usp=sharing"),
            webBtnBlockGen("HoneyComb","https://drive.google.com/file/d/1RGeMz4vB3i3hXV-jjXRGg2SICMAG6YqE/view?usp=sharing"),
            webBtnBlockGen("Crow's Foot","https://drive.google.com/file/d/1AloznSJMXyt7wui5PdD7xVp4vCLsgenB/view?usp=sharing"),
        ]
    ),
    grroupedButtonBlockGen("🔰 Select Experiment for FSD -", 
        [
            webBtnBlockGen("Terry","https://drive.google.com/file/d/1S8KvM7oVRtaz1sf0-lzlNs_hnpy_LhgH/view?usp=sharing"),
            webBtnBlockGen("Weft Rib","https://drive.google.com/file/d/17IDpe1WpxQnGGhBySgJ5y1D_dtGuIIc0/view?usp=sharing"),
            webBtnBlockGen("H. Herringbone","https://drive.google.com/file/d/1tM5MjzUuVral4YBlZS2EbS02nJLLTswE/view?usp=sharing"),
        ]
    ),
  grroupedButtonBlockGen("📌 Select Experiment for FSD -", [
    webBtnBlockGen("All report(Akib)","https://drive.google.com/file/d/16ZMZLFH1hCFSJmPiNIXJ66VZ0H97sUcc/view"),
    webBtnBlockGen("All report(Nadeem)","https://drive.google.com/file/d/1DZOm5JSshH9RDo4K72xFfuEAUtgrbdWA/view"),
    webBtnBlockGen("All report(Osmani)","https://drive.google.com/drive/folders/1L9shcZpbB755dfhhKRJnpNE1XJHZiOdd?usp=sharing"),
  ]),
];

module.exports = fsd_lab_flow;
