let grroupedButtonBlockGen = require("../../genrators/grroupedButtonBlockGen");
let webBtnBlockGen = require("../../genrators/webBtnBlockGen");
let payloadBtnGen = require("../../genrators/payloadBtnGen");



let prevCustomerFlow = [
    grroupedButtonBlockGen(
        `⚠ You've tapped a button from the previous version\nPlease choose these options again - `,
        [
            payloadBtnGen("📘 Notes","notes_flow"),
            payloadBtnGen("🆘 Help","help_payload"),
        ]
      ),
]



module.exports = prevCustomerFlow;