let grroupedButtonBlockGen = require('simple-messenger-blocks/groupedBtnBlockGen');
let webBtnBlockGen = require('simple-messenger-blocks/webBtnGen');
let payloadBtnGen = require('simple-messenger-blocks/payloadBtnGen');
let cardGenerator = require('simple-messenger-blocks/cardGenerator');
let bondiFlow = require("../../../../sponsoredFlows/bondiCard");


let ym2Flow = [
    bondiFlow,
    grroupedButtonBlockGen(
        "📌 Full Hand Notes(2022) - ",
        [
            webBtnBlockGen("Part-A(Akib)", "https://drive.google.com/file/d/1-rZCeR2uGfDY_ImbA08T9z4trSFfCx0O/view"),
        ]
    ),
    grroupedButtonBlockGen("🔰 Select Topics for YM-II -",
        [
            payloadBtnGen("Books", "ym2_books_flow"),
            payloadBtnGen("Class Lecture", "ym2_classlec_flow"),
            payloadBtnGen("Hand Note", "ym2_note_flow")
        ]
    ),
    grroupedButtonBlockGen("🔰 Select Topics for YM-II -",
        [
            payloadBtnGen("Special Yarns", "ym2_specialYarns_flow"),
            payloadBtnGen("Intro Modern..", "ym2_introSpin_flow"),
        ]
    ),
    grroupedButtonBlockGen("🔰 Select Topics for YM-II -",
        [
            webBtnBlockGen("Fancy yarn", "https://drive.google.com/file/d/1DmQ9v3gb5A3EI5D4c45_Q5ni1fQZtjeT/view"),
            webBtnBlockGen("Jute Spinning", "https://drive.google.com/file/d/1tJa3mLQAtWfnTBLHJHNTgD0H1LuswLPe/view"),
            webBtnBlockGen("Slub", "https://drive.google.com/file/d/1XGcmckrIDi_tdcQXVVFkfoQqtkn1eVDF/view")
        ]
    ),
    grroupedButtonBlockGen("🔰 Select Topics for YM-II -",
        [
            webBtnBlockGen("Air Jet", "https://drive.google.com/file/d/136KphF9N9y2m2cxLVn2Y8hzlC5l1g5Sv/view"),
            webBtnBlockGen("Core Spun yarn", "https://drive.google.com/file/d/1gAmwpmoTaV88WuCX-a2Hcb9m4fEyt4B7/view"),
            webBtnBlockGen("Double,Ply Yarn", "https://drive.google.com/file/d/1GlDunFiHLUEcL3JIr_Tv33ggW6eOcddr/view")
        ]
    ),
    grroupedButtonBlockGen("🔰 Select Topics for YM-II -",
        [
            webBtnBlockGen("Frictional Spinning", "https://drive.google.com/file/d/1DBfeJ4XbcJ4mYjwf195gUT_eYioYcH7W/view"),
            webBtnBlockGen("Jute Drawing", "https://drive.google.com/file/d/1paBuE63xr6I7BCREASjaOpOK9Fk6UJEX/view"),
            webBtnBlockGen("Jute Manufacturing", "https://drive.google.com/file/d/10N4bm7ybQTx98bBxJwETRsfl45rZikyY/view")
        ]
    ),
    grroupedButtonBlockGen("🔰 Select Topics for YM-II -",
        [
            payloadBtnGen("Rotor Spinning", "ym2_rotor_flow"),
            payloadBtnGen("Spinning", "ym2_spinning_flow"),
            webBtnBlockGen("Vortex", "https://drive.google.com/file/d/10ztw29otqL3wML4Ir7VmFjlDjsT8OJYH/view")
        ]
    )
]





module.exports = ym2Flow;