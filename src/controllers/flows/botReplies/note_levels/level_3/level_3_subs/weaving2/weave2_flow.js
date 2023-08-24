let grroupedButtonBlockGen = require('simple-messenger-blocks/groupedBtnBlockGen');
let webBtnBlockGen = require('simple-messenger-blocks/webBtnGen');
let payloadBtnGen = require('simple-messenger-blocks/payloadBtnGen');
let bondiFlow = require("../../../../sponsoredFlows/bondiCard");


let weave2Flow = [
    grroupedButtonBlockGen(
        "📌 Select Topics for WP-II -",
        [
            webBtnBlockGen("Sheets", "https://drive.google.com/drive/folders/1EOWS90PpbXe-iFwkyVybOjJAJw_TMgFd?usp=sharing")
        ]
    ),
    grroupedButtonBlockGen(
        "📌 Full Hand Notes - ",
        [
            webBtnBlockGen("Part-A(Rakibul)", "https://drive.google.com/file/d/1JOS5KVPWT76-DZAOP7ArWg0OL9P0b20G/view?usp=sharing"),
            webBtnBlockGen("Part-B(Rakibul)", "https://drive.google.com/file/d/1jE7iMACjcsbtIPC5iZJI4rgSY6IigGhS/view?usp=sharing"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Topics for Weaving-II -",
        [
            webBtnBlockGen("Intro", "https://drive.google.com/file/d/1X1ImVuXGTyWb--ux-R1KgPaaJEaFCqzg/view?usp=sharing"),
            webBtnBlockGen("Modern Loom", "https://drive.google.com/file/d/1OljLsfV8wPSjrFn-yL5oFyVI-tJEsdG6/view?usp=sharing"),
            webBtnBlockGen("Woven Fabric", "https://drive.google.com/file/d/1rFxRigFQhb6q_R7EuUJ7XsgqfVXYiG0o/view?usp=sharing"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Topics for Weaving-II -",
        [
            webBtnBlockGen("Cam Beatup", "https://drive.google.com/file/d/15xX9uPsvc23hoRN9mMreNcsaqvJeOjE-/view?usp=sharing"),
            webBtnBlockGen("Rapier Loom", "https://drive.google.com/file/d/17mtFjTsXYhcPzmcaTtPAHUSkE49_26CU/view?usp=sharing"),
            webBtnBlockGen("E Jacquard", "https://drive.google.com/file/d/1uHyhaVh2o_caL2N5WhSx2-wlhUoAEJXL/view?usp=sharing"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Topics for Weaving-II -",
        [
            webBtnBlockGen("Denim", "https://drive.google.com/file/d/1_SjSBJN7Oso0ozrJ4ZIg7XSPVi_yizjB/view?usp=sharing"),
            webBtnBlockGen("Crank Positive", "https://drive.google.com/file/d/1Do5BaMwX4NyK8xDdmRZdjBAl7j-2LsVo/view?usp=sharing"),
            webBtnBlockGen("Selvedge", "https://drive.google.com/file/d/1bvO1YYYj7LTdV-OAuuESztqSpVd8Kt3J/view?usp=sharing"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Topics for Weaving-II -",
        [
            webBtnBlockGen("Projectile Rapier", "https://drive.google.com/file/d/1AvJ3U6Gng2x9UWOMkWA8mdv0pHs9mk-Z/view?usp=sharing"),
            webBtnBlockGen("Airjet", "https://drive.google.com/file/d/1N44EMqkTCaRNDXhi-zuj7DRfsyj7KgwF/view?usp=sharing"),
            webBtnBlockGen("Fabric Faults", "https://drive.google.com/file/d/1EalMIc8J78ZdUeXl-eKWQ_AXteW799Ci/view?usp=sharing"),
        ]
    ),
    grroupedButtonBlockGen(
        "🔰 Select Topics for Weaving-II -",
        [
            webBtnBlockGen("4 point ..", "https://drive.google.com/file/d/12v6NppkzF0bbZpfXk28aKdMobqbCxpzE/view?usp=sharing"),
        ]
    )
]





module.exports = weave2Flow;