let grroupedButtonBlockGen = require("simple-messenger-blocks/groupedBtnBlockGen");
let webBtnBlockGen = require("simple-messenger-blocks/webBtnGen");
let payloadBtnGen = require("simple-messenger-blocks/payloadBtnGen");

let ed_lab_flow = [
  grroupedButtonBlockGen("📌 Books & Assignments -", [
    webBtnBlockGen(
      "ED Assign.",
      "https://drive.google.com/file/d/1LrsCg8VDgRUPtGsV7W_mgA81WCsBSy1r/view?usp=sharing"
    ),
    webBtnBlockGen(
      "Books",
      "https://drive.google.com/drive/folders/1xNKsfDATBlQUt7ycfcYdkNC61UnJhv0i"
    ),
    webBtnBlockGen(
      "ED - A.Chandra",
      "https://drive.google.com/file/d/1PakyUmqWyCSMWheYaQqNXmcyh2ZRkPv_/view?usp=sharing"
    ),
  ]),
  grroupedButtonBlockGen("🔰 Select - ", [
    webBtnBlockGen(
      "Lecture 1",
      "https://drive.google.com/file/d/1jrfGhEhjxbgRsqWKS4PJ9HhJzgIsmi6w/view?usp=sharing"
    ),
    webBtnBlockGen(
      "Lecture 2",
      "https://drive.google.com/file/d/0B5vBcvWdtgOuZDh6R2V5T243Q2VaZ0FpNXNKOXFFREo0c05j/view"
    ),
    webBtnBlockGen(
      "Lecture 3",
      "https://drive.google.com/file/d/140-9jttFF_dRMeczR8SBnNMHz_W1GSDf/view?usp=drivesdk"
    ),
  ]),
  grroupedButtonBlockGen("🔰 Select - ", [
    webBtnBlockGen(
      "Sectional Vi.",
      "https://drive.google.com/file/d/16uKWBvwM_5ycg9g_hGncQe6UEESex3Sx/view?usp=drivesdk"
    ),
    webBtnBlockGen(
      "Auxiliary V.",
      "https://drive.google.com/file/d/1Nlz2LWCb_tXAt9R_dowPrWKA2GW4K6eD/view?usp=drivesdk"
    ),
  ]),
];

module.exports = ed_lab_flow;
