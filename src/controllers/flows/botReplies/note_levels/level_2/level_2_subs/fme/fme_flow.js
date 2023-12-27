let grroupedButtonBlockGen = require('simple-messenger-blocks/groupedBtnBlockGen');
let webBtnBlockGen = require('simple-messenger-blocks/webBtnGen');
let payloadBtnGen = require('simple-messenger-blocks/payloadBtnGen');


let fmeFlow = [
grroupedButtonBlockGen(`📌 New(2023) - `,
        [
            webBtnBlockGen("Suggestions", "https://drive.google.com/file/d/1DSK8J-O-4UcQgZeSy973PBmcpzC1_F30/view?usp=sharing"),
        ]
    ),
    grroupedButtonBlockGen(
        "📌 QB Solve -",
        [
            webBtnBlockGen("Arjan(2022)", "https://drive.google.com/file/d/1yX7UsBG4w_XS8m0I6yWdPJ8sI9nHTLPK/view?usp=sharing"),
            webBtnBlockGen("Fuad(2023)", "https://drive.google.com/file/d/1ZmeJ5cI39lX0jaVHeeqPd0xH9Vv9ugDI/view?usp=sharing"),
        ]
    ),
    grroupedButtonBlockGen(
        `📌 Full Hand Notes -   `,
        [
            webBtnBlockGen("Part A(Samet)","https://drive.google.com/file/d/1L4a2gMgmfMzSugqQGia3HWeT9JSnHTjr/view?usp=sharing"),
            webBtnBlockGen("Part B(Samet)","https://drive.google.com/file/d/1CCon0eyrOQ7jqPdjOo4Lm--gAG-lqxh2/view?usp=sharing"),
        ]
    ),
    grroupedButtonBlockGen(`Sheets - `,
        [
            webBtnBlockGen("Fahim Sir", "https://drive.google.com/drive/folders/183z1Z-rE8t6I5PhhtHnH6zcqgiONPFmp?usp=sharing"),
            webBtnBlockGen("Al Amin Sir", "https://drive.google.com/drive/folders/1meV47hKpxgh7nfOeAmicVMAQ1-i3gpGt?usp=sharing"),
        ]
    ),
    grroupedButtonBlockGen(`📌Full Hand Note(Maruf)-`,
        [
            webBtnBlockGen("Fluid, Inertia, pump", "https://drive.google.com/file/d/1EeU6E0nZjv5NRkqffBmqyhbN7_fWPsQO/view"),
            webBtnBlockGen("Heat, Refrieg.", "https://drive.google.com/file/d/1_7NG9crXx7UnRVaNvGfqqFHt55veiBup/view"),
            webBtnBlockGen("Solid", "https://drive.google.com/file/d/1TxVKfihV6599YEcdivAK-Xwi-FfsMTa-/view")
        ]
    ),
    grroupedButtonBlockGen(
        "📌 Full Hand Note -",
        [
            webBtnBlockGen("Shomir(2022)", "https://drive.google.com/file/d/1q6AEMdvfNEhGAvSJP5Kdd7vjev5qUkLP/view?usp=sharing"),
            webBtnBlockGen("Mamun(2023)", "https://drive.google.com/file/d/1NOdG_HakwQhHio6OTyY-Fj14b5ys0e_C/view?usp=sharing"),
        ]
    ),
    grroupedButtonBlockGen(`📌Full Hand Note(Nahid,AE-44, 2020)-`,
        [
            webBtnBlockGen("Part A", "https://drive.google.com/file/d/1tbFqkVmg9g-O-XGUeAaCM4bXF7NE6xHW/view"),
            webBtnBlockGen("Part B", "https://drive.google.com/file/d/1vSKjJ5FtAsvcv-JBAJ0F9gz_XWg_4Old/view")
        ]
    ),
    grroupedButtonBlockGen(`📌Full Hand Note(Akib,AE-44,2020)-`,
        [
            webBtnBlockGen("Part A", "https://drive.google.com/file/d/1-4SddFXr6M6UlaMNplsNQElkaEdjwVaJ/view"),
            webBtnBlockGen("Part B", "https://drive.google.com/file/d/18W-ask6cB34n6hI2BD7olZ_i-acM8Jp4/view"),
        ]
    ),
    grroupedButtonBlockGen(`🔰 Select Topics for FME - `,
        [
            webBtnBlockGen("Data Sheet(Steam Ta)", "https://drive.google.com/file/d/1dcOpCnVPaebDJUXIvNqFPmzgzFi9MQaK/view"),
            payloadBtnGen("Books","fme_books_flow"),
            payloadBtnGen("Hand Notes","fme_notes_flow")
        ]
    ),
    grroupedButtonBlockGen(`🔰 Select Topics for FME - `,
        [
            payloadBtnGen("Questions","fme_ques_flow"),
            payloadBtnGen("Suggestions","fme_sugg_flow")
        ]
    ),
    grroupedButtonBlockGen(`🔰 Select Topics for FME - `,
        [
            payloadBtnGen("Boiler","fme_boiler_flow"),
            payloadBtnGen("Power & Refre.","fme_powerRefre_flow"),
            payloadBtnGen("Steam Turbine","fme_steam_flow")
        ]
    ),
    grroupedButtonBlockGen(`🔰 Select Topics for FME - `,
        [
            payloadBtnGen("Thermo Dynamics","fme_thermalEng_flow"),
            payloadBtnGen("Fluid Mechanics","fme_fluidMecha_flow"),
            payloadBtnGen("Energy Process","fme_energyProcess_flow")
        ]
    ),
    grroupedButtonBlockGen(`🔰 Select Topics for FME - `,
        [
            payloadBtnGen("Solid","fme_solid_flow"),
            payloadBtnGen("Gear Train","fme_gearTrain_flow"),
            payloadBtnGen("Pump & Compre.","fme_pumpCompressor_flow")
        ]
    ),
    grroupedButtonBlockGen(`🔰 Select Topics for FME - `,
        [
            payloadBtnGen("Stress Strain","fme_stressStrain_flow"),
            payloadBtnGen("Engine(Petrol, Disel","fme_enginePetrol_flow"),
            payloadBtnGen("Engine(Combus..)","fme_engineCombus_flow")
        ]
    ),
    grroupedButtonBlockGen(`🔰 Select Topics for FME - `,
        [
            payloadBtnGen("Beam(New)","fme_beam_flow"),
            payloadBtnGen("Belt(New)","fme_belt_flow"),
            payloadBtnGen("Centroid(New)","fme_centroid_flow")
        ]
    ),
    grroupedButtonBlockGen(`🔰 Select Topics for FME - `,
        [
            payloadBtnGen("Moment of Inertia","fme_momentInnertia_flow"),
            payloadBtnGen("Column(New)","fme_cloumn_flow")
        ]
    )
]





module.exports = fmeFlow;