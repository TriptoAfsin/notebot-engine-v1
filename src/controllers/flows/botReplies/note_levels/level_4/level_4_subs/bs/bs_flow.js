let grroupedButtonBlockGen = require("simple-messenger-blocks/groupedBtnBlockGen");
let webBtnBlockGen = require("simple-messenger-blocks/webBtnGen");

let bsFlow = [
    grroupedButtonBlockGen(
		"🔰 Hand Notes ",
		[
			webBtnBlockGen("2025", "https://drive.google.com/drive/folders/1LbuWc4de4-1m8Ybke15vuPQVdICLa3a5?usp=sharing"),
		]
	),
	grroupedButtonBlockGen(
		"🔰 Choose Topic - ",
		[
			webBtnBlockGen("Bangladesh", "https://drive.google.com/file/d/10L2QW-RDtiwkTHHoonqlgrMaRnKx8HH3/view"),
			webBtnBlockGen("Art & Culture", "https://drive.google.com/file/d/1Jz0Un7asZfl6FZOrusP8EQqM73CgcTQ9/view"),
			webBtnBlockGen("Govn. Structure", "https://drive.google.com/file/d/1MI6Klqh6eUcWP5UvpowokF3q-zvpL2bP/view"),
		]
	),
	grroupedButtonBlockGen(
		"🔰 Choose Topic - ",
		[
			webBtnBlockGen("Constitution", "https://drive.google.com/file/d/1QjbEl4kkJ7YNvnFAHLsin3X1KtM1VqRJ/view"),
			webBtnBlockGen("Historical Backgroud", "https://drive.google.com/file/d/1ktuEUtk_62KgtKWgjmUbgxPwfB8mMHC_/view"),
			webBtnBlockGen("Local Govn.", "https://drive.google.com/file/d/1fddkK9Dn-yz4Tu6eYCZ7q-2yFggVqIO1/view"),
		]
	),
	grroupedButtonBlockGen(
		"🔰 Choose Topic - ",
		[
			webBtnBlockGen("Organ", "https://drive.google.com/file/d/1hru9rN4-nFoARmzFqn0h_LkrOwBTXf2Y/view"),
			webBtnBlockGen("Climate Change Cause", "https://drive.google.com/file/d/1IYf_Qt2m8VsRV859vK_oIZsmDcEoLo7F/view"),
			webBtnBlockGen("ECNEC", "https://drive.google.com/file/d/1_AQWPIgnTmSXjDo7cO6gMelv-aQIzWfL/view"),
		]
	),
	grroupedButtonBlockGen(
		"🔰 Choose Topic - ",
		[
			webBtnBlockGen("Environ. Pollution", "https://drive.google.com/file/d/1crx1mPuf0YTfylmcp6nkUukqqkvlz-HV/view"),
			webBtnBlockGen("GDP & GNP", "https://drive.google.com/file/d/1iXupFhK6YoL3LW23EUhNvZyHa7NVRqcE/view"),
			webBtnBlockGen("Globalization", "https://drive.google.com/file/d/1F22GKH-o4i3te6rJQ2nyVPBWPrYIrkMZ/view"),
		]
	),
	grroupedButtonBlockGen(
		"🔰 Choose Topic - ",
		[
			webBtnBlockGen("Good Govern..", "https://drive.google.com/file/d/1ZX_1Qx5BvykCkrAdddfL7t6S2NmpJc2F/view"),
			webBtnBlockGen("Overpopulation", "https://drive.google.com/file/d/18ZnT1PySWPS5-xhgDIm1sNzpD4A_kd8b/view"),
			webBtnBlockGen("RMG", "https://drive.google.com/file/d/1mfa8JO3eAMU5T4k4ABNahW2aS2J9ZPdg/view"),
		]
	),
	grroupedButtonBlockGen(
		"🔰 Choose Topic - ",
		[
			webBtnBlockGen("Role of Political..", "https://drive.google.com/file/d/14QJbiqMStK2A42QnCYsaV1-hyb3cE67v/view"),
		]
	),
]





module.exports = bsFlow;