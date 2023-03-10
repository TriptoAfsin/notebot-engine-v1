const express = require('express');
const app = express();
let router = express.Router();
require("dotenv").config();
// let Feed = require('rss-to-json');

const axios = require('axios');


// analytics 
//const fs = require("fs");
//const analDB = '../../../data.json'; //path
//const jsonDb = require(analDB);

let deploymentEnvDetector = () => {
    let appProduction = process.env.appProduction;
    console.log(`App Production: ${appProduction}`)
    let urlModifier
    if(appProduction === 'true'){
        return urlModifier = 's://'
    }
    else{
        return urlModifier = '://'
    }
}


let handleAnalytics =  async(subName) => {
    //console.log(`${process.env.analyticsServerUrl}/notes/${subName}?adminKey=${process.env.analyticsAuthKey}`)
    if(process.env.collectAnalytics === "true"){
        try{
            const result = await axios.get(`${process.env.analyticsServerUrl}/notes/${subName}?adminKey=${process.env.analyticsAuthKey}`,
            console.log(`🟢 Analytics was handled successfully`)
     );
        }catch(err){
            //console.log(err)
            console.log(`🔴 Error occurred while handling analytics(${subName})`)
        }
    }
    else{
        console.log(`🟠 Analytics is disabled`)
    }
}


let handleAnalyticsLabs =  async(subName) => {
    //console.log(`${process.env.analyticsServerUrl}/notes/${subName}?adminKey=${process.env.analyticsAuthKey}`)
    if(process.env.collectAnalytics === "true"){
        try{
            const result = await axios.get(`${process.env.analyticsServerUrl}/labs/${subName}?adminKey=${process.env.analyticsAuthKey}`,
            console.log(`🟢 Analytics was handled successfully`)
     );
        }catch(err){
            //console.log(err)
            console.log(`🔴 Error occurred while handling analytics(${subName})`)
        }
    }
    else{
        console.log(`🟠 Analytics is disabled`)
    }
  }


let noteLevel1Subs = require('./academic/notes/level1/level1Subs')
let noteLevel2Subs = require('./academic/notes/level2/level2Subs')
let noteLevel3Subs = require('./academic/notes/level3/level3Subs')
let noteLevel4Subs = require('./academic/notes/level4/level4Subs')
//math1
let math1Flow = require('./academic/notes/level1/subs/math1/math1')
let math1BooksFlow = require('./academic/notes/level1/subs/math1/topics/appMath1Books')
let math1Solve2018 = require('./academic/notes/level1/subs/math1/topics/appMath1Solve2018')
let math1QuesFlow = require('./academic/notes/level1/subs/math1/topics/appMath1Ques')
let math1Conver = require('./academic/notes/level1/subs/math1/topics/appMath1Conv')
let math1Expan = require('./academic/notes/level1/subs/math1/topics/appMath1Expansion')
let math1Diff = require('./academic/notes/level1/subs/math1/topics/math1Diff')
let math1Inte = require('./academic/notes/level1/subs/math1/topics/math1Integretion')
let math1Extrerma = require('./academic/notes/level1/subs/math1/topics/appMath1Extreme')
let math1Conics = require('./academic/notes/level1/subs/math1/topics/appMath1Conics')
let math1Vector = require('./academic/notes/level1/subs/math1/topics/appMath1Vector')
let math1CoOrd = require('./academic/notes/level1/subs/math1/topics/appMath1CoOrd')
let math1Matrix = require('./academic/notes/level1/subs/math1/topics/appMath1Matrix')
let math1Linear = require('./academic/notes/level1/subs/math1/topics/appMath1Linear')
let math1Axes = require('./academic/notes/level1/subs/math1/topics/appMath1ChangeofAxes')


//math2
let math2Flow = require('./academic/notes/level1/subs/math2/math2')
let math2Books = require('./academic/notes/level1/subs/math2/topics/appMath2Books')
let math2Ques = require('./academic/notes/level1/subs/math2/topics/appMath2Ques')
let math2Sugg = require('./academic/notes/level1/subs/math2/topics/appMath2Sugg')
let math2moivre = require('./academic/notes/level1/subs/math2/topics/appMath2Moivre')
let math2Homo = require('./academic/notes/level1/subs/math2/topics/appMath2Homo')
let math2LDE = require('./academic/notes/level1/subs/math2/topics/appMath2Lde')
let math2Exact = require('./academic/notes/level1/subs/math2/topics/appMath2Exact')
let math2RedHomo = require('./academic/notes/level1/subs/math2/topics/appMath2RedHomo')
let math2DiffEqn = require('./academic/notes/level1/subs/math2/topics/appMath2DiffEqn')
let math2linEqn = require('./academic/notes/level1/subs/math2/topics/appMath2LinearEqn')
let math2Residue = require('./academic/notes/level1/subs/math2/topics/appMath2Residue')
let math2lineInt = require('./academic/notes/level1/subs/math2/topics/appMath2LineInt')
let math2MethodVar = require('./academic/notes/level1/subs/math2/topics/appMath2Methodvar')
let math2AnnalyFunc = require('./academic/notes/level1/subs/math2/topics/math2AnalyFunc')
let math2Vector = require('./academic/notes/level1/subs/math2/topics/appMath2Vector')
let math2ode = require('./academic/notes/level1/subs/math2/topics/appMath2Ode')
let math2SepaVar = require('./academic/notes/level1/subs/math2/topics/appMath2SepaVar')
let math2laplace = require('./academic/notes/level1/subs/math2/topics/appMath2Laplace')
let math2Complex = require('./academic/notes/level1/subs/math2/topics/appMath2Complex')


//chem1
let chem1appFlow = require('./academic/notes/level1/subs/chem1/chem1')
let chem1Books = require('./academic/notes/level1/subs/chem1/topics/appChem1Books')
let chem1Ques = require('./academic/notes/level1/subs/chem1/topics/appChem1Questions')
let chem1Periodic = require('./academic/notes/level1/subs/chem1/topics/chem1PeriodicProp')
let chem1Dilu = require('./academic/notes/level1/subs/chem1/topics/appChem1Dil')
let chem1Complex = require('./academic/notes/level1/subs/chem1/topics/appChem1CxComp')
let chem1Bond = require('./academic/notes/level1/subs/chem1/topics/appChem1Bond')
let chem1Kinetics = require('./academic/notes/level1/subs/chem1/topics/appChem1Kinetic')
let chem1ChemicalEqui = require('./academic/notes/level1/subs/chem1/topics/appChem1ChemEqui')
let chem1Photo = require('./academic/notes/level1/subs/chem1/topics/appChem1Photo')
let chem1Analy = require('./academic/notes/level1/subs/chem1/topics/appChem1Analy')
let chem1Colloid = require('./academic/notes/level1/subs/chem1/topics/appChem1Coll')
let chem1AcidBase = require('./academic/notes/level1/subs/chem1/topics/appChem1AcidBase')


//chem2
let chem2appFlow = require('./academic/notes/level1/subs/chem2/chem2')
let chem2Books = require('./academic/notes/level1/subs/chem2/topics/appChem2Books')
let chem2Ques = require('./academic/notes/level1/subs/chem2/topics/appChem2Ques')
let chem2OrganMetal = require('./academic/notes/level1/subs/chem2/topics/appChem2OrganMet')
let chem2Carbonyl = require('./academic/notes/level1/subs/chem2/topics/appChem2Carbonyl')
let chem2OrgReac = require('./academic/notes/level1/subs/chem2/topics/appChem2OrgRecMech')
let chem2AlcPhen = require('./academic/notes/level1/subs/chem2/topics/appChem2AlcPhenol')
let chem2Amino = require('./academic/notes/level1/subs/chem2/topics/appChem2Amino')
let chem2Carboh = require('./academic/notes/level1/subs/chem2/topics/appChem2Carbo')
let chem2ColorDye = require('./academic/notes/level1/subs/chem2/topics/appChem2ColorDye')
let chem2CarboxylicAcid = require('./academic/notes/level1/subs/chem2/topics/appChem2CarboxAcid')
let chem2Amine = require('./academic/notes/level1/subs/chem2/topics/appChem2Amine')
let chem2Sollubility = require('./academic/notes/level1/subs/chem2/topics/appChem2Solu')


//phy1
let phy1appFlow = require('./academic/notes/level1/subs/phy1/phy1')
let phy1Books = require('./academic/notes/level1/subs/phy1/topics/appPhy1Books')
let phy1Ques = require('./academic/notes/level1/subs/phy1/topics/appPhy1Ques')
let phy1Circular = require('./academic/notes/level1/subs/phy1/topics/appPhy1Circular')
let phy1Hydro = require('./academic/notes/level1/subs/phy1/topics/appPhy1Hydrau')
let phy1Diffrac = require('./academic/notes/level1/subs/phy1/topics/appPhy1Diffrac')
let phy1Inter = require('./academic/notes/level1/subs/phy1/topics/appPhy1Interf')
let phy1Polar = require('./academic/notes/level1/subs/phy1/topics/appPhy1Polar')
let phy1Elasticity = require('./academic/notes/level1/subs/phy1/topics/appPhy1Elasticity')
let phy1Visco = require('./academic/notes/level1/subs/phy1/topics/appPhy1Visco')
let phy1Surface = require('./academic/notes/level1/subs/phy1/topics/appPhy1Surface')

//phy2
let phy2appFlow = require('./academic/notes/level1/subs/phy2/phy2')
let phy2Books = require('./academic/notes/level1/subs/phy2/topics/appPhy2Books')
let phy2Ques = require('./academic/notes/level1/subs/phy2/topics/appPhy2Ques')
let phy2Kinetic = require('./academic/notes/level1/subs/phy2/topics/appPhy2Kinetics')
let phy2Electric = require('./academic/notes/level1/subs/phy2/topics/appPhy2Elec')
let phy2Thermo = require('./academic/notes/level1/subs/phy2/topics/appPhy2Thermo')
let phy2Rad = require('./academic/notes/level1/subs/phy2/topics/appPhy2Rad')
let phy2Magnet = require('./academic/notes/level1/subs/phy2/topics/appPhy2Magnet')
let phy2Modern = require('./academic/notes/level1/subs/phy2/topics/appPhy2modernPhy')
let phy2Entropy = require('./academic/notes/level1/subs/phy2/topics/appPhy2Entropy')

//em
let emAppFlow = require('./academic/notes/level1/subs/em/em')
let emBooks = require('./academic/notes/level1/subs/em/topics/appEMBooks')
let emQues = require('./academic/notes/level1/subs/em/topics/appEmQues')
let emMath = require('./academic/notes/level1/subs/em/topics/appEmMathChotha')
let emBlastFur = require('./academic/notes/level1/subs/em/topics/appEmBlastFur')
let emHeatTre = require('./academic/notes/level1/subs/em/topics/appEmHeatTreat')
let emWrought = require('./academic/notes/level1/subs/em/topics/appEmWrought')
let emCrystal = require('./academic/notes/level1/subs/em/topics/appEmCrystal')
let emIron = require('./academic/notes/level1/subs/em/topics/appEmIron')
let emGlass = require('./academic/notes/level1/subs/em/topics/appEmGlass')
let emCeramics = require('./academic/notes/level1/subs/em/topics/appEmCeramics')
let emCorrosion = require('./academic/notes/level1/subs/em/topics/appEmCorrosion')
let emAlloy = require('./academic/notes/level1/subs/em/topics/appEmAlloy')
let emComposites = require('./academic/notes/level1/subs/em/topics/appEmComposites')
let emPlastic = require('./academic/notes/level1/subs/em/topics/appEmPlastics')
let emPhaseDiag = require('./academic/notes/level1/subs/em/topics/appEmPhaseDiag')
let emAtomic = require('./academic/notes/level1/subs/em/topics/appEmAtomicStruct')

//tmm
let tmmAppFlow = require('./academic/notes/level1/subs/tmm/tmm')
let tmmQues = require('./academic/notes/level1/subs/tmm/topics/appTmmQues')

//fh
let fhAppFlow = require('./academic/notes/level1/subs/fh/fashionHistory')
let fhArtDes = require('./academic/notes/level1/subs/fh/topics/appFhArtDes')
let fhRoman = require('./academic/notes/level1/subs/fh/topics/appFhRoman')
let fhEliza = require('./academic/notes/level1/subs/fh/topics/appFhEliza')
let fhGeorgian = require('./academic/notes/level1/subs/fh/topics/appFhGeorgi')
let fhGreek = require('./academic/notes/level1/subs/fh/topics/appFhGreek')
let fhEgypt = require('./academic/notes/level1/subs/fh/topics/appFhEgypt')
let fhRenasi = require('./academic/notes/level1/subs/fh/topics/appFhRenasi')
let fhSilk = require('./academic/notes/level1/subs/fh/topics/appFhSilk')
let fhJeans = require('./academic/notes/level1/subs/fh/topics/appFhJeansHis')
let fhMuslin = require('./academic/notes/level1/subs/fh/topics/appFhMuslin')
let fhHandloom = require('./academic/notes/level1/subs/fh/topics/appFhHandloom')


//pse
let pseAppFlow = require('./academic/notes/level1/subs/pse/pse')
let pseBooks = require('./academic/notes/level1/subs/pse/topics/appPseBooks')
let pseQues = require('./academic/notes/level1/subs/pse/topics/appPseQues')
let psehandNotes = require('./academic/notes/level1/subs/pse/topics/appPseHandNotes')
let pseIntro = require('./academic/notes/level1/subs/pse/topics/appPseIntro')
let psePhyStruct = require('./academic/notes/level1/subs/pse/topics/appPsePhyStruct')
let pseChemStruct = require('./academic/notes/level1/subs/pse/topics/appPseChemicalStruc')
let pseMW = require('./academic/notes/level1/subs/pse/topics/appPseMW')
let pseStep = require('./academic/notes/level1/subs/pse/topics/appPseStep')
let pseChain = require('./academic/notes/level1/subs/pse/topics/appPseChain')
let pseThermal = require('./academic/notes/level1/subs/pse/topics/appPseChain')
let pseDegrad = require('./academic/notes/level1/subs/pse/topics/appPseDegrad')
let psePolymTech = require('./academic/notes/level1/subs/pse/topics/appPsePolymTech')
let pseApplicationPoly = require('./academic/notes/level1/subs/pse/topics/appPseAppofPoly')
let psePolyMorpho = require('./academic/notes/level1/subs/pse/topics/appPsePolyMorpho')


//ntf
let ntfAppFlow = require('./academic/notes/level1/subs/ntf/ntf')
let ntfBooks = require('./academic/notes/level1/subs/ntf/topics/appNtfBooks')
let ntfQues = require('./academic/notes/level1/subs/ntf/topics/appNtfQues')
let ntfHandNotes = require('./academic/notes/level1/subs/ntf/topics/appNtfHNotes')
let ntfSugg = require('./academic/notes/level1/subs/ntf/topics/appNtfSugg')
let ntfIntro = require('./academic/notes/level1/subs/ntf/topics/appNtfIntro')
let ntfCotton = require('./academic/notes/level1/subs/ntf/topics/appNtfCotton')
let ntfFlax = require('./academic/notes/level1/subs/ntf/topics/appNtfFlax')
let ntfWool = require('./academic/notes/level1/subs/ntf/topics/appNtfWool')
let ntfJute = require('./academic/notes/level1/subs/ntf/topics/appNtfJute')
let ntfSilk = require('./academic/notes/level1/subs/ntf/topics/appNtfSilk')
let ntfSisal = require('./academic/notes/level1/subs/ntf/topics/appNtfSisal')
let ntfHemp = require('./academic/notes/level1/subs/ntf/topics/appNtfHemp')
let ntfPALF = require('./academic/notes/level1/subs/ntf/topics/appNtfPalf')
let ntfKapok = require('./academic/notes/level1/subs/ntf/topics/appNtfKapok')
let ntfAsbestos = require('./academic/notes/level1/subs/ntf/topics/appNtfAsbestos')
let ntfOtherFib = require('./academic/notes/level1/subs/ntf/topics/appOtherFib')
let ntfQuiz = require('./academic/notes/level1/subs/ntf/topics/appNtfQuiz')

//cp
let cpAppFlow = require('./academic/notes/level1/subs/cp/cp')
let cpBooks = require('./academic/notes/level1/subs/cp/topics/AppCpBooks')
let cpQues = require('./academic/notes/level1/subs/cp/topics/AppCpQues')
let cpFunda = require('./academic/notes/level1/subs/cp/topics/AppCpFundamentals')
let cpConditional = require('./academic/notes/level1/subs/cp/topics/AppCPConditional')
let cpLoop = require('./academic/notes/level1/subs/cp/topics/AppCPLoop')
let cpArray = require('./academic/notes/level1/subs/cp/topics/AppCPArray')
let cpFunc = require('./academic/notes/level1/subs/cp/topics/AppCPFunction')
let cpString = require('./academic/notes/level1/subs/cp/topics/AppCPString')
let cpSugg = require('./academic/notes/level1/subs/cp/topics/AppCpSUgg')


//bce
let bceAppFlow = require('./academic/notes/level1/subs/bce/bce')
let bceQues = require('./academic/notes/level1/subs/bce/topics/appBceQues')
let bceAllSheets = require('./academic/notes/level1/subs/bce/topics/appBceAllSheets')
let bcePartA = require('./academic/notes/level1/subs/bce/topics/appBcePartA')
let bcePartB = require('./academic/notes/level1/subs/bce/topics/appBcePartB')
let bceFullAB = require('./academic/notes/level1/subs/bce/topics/appBceFullAB')
let bceIntro = require('./academic/notes/level1/subs/bce/topics/appBceIntro')
let bceLangFunc = require('./academic/notes/level1/subs/bce/topics/appBCeLanguageFunc')
let bceCommunication = require('./academic/notes/level1/subs/bce/topics/appBceCommuni')
let bceBizLetter = require('./academic/notes/level1/subs/bce/topics/appBceLetter')
let bceBizReport = require('./academic/notes/level1/subs/bce/topics/appBceReport')
let bceReadWrite = require('./academic/notes/level1/subs/bce/topics/appBceReadWrite')


//iae
let iaeAppFlow = require('./academic/notes/level1/subs/iae/iae')
let iaeBooks = require('./academic/notes/level1/subs/iae/topics/AppIaeBooks')
let iaeQues = require('./academic/notes/level1/subs/iae/topics/AppIaeQues')
let iaeIntro = require('./academic/notes/level1/subs/iae/topics/AppIaeIntro')
let iaeFullSlide = require('./academic/notes/level1/subs/iae/topics/AppIaeFullside')
let iaeDiffWoven = require('./academic/notes/level1/subs/iae/topics/AppIaeDiffWoven')
let iaeBrands = require('./academic/notes/level1/subs/iae/topics/AppIaeBrands')
let iaeQuota = require('./academic/notes/level1/subs/iae/topics/AppIaeBrands')
let iaeCad = require('./academic/notes/level1/subs/iae/topics/AppIaeCad')
let iaeShirt = require('./academic/notes/level1/subs/iae/topics/AppIaeShirtComp')


//bfs
let bfsAppFlow = require('./academic/notes/level1/subs/bfs/bfs')
let bfsLec3 = require('./academic/notes/level1/subs/bfs/topics/appBfsLec3')

//tpm
let tpmAppFlow = require('./academic/notes/level1/subs/tpm/tpm')
let tpmQues = require('./academic/notes/level1/subs/tpm/topics/appTpmQues')
let tpmFabWet = require('./academic/notes/level1/subs/tpm/topics/appTpmWovenFabWt')
let tpmFabManu = require('./academic/notes/level1/subs/tpm/topics/appTpmWovenFabManu')

//fmg
let fmgAppFlow = require('./academic/notes/level1/subs/fmg/fmg')

//iee
let ieeAppFlow = require('./academic/notes/level1/subs/iee/iee')
let ieeBooks = require('./academic/notes/level1/subs/iee/topics/appIeeBooks')
let ieeSheets = require('./academic/notes/level1/subs/iee/topics/appIeeSheets')
let ieeNotes = require('./academic/notes/level1/subs/iee/topics/AppIeeNotes')
let ieeManEnv = require('./academic/notes/level1/subs/iee/topics/appIeeManEnv')
let ieeSoil = require('./academic/notes/level1/subs/iee/topics/AppIeeSoil')
let ieeEnvIssue = require('./academic/notes/level1/subs/iee/topics/AppIeeSoil')
let ieeNatureEnv = require('./academic/notes/level1/subs/iee/topics/appIeeNatureEnv')
let ieeSPF = require('./academic/notes/level1/subs/iee/topics/appIeeSPF')

//ecb
let ecbAppFlow = require('./academic/notes/level1/subs/ecb/ecb')
let ecbNotes = require('./academic/notes/level1/subs/ecb/topics/appEcbNotes')
let ecbIntro = require('./academic/notes/level1/subs/ecb/topics/appEcbIntro')


//------------------------------level-2------------------------------------//
//sss1
let sss1AppFlow = require('./academic/notes/level2/subs/sss1/sss1')
let sss1Books = require('./academic/notes/level2/subs/sss1/topics/appSSS1Books')
let sss1BlowRoom = require('./academic/notes/level2/subs/sss1/topics/appSSS1BlowRoom')
let sss1Drawframe = require('./academic/notes/level2/subs/sss1/topics/appSSS1Drawframe')
let sss1Carding = require('./academic/notes/level2/subs/sss1/topics/appSSS1Carding')
let sss1Intro = require('./academic/notes/level2/subs/sss1/topics/appSSS1Intro')
let sss1IntroFib = require('./academic/notes/level2/subs/sss1/topics/appSSS1IntroFib')


//sss2
let sss2AppFlow = require('./academic/notes/level2/subs/sss2/sss2')
let sss2Ringframe = require('./academic/notes/level2/subs/sss2/topics/appSSS2RingFrame')
let sss2Notes = require('./academic/notes/level2/subs/sss2/topics/appSSS2Notes')

//fyt
let fytAppFlow = require('./academic/notes/level2/subs/fyt/fyt')
let fytBooks = require('./academic/notes/level2/subs/fyt/topics/appFytBooks')
let fytNotes = require('./academic/notes/level2/subs/fyt/topics/appFytNotes')
let fytSugg = require('./academic/notes/level2/subs/fyt/topics/appFytSugg')
let fytYarnNum = require('./academic/notes/level2/subs/fyt/topics/appFytYarnNum')
let fytYarnTwist = require('./academic/notes/level2/subs/fyt/topics/appFytYarnTwist')
let fytEvenness = require('./academic/notes/level2/subs/fyt/topics/appFytEvennesstest')
let fytCount = require('./academic/notes/level2/subs/fyt/topics/appFytYarnCount')
let fytAfis = require('./academic/notes/level2/subs/fyt/topics/appFytAfis')
let fytISO = require('./academic/notes/level2/subs/fyt/topics/appFytISO')
let fytCapaOptical = require('./academic/notes/level2/subs/fyt/topics/appFytCapaOptical')

//marketing
let marketingAppFlow = require('./academic/notes/level2/subs/marketing/marketing')
let marketingBooks = require('./academic/notes/level2/subs/marketing/topics/appMarketBooks')
let marketingNotes = require('./academic/notes/level2/subs/marketing/topics/appMarketNotes')
let marketingQues = require('./academic/notes/level2/subs/marketing/topics/appmarketQues')
let marketingSugg = require('./academic/notes/level2/subs/marketing/topics/appMarketSugg')
let marketingIntro = require('./academic/notes/level2/subs/marketing/topics/appmarketIntro')
let marketingFuncMarket = require('./academic/notes/level2/subs/marketing/topics/appMarketFuncMarket')
let marketingField = require('./academic/notes/level2/subs/marketing/topics/appMarketField')
let marketingConcept = require('./academic/notes/level2/subs/marketing/topics/appMarketConcept')
let marketingOrientation = require('./academic/notes/level2/subs/marketing/topics/appMarketOrientation')
let marketingMicroEnv = require('./academic/notes/level2/subs/marketing/topics/appMarketMicroEnv')
let marketingMacroEnv = require('./academic/notes/level2/subs/marketing/topics/appMarketMacroEnv')
let marketingSegment = require('./academic/notes/level2/subs/marketing/topics/appMarketSegment')
let marketingTarget = require('./academic/notes/level2/subs/marketing/topics/appMarketTarget')
let marketingDiffPos = require('./academic/notes/level2/subs/marketing/topics/appMarketDiffPos')
let marketingChannelDist = require('./academic/notes/level2/subs/marketing/topics/appMarketChannelDist')
let marketingRetail = require('./academic/notes/level2/subs/marketing/topics/appMarketRetail')
let marketingPrice = require('./academic/notes/level2/subs/marketing/topics/appMarketPrice')
let marketingConsumerBuyer = require('./academic/notes/level2/subs/marketing/topics/appMarketingConsumer')
let marketingBranding = require('./academic/notes/level2/subs/marketing/topics/appMarketBrand')
let marketingNewProduct = require('./academic/notes/level2/subs/marketing/topics/appMarketNewProd')
let marketingAdvert = require('./academic/notes/level2/subs/marketing/topics/appMarketAdvert')
let marketingCompStrat = require('./academic/notes/level2/subs/marketing/topics/appMarketCompStrat')
let marketingMajorPrice = require('./academic/notes/level2/subs/marketing/topics/appMarketMajorPrice')


//am1
let am1AppFlow = require('./academic/notes/level2/subs/am1/am1')
let am1Books = require('./academic/notes/level2/subs/am1/topics/appAm1Books')
let am1Notes = require('./academic/notes/level2/subs/am1/topics/appAM1Notes')
let am1Ques = require('./academic/notes/level2/subs/am1/topics/appAm1Ques')
let am1Intro = require('./academic/notes/level2/subs/am1/topics/appAm1Intro')
let am1StructTex = require('./academic/notes/level2/subs/am1/topics/appAm1StructTex')
let am1Sizing = require('./academic/notes/level2/subs/am1/topics/appAm1Sizing')
let am1Seam = require('./academic/notes/level2/subs/am1/topics/appAm1Seam')
let am1Trim = require('./academic/notes/level2/subs/am1/topics/appAm1trim')
let am1Inter = require('./academic/notes/level2/subs/am1/topics/appAm1Inter')
let am1Pattern = require('./academic/notes/level2/subs/am1/topics/appAM1Pattern')
let am1Marker = require('./academic/notes/level2/subs/am1/topics/appAm1Marker')
let am1Spread = require('./academic/notes/level2/subs/am1/topics/appAm1Spreading')
let am1FabCut = require('./academic/notes/level2/subs/am1/topics/appAm1FabCut')
let am1FabInspection = require('./academic/notes/level2/subs/am1/topics/appAm1FabInspection')

//stat
let statAppFlow = require('./academic/notes/level2/subs/stat/stat')
let statBooks = require('./academic/notes/level2/subs/stat/topics/appStatBooks')
let statNotes = require('./academic/notes/level2/subs/stat/topics/appStatNotes')
let statProbab = require('./academic/notes/level2/subs/stat/topics/appStatProbab')
let statIntro = require('./academic/notes/level2/subs/stat/topics/appStatIntro')
let statCentral = require('./academic/notes/level2/subs/stat/topics/appStatCentral')
let statCV = require('./academic/notes/level2/subs/stat/topics/appStatCv')
let statMoments = require('./academic/notes/level2/subs/stat/topics/appStatMoments')
let statShapeCharac = require('./academic/notes/level2/subs/stat/topics/appStatShapeCharc')
let statDesignExp = require('./academic/notes/level2/subs/stat/topics/appStatDesignExp')
let statNormal = require('./academic/notes/level2/subs/stat/topics/appStatNormal')
let statBinomial = require('./academic/notes/level2/subs/stat/topics/appStatBinomial')
let statPoission = require('./academic/notes/level2/subs/stat/topics/appStatPoission')
let statRegression = require('./academic/notes/level2/subs/stat/topics/appStatRegression')


//fm1
let fm1AppFlow = require('./academic/notes/level2/subs/fm1/fm1')
let fm1Books = require('./academic/notes/level2/subs/fm1/topics/appFm1Books')
let fm1Notes = require('./academic/notes/level2/subs/fm1/topics/appFm1Notes')
let fm1Sugg = require('./academic/notes/level2/subs/fm1/topics/appFm1Sugg')
let fm1Ques = require('./academic/notes/level2/subs/fm1/topics/appFm1Ques')
let fm1Loom = require('./academic/notes/level2/subs/fm1/topics/appFm1loom')
let fm1MotionWeav = require('./academic/notes/level2/subs/fm1/topics/appFm1MotionsWeav')
let fm1Intro = require('./academic/notes/level2/subs/fm1/topics/appFm1Intro')
let fm1Shedding = require('./academic/notes/level2/subs/fm1/topics/appFm1Shedding')
let fm1Weaving = require('./academic/notes/level2/subs/fm1/topics/appFm1Weav')
let fm1Sizing = require('./academic/notes/level2/subs/fm1/topics/appFm1Sizing')
let fm1Winding = require('./academic/notes/level2/subs/fm1/topics/appFm1Winding')
let fm1Dobby = require('./academic/notes/level2/subs/fm1/topics/appFm1Dobby')
let fm1Warping = require('./academic/notes/level2/subs/fm1/topics/appFm1Warping')
let fm1Tappet = require('./academic/notes/level2/subs/fm1/topics/appFm1Tappet')
let fm1Picking = require('./academic/notes/level2/subs/fm1/topics/appFm1Pick')
let fm1Beatup = require('./academic/notes/level2/subs/fm1/topics/appFm1beatup')
let fm1Selvedge = require('./academic/notes/level2/subs/fm1/topics/appFm1Selvedge')
let fm1Takeup = require('./academic/notes/level2/subs/fm1/topics/appFm1Takeup')
let fm1LetOff = require('./academic/notes/level2/subs/fm1/topics/appFm1letoff')
let fm1Denim = require('./academic/notes/level2/subs/fm1/topics/appFm1Denim')
let fm1StopMotions = require('./academic/notes/level2/subs/fm1/topics/appFm1StopMotions')
let fm1Jacquard = require('./academic/notes/level2/subs/fm1/topics/appFm1Jacquard')

//ym1
let ym1AppFlow = require('./academic/notes/level2/subs/ym1/ym1')
let ym1Intro = require('./academic/notes/level2/subs/ym1/topics/appYm1Intro')
let ym1IndeterStr = require('./academic/notes/level2/subs/ym1/topics/appYm1IndeStr')
let ym1Blowroom = require('./academic/notes/level2/subs/ym1/topics/appYm1Blowroom')
let ym1Mixing = require('./academic/notes/level2/subs/ym1/topics/appYm1Mixing')
let ym1FibreProp = require('./academic/notes/level2/subs/ym1/topics/appYm1FibreProp')
let ym1yarnCond = require('./academic/notes/level2/subs/ym1/topics/appYm1YarnCond')
let ym1Comber = require('./academic/notes/level2/subs/ym1/topics/appYm1Comber')
let ym1Drawframe = require('./academic/notes/level2/subs/ym1/topics/appYm1DrawFrame')
let ym1Winding = require('./academic/notes/level2/subs/ym1/topics/appYm1Winding')
let ym1LapFormer = require('./academic/notes/level2/subs/ym1/topics/appYm1LapFormer')
let ym1Carding = require('./academic/notes/level2/subs/ym1/topics/appYm1Carding')
let ym1RingFrame = require('./academic/notes/level2/subs/ym1/topics/appYm1RingFrame')
let ym1SpeedSimplex = require('./academic/notes/level2/subs/ym1/topics/appYm1Simplex')

//ttqc
let ttqcAppFlow = require('./academic/notes/level2/subs/ttqc/ttqc')
let ttqcBooks = require('./academic/notes/level2/subs/ttqc/topics/appTtqcBooks')
let ttqcNotes = require('./academic/notes/level2/subs/ttqc/topics/appttqcNotes')
let ttqcCount = require('./academic/notes/level2/subs/ttqc/topics/appttqcCount')
let ttqcCrimp = require('./academic/notes/level2/subs/ttqc/topics/appttqcCrimp')
let ttqcTwist = require('./academic/notes/level2/subs/ttqc/topics/appTtqcTwist')
let ttqcIntro = require('./academic/notes/level2/subs/ttqc/topics/appttqcIntro')
let ttqcMoistureRH = require('./academic/notes/level2/subs/ttqc/topics/appttqcRH')
let ttqcNeps = require('./academic/notes/level2/subs/ttqc/topics/appTtqcNeps')
let ttqcSampling = require('./academic/notes/level2/subs/ttqc/topics/appTtqcSampling')
let ttqcFibProp = require('./academic/notes/level2/subs/ttqc/topics/appTtqcFibProp')
let ttqcHVI = require('./academic/notes/level2/subs/ttqc/topics/appTtqcHVI')
let ttqcAfis = require('./academic/notes/level2/subs/ttqc/topics/appTtqcAfis')

//tp
let tpAppFlow = require('./academic/notes/level2/subs/tp/tp')
let tpBooks = require('./academic/notes/level2/subs/tp/topics/apptpBooks')
let tpNotes = require('./academic/notes/level2/subs/tp/topics/apptpNotes')
let tpSugg = require('./academic/notes/level2/subs/tp/topics/appTpSugg')
let tpQues = require('./academic/notes/level2/subs/tp/topics/appTpQues')
let tpSwelling = require('./academic/notes/level2/subs/tp/topics/appTpSwelling')
let tpFriction = require('./academic/notes/level2/subs/tp/topics/appTpFriction')
let tpJamming = require('./academic/notes/level2/subs/tp/topics/apptpYarnJamming')
let tpOptical = require('./academic/notes/level2/subs/tp/topics/appTpOpticalProp')
let tpFibMig = require('./academic/notes/level2/subs/tp/topics/appTpFibreMig')
let tpThermalProp = require('./academic/notes/level2/subs/tp/topics/appTpThermalProp')
let tpFibDraw = require('./academic/notes/level2/subs/tp/topics/appTpFibDraw')
let tpXrayDiff = require('./academic/notes/level2/subs/tp/topics/appTpXray')
let tpYarnStruct = require('./academic/notes/level2/subs/tp/topics/appTpYarnStruct')
let tpFabGeo = require('./academic/notes/level2/subs/tp/topics/appTpFabGeo')
let tpTensileProp = require('./academic/notes/level2/subs/tp/topics/appTpTensileProp')


//feee
let feeeAppFlow = require('./academic/notes/level2/subs/feee/feee')
let feeeBooks = require('./academic/notes/level2/subs/feee/topics/appFeeeBooks')
let feeeNotes = require('./academic/notes/level2/subs/feee/topics/appFeeeNotes')
let feeeQues = require('./academic/notes/level2/subs/feee/topics/appFeeeQues')
let feeeCh1 = require('./academic/notes/level2/subs/feee/topics/appFeeeCh1')
let feeeCh2 = require('./academic/notes/level2/subs/feee/topics/appFeeeCh2')
let feeeCh3 = require('./academic/notes/level2/subs/feee/topics/appFeeeCh3')
let feeeCh4 = require('./academic/notes/level2/subs/feee/topics/appFeeeCh4')
let feeeCh5 = require('./academic/notes/level2/subs/feee/topics/appFeeeCh5')
let feeeCh8 = require('./academic/notes/level2/subs/feee/topics/appFeeeCh8')
let feeeWyeDelta = require('./academic/notes/level2/subs/feee/topics/appFeeeWyeDelta')
let feeeRMS = require('./academic/notes/level2/subs/feee/topics/appFeeeRMS')
let feeeCirAnal = require('./academic/notes/level2/subs/feee/topics/appFeeeCircuitAnal')


//mmtf
let mmtfAppFlow = require('./academic/notes/level2/subs/mmtf/mmtf')
let mmtfBooks = require('./academic/notes/level2/subs/mmtf/topics/appMMTFBooks')
let mmtfNotes = require('./academic/notes/level2/subs/mmtf/topics/appMMTFNotes')
let mmtfSugg = require('./academic/notes/level2/subs/mmtf/topics/appmmtfSugg')
let mmtfIntro = require('./academic/notes/level2/subs/mmtf/topics/appmmtfIntro')
let mmtfViscoseRayon = require('./academic/notes/level2/subs/mmtf/topics/appmmtfViscoseRayon')
let mmtfSpinSys = require('./academic/notes/level2/subs/mmtf/topics/appmmtfSpinSys')
let mmtfHighPerf = require('./academic/notes/level2/subs/mmtf/topics/appMmtfHighPerf')
let mmtfPolyamide = require('./academic/notes/level2/subs/mmtf/topics/appMmtfplyamide')
let mmtfModal = require('./academic/notes/level2/subs/mmtf/topics/appMMTFModal')
let mmtfElastomer = require('./academic/notes/level2/subs/mmtf/topics/appMmtfElastomer')
let mmtfPolyolefin = require('./academic/notes/level2/subs/mmtf/topics/appMmtfPolyolefin')
let mmtfCarbonFib = require('./academic/notes/level2/subs/mmtf/topics/appMMtfCarbonFib')
let mmtfAcetate = require('./academic/notes/level2/subs/mmtf/topics/appmmtfacetatetriace')
let mmtfBiComp = require('./academic/notes/level2/subs/mmtf/topics/appmmtfBiComp')
let mmtfPolyester = require('./academic/notes/level2/subs/mmtf/topics/appmmtfPolyester')
let mmtfAcrylic = require('./academic/notes/level2/subs/mmtf/topics/appmmtfAcry')
let mmtfVectran = require('./academic/notes/level2/subs/mmtf/topics/appmmtfVectran')
let mmtfRegenProtein = require('./academic/notes/level2/subs/mmtf/topics/appmmtfRegenProtein')
let mmtfGlassFib = require('./academic/notes/level2/subs/mmtf/topics/appmmtfGlassFib')
let mmtfLyocell = require('./academic/notes/level2/subs/mmtf/topics/appmmtfLyocell')
let mmtfNylon = require('./academic/notes/level2/subs/mmtf/topics/appmmtfNylon')


//mp
let mpAppFlow = require('./academic/notes/level2/subs/mp/mp')
let mpDefects = require('./academic/notes/level2/subs/mp/topics/appMpDefects')
let mpLathe = require('./academic/notes/level2/subs/mp/topics/appMpLathe')
let mpMilling = require('./academic/notes/level2/subs/mp/topics/appMpMilling')
let mpCastingVideo = require('./academic/notes/level2/subs/mp/topics/appMpCastingVideo')
let mpWelding = require('./academic/notes/level2/subs/mp/topics/appMpWelding')
let mpHotCold = require('./academic/notes/level2/subs/mp/topics/appMpHotCold')
let mpCeramics = require('./academic/notes/level2/subs/mp/topics/appMpCeramics')
let mpPlastics = require('./academic/notes/level2/subs/mp/topics/appMpPlastics')
let mpSlideWays = require('./academic/notes/level2/subs/mp/topics/appMpSlideWays')
let mpShaper = require('./academic/notes/level2/subs/mp/topics/appMpShaper')
let mpEDM = require('./academic/notes/level2/subs/mp/topics/appMpEDM')
let mpNonConv = require('./academic/notes/level2/subs/mp/topics/appMpNonConvMC')
let mpMCEconomics = require('./academic/notes/level2/subs/mp/topics/appMpMcEcono')
let mpCasting = require('./academic/notes/level2/subs/mp/topics/appMpMcEcono')


//fme
let fmeAppFlow = require('./academic/notes/level2/subs/fme/fme')
let fmeBooks = require('./academic/notes/level2/subs/fme/topics/appFmeBooks')
let fmeNotes = require('./academic/notes/level2/subs/fme/topics/appFmeNotes')
let fmeQues = require('./academic/notes/level2/subs/fme/topics/appFmeQues')
let fmeSugg = require('./academic/notes/level2/subs/fme/topics/appFmeSugg')
let fmeBoiler = require('./academic/notes/level2/subs/fme/topics/appFmeBoiler')
let fmePowerRef = require('./academic/notes/level2/subs/fme/topics/appFmePowerRef')
let fmeSteamTurb = require('./academic/notes/level2/subs/fme/topics/appFmeSteamTurbine')
let fmeThermalEng = require('./academic/notes/level2/subs/fme/topics/appFMEThermalEng')
let fmeFluidMech = require('./academic/notes/level2/subs/fme/topics/appFmeFluidMech')
let fmeEnergProc = require('./academic/notes/level2/subs/fme/topics/appFmeEngProc')
let fmeSolid = require('./academic/notes/level2/subs/fme/topics/appFmeSolid')
let fmeGearTrain = require('./academic/notes/level2/subs/fme/topics/appFmeGearTrain')
let fmePump = require('./academic/notes/level2/subs/fme/topics/appFmePumpCompre')
let fmeStress = require('./academic/notes/level2/subs/fme/topics/appFmeStressStrain')
let fmeEngPetrol = require('./academic/notes/level2/subs/fme/topics/appFmeEngPetrol')
let fmeEngCombus = require('./academic/notes/level2/subs/fme/topics/appFmeEngCombus')
let fmeBeam = require('./academic/notes/level2/subs/fme/topics/appFmeBeam')
let fmeBelt = require('./academic/notes/level2/subs/fme/topics/appFmeBelt')
let fmeCentroid = require('./academic/notes/level2/subs/fme/topics/appFmeCentroid')
let fmeMOI = require('./academic/notes/level2/subs/fme/topics/appFmeMOI')
let fmeColumn = require('./academic/notes/level2/subs/fme/topics/appFmeColumn')


//ap1
let ap1AppFlow = require('./academic/notes/level2/subs/ap1/ap1')
let ap1Books = require('./academic/notes/level2/subs/ap1/topics/appAp1Books')
let ap1Ques = require('./academic/notes/level2/subs/ap1/topics/appAp1Ques')
let ap1Sizing = require('./academic/notes/level2/subs/ap1/topics/appAp1Sizing')
let ap1Trim = require('./academic/notes/level2/subs/ap1/topics/appAp1trim')
let ap1Inter = require('./academic/notes/level2/subs/ap1/topics/appAp1Interlining')
let ap1FabCut = require('./academic/notes/level2/subs/ap1/topics/appAp1FabCut')
let ap1Pattern = require('./academic/notes/level2/subs/ap1/topics/appAP1Pattern')
let ap1FabSpread = require('./academic/notes/level2/subs/ap1/topics/appAp1FabSpread')
let ap1Marker = require('./academic/notes/level2/subs/ap1/topics/appAP1marker')
let ap1Sewing = require('./academic/notes/level2/subs/ap1/topics/appAP1SewingThread')


//ctca
let ctcaAppFlow = require('./academic/notes/level2/subs/ctca/ctca')
let ctcaBooks = require('./academic/notes/level2/subs/ctca/topics/appCtcaBooks')
let ctcaSheets = require('./academic/notes/level2/subs/ctca/topics/appCtcaSheets')
let ctcaThickeningAgents = require('./academic/notes/level2/subs/ctca/topics/appCtcaThickAgent')
let ctcaWater = require('./academic/notes/level2/subs/ctca/topics/appCtcaWater')
let ctcaSurfactants = require('./academic/notes/level2/subs/ctca/topics/appCtcaSufact')
let ctcaBleach = require('./academic/notes/level2/subs/ctca/topics/appCtcaBleach')
let ctcaSolutions = require('./academic/notes/level2/subs/ctca/topics/appCtcaSolutions')
let ctcaColloid = require('./academic/notes/level2/subs/ctca/topics/appCtcaColloid')


//fdce
let fdceAppFlow = require('./academic/notes/level2/subs/fdce/fdce')
let fdceDyes = require('./academic/notes/level2/subs/fdce/topics/appFdceDye')
let fdceChromato = require('./academic/notes/level2/subs/fdce/topics/appFdceChromato')
let fdcePolarity = require('./academic/notes/level2/subs/fdce/topics/appFdcePolarity')
let fdceSepaPuri = require('./academic/notes/level2/subs/fdce/topics/appFdceSepaPuri')
let fdceBalanceChem = require('./academic/notes/level2/subs/fdce/topics/appFdceBalanceChem')
let fdceFiltration = require('./academic/notes/level2/subs/fdce/topics/appFdceFiltra')


//fd2
let fd2AppFlow = require('./academic/notes/level2/subs/fd2/fd2')


//weaving prep
let weavingPrepAppFlow = require('./academic/notes/level2/subs/weave_prep/weave_prep')
let weavingPrepBooks = require('./academic/notes/level2/subs/weave_prep/topics/weavePrepBooks')


//wpp 
let wppAppFlow = require('./academic/notes/level2/subs/wpp/wpp')
let wppQues = require('./academic/notes/level2/subs/wpp/topics/appWppQues')
let wppPretreatment = require('./academic/notes/level2/subs/wpp/topics/appWppPretreatment')
let wppSingeing = require('./academic/notes/level2/subs/wpp/topics/appWppSingei')
let wppDesizing = require('./academic/notes/level2/subs/wpp/topics/appWppDesizing')
let wppImpurities = require('./academic/notes/level2/subs/wpp/topics/appWppImpurities')
let wppBioScouring = require('./academic/notes/level2/subs/wpp/topics/appWppBioScouring')



//wp1
let wp1AppFlow = require('./academic/notes/level2/subs/wp1/wp1')
let wp1Books = require('./academic/notes/level2/subs/wp1/topics/appWp1Books')
let wp1Notes = require('./academic/notes/level2/subs/wp1/topics/appWp1Notes')
let wp1Ques = require('./academic/notes/level2/subs/wp1/topics/appWp1Ques')
let wp1Intro = require('./academic/notes/level2/subs/wp1/topics/appWp1Intro')
let wp1Water = require('./academic/notes/level2/subs/wp1/topics/appWp1Water')
let wp1IntroDye = require('./academic/notes/level2/subs/wp1/topics/appWp1IntroDye')
let wp1GenConcepts = require('./academic/notes/level2/subs/wp1/topics/appWp1genConc')
let wp1ColorFastness = require('./academic/notes/level2/subs/wp1/topics/appWp1ColFast')
let wp1Stripping = require('./academic/notes/level2/subs/wp1/topics/appWP1Strip')
let wp1Singeing = require('./academic/notes/level2/subs/wp1/topics/appWp1Singeing')
let wp1Scouring = require('./academic/notes/level2/subs/wp1/topics/appWp1Scouring')
let wp1Pigment = require('./academic/notes/level2/subs/wp1/topics/appWP1Pigment')
let wp1TexFinish = require('./academic/notes/level2/subs/wp1/topics/appWp1TexFinish')
let wp1VatDyes = require('./academic/notes/level2/subs/wp1/topics/appWp1vatDye')
let wp1Desizing = require('./academic/notes/level2/subs/wp1/topics/appWP1Desizing')
let wp1BasicDye = require('./academic/notes/level2/subs/wp1/topics/appWp1BasicDye')
let wp1AcidDye = require('./academic/notes/level2/subs/wp1/topics/appWp1AcidDye')
let wp1Bleach = require('./academic/notes/level2/subs/wp1/topics/appWp1Bleach')
let wp1DisperseDye = require('./academic/notes/level2/subs/wp1/topics/appWp1Disperse')
let wp1KierBoiler = require('./academic/notes/level2/subs/wp1/topics/appWp1KierBoiler')
let wp1DyeingFault = require('./academic/notes/level2/subs/wp1/topics/appWp1DyeFault')
let wp1ReactiveDye = require('./academic/notes/level2/subs/wp1/topics/appWp1Reactive')
let wp1DirectDye = require('./academic/notes/level2/subs/wp1/topics/appWp1DirectDye')
let wp1JiggerMC = require('./academic/notes/level2/subs/wp1/topics/appWp1JiggerMC')
let wp1ColorTest = require('./academic/notes/level2/subs/wp1/topics/appWp1ColorTest')
let wp1FoldingTest = require('./academic/notes/level2/subs/wp1/topics/apPWp1FoldTest')
let wp1WashingMC = require('./academic/notes/level2/subs/wp1/topics/appWp1WashingMC')



//acfd
let acfdAppFlow = require('./academic/notes/level3/subs/acfd/acfd')


//tcp
let tcpAppFlow = require('./academic/notes/level3/subs/tcp/tcp')
let tcpKpc = require('./academic/notes/level3/subs/tcp/topics/appTcpKpc')


//pcs
let pcsAppFlow = require('./academic/notes/level3/subs/pcs/pcs')
let pcsBooks = require('./academic/notes/level3/subs/pcs/topics/appPcsBooks')


//lss
let lssAppFlow = require('./academic/notes/level3/subs/lss/lss')
let lssDrawframe = require('./academic/notes/level3/subs/lss/topics/appLssDrawframe')
let lssSpreader = require('./academic/notes/level3/subs/lss/topics/appLssSpreader')


//mpp
let mppAppFlow = require('./academic/notes/level3/subs/mpp/mpp')


//knit1
let knit1AppFlow = require('./academic/notes/level3/subs/knit1/kint1')
let knit1Lecture = require('./academic/notes/level3/subs/knit1/topics/appKnit1Lecture')

//im
let imAppFlow = require('./academic/notes/level3/subs/im/im')
let imLecture = require('./academic/notes/level3/subs/im/topics/appImLecture')
let imLec1 = require('./academic/notes/level3/subs/im/topics/appImLec1')
let imLec2 = require('./academic/notes/level3/subs/im/topics/appImLec2')
let imLec3 = require('./academic/notes/level3/subs/im/topics/appImLec3')
let imLec4 = require('./academic/notes/level3/subs/im/topics/appImLec3')
let imMarket = require('./academic/notes/level3/subs/im/topics/appImMarket')
let imMarketMix = require('./academic/notes/level3/subs/im/topics/appImMarketMix')
let imProjectFeas = require('./academic/notes/level3/subs/im/topics/appImProjFeas')
let imNatureScope = require('./academic/notes/level3/subs/im/topics/appImNatureScope')
let imManageFunc = require('./academic/notes/level3/subs/im/topics/appImManageFunc')
let ImIndusManage = require('./academic/notes/level3/subs/im/topics/appImIndusManage')
let ImTechManage = require('./academic/notes/level3/subs/im/topics/appImTechManage')
let ImProdnManage = require('./academic/notes/level3/subs/im/topics/appImProdnManage')


//pd
let pdAppFlow = require('./academic/notes/level3/subs/pd/pd')
let pdIntro = require('./academic/notes/level3/subs/pd/topics/appPdIntro')
let pdUnderstandingCustomer = require('./academic/notes/level3/subs/pd/topics/appPdUndersatndingCustomer')
let pdPlanningDesign = require('./academic/notes/level3/subs/pd/topics/pdPlaaningDesign')
let pdQualityFunc = require('./academic/notes/level3/subs/pd/topics/pdQualityFunc')
let pdDesAssembly = require('./academic/notes/level3/subs/pd/topics/appPDDesAssembly')
let pdBooks = require('./academic/notes/level3/subs/pd/topics/appPdBooks')
let pdDFR = require('./academic/notes/level3/subs/pd/topics/appPDDFR')
let pdDFManu = require('./academic/notes/level3/subs/pd/topics/appPDDesManu')
let pdDFMain = require('./academic/notes/level3/subs/pd/topics/appPDDesMain')
let pdDFFast = require('./academic/notes/level3/subs/pd/topics/appPDFast')
let pdDDesTension = require('./academic/notes/level3/subs/pd/topics/appPdDesTension')
let pdDLoadStress = require('./academic/notes/level3/subs/pd/topics/appPdLoadStress')


//tqm
let tqmAppFlow = require('./academic/notes/level3/subs/tqm/tqm')
let tqmTotalQM = require('./academic/notes/level3/subs/tqm/topics/appTqmTotalQM')
let tqmQualityReliability = require('./academic/notes/level3/subs/tqm/topics/appTqmQualityRelia')
let tqmContinuousImprovement = require('./academic/notes/level3/subs/tqm/topics/appTqmContImprove')
let tqmQualityStd = require('./academic/notes/level3/subs/tqm/topics/appTqmQualityStd')
let tqmIntroQM = require('./academic/notes/level3/subs/tqm/topics/appTqmIntroQM')
let tqmControlMeasure = require('./academic/notes/level3/subs/tqm/topics/appTqmControlMeas')
let tqmManageApproach = require('./academic/notes/level3/subs/tqm/topics/appTqmManageAppro')
let tqmQCTools = require('./academic/notes/level3/subs/tqm/topics/appTqmQCTools')

//ttm
let ttmAppFlow = require('./academic/notes/level3/subs/ttm/ttm')


//mic
let micAppFlow = require('./academic/notes/level3/subs/mic/mic')
let micBooks = require('./academic/notes/level3/subs/mic/topics/appMicBooks')
let micIntro = require('./academic/notes/level3/subs/mic/topics/appMicIntro')
let micSystemElement = require('./academic/notes/level3/subs/mic/topics/appMicSystemEl')
let micControlSys = require('./academic/notes/level3/subs/mic/topics/appMicControlSys')
let micLimitFit = require('./academic/notes/level3/subs/mic/topics/appMicLimitFit')
let micNonDes = require('./academic/notes/level3/subs/mic/topics/appMicNonDes')
let micSurfaceFinish = require('./academic/notes/level3/subs/mic/topics/appMicMeasSurfaceFin')
let micThreadMeasure = require('./academic/notes/level3/subs/mic/topics/appMicThreadMeas')
let micAngular = require('./academic/notes/level3/subs/mic/topics/appMicAngular')
let micLinear = require('./academic/notes/level3/subs/mic/topics/appMicLinear')
let micCh5 = require('./academic/notes/level3/subs/mic/topics/appMicCh5')
let micGearMes = require('./academic/notes/level3/subs/mic/topics/appMicGearMes')
let micFatigueFail = require('./academic/notes/level3/subs/mic/topics/appMicFatigueFail')


//ace
let aceAppFlow = require('./academic/notes/level3/subs/ace/ace')
let aceBooks = require('./academic/notes/level3/subs/ace/topics/appAceBooks')
let aceIntroControl = require('./academic/notes/level3/subs/ace/topics/appAceIntroControl')
let aceModelFreq = require('./academic/notes/level3/subs/ace/topics/appAceModelFreq')
let aceTimeRes = require('./academic/notes/level3/subs/ace/topics/appAceTimeResponse')
let aceSensors = require('./academic/notes/level3/subs/ace/topics/appAceSensors')
let aceNumberSys = require('./academic/notes/level3/subs/ace/topics/appAceNumbersSys')
let aceTransferFunc = require('./academic/notes/level3/subs/ace/topics/appAceTransferFunc')
let aceLogicGates = require('./academic/notes/level3/subs/ace/topics/appAceLogic')
let aceHydraulics = require('./academic/notes/level3/subs/ace/topics/appAceHydraulics')
let acePneumatics = require('./academic/notes/level3/subs/ace/topics/appAcePneumatics')
let aceIntroRobotics = require('./academic/notes/level3/subs/ace/topics/appAceIntroRobot')
let aceJoints = require('./academic/notes/level3/subs/ace/topics/appAceJoints')
let aceActuator = require('./academic/notes/level3/subs/ace/topics/appAceActuator')
let aceGrips = require('./academic/notes/level3/subs/ace/topics/appAcegrips')
let aceStructElements = require('./academic/notes/level3/subs/ace/topics/appAceStructElements')


//acm
let acmAppFlow = require('./academic/notes/level3/subs/acm/acm')
let acmBooks = require('./academic/notes/level3/subs/acm/topics/appAcmBooks')
let acmIntroCost = require('./academic/notes/level3/subs/acm/topics/appAcmIntroCostManage')
let acmInterestedUsers = require('./academic/notes/level3/subs/acm/topics/appAcmInterestedUsers')
let acmAccinAction = require('./academic/notes/level3/subs/acm/topics/appAcmAccinAction')
let acmRecordingProcess = require('./academic/notes/level3/subs/acm/topics/appAcmRecordingProcess')
let acmCostBehaviour = require('./academic/notes/level3/subs/acm/topics/appAcmCostBehav')
let acmAccForMerch = require('./academic/notes/level3/subs/acm/topics/appAcmAccForMerch')
let acmCostAccSys = require('./academic/notes/level3/subs/acm/topics/appAcmCostAccSys')
let acmCostTech = require('./academic/notes/level3/subs/acm/topics/appAcmCostingTech')


//fsd
let fsdAppFlow = require('./academic/notes/level3/subs/fsd/fsd')
let fsdBooks = require('./academic/notes/level3/subs/fsd/topics/appFsdBooks')
let fsdIntro = require('./academic/notes/level3/subs/fsd/topics/appFsdIntro')
let fsdPlainWeave = require('./academic/notes/level3/subs/fsd/topics/appFsdPlainWea')
let fsdTwill = require('./academic/notes/level3/subs/fsd/topics/appFsdTwill')
let fsdFancy = require('./academic/notes/level3/subs/fsd/topics/appFsdFancy')
let fsdColorWeave = require('./academic/notes/level3/subs/fsd/topics/appFsdColorWeave')
let fsdSatinWeave = require('./academic/notes/level3/subs/fsd/topics/appFsdSatin')


//am2
let am2AppFlow = require('./academic/notes/level3/subs/am2/am2')
let am2Books = require('./academic/notes/level3/subs/am2/topics/appAm2Books')
let am2ClassLec = require('./academic/notes/level3/subs/am2/topics/appAm2ClassLec')
let am2LineBalance = require('./academic/notes/level3/subs/am2/topics/appAm2LineBalancing')
let am2Excel = require('./academic/notes/level3/subs/am2/topics/appAm2CostingExcel')


//ap2
let ap2AppFlow = require('./academic/notes/level3/subs/ap2/ap2')
let ap2Folding = require('./academic/notes/level3/subs/ap2/topics/appAp2Folding')
let ap2Stitch = require('./academic/notes/level3/subs/ap2/topics/appAP2Stitch')
let ap2LockStitch = require('./academic/notes/level3/subs/ap2/topics/appAp2LockStictch')
let ap2Pressing = require('./academic/notes/level3/subs/ap2/topics/appAp2PressFinish')
let ap2Inspection = require('./academic/notes/level3/subs/ap2/topics/appAp2AppInspec')


//economics
let econoAppFlow = require('./academic/notes/level3/subs/economics/economics')
let econoBooks = require('./academic/notes/level3/subs/economics/topics/appEcoBooks')
let econoClassLec = require('./academic/notes/level3/subs/economics/topics/appEconoClassLec')


//fm2
let fm2AppFlow = require('./academic/notes/level3/subs/fm2/fm2')
let fm2Books = require('./academic/notes/level3/subs/fm2/topics/appFm2Books')
let fm2ClassLec = require('./academic/notes/level3/subs/fm2/topics/appFm2ClassLec')
let fm2Notes = require('./academic/notes/level3/subs/fm2/topics/appFm2HandNote')
let fm2BasicWarp = require('./academic/notes/level3/subs/fm2/topics/appFm2BasicWarp')
let fm2Misc = require('./academic/notes/level3/subs/fm2/topics/appFm2Misc')


//wp2
let wp2AppFlow = require('./academic/notes/level3/subs/wp2/wp2')
let wp2Books = require('./academic/notes/level3/subs/wp2/topics/appWp2Books')
let wp2ClassLec = require('./academic/notes/level3/subs/wp2/topics/appWp2ClassLec')

//weave2
let weave2AppFlow = require('./academic/notes/level3/subs/weave2/weave2')


//ym2
let ym2AppFlow = require('./academic/notes/level3/subs/ym2/ym2')
let ym2Books = require('./academic/notes/level3/subs/ym2/topics/appYm2Books')
let ym2ClassLec = require('./academic/notes/level3/subs/ym2/topics/appYm2ClassLec')
let ym2Notes = require('./academic/notes/level3/subs/ym2/topics/appYm2Notes')
let ym2SpecialYarns = require('./academic/notes/level3/subs/ym2/topics/appYm2SpecialYarns')
let ym2IntroModern = require('./academic/notes/level3/subs/ym2/topics/appYm2Intro')
let ym2Rotor = require('./academic/notes/level3/subs/ym2/topics/appYm2Rotor')
let ym2Spinning = require('./academic/notes/level3/subs/ym2/topics/appYm2Spinning')


//bil
let bilAppFlow = require('./academic/notes/level4/subs/bil/bil')
let bilLaborLaw = require('./academic/notes/level4/subs/bil/topics/appBilLaborLaw')

//hrm
let hrmAppFlow = require('./academic/notes/level4/subs/hrm/hrm')


//bs
let bsAppFlow = require('./academic/notes/level4/subs/bs/bs')

//epd
let epdAppFlow = require('./academic/notes/level4/subs/epd/epd')


//ir
let irAppFlow = require('./academic/notes/level4/subs/ir/ir')
let irIndustrialRelation = require('./academic/notes/level4/subs/ir/topics/appIrIndusRela')


//ppc
let ppcAppFlow = require('./academic/notes/level4/subs/ppc/ppc')


//tam
let tamAppFlow = require('./academic/notes/level4/subs/tam/tam')
let tamIntroMerch = require('./academic/notes/level4/subs/tam/topics/appTamIntroMerch')


//labs
//labLevels
let labLevel1Subs = require('./academic/labReport/level1/level1Labs')


//lab - chem1
let chem1Labs = require('./academic/labReport/level1/subs/chem1/chem1Labs')
let chem1LabsProcedure = require('./academic/labReport/level1/subs/chem1/topics/appChem1LabsProcedureSheet')
let chem1LabsAcid = require('./academic/labReport/level1/subs/chem1/topics/appChem1LabsAcid')
let chem1LabsBasic = require('./academic/labReport/level1/subs/chem1/topics/appChem1LabsBasic')
let chem1LabsMohr = require('./academic/labReport/level1/subs/chem1/topics/appChem1LabsMohr')
let chem1LabsWetTest = require('./academic/labReport/level1/subs/chem1/topics/appChem1LabsWetTest')
let chem1LabsTitration = require('./academic/labReport/level1/subs/chem1/topics/appChem1LabsTitrations')

//lab - chem2
let chem2Labs = require('./academic/labReport/level1/subs/chem2/chem2Labs')
let chem2LabsPhyProp = require('./academic/labReport/level1/subs/chem2/topics/appChem2LabsPhysProp')
let chem2LabsLass1 = require('./academic/labReport/level1/subs/chem2/topics/appChem2LabsLassTest1')
let chem2LabsLass2 = require('./academic/labReport/level1/subs/chem2/topics/appChem2LabsLassTest2')
let chem2LabsSoluTest = require('./academic/labReport/level1/subs/chem2/topics/appChem2LabsSolubTest')
let chem2LabsAlcIden = require('./academic/labReport/level1/subs/chem2/topics/appChem2LabsAlcIdentify')
let chem2LabsStrengthH2O2 = require('./academic/labReport/level1/subs/chem2/topics/appChem2LabsStrengthH2O2')
let chem2LabsAmountFe2 = require('./academic/labReport/level1/subs/chem2/topics/appChem2LabsAmountFe2')
let chem2LabsCarbonylIden = require('./academic/labReport/level1/subs/chem2/topics/appChem2LabsCarbonylIden')
let chem2LabsCarboxyIden = require('./academic/labReport/level1/subs/chem2/topics/appChem2LabsCarboxylicIden')
let chem2LabsNIden = require('./academic/labReport/level1/subs/chem2/topics/appChem2LabsNIden')
let chem2LabsAmountNa2CO3 = require('./academic/labReport/level1/subs/chem2/topics/appChem2LabsAmountNa2CO3')



//lab - phy1
let phy1Labs = require('./academic/labReport/level1/subs/phy1/phy1Labs')
let phy1LabsM1 = require('./academic/labReport/level1/subs/phy1/topics/appPhy1LabsM1')
let phy1LabsM2 = require('./academic/labReport/level1/subs/phy1/topics/appPhy1LabsM2')
let phy1LabsM3 = require('./academic/labReport/level1/subs/phy1/topics/appPhy1LabsM3')
let phy1LabsM4 = require('./academic/labReport/level1/subs/phy1/topics/appPhy1LabsM4')
let phy1LabsM5 = require('./academic/labReport/level1/subs/phy1/topics/appPhy1LabsM5')
let phy1LabsM6 = require('./academic/labReport/level1/subs/phy1/topics/appPhy1LabsM6')
let phy1LabsO1 = require('./academic/labReport/level1/subs/phy1/topics/appPhy1LabsO1')
let phy1LabsO2 = require('./academic/labReport/level1/subs/phy1/topics/appPhy1LabsO2')
let phy1LabsO3 = require('./academic/labReport/level1/subs/phy1/topics/appPhy1LabsO3')
let phy1LabsO4 = require('./academic/labReport/level1/subs/phy1/topics/appPhy1LabsO4')


//lab - phy2
let phy2Labs = require('./academic/labReport/level1/subs/phy2/phy2Labs')
let phy2LabsE1 = require('./academic/labReport/level1/subs/phy2/topics/appPhy2LabsE1')
let phy2LabsE2 = require('./academic/labReport/level1/subs/phy2/topics/appPhy2LabsE2')
let phy2LabsE3 = require('./academic/labReport/level1/subs/phy2/topics/appPhy2LabsE3')
let phy2LabsE4 = require('./academic/labReport/level1/subs/phy2/topics/appPhy2LabsE4')
let phy2LabsE5 = require('./academic/labReport/level1/subs/phy2/topics/appPhy2LabsE5')
let phy2LabsE6 = require('./academic/labReport/level1/subs/phy2/topics/appPhy2LabsE6')
let phy2LabsE7 = require('./academic/labReport/level1/subs/phy2/topics/appPhy2LabsE7')
let phy2LabsE8 = require('./academic/labReport/level1/subs/phy2/topics/appPhy2LabsE8')
let phy2LabsH1 = require('./academic/labReport/level1/subs/phy2/topics/appPhy2LabsH1')
let phy2LabsH2 = require('./academic/labReport/level1/subs/phy2/topics/appPhy2LabsH2')
let phy2LabsH3 = require('./academic/labReport/level1/subs/phy2/topics/appPhy2LabsH3')
let phy2LabsM1 = require('./academic/labReport/level1/subs/phy2/topics/appPhy2LabsM1')

//lab - msp
let mspLabs = require('./academic/labReport/level1/subs/msp/mspLabs')
let mspLabsLayout = require('./academic/labReport/level1/subs/msp/topics/appMspLabLayout')
let mspLabsHandTools = require('./academic/labReport/level1/subs/msp/topics/appMspLabHandTools')
let mspLabsGrinding = require('./academic/labReport/level1/subs/msp/topics/appMspLabGrinding')
let mspLabsLathe = require('./academic/labReport/level1/subs/msp/topics/appMspLabLathe')
let mspLabsSqKey = require('./academic/labReport/level1/subs/msp/topics/appMspLabSqKey')
let mspLabsMatchingParts = require('./academic/labReport/level1/subs/msp/topics/appMspLabMatchingParts')
let mspLabsMillingMc = require('./academic/labReport/level1/subs/msp/topics/appMspLabMilling')
let mspLabsDrilling = require('./academic/labReport/level1/subs/msp/topics/appMspLabDrilling')
let mspLabsShaper = require('./academic/labReport/level1/subs/msp/topics/appMspLabShaper')
let mspLabsWelding = require('./academic/labReport/level1/subs/msp/topics/appMspLabWelding')
let mspLabsLightMc = require('./academic/labReport/level1/subs/msp/topics/appMspLabLightMc')
let mspLabsArcWelding = require('./academic/labReport/level1/subs/msp/topics/appMspLabArcWelding')
let mspLabsMfgAssm = require('./academic/labReport/level1/subs/msp/topics/appMspLabMfgAssembly')
let mspLabsQuiz = require('./academic/labReport/level1/subs/msp/topics/appMspLabsQuiz')

//lab - bce
let bceLabs = require('./academic/labReport/level1/subs/bce/bceLabs')
let bceLabListen = require('./academic/labReport/level1/subs/bce/topics/appBceLabsListen')
let bceLabReading = require('./academic/labReport/level1/subs/bce/topics/appBceLabsReading')
let bceLabSheet = require('./academic/labReport/level1/subs/bce/topics/appBceLabsSheet')

//lab - ap1
let ap1Labs = require('./academic/labReport/level1/subs/ap1/ap1Labs')
let ap1LabsInterlining = require('./academic/labReport/level1/subs/ap1/topics/appAp1LabsInter')
let ap1LabsStdBody = require('./academic/labReport/level1/subs/ap1/topics/appAp1LabStdBodyMeas')
let ap1LabsFusing = require('./academic/labReport/level1/subs/ap1/topics/appAp1LabsContFusing')
let ap1LabsStrtKnife = require('./academic/labReport/level1/subs/ap1/topics/appAp1LabsStraightKnife')


//lab - cp
let cpLabs = require('./academic/labReport/level1/subs/cp/cpLabs')
let cpLabs1 = require('./academic/labReport/level1/subs/cp/topics/appCpLabs1')
let cpLabs2 = require('./academic/labReport/level1/subs/cp/topics/appCpLabs2')
let cpLabs3 = require('./academic/labReport/level1/subs/cp/topics/appCpLabs3')
let cpLabs4 = require('./academic/labReport/level1/subs/cp/topics/appCpLabs4')
let cpLabs5 = require('./academic/labReport/level1/subs/cp/topics/appCpLabs5')
let cpLabs6 = require('./academic/labReport/level1/subs/cp/topics/appCpLabs6')
let cpLabs7 = require('./academic/labReport/level1/subs/cp/topics/appCpLabs7')
let cpLabs135 = require('./academic/labReport/level1/subs/cp/topics/appCpLabsChap135')

//lab level 2
let labLevel2Subs = require('./academic/labReport/level2/level2Labs')

//lab level 3
let labLevel3Subs = require('./academic/labReport/level3/level3Labs')

//lab2 - am1
let am1Labs = require('./academic/labReport/level2/subs/am1/am1Labs')
let am1LabsAll = require('./academic/labReport/level2/subs/am1/topics/appAm1AllReport')
let am1LabsLayout = require('./academic/labReport/level2/subs/am1/topics/appAm1LabLayout')
let am1LabsStdBody = require('./academic/labReport/level2/subs/am1/topics/appAm1StdBodyMes')

//lab2 - ym1
let ym1Labs = require('./academic/labReport/level2/subs/ym1/ym1Labs')

//lab2 - wp1
let wp1Labs = require('./academic/labReport/level2/subs/wp1/wp1Labs')

//lab3 - acwp
let acwpLabs = require('./academic/labReport/level3/subs/acwp/acwpLabs');

//lab3 - apparel wash
let apparelWashLabs = require('./academic/labReport/level3/subs/apparel_washing/apparelWashLabs');

//lab3 - am2
let am2Labs = require('./academic/labReport/level3/subs/am2/am2Labs');

//lab3 - ap2
let ap2Labs = require('./academic/labReport/level3/subs/ap2/ap2Labs');

//lab3 - fm2
let fm2Labs = require('./academic/labReport/level3/subs/fm2/fm2Labs');

//lab3 - wp2
let wp2Labs = require('./academic/labReport/level3/subs/wp2/wp2Labs');

//lab3 - ym2
let ym2Labs = require('./academic/labReport/level3/subs/ym2/ym2Labs');

//lab3 - pm2
let pm2Labs = require('./academic/labReport/level3/subs/pm2/pm2Labs');

//lab3 - fsd
let fsdLabs = require('./academic/labReport/level3/subs/fsd/fsdLabs');

//lab2 - fm1
let fm1Labs = require('./academic/labReport/level2/subs/fm1/fm1Labs')
let fm1LabsLayout = require('./academic/labReport/level2/subs/fm1/topics/appFm1Layout')
let fm1LabsTappet = require('./academic/labReport/level2/subs/fm1/topics/appFm1Tappet')
let fm1LabsLooming = require('./academic/labReport/level2/subs/fm1/topics/appFm1Looming')
let fm1LabsPackage = require('./academic/labReport/level2/subs/fm1/topics/appFM1Package')
let fm1LabsCheese = require('./academic/labReport/level2/subs/fm1/topics/appFm1CheeseWind')
let fm1LabsHighSpeed = require('./academic/labReport/level2/subs/fm1/topics/appFm1HighSpeed')
let fm1LabsSectional = require('./academic/labReport/level2/subs/fm1/topics/appFm1Sectional')
let fm1LabsConvSizing = require('./academic/labReport/level2/subs/fm1/topics/appFm1ConvSizing')
let fm1LabsDobby = require('./academic/labReport/level2/subs/fm1/topics/appFm1Dobby')
let fm1LabsSizing = require('./academic/labReport/level2/subs/fm1/topics/appFm1Sizing')


//lab2 - sss1
let sss1Labs = require('./academic/labReport/level2/subs/sss1/sss1Labs')

//lab2 - sss2
let sss2Labs = require('./academic/labReport/level2/subs/sss2/sss2Labs')

//lab2 - fme
let fmeLabs = require('./academic/labReport/level2/subs/fme/fmeLabs')

//lab2 - feee
let feeeLabs = require('./academic/labReport/level2/subs/feee/feeeLabs')
let feeeLabsMultimetre = require('./academic/labReport/level2/subs/feee/topics/appFeeeMultimetre')
let feeeLabsOhm = require('./academic/labReport/level2/subs/feee/topics/appFeeeOhm')
let feeeLabsKirchoff = require('./academic/labReport/level2/subs/feee/topics/appFeeeKirchoff')
let feeeLabsRC = require('./academic/labReport/level2/subs/feee/topics/appFeeeRc')
let feeeLabsRL = require('./academic/labReport/level2/subs/feee/topics/appFeeeRl')
let feeeLabsRLC = require('./academic/labReport/level2/subs/feee/topics/appFeeeRLC')
let feeeLabsCarbonRes = require('./academic/labReport/level2/subs/feee/topics/appFeeeCarbonRes')
let feeeLabsFanReg = require('./academic/labReport/level2/subs/feee/topics/appFeeeFanReg')
let feeeLabsWiringTube = require('./academic/labReport/level2/subs/feee/topics/appFeeeWiring')
let feeeLabsFullBridge = require('./academic/labReport/level2/subs/feee/topics/appFeeeFullBridge')
let feeeLabsFuse = require('./academic/labReport/level2/subs/feee/topics/appFeeeFuse')
let feeeLabsOsci = require('./academic/labReport/level2/subs/feee/topics/appFeeeOscila')
let feeeLabsWireGauge = require('./academic/labReport/level2/subs/feee/topics/appFeeeWireGauge')
let feeeLabs2Light = require('./academic/labReport/level2/subs/feee/topics/appFeee2Light')

//lab2 - mp
let mpLabs = require('./academic/labReport/level2/subs/mp/mppLabs')

//lab2 - wpp
let wppLabs = require('./academic/labReport/level2/subs/wpp/wppLabs')

//lab2 - fe_wpp
let fe_wppLabs = require('./academic/labReport/level2/subs/fe_wpp/fe_wppLabs')

//lab2 - pm1
let pm1Labs = require('./academic/labReport/level2/subs/pm1/pm1Labs')

//lab2 - pm1
let ttqcLabs = require('./academic/labReport/level2/subs/ttqc/ttqcLabs')




//syllabus
let syllabusBatch45 = require('./academic/syllabus/45/syllabusBatch45')
let syllabusBatch45Ae = require('./academic/syllabus/45/depts/ae45Syl')
let syllabusBatch45Fe = require('./academic/syllabus/45/depts/fe45Syl')
let syllabusBatch45Ye = require('./academic/syllabus/45/depts/ye45Syl')
let syllabusBatch45Ipe = require('./academic/syllabus/45/depts/ipe45Syl')
let syllabusBatch45Wpe = require('./academic/syllabus/45/depts/wpe45Syl')
let syllabusBatch45Dce = require('./academic/syllabus/45/depts/dce45Syl')
let syllabusBatch45Tem = require('./academic/syllabus/45/depts/tem45Syl')
let syllabusBatch45Tfd = require('./academic/syllabus/45/depts/tfd45Syl')
let syllabusBatch45Tmdm = require('./academic/syllabus/45/depts/tmdm45Syl')
let syllabusBatch45Ese = require('./academic/syllabus/45/depts/ese45Syl')


//jokes 
let jokes = require('././entertainment/jokes/jokesFlow')


/*--------------------------------------------------------------------------*/ 


let routeFunc = (objectToSend) => {
    (req, res) => {
        console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
        return res.send(objectToSend);
    }
}

/*---------------------------------------------------------------------------*/

let appIntro = (req, res) => {
    let appIntro = {
        msg: "Welcome to notebot app engine 😀",
        version: "0.1a"
    }

    console.log("🟠 App Platform Called")

    return res.send(appIntro);
};


let notes = (req, res) => {

    var fullUrl = req.protocol + deploymentEnvDetector() + req.get('host') + req.originalUrl;

    let noteLevels = {
        noteLevels: [
            {
                noteLevel: 1,
                route: `${fullUrl}/1`
            },
            {
                noteLevel: 2,
                route: `${fullUrl}/2`
            },
            {
                noteLevel: 3,
                route: `${fullUrl}/3`
            },
            {
                noteLevel: 4,
                route: `${fullUrl}/4`
            }
        ]
    }
    return res.send(noteLevels);
};

//level1
let level1Notes = (req, res) => {

    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)

    return res.send(noteLevel1Subs);
};

let level1Labs = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(labLevel1Subs);
};

//level2
let level2Notes = (req, res) => {

    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)

    return res.send(noteLevel2Subs);
};

let level2Labs = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(labLevel2Subs);
};

let level3Labs = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(labLevel3Subs);
};


//level3
let level3Notes = (req, res) => {

    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)

    return res.send(noteLevel3Subs);
};

//level4
let level4Notes = (req, res) => {

    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)

    return res.send(noteLevel4Subs);
};

//level1 -> math1
let math1 = async (req, res) => {
  //analytics
  try{
    handleAnalytics("math1");
}catch(err){
    console.log(`🔴 Error while handling analytics(pre)`)
}

  //console.log(result.data.json)
  console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`);
  return res.send(math1Flow);
};

let math1Solve2018Flow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(math1Solve2018);
};

let math1Books = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(math1BooksFlow);
};

let math1Ques = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(math1QuesFlow);
};

let math1Convergence = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(math1Conver);
};

let math1Expansion = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(math1Expan);
};

let math1Differen = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(math1Diff);
};

let math1Integretion = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(math1Inte);
};

let math1Extrema = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(math1Extrerma);
};

let math1Conic = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(math1Conics);
};

let math1VectorFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(math1Vector);
};

let math1CoOrdFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(math1CoOrd);
};

let math1MatrixFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(math1Matrix);
};

let math1LinearFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(math1Linear);
};

let math1ChangeofAxesFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(math1Axes);
};

//level1 -> math2
let math2 = (req, res) => {

    //analytics
    try{
        handleAnalytics("math2");
    }catch(err){
        console.log(`🔴 Error while handling analytics(pre)`)
    }

    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(math2Flow);
};

let math2BooksFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(math2Books);
};

let math2QuesFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(math2Ques);
};

let math2SuggFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(math2Sugg);
};

let math2moivreFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(math2moivre);
};

let math2HomoFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(math2Homo);
};

let math2LDEFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(math2LDE);
};

let math2ExactFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(math2Exact);
};

let math2RedHomoFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(math2RedHomo);
};

let math2DiffEqnFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(math2DiffEqn);
};

let math2linEqnFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(math2linEqn);
};

let math2residueFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(math2Residue);
};

let math2LineIntFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(math2lineInt);
};

let math2methodVarFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(math2MethodVar);
};

let math2AnalyFuncFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(math2AnnalyFunc);
};

let math2VectorFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(math2Vector);
};

let math2odeFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(math2ode);
};

let math2SepaVarFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(math2SepaVar);
};

let math2laplaceFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(math2laplace);
};

let math2ComplexFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(math2Complex);
};

//chem1
let chem1Flow = (req, res) => {

    //analytics
    try{
        handleAnalytics("chem1");
    }catch(err){
        console.log(`🔴 Error while handling analytics(pre)`)
    }

    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(chem1appFlow);
};

let chem1BooksFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(chem1Books);
};

let chem1QuesFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(chem1Ques);
};


let chem1PeriodicFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(chem1Periodic);
};


let chem1DiluFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(chem1Dilu);
};

let chem1CxCompFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(chem1Complex);
};

let chem1BondFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(chem1Bond);
};

let chem1KineticsFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(chem1Kinetics);
};


let chem1EquiFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(chem1ChemicalEqui);
};

let chem1PhotoFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(chem1Photo);
};


let chem1AnalyFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(chem1Analy);
};


let chem1CollFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(chem1Colloid);
};

let chem1AcidBaseFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(chem1AcidBase);
};


//chem2
let chem2Flow = (req, res) => {

    //analytics
    try{
        handleAnalytics("chem2");
    }catch(err){
        console.log(`🔴 Error while handling analytics(pre)`)
    }

    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(chem2appFlow);
};

let chem2BooksFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(chem2Books);
};

let chem2QuesFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(chem2Ques);
};

let chem2OrganMetalFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(chem2OrganMetal);
};

let chem2CarboNylFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(chem2Carbonyl);
};


let chem2orgRecFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(chem2OrgReac);
};

let chem2AlcPhenFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(chem2AlcPhen);
};

let chem2AminoFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(chem2Amino);
};

let chem2CarboHyFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(chem2Carboh);
};

let chem2ColorDyeFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(chem2ColorDye);
};

let chem2CarboxylicAcidFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(chem2CarboxylicAcid);
};

let chem2AmineFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(chem2Amine);
};

let chem2SolubilityFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(chem2Sollubility);
};


//phy1
let phy1Flow = (req, res) => {

    //analytics
    try{
        handleAnalytics("phy1");
    }catch(err){
        console.log(`🔴 Error while handling analytics(pre)`)
    }


    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(phy1appFlow);
};

let phy1BooksFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(phy1Books);
};

let phy1QuesFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(phy1Ques);
};

let phy1CircularFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(phy1Circular);
};

let phy1HydroFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(phy1Hydro);
};

let phy1DiffracFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(phy1Diffrac);
};

let phy1InterFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(phy1Inter);
};

let phy1PolarFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(phy1Polar);
};


let phy1ElasticityFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(phy1Elasticity);
};

let phy1ViscoFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(phy1Visco);
};

let phy1SurfaceFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(phy1Surface);
};


//phy2
let phy2Flow = (req, res) => {

    //analytics
    try{
        handleAnalytics("phy2");
    }catch(err){
        console.log(`🔴 Error while handling analytics(pre)`)
    }


    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(phy2appFlow);
};

let phy2BooksFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(phy2Books);
};


let phy2QuesFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(phy2Ques);
};

let phy2KineticFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(phy2Kinetic);
};

let phy2ElectricFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(phy2Electric);
};

let phy2ThermoFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(phy2Thermo);
};

let phy2RadFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(phy2Rad);
};

let phy2MagFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(phy2Magnet);
};

let phy2ModernFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(phy2Modern);
};

let phy2EntropyFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(phy2Entropy);
};

//em
let emFlow = (req, res) => {

    //analytics
    try{
        handleAnalytics("em");
    }catch(err){
        console.log(`🔴 Error while handling analytics(pre)`)
    }

    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(emAppFlow);
};

let emBooksFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(emBooks);
};

let emQuesFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(emQues);
};

let emMathFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(emMath);
};

let emBlastFurFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(emBlastFur);
};

let emHeatTreatFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(emHeatTre);
};

let emHeatWroughtFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(emWrought);
};

let emCrystalFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(emCrystal);
};

let emIronFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(emIron);
};

let emGlassFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(emGlass);
};

let emCeramicsFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(emCeramics);
};

let emCorrosionFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(emCorrosion);
};

let emAlloyFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(emAlloy);
};

let emCompositesFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(emComposites);
};

let emPlasticsFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(emPlastic);
};

let emPhasediagFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(emPhaseDiag);
};

let emAtomicFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(emAtomic);
};


//tmm
let tmmFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(tmmAppFlow);
};

let tmmQuesFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(tmmQues);
};


//fh
let fhFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(fhAppFlow);
};

let fhArtDesFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(fhArtDes);
};

let fhRomanFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(fhRoman);
};

let fhElizaFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(fhEliza);
};

let fhGeorigianFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(fhGeorgian);
};

let fhGreekFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(fhGreek);
};

let fhEgyptFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(fhEgypt);
};

let fhRenasiFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(fhRenasi);
};

let fhSilkFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(fhSilk);
};

let fhJeansFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(fhJeans);
};

let fhMuslinFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(fhMuslin);
};

let fhHandloomFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(fhHandloom);
};


//pse
let pseFlow = (req, res) => {

    //analytics
    try{
        handleAnalytics("pse");
    }catch(err){
        console.log(`🔴 Error while handling analytics(pre)`)
    }

    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(pseAppFlow);
};

let pseBooksFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(pseBooks);
};

let pseQuesFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(pseQues);
};

let pseHandNotesFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(psehandNotes);
};

let pseIntroFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(pseIntro);
};

let psePhyStructFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(psePhyStruct);
};

let pseChemStructFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(pseChemStruct);
};

let pseMWFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(pseMW);
};

let pseStepFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(pseStep);
};

let pseChainFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(pseChain);
};

let pseThermalFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(pseThermal);
};

let pseDegradFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(pseDegrad);
};

let psePolymTechFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(psePolymTech);
};

let pseAppPolyFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(pseApplicationPoly);
};

let pseMorphoFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(psePolyMorpho);
};


//ntf
let ntfFlow = (req, res) => {

    //analytics
    try{
        handleAnalytics("ntf");
    }catch(err){
        console.log(`🔴 Error while handling analytics(pre)`)
    }

    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(ntfAppFlow);
};


let ntfBooksFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(ntfBooks);
};

let ntfQuesFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(ntfQues);
};

let ntfNotesFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(ntfHandNotes);
};


let ntfSuggFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(ntfSugg);
};


let ntfIntroFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(ntfIntro);
};


let ntfCottonFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(ntfCotton);
};

let ntfFlaxFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(ntfFlax);
};

let ntfWoolFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(ntfWool);
};

let ntfJuteFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(ntfJute);
};

let ntfSilkFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(ntfSilk);
};

let ntfSisalFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(ntfSisal);
};

let ntfHempFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(ntfHemp);
};

let ntfPalfFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(ntfPALF);
};

let ntfKapokFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(ntfKapok);
};

let ntfAsbestosFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(ntfAsbestos);
};

let ntfOtherFibFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(ntfOtherFib);
};

let ntfQuizFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(ntfQuiz);
};


//cp
let cpFlow = (req, res) => {

    //analytics
    try{
        handleAnalytics("cp");
    }catch(err){
        console.log(`🔴 Error while handling analytics(pre)`)
    }

    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(cpAppFlow);
};


let cpBooksFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(cpBooks);
};


let cpQuesFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(cpQues);
};

let cpFundaFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(cpFunda);
};

let cpConditionalFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(cpConditional);
};

let cpLoopFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(cpLoop);
};

let cpArrayFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(cpArray);
};

let cpFunctionFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(cpFunc);
};

let cpStringFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(cpString);
};

let cpSuggFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(cpSugg);
};

//bce
let bceFlow = (req, res) => {

    //analytics
    try{
        handleAnalytics("bce");
    }catch(err){
        console.log(`🔴 Error while handling analytics(pre)`)
    }

    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(bceAppFlow);
};

let bceQuesFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(bceQues);
};

let bceAllSheetsFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(bceAllSheets);
};

let bcePartAFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(bcePartA);
};

let bcePartBFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(bcePartB);
};

let bceFullABFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(bceFullAB);
};

let bceIntroFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(bceIntro);
};

let bceLangFuncFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(bceLangFunc);
};

let bceCommuniFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(bceCommunication);
};

let bceBizLetterFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(bceBizLetter);
};

let bceReportFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(bceBizReport);
};

let bceReadWriteFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(bceReadWrite);
};


//iae
let iaeFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(iaeAppFlow);
};

let iaeBooksFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(iaeBooks);
};

let iaeQuesFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(iaeQues);
};

let iaeIntroFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(iaeIntro);
};

let iaeFullSlideFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(iaeFullSlide);
};

let iaeDiffWovenFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(iaeDiffWoven);
};

let iaeBrandsFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(iaeBrands);
};

let iaeQuotaFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(iaeQuota);
};

let iaeCadFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(iaeCad);
};

let iaeShirtFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(iaeShirt);
};


//bfs
let bfsFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(bfsAppFlow);
};

let bfsLec3Flow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(bfsLec3);
};

//tpm
let tpmFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(tpmAppFlow);
};

let tpmQuesFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(tpmQues);
};

let tpmFabWetFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(tpmFabWet);
};

let tpmFabManuFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(tpmFabManu);
};


//fmg
let fmgFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(fmgAppFlow);
};


//iee
let ieeFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(ieeAppFlow);
};

let ieeBooksFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(ieeBooks);
};

let ieeSheetsFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(ieeSheets);
};

let ieeNotesFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(ieeNotes);
};

let ieeManEnvFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(ieeManEnv);
};

let ieeSoilFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(ieeSoil);
};

let ieeEnvIssueFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(ieeEnvIssue);
};

let ieeNatureEnvFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(ieeNatureEnv);
};

let ieeSPFFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(ieeSPF);
};


//ecb
let ecbFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(ecbAppFlow);
};

let ecbNotesFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(ecbNotes);
};

let ecbIntroFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(ecbIntro);
};


//sss1
let sss1Flow = (req, res) => {


    //analytics
    try{
        handleAnalytics("sss1");
    }catch(err){
        console.log(`🔴 Error while handling analytics(pre)`)
    }

    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(sss1AppFlow);
};

let sss1BooksFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(sss1Books);
};

let sss1BlowRoomFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(sss1BlowRoom);
};

let sss1DrawframeFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(sss1Drawframe);
};

let sss1CardingFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(sss1Carding);
};

let sss1IntroFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(sss1Intro);
};

let sss1IntroFibFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(sss1IntroFib);
};


//sss2
let sss2Flow = (req, res) => {


    //analytics
    try{
        handleAnalytics("sss2");
    }catch(err){
        console.log(`🔴 Error while handling analytics(pre)`)
    }

    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(sss2AppFlow);
};

let sss2RingframeFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(sss2Ringframe);
};

let sss2NotesFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(sss2Notes);
};


//fyt
let fytFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(fytAppFlow);
};

let fytBooksFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(fytBooks);
};

let fytNotesFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(fytNotes);
};

let fytSuggFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(fytSugg);
};

let fytYarnNumFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(fytYarnNum);
};

let fytYarnTwistFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(fytYarnTwist);
};

let fytEvennessFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(fytEvenness);
};

let fytCountFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(fytCount);
};

let fytAfisFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(fytAfis);
};

let fytISOFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(fytISO);
};

let fytCapaOpticalFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(fytCapaOptical);
};


//marketing
let marketingFlow = (req, res) => {

    //analytics
    try{
        handleAnalytics("market");
    }catch(err){
        console.log(`🔴 Error while handling analytics(pre)`)
    }

    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(marketingAppFlow);
};

let marketingBooksFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(marketingBooks);
};

let marketingNotesFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(marketingNotes);
};

let marketingQuesFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(marketingQues);
};

let marketingSuggFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(marketingSugg);
};

let marketingIntroFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(marketingIntro);
};

let marketingFuncMarketFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(marketingFuncMarket);
};

let marketingFieldFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(marketingField);
};

let marketingConceptFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(marketingConcept);
};

let marketingOrientationFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(marketingOrientation);
};

let marketingMicroEnvFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(marketingMicroEnv);
};

let marketingMacroEnvFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(marketingMacroEnv);
};

let marketingSegmentFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(marketingSegment);
};

let marketingTargetFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(marketingTarget);
};

let marketingDiffPosFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(marketingDiffPos);
};

let marketingChannelDistFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(marketingChannelDist);
};

let marketingRetailFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(marketingRetail);
};

let marketingPriceFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(marketingPrice);
};

let marketingConsumerBuyerFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(marketingConsumerBuyer);
};

let marketingBrandFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(marketingBranding);
};

let marketingNewProdFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(marketingNewProduct);
};

let marketingAdvertFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(marketingAdvert);
};

let marketingCompStartFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(marketingCompStrat);
};

let marketingMajorPriceFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(marketingMajorPrice);
};

//am1
let am1Flow = (req, res) => {

    //analytics
    try{
        handleAnalytics("am1");
    }catch(err){
        console.log(`🔴 Error while handling analytics(pre)`)
    }

    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(am1AppFlow);
};

let am1BooksFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(am1Books);
};

let am1NotesFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(am1Notes);
};

let am1QuesFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(am1Ques);
};

let am1IntroFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(am1Intro);
};

let am1StructTexFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(am1StructTex);
};

let am1SizingFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(am1Sizing);
};

let am1SeamFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(am1Seam);
};

let am1TrimFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(am1Trim);
};

let am1InterFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(am1Inter);
};

let am1PatternFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(am1Pattern);
};

let am1MarkerFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(am1Marker);
};

let am1SpreadFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(am1Spread);
};

let am1FabCutFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(am1FabCut);
};

let am1FabInspectionFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(am1FabInspection);
};


//stat
let statFlow = (req, res) => {

    //analytics
    try{
        handleAnalytics("phy1");
    }catch(err){
        console.log(`🔴 Error while handling analytics(pre)`)
    }


    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(statAppFlow);
};

let statBooksFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(statBooks);
};

let statNotesFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(statNotes);
};

let statProbabFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(statProbab);
};

let statIntroFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(statIntro);
};

let statCentralFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(statCentral);
};

let statCVFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(statCV);
};

let statMomentsFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(statMoments);
};

let statShapeFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(statShapeCharac);
};

let statDesignExpFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(statDesignExp);
};

let statNormalFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(statNormal);
};

let statBinomialFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(statBinomial);
};

let statPoissionFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(statPoission);
};

let statRegressionFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(statRegression);
};


//fm1
let fm1Flow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(fm1AppFlow);
};

let fm1BooksFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(fm1Books);
};

let fm1NotesFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(fm1Notes);
};

let fm1SuggFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(fm1Sugg);
};

let fm1QuesFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(fm1Ques);
};

let fm1LoomFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(fm1Loom);
};

let fm1MotionsWeavFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(fm1MotionWeav);
};

let fm1IntroFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(fm1Intro);
};

let fm1SheddingFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(fm1Shedding);
};

let fm1WeavingFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(fm1Weaving);
};

let fm1SizingFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(fm1Sizing);
};

let fm1WindingFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(fm1Winding);
};

let fm1DobbyFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(fm1Dobby);
};

let fm1WarpingFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(fm1Warping);
};

let fm1TappetFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(fm1Tappet);
};

let fm1PickingFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(fm1Picking);
};

let fm1BeatupFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(fm1Beatup);
};

let fm1SelvedgeFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(fm1Selvedge);
};

let fm1TakeupFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(fm1Takeup);
};

let fm1LetoffFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(fm1LetOff);
};

let fm1DenimFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(fm1Denim);
};

let fm1StopMotionsFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(fm1StopMotions);
};

let fm1JaquardFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(fm1Jacquard);
};


//ym1
let ym1Flow = (req, res) => {

    //analytics
    try{
        handleAnalytics("ym1");
    }catch(err){
        console.log(`🔴 Error while handling analytics(pre)`)
    }


    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(ym1AppFlow);
};

let ym1IntroFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(ym1Intro);
};

let ym1IndeterStrFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(ym1IndeterStr);
};

let ym1BlowroomFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(ym1Blowroom);
};

let ym1MixingFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(ym1Mixing);
};

let ym1FibPropFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(ym1FibreProp);
};

let ym1YarnCondFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(ym1yarnCond);
};

let ym1ComberFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(ym1Comber);
};

let ym1DrawframeFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(ym1Drawframe);
};

let ym1WindingFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(ym1Winding);
};

let ym1LapFormerFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(ym1LapFormer);
};

let ym1CardingFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(ym1Carding);
};

let ym1RingFrameFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(ym1RingFrame);
};

let ym1SpeedSimplexFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(ym1SpeedSimplex);
};



//ttqc
let ttqcFlow = (req, res) => {

    //analytics
    try{
        handleAnalytics("phy1");
    }catch(err){
        console.log(`🔴 Error while handling analytics(pre)`)
    }

    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(ttqcAppFlow);
};

let ttqcBooksFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(ttqcBooks);
};

let ttqcNotesFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(ttqcNotes);
};

let ttqcCountFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(ttqcCount);
};

let ttqcCrimpFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(ttqcCrimp);
};

let ttqcTwistFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(ttqcTwist);
};

let ttqcIntroFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(ttqcIntro);
};

let ttqcMoistureRHFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(ttqcMoistureRH);
};

let ttqcNepsFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(ttqcNeps);
};

let ttqcSamplingFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(ttqcSampling);
};

let ttqcFibPropFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(ttqcFibProp);
};

let ttqcHVIFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(ttqcHVI);
};

let ttqcAfisFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(ttqcAfis);
};


//tp
let tpFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(tpAppFlow);
};

let tpBooksFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(tpBooks);
};

let tpNotesFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(tpNotes);
};

let tpSuggFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(tpSugg);
};

let tpQuesFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(tpQues);
};

let tpSwellingFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(tpSwelling);
};

let tpFrictionFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(tpFriction);
};

let tpJammingFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(tpJamming);
};

let tpOpticalFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(tpOptical);
};

let tpFibMigFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(tpFibMig);
};

let tpThermalPropFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(tpThermalProp);
};

let tpFibDrawFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(tpFibDraw);
};

let tpXrayFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(tpXrayDiff);
};

let tpYarnStructFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(tpYarnStruct);
};

let tpFabGeoFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(tpFabGeo);
};

let tpTensilePropFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(tpTensileProp);
};

//feee
let feeeFlow = (req, res) => {

    //analytics
    try{
        handleAnalytics("feee");
    }catch(err){
        console.log(`🔴 Error while handling analytics(pre)`)
    }

    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(feeeAppFlow);
};

let feeeBooksFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(feeeBooks);
};

let feeeNotesFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(feeeNotes);
};

let feeeQuesFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(feeeQues);
};

let feeeCh1Flow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(feeeCh1);
};

let feeeCh2Flow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(feeeCh2);
};

let feeeCh3Flow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(feeeCh3);
};

let feeeCh4Flow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(feeeCh4);
};


let feeeCh5Flow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(feeeCh5);
};

let feeeCh8Flow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(feeeCh8);
};

let feeeWyeDeltaFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(feeeWyeDelta);
};

let feeeRMSFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(feeeRMS);
};

let feeeCirAnalFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(feeeCirAnal);
};


//mmtf

let mmtfFlow = (req, res) => {

    //analytics
    try{
        handleAnalytics("mmtf");
    }catch(err){
        console.log(`🔴 Error while handling analytics(pre)`)
    }

    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(mmtfAppFlow);
};

let mmtfBooksFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(mmtfBooks);
};

let mmtfNotesFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(mmtfNotes);
};

let mmtfSuggFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(mmtfSugg);
};

let mmtfIntroFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(mmtfIntro);
};

let mmtfViscoseRayonFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(mmtfViscoseRayon);
};

let mmtfSpinSysFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(mmtfSpinSys);
};

let mmtfHighPerfFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(mmtfHighPerf);
};

let mmtfPolyamideFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(mmtfPolyamide);
};

let mmtfModalFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(mmtfModal);
};

let mmtfElastomerFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(mmtfElastomer);
};

let mmtfPolyolefinFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(mmtfPolyolefin);
};

let mmtfCarbonFibFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(mmtfCarbonFib);
};

let mmtfAcetateFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(mmtfAcetate);
};

let mmtfBiCompFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(mmtfBiComp);
};

let mmtfPolyesterFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(mmtfPolyester);
};

let mmtfAcrylicFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(mmtfAcrylic);
};

let mmtfVectranFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(mmtfVectran);
};

let mmtfRegenProteinFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(mmtfRegenProtein);
};

let mmtfGlassFibFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(mmtfGlassFib);
};

let mmtfLyocellFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(mmtfLyocell);
};

let mmtfNylonFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(mmtfNylon);
};


//mp

let mpFlow = (req, res) => {

    //analytics
    try{
        handleAnalytics("mp");
    }catch(err){
        console.log(`🔴 Error while handling analytics(pre)`)
    }

    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(mpAppFlow);
};

let mpDefectsFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(mpDefects);
};

let mpLatheFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(mpLathe);
};

let mpMillingFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(mpMilling);
};

let mpCastingVideoFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(mpCastingVideo);
};

let mpWeldingFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(mpWelding);
};

let mpHotColdFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(mpHotCold);
};

let mpCeramicsFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(mpCeramics);
};

let mpPlasticsFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(mpPlastics);
};

let mpSlideWaysFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(mpSlideWays);
};

let mpShaperFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(mpShaper);
};

let mpEDMFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(mpEDM);
};

let mpNonConvFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(mpNonConv);
};

let mpMCEconoFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(mpMCEconomics);
};

let mpCastingFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(mpCasting);
};


//fme
let fmeFlow = (req, res) => {

    //analytics
    try{
        handleAnalytics("fme");
    }catch(err){
        console.log(`🔴 Error while handling analytics(pre)`)
    }


    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(fmeAppFlow);
};

let fmeBooksFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(fmeBooks);
};

let fmeNotesFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(fmeNotes);
};

let fmeQuesFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(fmeQues);
};

let fmeSuggFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(fmeSugg);
};

let fmeBoilerFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(fmeBoiler);
};

let fmePowerRefFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(fmePowerRef);
};

let fmeSteamTurbFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(fmeSteamTurb);
};

let fmeThermalEngFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(fmeThermalEng);
};

let fmeFluidMechFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(fmeFluidMech);
};

let fmeEnergProcFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(fmeEnergProc);
};

let fmeSolidFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(fmeSolid);
};

let fmeGearTrainFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(fmeGearTrain);
};

let fmePumpFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(fmePump);
};

let fmeStressFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(fmeStress);
};

let fmeEngPetrolFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(fmeEngPetrol);
};

let fmeEngCombusFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(fmeEngCombus);
};

let fmeBeamFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(fmeBeam);
};

let fmeBeltFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(fmeBelt);
};

let fmeCentroidFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(fmeCentroid);
};

let fmeMOIFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(fmeMOI);
};

let fmeColumnFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(fmeColumn);
};


//ap1
let ap1Flow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(ap1AppFlow);
};

let ap1BooksFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(ap1Books);
};

let ap1QuesFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(ap1Ques);
};

let ap1SizingFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(ap1Sizing);
};

let ap1TrimmingFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(ap1Trim);
};

let ap1InterFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(ap1Inter);
};

let ap1FabCutFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(ap1FabCut);
};

let ap1PatternFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(ap1Pattern);
};

let ap1FabSpreadFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(ap1FabSpread);
};

let ap1MarkerFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(ap1Marker);
};

let ap1SewingFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(ap1Sewing);
};


//ctca
let ctcaFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(ctcaAppFlow);
};

let ctcaBooksFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(ctcaBooks);
};

let ctcaSheetsFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(ctcaSheets);
};

let ctcaThickFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(ctcaThickeningAgents);
};

let ctcaWaterFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(ctcaWater);
};

let ctcaSurfactantFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(ctcaSurfactants);
};

let ctcaBleachFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(ctcaBleach);
};

let ctcaSolutionsFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(ctcaSolutions);
};

let ctcaColloidFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(ctcaColloid);
};


//fdce
let fdceFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(fdceAppFlow);
};

let fdceDyesFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(fdceDyes);
};

let fdceChromatoFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(fdceChromato);
};

let fdcePolarityFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(fdcePolarity);
};

let fdceSepaPuriFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(fdceSepaPuri);
};

let fdceBalanceChemFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(fdceBalanceChem);
};

let fdceFiltrationFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(fdceFiltration);
};


//fd2
let fd2Flow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(fd2AppFlow);
};


//weaving prep
let weavingPrepFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(weavingPrepAppFlow);
};

let weavingPrepBooksFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(weavingPrepBooks);
};


//wpp
let wppFlow = (req, res) => {

    //analytics
    try{
        handleAnalytics("wpp");
    }catch(err){
        console.log(`🔴 Error while handling analytics(pre)`)
    }

    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(wppAppFlow);
};

let wppQuesFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(wppQues);
};

let wppPretreatmentFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(wppPretreatment);
};

let wppSingeingFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(wppSingeing);
};

let wppDesizingFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(wppDesizing);
};

let wppImpuritiesFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(wppImpurities);
};

let wppBioScouringFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(wppBioScouring);
};



//wp1
let wp1Flow = (req, res) => {

    //analytics
    try{
        handleAnalytics("wp1");
    }catch(err){
        console.log(`🔴 Error while handling analytics(pre)`)
    }

    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(wp1AppFlow);
};

let wp1BooksFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(wp1Books);
};

let wp1NotesFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(wp1Notes);
};

let wp1QuesFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(wp1Ques);
};

let wp1IntroFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(wp1Intro);
};

let wp1WaterFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(wp1Water);
};

let wp1IntroDyeFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(wp1IntroDye);
};

let wp1GenConceptsFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(wp1GenConcepts);
};

let wp1ColorFastnessFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(wp1ColorFastness);
};

let wp1StrippingFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(wp1Stripping);
};

let wp1SingeingFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(wp1Singeing);
};

let wp1ScouringFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(wp1Scouring);
};

let wp1PigmentFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(wp1Pigment);
};

let wp1TexFinishFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(wp1TexFinish);
};

let wp1VatDyesFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(wp1VatDyes);
};

let wp1DesizingFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(wp1Desizing);
};

let wp1BasicDyeFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(wp1BasicDye);
};

let wp1AcidDyeFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(wp1AcidDye);
};

let wp1BleachFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(wp1Bleach);
};

let wp1DisperseDyeFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(wp1DisperseDye);
};

let wp1KierBoilerFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(wp1KierBoiler);
};

let wp1DyeingFaultFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(wp1DyeingFault);
};

let wp1ReactiveDyeFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(wp1ReactiveDye);
};

let wp1DirectDyeFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(wp1DirectDye);
};

let wp1JiggerMCFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(wp1JiggerMC);
};

let wp1ColorTestFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(wp1ColorTest);
};

let wp1FoldingTestFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(wp1FoldingTest);
};

let wp1WashingMCFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(wp1WashingMC);
};



//acfd
let acfdFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(acfdAppFlow);
};


//tcp
let tcpFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(tcpAppFlow);
};
let tcpKpcFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(tcpKpc);
};


//pcs
let pcsFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(pcsAppFlow);
};
let pcsBooksFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(pcsBooks);
};


//lss
let lssFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(lssAppFlow);
};

let lssDrawFrameFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(lssDrawframe);
};
let lssSpreaderFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(lssSpreader);
};


//lss
let mppFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(mppAppFlow);
};


//knit1
let knit1Flow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(knit1AppFlow);
};
let knit1LectureFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(knit1Lecture);
};


//im
let imFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(imAppFlow);
};

let imLectureFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(imLecture);
};

let imLec1Flow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(imLec1);
};

let imLec2Flow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(imLec2);
};

let imLec3Flow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(imLec3);
};

let imLec4Flow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(imLec4);
};

let imMarketFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(imMarket);
};

let imMarketMixFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(imMarketMix);
};

let imProjectFeasFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(imProjectFeas);
};

let imNatureScopeFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(imNatureScope);
};

let imManageFuncFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(imManageFunc);
};

let imIndusManageFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(ImIndusManage);
};

let imTechManageFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(ImTechManage);
};

let imProdnManageFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(ImProdnManage);
};


//pd
let pdFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(pdAppFlow);
};

let pdIntroFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(pdIntro);
};

let pdUnderstandingFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(pdUnderstandingCustomer);
};

let pdPlanningDesignFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(pdPlanningDesign);
};

let pdQualityFuncFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(pdQualityFunc);
};

let pdDesAssemFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(pdDesAssembly);
};

let pdDesManuFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(pdDFManu);
};

let pdDesMainFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(pdDFMain);
};

let pdDesRelFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(pdDFR);
};

let pdBooksFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(pdBooks);
};

let pdFastFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(pdDFFast);
};

let pdDesTensionFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(pdDDesTension);
};

let pdLoadStressFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(pdDLoadStress);
};


//tqm
let tqmFlow = (req, res) => {

    //analytics
    try{
        handleAnalytics("tqm");
    }catch(err){
        console.log(`🔴 Error while handling analytics(pre)`)
    }

    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(tqmAppFlow);
};

let tqmTotalQMFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(tqmTotalQM);
};

let tqmQualityReliabilityFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(tqmQualityReliability);
};

let tqmContinuousImproveFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(tqmContinuousImprovement);
};

let tqmQualityStdFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(tqmQualityStd);
};

let tqmIntroQMFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(tqmIntroQM);
};

let tqmControlMeasureFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(tqmControlMeasure);
};

let tqmManagementApproachFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(tqmManageApproach);
};

let tqmQCToolsFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(tqmQCTools);
};

//ttm
let ttmFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(ttmAppFlow);
};



//mic
let micFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(micAppFlow);
};

let micBooksFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(micBooks);
};

let micIntroFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(micIntro);
};

let micSysElementFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(micSystemElement);
};

let micControlSysFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(micControlSys);
};

let micLimitFitFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(micLimitFit);
};

let micNonDesFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(micNonDes);
};

let micSurfaceFinishFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(micSurfaceFinish);
};

let micThreadMeasureFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(micThreadMeasure);
};

let micAngularMeasFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(micAngular);
};

let micLinearMeasFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(micLinear);
};

let micCh5Flow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(micCh5);
};

let micGearMeasFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(micGearMes);
};

let micFatigueFailFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(micFatigueFail);
};


//ace
let aceFlow = (req, res) => {

    //analytics
    try{
        handleAnalytics("ace");
    }catch(err){
        console.log(`🔴 Error while handling analytics(pre)`)
    }

    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(aceAppFlow);
};
let aceIntroControlFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(aceIntroControl);
};
let aceModelFreqFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(aceModelFreq);
};
let aceTimeResFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(aceTimeRes);
};
let aceSensorsFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(aceSensors);
};
let aceNumberSysFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(aceNumberSys);
};
let aceTransferFuncFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(aceTransferFunc);
};
let aceLogicGateFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(aceLogicGates);
};
let aceHydraulicsFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(aceHydraulics);
};
let acePneumaticsFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(acePneumatics);
};
let aceIntroRoboticsFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(aceIntroRobotics);
};
let aceJointsFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(aceJoints);
};
let aceActuatorFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(aceActuator);
};
let aceGripsFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(aceGrips);
};
let aceStructElementsFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(aceStructElements);
};
let aceBooksFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(aceBooks);
};


//acm
let acmFlow = (req, res) => {

    //analytics
    try{
        handleAnalytics("phy1");
    }catch(err){
        console.log(`🔴 Error while handling analytics(pre)`)
    }


    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(acmAppFlow);
};
let acmBooksFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(acmBooks);
};
let acmIntroCostFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(acmIntroCost);
};
let acmInterestedUsersFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(acmInterestedUsers);
};
let acmAccInActionFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(acmAccinAction);
};
let acmRecordingProcessFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(acmRecordingProcess);
};
let acmCostBehaviourFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(acmCostBehaviour);
};
let acmAccForMerchFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(acmAccForMerch);
};
let acmCostAccSysFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(acmCostAccSys);
};
let acmCostTechFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(acmCostTech);
};


//fsd
let fsdFlow = (req, res) => {

    //analytics
    try{
        handleAnalytics("fsd");
    }catch(err){
        console.log(`🔴 Error while handling analytics(pre)`)
    }

    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(fsdAppFlow);
};

let fsdBooksFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(fsdBooks);
};

let fsdIntroFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(fsdIntro);
};

let fsdPlainWeaveFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(fsdPlainWeave);
};

let fsdTwillFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(fsdTwill);
};

let fsdFancyFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(fsdFancy);
};

let fsdColorWeaveFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(fsdColorWeave);
};

let fsdSatinWeaveFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(fsdSatinWeave);
};


//am2
let am2Flow = (req, res) => {

    //analytics
    try{
        handleAnalytics("am2");
    }catch(err){
        console.log(`🔴 Error while handling analytics(pre)`)
    }

    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(am2AppFlow);
};

let am2BooksFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(am2Books);
};

let am2ClassLecFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(am2ClassLec);
};

let am2LineBalancingFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(am2LineBalance);
};

let am2ExcelFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(am2Excel);
};


//ap2
let ap2Flow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(ap2AppFlow);
};

let ap2FoldingFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(ap2Folding);
};

let ap2StitchFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(ap2Stitch);
};

let ap2LockStictchFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(ap2LockStitch);
};

let ap2PressingFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(ap2Pressing);
};

let ap2InspectionFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(ap2Inspection);
};


//economics
let econoFlow = (req, res) => {

    //analytics
    try{
        handleAnalytics("econo");
    }catch(err){
        console.log(`🔴 Error while handling analytics(pre)`)
    }

    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(econoAppFlow);
};

let econoBooksFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(econoBooks);
};

let econoClassLecFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(econoClassLec);
};


//fm2
let fm2Flow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(fm2AppFlow);
};

let fm2BooksFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(fm2Books);
};

let fm2ClassLecFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(fm2ClassLec);
};

let fm2NotesFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(fm2Notes);
};

let fm2BasicWarpFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(fm2BasicWarp);
};

let fm2MiscFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(fm2Misc);
};


//wp2
let wp2Flow = (req, res) => {

    //analytics
    try{
        handleAnalytics("wp2");
    }catch(err){
        console.log(`🔴 Error while handling analytics(pre)`)
    }

    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(wp2AppFlow);
};

let wp2BooksFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(wp2Books);
};

let wp2ClasLecFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(wp2ClassLec);
};


//weave2
let weave2Flow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(weave2AppFlow);
};



//ym2
let ym2Flow = (req, res) => {

    //analytics
    try{
        handleAnalytics("ym2");
    }catch(err){
        console.log(`🔴 Error while handling analytics(pre)`)
    }

    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(ym2AppFlow);
};

let ym2BooksFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(ym2Books);
};

let ym2ClassLecFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(ym2ClassLec);
};

let ym2NotesFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(ym2Notes);
};

let ym2SpecialyarnsFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(ym2SpecialYarns);
};

let ym2IntroFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(ym2IntroModern);
};

let ym2RotorFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(ym2Rotor);
};

let ym2SpinningFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(ym2Spinning);
};


//level4
//bil
let bilFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(bilAppFlow);
};

let bilLaborFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(bilLaborLaw);
};


//hrm
let hrmFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(hrmAppFlow);
};


//bs
let bsFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(bsAppFlow);
};


//epd
let epdFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(epdAppFlow);
};


//ir
let irFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(irAppFlow);
};

let irIndusRelationFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(irIndustrialRelation);
};


//ppc
let ppcFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(ppcAppFlow);
};

//tam
let tamFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(tamAppFlow);
};

let tamIntroMerchFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(tamIntroMerch);
};

//labs
//chem1
let labChem1Flow = (req, res) => {
    //analytics
    try {
        handleAnalyticsLabs("chem1");
      } catch (err) {
        console.log(`🔴 Error while handling analytics(pre)`);
      }

    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(chem1Labs);
};

let labChem1ProcedureFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(chem1LabsProcedure);
};

let labChem1AcidFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(chem1LabsAcid);
};

let labChem1BasicFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(chem1LabsBasic);
};

let labChem1MohrFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(chem1LabsMohr);
};

let labChem1WetTestFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(chem1LabsWetTest);
};

let labChem1TitrationFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(chem1LabsTitration);
};

//chem2
let labChem2Flow = (req, res) => {

    //analytics
    try {
        handleAnalyticsLabs("chem2");
      } catch (err) {
        console.log(`🔴 Error while handling analytics(pre)`);
      }

    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(chem2Labs);
};

let labChem2PhysPropFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(chem2LabsPhyProp);
};

let labChem2Lass1Flow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(chem2LabsLass1);
};

let labChem2Lass2Flow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(chem2LabsLass2);
};

let labChem2SoluTestFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(chem2LabsSoluTest);
};

let labChem2AlcIdenFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(chem2LabsAlcIden);
};

let labChem2StrengthH2O2Flow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(chem2LabsStrengthH2O2);
};

let labChem2AmountFe2Flow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(chem2LabsAmountFe2);
};

let labChem2CarbonylIdenFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(chem2LabsCarbonylIden);
};

let labChem2CarboxyIdenFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(chem2LabsCarboxyIden);
};

let labChem2NIdenFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(chem2LabsNIden);
};

let labChem2AmountNa2CO3Flow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(chem2LabsAmountNa2CO3);
};


//labs - phy1
let labPhy1Flow = (req, res) => {

    //analytics
    try {
        handleAnalyticsLabs("phy1");
      } catch (err) {
        console.log(`🔴 Error while handling analytics(pre)`);
      }


    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(phy1Labs);
};

let labPhy1M1Flow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(phy1LabsM1);
};

let labPhy1M2Flow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(phy1LabsM2);
};

let labPhy1M3Flow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(phy1LabsM3);
};

let labPhy1M4Flow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(phy1LabsM4);
};

let labPhy1M5Flow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(phy1LabsM5);
};

let labPhy1M6Flow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(phy1LabsM6);
};

let labPhy1O1Flow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(phy1LabsO1);
};

let labPhy1O2Flow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(phy1LabsO2);
};

let labPhy1O3Flow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(phy1LabsO3);
};

let labPhy1O4Flow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(phy1LabsO4);
};


//labs - phy2
let labPhy2Flow = (req, res) => {

    //analytics
    try {
        handleAnalyticsLabs("phy2");
      } catch (err) {
        console.log(`🔴 Error while handling analytics(pre)`);
      }


    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(phy2Labs);
};

let labPhy2E1Flow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(phy2LabsE1);
};

let labPhy2E2Flow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(phy2LabsE2);
};

let labPhy2E3Flow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(phy2LabsE3);
};

let labPhy2E4Flow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(phy2LabsE4);
};

let labPhy2E5Flow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(phy2LabsE5);
};

let labPhy2E6Flow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(phy2LabsE6);
};

let labPhy2E7Flow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(phy2LabsE7);
};

let labPhy2E8Flow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(phy2LabsE8);
};

let labPhy2H1Flow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(phy2LabsH1);
};

let labPhy2H2Flow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(phy2LabsH2);
};

let labPhy2H3Flow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(phy2LabsH3);
};

let labPhy2M1Flow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(phy2LabsM1);
};


//labs - msp
let labmspFlow = (req, res) => {

    //analytics
    try {
        handleAnalyticsLabs("msp");
      } catch (err) {
        console.log(`🔴 Error while handling analytics(pre)`);
      }


    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(mspLabs);
};

let labMspLayoutFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(mspLabsLayout);
};

let labMspHandToolsFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(mspLabsHandTools);
};

let labMspLabsGrindingFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(mspLabsGrinding);
};

let labMspLatheFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(mspLabsLathe);
};

let labMspSqKeyFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(mspLabsSqKey);
};

let labMspMatchingPartsFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(mspLabsMatchingParts);
};

let labMspMillingFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(mspLabsMillingMc);
};

let labMspDrillingFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(mspLabsDrilling);
};

let labMspShaperFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(mspLabsShaper);
};

let labMspWeldingFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(mspLabsWelding);
};

let labMspLightMcFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(mspLabsLightMc);
};

let labMspArcWrldFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(mspLabsArcWelding);
};

let labMspMfgAssmFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(mspLabsMfgAssm);
};

let labMspQuizFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(mspLabsQuiz);
};


//labs - bce
let labBceFlow = (req, res) => {

    //analytics
    try {
        handleAnalyticsLabs("bce");
      } catch (err) {
        console.log(`🔴 Error while handling analytics(pre)`);
      }


    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(bceLabs);
};

let labBceListenFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(bceLabListen);
};

let labBceReadFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(bceLabReading);
};

let labBceSheetFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(bceLabSheet);
};


//labs - ap1
let labAp1Flow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(ap1Labs);
};

let labAp1InterliningFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(ap1LabsInterlining);
};

let labAp1StdBodyFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(ap1LabsStdBody);
};

let labAp1FusingFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(ap1LabsFusing);
};

let labAp1StrtKnifeFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(ap1LabsStrtKnife);
};


//labs - cp
let labCpFlow = (req, res) => {

    //analytics
    try {
        handleAnalyticsLabs("cp");
      } catch (err) {
        console.log(`🔴 Error while handling analytics(pre)`);
      }


    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(cpLabs);
};


let labCp1Flow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(cpLabs1);
};

let labCp2Flow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(cpLabs2);
};

let labCp3Flow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(cpLabs3);
};

let labCp4Flow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(cpLabs4);
};

let labCp5Flow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(cpLabs5);
};

let labCp6Flow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(cpLabs6);
};

let labCp7Flow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(cpLabs7);
};

let labCp135Flow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(cpLabs135);
};

//labs2 -> am1
let labAm1Flow = (req, res) => {
    //analytics
    try {
        handleAnalyticsLabs("am1");
      } catch (err) {
        console.log(`🔴 Error while handling analytics(pre)`);
      }

    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(am1Labs);
};

let labAm1AllFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(am1LabsAll);
};

let labAm1StdBodyFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(am1LabsStdBody);
};

let labAm1LayoutFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(am1LabsLayout);
};

//labs2 -> ym1
let labYm1Flow = (req, res) => {
    //analytics
    try {
        handleAnalyticsLabs("ym1");
      } catch (err) {
        console.log(`🔴 Error while handling analytics(pre)`);
      }

    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(ym1Labs);
};

//labs2 -> fm1
let labFm1Flow = (req, res) => {
    //analytics
    try {
        handleAnalyticsLabs("fm1");
      } catch (err) {
        console.log(`🔴 Error while handling analytics(pre)`);
      }

    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(fm1Labs);
};

let labFm1LayoutFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(fm1LabsLayout);
};

let labFm1TappetFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(fm1LabsTappet);
};

let labFm1LoomingFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(fm1LabsLooming);
};

let labFm1PackageFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(fm1LabsPackage);
};

let labFm1CheeseFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(fm1LabsCheese);
};

let labFm1HighSpeedFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(fm1LabsHighSpeed);
};

let labFm1SectionalFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(fm1LabsSectional);
};

let labFm1ConvSizingFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(fm1LabsConvSizing);
};

let labFm1DobbyFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(fm1LabsDobby);
};

let labFm1SizingFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(fm1LabsSizing);
};

//labs2 -> wp1
let labWp1Flow = (req, res) => {
    //analytics
    try {
        handleAnalyticsLabs("wp1");
      } catch (err) {
        console.log(`🔴 Error while handling analytics(pre)`);
      }

    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(wp1Labs);
};

//labs2 -> wpp
let labWppFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(wppLabs);
};

//labs2 -> pm1
let labPm1Flow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(pm1Labs);
};

//labs2 -> ttqc
let labTtqcFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(ttqcLabs);
};

//labs2 -> fe_wpp
let labFe_WppFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(fe_wppLabs);
};


//labs2 -> fme
let labFmeFlow = (req, res) => {
    //analytics
    try {
        handleAnalyticsLabs("fme");
      } catch (err) {
        console.log(`🔴 Error while handling analytics(pre)`);
      }

    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(fmeLabs);
};

//labs2 -> feee
let labFeeeFlow = (req, res) => {
    //analytics
    try {
        handleAnalyticsLabs("feee");
      } catch (err) {
        console.log(`🔴 Error while handling analytics(pre)`);
      }

    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(feeeLabs);
};

//labs3 -> acwp
let labAcwpFlow = (req, res) => {
    //analytics
    // try {
    //     handleAnalyticsLabs("wp1");
    //   } catch (err) {
    //     console.log(`🔴 Error while handling analytics(pre)`);
    //   }

    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(acwpLabs);
};

let labApparelWashFlow = (req, res) => {
    //analytics
    // try {
    //     handleAnalyticsLabs("wp1");
    //   } catch (err) {
    //     console.log(`🔴 Error while handling analytics(pre)`);
    //   }

    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(apparelWashLabs);
};

let labAm2Flow = (req, res) => {
    //analytics
    // try {
    //     handleAnalyticsLabs("wp1");
    //   } catch (err) {
    //     console.log(`🔴 Error while handling analytics(pre)`);
    //   }

    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(am2Labs);
};

let labAp2Flow = (req, res) => {
    //analytics
    // try {
    //     handleAnalyticsLabs("wp1");
    //   } catch (err) {
    //     console.log(`🔴 Error while handling analytics(pre)`);
    //   }

    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(ap2Labs);
};

let labFm2Flow = (req, res) => {
    //analytics
    // try {
    //     handleAnalyticsLabs("wp1");
    //   } catch (err) {
    //     console.log(`🔴 Error while handling analytics(pre)`);
    //   }

    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(fm2Labs);
};

let labFsdFlow = (req, res) => {
    //analytics
    // try {
    //     handleAnalyticsLabs("wp1");
    //   } catch (err) {
    //     console.log(`🔴 Error while handling analytics(pre)`);
    //   }

    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(fsdLabs);
};

let labYm2Flow = (req, res) => {
    //analytics
    // try {
    //     handleAnalyticsLabs("wp1");
    //   } catch (err) {
    //     console.log(`🔴 Error while handling analytics(pre)`);
    //   }

    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(ym2Labs);
};

let labpm2Flow = (req, res) => {
    //analytics
    // try {
    //     handleAnalyticsLabs("wp1");
    //   } catch (err) {
    //     console.log(`🔴 Error while handling analytics(pre)`);
    //   }

    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(pm2Labs);
};

let labWp2Flow = (req, res) => {
    //analytics
    // try {
    //     handleAnalyticsLabs("wp1");
    //   } catch (err) {
    //     console.log(`🔴 Error while handling analytics(pre)`);
    //   }

    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(wp2Labs);
};


let labFeeeMultiFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(feeeLabsMultimetre);
};

let labFeeeOhmFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(feeeLabsOhm);
};

let labFeeeKirchoffFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(feeeLabsKirchoff);
};

let labFeeeRCFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(feeeLabsRC);
};

let labFeeeRLFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(feeeLabsRL);
};

let labFeeeRLCFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(feeeLabsRLC);
};

let labFeeeCarbonResFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(feeeLabsCarbonRes);
};

let labFeeeFanRegFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(feeeLabsFanReg);
};

let labFeeeWiringTubelightFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(feeeLabsWiringTube);
};

let labFeeeFullBridgeFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(feeeLabsFullBridge);
};

let labFeeeFuseFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(feeeLabsFuse);
};

let labFeeeOsciFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(feeeLabsOsci);
};

let labFeeeWireGaugeFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(feeeLabsWireGauge);
};

let labFeee2WayLightFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(feeeLabs2Light);
};


//labs2 -> mp
let labMpFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(mpLabs);
};

//labs2 -> sss1
let labSss1Flow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(sss1Labs);
};

//labs2 -> sss2
let labSss2Flow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(sss2Labs);
};







//syllabus
let syllabusLevelFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send([
        {
                batch: "45",
                route: "app/syllabus/45"
        }
    ]);
};

let syllabusBatch45Flow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(syllabusBatch45);
};

let syllabusBatch45AeFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(syllabusBatch45Ae);
};

let syllabusBatch45FeFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(syllabusBatch45Fe);
};

let syllabusBatch45YeFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(syllabusBatch45Ye);
};

let syllabusBatch45IpeFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(syllabusBatch45Ipe);
};

let syllabusBatch45WpeFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(syllabusBatch45Wpe);
};

let syllabusBatch45DceFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(syllabusBatch45Dce);
};

let syllabusBatch45TemFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(syllabusBatch45Tem);
};

let syllabusBatch45TfdFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(syllabusBatch45Tfd);
};

let syllabusBatch45TmdmFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(syllabusBatch45Tmdm);
};

let syllabusBatch45EseFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(syllabusBatch45Ese);
};

//random func
let randomNum = (length) => {
    return Math.floor(Math.random()*length)
}

//jokes
let jokesFlow = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
    return res.send(jokes[randomNum(jokes.length)]);
};



//404 Route
let notFound = (req, res) => {
    return res.status(404).json(
        {
            "Error": `404 Not Found`,
            "isErr": true
        }
    ) 
}
/*-----------------------------------------------------------------------------------------------------------------------------------*/ 

let labs = (req, res) => {

    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)

    var fullUrl = req.protocol + deploymentEnvDetector() + req.get('host') + req.originalUrl;


    let labLevels = {
        labLevels: [
            {
                labLevel: 1,
                route: `${fullUrl}/1`
            },
            {
                labLevel: 2,
                route: `${fullUrl}/2`
            },
            {
                labLevel: 3,
                route: `${fullUrl}/3`
            },
            {
                labLevel: 4,
                route: `${fullUrl}/4`
            }
        ]
    }
    return res.send(labLevels);
};


// // Extra App flows
// let noticeFlow = (req, res) => {
//     console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
//     const rssUrl = "https://www.butex.edu.bd/feed";
//     //empty array to hold json responses
//     let topRss = [];
//     let topRssAmount = 5
//     try {
//       // Promise
//       Feed.load(rssUrl).then(rss => {
//         for (let i = 0; i < topRssAmount; i++) {
//             let formatedDate = new Date(rss.items[i].published);
//             let noticeObj = {
//                 title: rss.items[i].title,
//                 url: rss.items[i].url,
//                 date: `${formatedDate.getDate()}/${formatedDate.getMonth()+1}/${formatedDate.getFullYear()}`,
//                 category: rss.items[i].category,
//             }
//           //pushing json objects to the array
//           topRss.push(noticeObj)
//         }
//         return res.send(topRss);
//       }).catch(err => {
//           console.log(err)
//           return res.status(500).send({error: "Error Occured"});
//         });
//     } catch (err) {
//         console.error("🟥 Function Error Occured In Notice Checking")
//         return res.status(500).send({error: "Error Occured"});
//     }
// };



module.exports = {
    intro: appIntro,
    
    labs: labs,

    notes: notes,
    notesLevel1: level1Notes,
    notesLevel2: level2Notes,
    notesLevel3: level3Notes,
    notesLevel4: level4Notes,

    //math1
    math1: math1,
    math1Books: math1Books,
    math1Solve2018Flow: math1Solve2018Flow,
    math1Ques: math1Ques,
    math1Conver: math1Convergence,
    math1Exapnsion: math1Expansion,
    math1Diff: math1Differen,
    math1Int: math1Integretion,
    math1Extrema: math1Extrema,
    math1Conic: math1Conic,
    math1VectorFlow: math1VectorFlow,
    math1CoOrdFlow: math1CoOrdFlow,
    math1MatrixFlow: math1MatrixFlow,
    math1LinearFlow: math1LinearFlow,
    math1ChangeofAxesFlow: math1ChangeofAxesFlow,

    math2: math2,
    math2BooksFlow: math2BooksFlow,
    math2QuesFlow: math2QuesFlow,
    math2SuggFlow: math2SuggFlow,
    math2moivreFlow: math2moivreFlow,
    math2HomoFlow: math2HomoFlow,
    math2LDEFlow: math2LDEFlow,
    math2ExactFlow: math2ExactFlow,
    math2RedHomoFlow: math2RedHomoFlow,
    math2DiffEqnFlow: math2DiffEqnFlow,
    math2linEqnFlow: math2linEqnFlow,
    math2residueFlow: math2residueFlow,
    math2LineIntFlow: math2LineIntFlow,
    math2methodVarFlow: math2methodVarFlow,
    math2AnalyFuncFlow: math2AnalyFuncFlow,
    math2VectorFlow: math2VectorFlow,
    math2odeFlow: math2odeFlow,
    math2SepaVarFlow: math2SepaVarFlow,
    math2laplaceFlow: math2laplaceFlow,
    math2ComplexFlow: math2ComplexFlow,


    chem1Flow: chem1Flow,
    chem1BooksFlow: chem1BooksFlow,
    chem1QuesFlow: chem1QuesFlow,
    chem1PeriodicFlow: chem1PeriodicFlow,
    chem1DiluFlow: chem1DiluFlow,
    chem1CxCompFlow: chem1CxCompFlow,
    chem1BondFlow: chem1BondFlow,
    chem1KineticsFlow: chem1KineticsFlow,
    chem1EquiFlow: chem1EquiFlow,
    chem1PhotoFlow: chem1PhotoFlow,
    chem1AnalyFlow: chem1AnalyFlow,
    chem1CollFlow: chem1CollFlow,
    chem1AcidBaseFlow: chem1AcidBaseFlow,


    chem2Flow: chem2Flow,
    chem2BooksFlow: chem2BooksFlow,
    chem2QuesFlow: chem2QuesFlow,
    chem2OrganMetalFlow: chem2OrganMetalFlow,
    chem2CarboNylFlow: chem2CarboNylFlow,
    chem2orgRecFlow: chem2orgRecFlow,
    chem2AlcPhenFlow: chem2AlcPhenFlow,
    chem2AminoFlow: chem2AminoFlow,
    chem2CarboHyFlow: chem2CarboHyFlow,
    chem2ColorDyeFlow: chem2ColorDyeFlow,
    chem2CarboxylicAcidFlow: chem2CarboxylicAcidFlow,
    chem2AmineFlow: chem2AmineFlow,
    chem2SolubilityFlow: chem2SolubilityFlow,

    phy1Flow: phy1Flow,
    phy1BooksFlow: phy1BooksFlow,
    phy1QuesFlow: phy1QuesFlow,
    phy1CircularFlow:phy1CircularFlow,
    phy1HydroFlow: phy1HydroFlow,
    phy1DiffracFlow: phy1DiffracFlow,
    phy1InterFlow:phy1InterFlow,
    phy1PolarFlow:phy1PolarFlow,
    phy1ElasticityFlow: phy1ElasticityFlow,
    phy1ViscoFlow: phy1ViscoFlow,
    phy1SurfaceFlow: phy1SurfaceFlow,

    phy2Flow: phy2Flow,
    phy2BooksFlow: phy2BooksFlow,
    phy2QuesFlow: phy2QuesFlow,
    phy2KineticFlow: phy2KineticFlow,
    phy2ElectricFlow: phy2ElectricFlow,
    phy2ThermoFlow: phy2ThermoFlow,
    phy2RadFlow: phy2RadFlow,
    phy2MagFlow: phy2MagFlow,
    phy2ModernFlow: phy2ModernFlow,
    phy2EntropyFlow: phy2EntropyFlow,

    emFlow: emFlow,
    emBooksFlow: emBooksFlow,
    emQuesFlow: emQuesFlow,
    emMathFlow: emMathFlow,
    emBlastFurFlow: emBlastFurFlow,
    emHeatTreatFlow: emHeatTreatFlow,
    emHeatWroughtFlow: emHeatWroughtFlow,
    emCrystalFlow:emCrystalFlow,
    emIronFlow: emIronFlow,
    emGlassFlow: emGlassFlow,
    emCeramicsFlow: emCeramicsFlow,
    emCorrosionFlow: emCorrosionFlow,
    emAlloyFlow: emAlloyFlow,
    emCompositesFlow: emCompositesFlow,
    emPlasticsFlow: emPlasticsFlow,
    emPhasediagFlow: emPhasediagFlow,
    emAtomicFlow: emAtomicFlow,

    tmmFlow: tmmFlow,
    tmmQuesFlow: tmmQuesFlow,

    fhFlow: fhFlow,
    fhArtDesFlow: fhArtDesFlow,
    fhRomanFlow: fhRomanFlow,
    fhElizaFlow: fhElizaFlow,
    fhGeorigianFlow: fhGeorigianFlow,
    fhGreekFlow: fhGreekFlow,
    fhEgyptFlow: fhEgyptFlow,
    fhRenasiFlow: fhRenasiFlow,
    fhSilkFlow: fhSilkFlow,
    fhJeansFlow: fhJeansFlow,
    fhMuslinFlow: fhMuslinFlow,
    fhHandloomFlow: fhHandloomFlow,

    pseFlow: pseFlow,
    pseBooksFlow: pseBooksFlow,
    pseQuesFlow: pseQuesFlow,
    pseHandNotesFlow: pseHandNotesFlow,
    pseIntroFlow: pseIntroFlow,
    psePhyStructFlow: psePhyStructFlow,
    pseChemStructFlow: pseChemStructFlow,
    pseMWFlow: pseMWFlow,
    pseStepFlow: pseStepFlow,
    pseChainFlow: pseChainFlow,
    pseThermalFlow: pseThermalFlow,
    pseDegradFlow: pseDegradFlow,
    psePolymTechFlow: psePolymTechFlow,
    pseAppPolyFlow: pseAppPolyFlow,
    pseMorphoFlow: pseMorphoFlow,

    ntfFlow: ntfFlow,
    ntfBooksFlow: ntfBooksFlow,
    ntfQuesFlow: ntfQuesFlow,
    ntfNotesFlow: ntfNotesFlow,
    ntfSuggFlow: ntfSuggFlow,
    ntfIntroFlow: ntfIntroFlow,
    ntfCottonFlow: ntfCottonFlow,
    ntfFlaxFlow: ntfFlaxFlow,
    ntfWoolFlow: ntfWoolFlow,
    ntfJuteFlow: ntfJuteFlow,
    ntfSilkFlow: ntfSilkFlow,
    ntfSisalFlow: ntfSisalFlow,
    ntfHempFlow: ntfHempFlow,
    ntfPalfFlow: ntfPalfFlow,
    ntfKapokFlow: ntfKapokFlow,
    ntfAsbestosFlow: ntfAsbestosFlow,
    ntfOtherFibFlow: ntfOtherFibFlow,
    ntfQuizFlow: ntfQuizFlow,


    cpFlow: cpFlow,
    cpBooksFlow: cpBooksFlow,
    cpQuesFlow: cpQuesFlow,
    cpFundaFlow: cpFundaFlow,
    cpConditionalFlow: cpConditionalFlow,
    cpLoopFlow: cpLoopFlow,
    cpArrayFlow: cpArrayFlow,
    cpFunctionFlow: cpFunctionFlow,
    cpStringFlow: cpStringFlow,
    cpSuggFlow: cpSuggFlow,

    bceFlow: bceFlow,
    bceQuesFlow: bceQuesFlow,
    bceAllSheetsFlow: bceAllSheetsFlow,
    bcePartAFlow: bcePartAFlow,
    bcePartBFlow: bcePartBFlow,
    bceFullABFlow: bceFullABFlow,
    bceIntroFlow: bceIntroFlow,
    bceLangFuncFlow: bceLangFuncFlow,
    bceCommuniFlow: bceCommuniFlow,
    bceBizLetterFlow: bceBizLetterFlow,
    bceReportFlow: bceReportFlow,
    bceReadWriteFlow: bceReadWriteFlow,

    iaeFlow: iaeFlow,
    iaeBooksFlow: iaeBooksFlow,
    iaeQuesFlow: iaeQuesFlow,
    iaeIntroFlow: iaeIntroFlow,
    iaeFullSlideFlow: iaeFullSlideFlow,
    iaeDiffWovenFlow: iaeDiffWovenFlow,
    iaeBrandsFlow: iaeBrandsFlow,
    iaeQuotaFlow: iaeQuotaFlow,
    iaeCadFlow: iaeCadFlow,
    iaeShirtFlow:iaeShirtFlow,

    bfsFlow: bfsFlow,
    bfsLec3Flow: bfsLec3Flow,

    tpmFlow: tpmFlow,
    tpmQuesFlow: tpmQuesFlow,
    tpmFabWetFlow: tpmFabWetFlow,
    tpmFabManuFlow:tpmFabManuFlow,

    fmgFlow: fmgFlow,

    ieeFlow: ieeFlow,
    ieeBooksFlow: ieeBooksFlow,
    ieeSheetsFlow: ieeSheetsFlow,
    ieeNotesFlow: ieeNotesFlow,
    ieeManEnvFlow: ieeManEnvFlow,
    ieeSoilFlow: ieeSoilFlow,
    ieeEnvIssueFlow: ieeEnvIssueFlow,
    ieeNatureEnvFlow: ieeNatureEnvFlow,
    ieeSPFFlow: ieeSPFFlow,

    ecbFlow: ecbFlow,
    ecbNotesFlow: ecbNotesFlow,
    ecbIntroFlow: ecbIntroFlow,


    sss1Flow: sss1Flow,
    sss1BooksFlow: sss1BooksFlow,
    sss1BlowRoomFlow: sss1BlowRoomFlow,
    sss1DrawframeFlow: sss1DrawframeFlow,
    sss1CardingFlow: sss1CardingFlow,
    sss1IntroFlow: sss1IntroFlow,
    sss1IntroFibFlow: sss1IntroFibFlow,

    sss2Flow: sss2Flow,
    sss2RingframeFlow: sss2RingframeFlow,
    sss2NotesFlow: sss2NotesFlow,

    fytFlow: fytFlow,
    fytBooksFlow: fytBooksFlow,
    fytNotesFlow: fytNotesFlow,
    fytSuggFlow: fytSuggFlow,
    fytYarnNumFlow: fytYarnNumFlow,
    fytYarnTwistFlow: fytYarnTwistFlow,
    fytEvennessFlow: fytEvennessFlow,
    fytCountFlow: fytCountFlow,
    fytAfisFlow: fytAfisFlow,
    fytISOFlow: fytISOFlow,
    fytCapaOpticalFlow: fytCapaOpticalFlow,

    marketingFlow: marketingFlow,
    marketingBooksFlow: marketingBooksFlow,
    marketingNotesFlow: marketingNotesFlow,
    marketingQuesFlow: marketingQuesFlow,
    marketingSuggFlow: marketingSuggFlow,
    marketingIntroFlow: marketingIntroFlow,
    marketingFuncMarketFlow: marketingFuncMarketFlow,
    marketingFieldFlow: marketingFieldFlow,
    marketingConceptFlow: marketingConceptFlow,
    marketingOrientationFlow: marketingOrientationFlow,
    marketingMicroEnvFlow: marketingMicroEnvFlow,
    marketingMacroEnvFlow: marketingMacroEnvFlow,
    marketingSegmentFlow: marketingSegmentFlow,
    marketingTargetFlow: marketingTargetFlow,
    marketingDiffPosFlow: marketingDiffPosFlow,
    marketingChannelDistFlow: marketingChannelDistFlow,
    marketingRetailFlow: marketingRetailFlow,
    marketingPriceFlow: marketingPriceFlow,
    marketingConsumerBuyerFlow: marketingConsumerBuyerFlow,
    marketingBrandFlow: marketingBrandFlow,
    marketingNewProdFlow: marketingNewProdFlow,
    marketingAdvertFlow: marketingAdvertFlow,
    marketingCompStartFlow: marketingCompStartFlow,
    marketingMajorPriceFlow: marketingMajorPriceFlow,

    am1Flow: am1Flow,
    am1BooksFlow: am1BooksFlow,
    am1NotesFlow: am1NotesFlow,
    am1QuesFlow: am1QuesFlow,
    am1IntroFlow: am1IntroFlow,
    am1StructTexFlow: am1StructTexFlow,
    am1SizingFlow: am1SizingFlow,
    am1SeamFlow: am1SeamFlow,
    am1TrimFlow: am1TrimFlow,
    am1InterFlow: am1InterFlow,
    am1PatternFlow: am1PatternFlow,
    am1MarkerFlow: am1MarkerFlow,
    am1SpreadFlow: am1SpreadFlow,
    am1FabCutFlow: am1FabCutFlow,
    am1FabInspectionFlow: am1FabInspectionFlow,

    statFlow: statFlow,
    statBooksFlow: statBooksFlow,
    statNotesFlow: statNotesFlow,
    statProbabFlow: statProbabFlow,
    statIntroFlow:statIntroFlow,
    statCentralFlow: statCentralFlow,
    statCVFlow: statCVFlow,
    statMomentsFlow: statMomentsFlow,
    statShapeFlow: statShapeFlow,
    statDesignExpFlow: statDesignExpFlow,
    statNormalFlow: statNormalFlow,
    statBinomialFlow: statBinomialFlow,
    statPoissionFlow: statPoissionFlow,
    statRegressionFlow: statRegressionFlow,

    fm1Flow: fm1Flow,
    fm1BooksFlow: fm1BooksFlow,
    fm1NotesFlow: fm1NotesFlow,
    fm1SuggFlow: fm1SuggFlow,
    fm1QuesFlow: fm1QuesFlow,
    fm1LoomFlow: fm1LoomFlow,
    fm1MotionsWeavFlow: fm1MotionsWeavFlow,
    fm1IntroFlow: fm1IntroFlow,
    fm1SheddingFlow: fm1SheddingFlow,
    fm1WeavingFlow: fm1WeavingFlow,
    fm1SizingFlow: fm1SizingFlow,
    fm1WindingFlow: fm1WindingFlow,
    fm1DobbyFlow: fm1DobbyFlow,
    fm1WarpingFlow: fm1WarpingFlow,
    fm1TappetFlow: fm1TappetFlow,
    fm1PickingFlow: fm1PickingFlow,
    fm1BeatupFlow: fm1BeatupFlow,
    fm1SelvedgeFlow: fm1SelvedgeFlow,
    fm1TakeupFlow: fm1TakeupFlow,
    fm1LetoffFlow: fm1LetoffFlow,
    fm1DenimFlow: fm1DenimFlow,
    fm1StopMotionsFlow: fm1StopMotionsFlow,
    fm1JaquardFlow: fm1JaquardFlow,

    ym1Flow: ym1Flow,
    ym1IntroFlow: ym1IntroFlow,
    ym1IndeterStrFlow: ym1IndeterStrFlow,
    ym1BlowroomFlow: ym1BlowroomFlow,
    ym1MixingFlow: ym1MixingFlow,
    ym1FibPropFlow: ym1FibPropFlow,
    ym1YarnCondFlow: ym1YarnCondFlow,
    ym1ComberFlow: ym1ComberFlow,
    ym1DrawframeFlow: ym1DrawframeFlow,
    ym1WindingFlow: ym1WindingFlow,
    ym1LapFormerFlow: ym1LapFormerFlow,
    ym1CardingFlow: ym1CardingFlow,
    ym1RingFrameFlow: ym1RingFrameFlow,
    ym1SpeedSimplexFlow: ym1SpeedSimplexFlow,

    ttqcFlow: ttqcFlow,
    ttqcBooksFlow: ttqcBooksFlow,
    ttqcNotesFlow: ttqcNotesFlow,
    ttqcCountFlow: ttqcCountFlow,
    ttqcCrimpFlow: ttqcCrimpFlow,
    ttqcTwistFlow: ttqcTwistFlow,
    ttqcIntroFlow: ttqcIntroFlow,
    ttqcMoistureRHFlow: ttqcMoistureRHFlow,
    ttqcNepsFlow: ttqcNepsFlow,
    ttqcSamplingFlow: ttqcSamplingFlow,
    ttqcFibPropFlow: ttqcFibPropFlow,
    ttqcHVIFlow: ttqcHVIFlow,
    ttqcAfisFlow: ttqcAfisFlow,

    tpFlow: tpFlow,
    tpBooksFlow: tpBooksFlow,
    tpNotesFlow: tpNotesFlow,
    tpSuggFlow: tpSuggFlow,
    tpQuesFlow: tpQuesFlow,
    tpSwellingFlow: tpSwellingFlow,
    tpFrictionFlow: tpFrictionFlow,
    tpJammingFlow: tpJammingFlow,
    tpOpticalFlow: tpOpticalFlow,
    tpFibMigFlow: tpFibMigFlow,
    tpThermalPropFlow: tpThermalPropFlow,
    tpFibDrawFlow: tpFibDrawFlow,
    tpXrayFlow: tpXrayFlow,
    tpYarnStructFlow: tpYarnStructFlow,
    tpFabGeoFlow: tpFabGeoFlow,
    tpTensilePropFlow: tpTensilePropFlow,

    feeeFlow:feeeFlow,
    feeeBooksFlow: feeeBooksFlow,
    feeeNotesFlow: feeeNotesFlow,
    feeeQuesFlow: feeeQuesFlow,
    feeeCh1Flow: feeeCh1Flow,
    feeeCh2Flow: feeeCh2Flow,
    feeeCh3Flow: feeeCh3Flow,
    feeeCh4Flow: feeeCh4Flow,
    feeeCh5Flow: feeeCh5Flow,
    feeeCh8Flow: feeeCh8Flow,
    feeeWyeDeltaFlow: feeeWyeDeltaFlow,
    feeeRMSFlow: feeeRMSFlow,
    feeeCirAnalFlow: feeeCirAnalFlow,

    mmtfFlow: mmtfFlow,
    mmtfBooksFlow: mmtfBooksFlow,
    mmtfNotesFlow: mmtfNotesFlow,
    mmtfSuggFlow: mmtfSuggFlow,
    mmtfIntroFlow: mmtfIntroFlow,
    mmtfViscoseRayonFlow: mmtfViscoseRayonFlow,
    mmtfSpinSysFlow: mmtfSpinSysFlow,
    mmtfHighPerfFlow: mmtfHighPerfFlow,
    mmtfPolyamideFlow: mmtfPolyamideFlow,
    mmtfModalFlow: mmtfModalFlow,
    mmtfElastomerFlow: mmtfElastomerFlow,
    mmtfPolyolefinFlow: mmtfPolyolefinFlow,
    mmtfCarbonFibFlow: mmtfCarbonFibFlow,
    mmtfAcetateFlow: mmtfAcetateFlow,
    mmtfBiCompFlow: mmtfBiCompFlow,
    mmtfPolyesterFlow: mmtfPolyesterFlow,
    mmtfAcrylicFlow: mmtfAcrylicFlow,
    mmtfVectranFlow: mmtfVectranFlow,
    mmtfRegenProteinFlow: mmtfRegenProteinFlow,
    mmtfGlassFibFlow: mmtfGlassFibFlow,
    mmtfLyocellFlow: mmtfLyocellFlow,
    mmtfNylonFlow: mmtfNylonFlow,


    mpFlow: mpFlow,
    mpDefectsFlow: mpDefectsFlow,
    mpLatheFlow: mpLatheFlow,
    mpMillingFlow: mpMillingFlow,
    mpCastingVideoFlow: mpCastingVideoFlow,
    mpWeldingFlow: mpWeldingFlow,
    mpHotColdFlow: mpHotColdFlow,
    mpCeramicsFlow: mpCeramicsFlow,
    mpPlasticsFlow: mpPlasticsFlow,
    mpSlideWaysFlow: mpSlideWaysFlow,
    mpShaperFlow: mpShaperFlow,
    mpEDMFlow: mpEDMFlow,
    mpNonConvFlow: mpNonConvFlow,
    mpMCEconoFlow: mpMCEconoFlow,
    mpCastingFlow: mpCastingFlow,

    fmeFlow: fmeFlow,
    fmeBooksFlow: fmeBooksFlow,
    fmeNotesFlow: fmeNotesFlow,
    fmeQuesFlow: fmeQuesFlow,
    fmeSuggFlow: fmeSuggFlow,
    fmeBoilerFlow: fmeBoilerFlow,
    fmePowerRefFlow: fmePowerRefFlow,
    fmeSteamTurbFlow: fmeSteamTurbFlow,
    fmeThermalEngFlow: fmeThermalEngFlow,
    fmeFluidMechFlow: fmeFluidMechFlow,
    fmeEnergProcFlow: fmeEnergProcFlow,
    fmeSolidFlow: fmeSolidFlow,
    fmeGearTrainFlow: fmeGearTrainFlow,
    fmePumpFlow: fmePumpFlow,
    fmeStressFlow: fmeStressFlow,
    fmeEngPetrolFlow: fmeEngPetrolFlow,
    fmeEngCombusFlow: fmeEngCombusFlow,
    fmeBeamFlow: fmeBeamFlow,
    fmeBeltFlow: fmeBeltFlow,
    fmeCentroidFlow: fmeCentroidFlow,
    fmeMOIFlow: fmeMOIFlow,
    fmeColumnFlow: fmeColumnFlow,

    ap1Flow: ap1Flow,
    ap1BooksFlow: ap1BooksFlow,
    ap1QuesFlow: ap1QuesFlow,
    ap1SizingFlow: ap1SizingFlow,
    ap1TrimmingFlow: ap1TrimmingFlow,
    ap1InterFlow: ap1InterFlow,
    ap1FabCutFlow: ap1FabCutFlow,
    ap1PatternFlow: ap1PatternFlow,
    ap1FabSpreadFlow: ap1FabSpreadFlow,
    ap1MarkerFlow: ap1MarkerFlow,
    ap1SewingFlow: ap1SewingFlow,


    ctcaFlow: ctcaFlow,
    ctcaBooksFlow: ctcaBooksFlow,
    ctcaSheetsFlow: ctcaSheetsFlow,
    ctcaThickFlow: ctcaThickFlow,
    ctcaWaterFlow: ctcaWaterFlow,
    ctcaSurfactantFlow: ctcaSurfactantFlow,
    ctcaBleachFlow: ctcaBleachFlow,
    ctcaSolutionsFlow: ctcaSolutionsFlow,
    ctcaColloidFlow: ctcaColloidFlow,

    fdceFlow: fdceFlow,
    fdceDyesFlow: fdceDyesFlow,
    fdceChromatoFlow: fdceChromatoFlow,
    fdcePolarityFlow: fdcePolarityFlow,
    fdceSepaPuriFlow: fdceSepaPuriFlow,
    fdceBalanceChemFlow: fdceBalanceChemFlow,
    fdceFiltrationFlow: fdceFiltrationFlow,

    fd2Flow: fd2Flow,


    weavingPrepFlow: weavingPrepFlow,
    weavingPrepBooksFlow: weavingPrepBooksFlow,


    wppFlow: wppFlow,
    wppQuesFlow: wppQuesFlow,
    wppPretreatmentFlow: wppPretreatmentFlow,
    wppSingeingFlow: wppSingeingFlow,
    wppDesizingFlow: wppDesizingFlow,
    wppImpuritiesFlow: wppImpuritiesFlow,
    wppBioScouringFlow: wppBioScouringFlow,

    wp1Flow: wp1Flow,
    wp1BooksFlow: wp1BooksFlow,
    wp1NotesFlow: wp1NotesFlow,
    wp1QuesFlow: wp1QuesFlow,
    wp1IntroFlow: wp1IntroFlow,
    wp1WaterFlow: wp1WaterFlow,
    wp1IntroDyeFlow: wp1IntroDyeFlow,
    wp1GenConceptsFlow: wp1GenConceptsFlow,
    wp1ColorFastnessFlow: wp1ColorFastnessFlow,
    wp1StrippingFlow: wp1StrippingFlow,
    wp1SingeingFlow: wp1SingeingFlow,
    wp1ScouringFlow: wp1ScouringFlow,
    wp1PigmentFlow: wp1PigmentFlow,
    wp1TexFinishFlow: wp1TexFinishFlow,
    wp1VatDyesFlow: wp1VatDyesFlow,
    wp1DesizingFlow: wp1DesizingFlow,
    wp1BasicDyeFlow: wp1BasicDyeFlow,
    wp1AcidDyeFlow: wp1AcidDyeFlow,
    wp1BleachFlow: wp1BleachFlow,
    wp1DisperseDyeFlow: wp1DisperseDyeFlow,
    wp1KierBoilerFlow: wp1KierBoilerFlow,
    wp1DyeingFaultFlow: wp1DyeingFaultFlow,
    wp1ReactiveDyeFlow: wp1ReactiveDyeFlow,
    wp1DirectDyeFlow: wp1DirectDyeFlow,
    wp1JiggerMCFlow: wp1JiggerMCFlow,
    wp1ColorTestFlow: wp1ColorTestFlow,
    wp1FoldingTestFlow: wp1FoldingTestFlow,
    wp1WashingMCFlow: wp1WashingMCFlow,


    acfdFlow: acfdFlow,

    tcpFlow: tcpFlow,
    tcpKpcFlow: tcpKpcFlow,

    ttmFlow: ttmFlow,

    mppFlow: mppFlow,

    pcsFlow: pcsFlow,
    pcsBooksFlow: pcsBooksFlow,


    lssFlow: lssFlow,
    lssDrawFrameFlow: lssDrawFrameFlow,
    lssSpreaderFlow: lssSpreaderFlow,

    knit1Flow: knit1Flow,
    knit1LectureFlow: knit1LectureFlow,

    imFlow: imFlow,
    imLectureFlow: imLectureFlow,
    imLec1Flow: imLec1Flow,
    imLec2Flow: imLec2Flow,
    imLec3Flow: imLec3Flow,
    imLec4Flow: imLec4Flow,
    imMarketFlow: imMarketFlow,
    imMarketMixFlow: imMarketMixFlow,
    imProjectFeasFlow: imProjectFeasFlow,
    imNatureScopeFlow: imNatureScopeFlow,
    imManageFuncFlow: imManageFuncFlow,
    imIndusManageFlow: imIndusManageFlow,
    imTechManageFlow: imTechManageFlow,
    imProdnManageFlow: imProdnManageFlow,

    pdFlow: pdFlow,
    pdIntroFlow: pdIntroFlow,
    pdUnderstandingFlow: pdUnderstandingFlow,
    pdPlanningDesignFlow: pdPlanningDesignFlow,
    pdQualityFuncFlow: pdQualityFuncFlow,
    pdDesAssemFlow: pdDesAssemFlow,
    pdDesManuFlow: pdDesManuFlow,
    pdDesMainFlow: pdDesMainFlow,
    pdDesRelFlow: pdDesRelFlow,
    pdBooksFlow: pdBooksFlow,
    pdFastFlow: pdFastFlow,
    pdDesTensionFlow: pdDesTensionFlow,
    pdLoadStressFlow: pdLoadStressFlow,


    tqmFlow: tqmFlow,
    tqmTotalQMFlow: tqmTotalQMFlow,
    tqmQualityReliabilityFlow: tqmQualityReliabilityFlow,
    tqmContinuousImproveFlow: tqmContinuousImproveFlow,
    tqmQualityStdFlow: tqmQualityStdFlow,
    tqmIntroQMFlow: tqmIntroQMFlow,
    tqmControlMeasureFlow: tqmControlMeasureFlow,
    tqmManagementApproachFlow: tqmManagementApproachFlow,
    tqmQCToolsFlow: tqmQCToolsFlow,


    micFlow: micFlow,
    micBooksFlow: micBooksFlow,
    micIntroFlow: micIntroFlow,
    micSysElementFlow: micSysElementFlow,
    micControlSysFlow: micControlSysFlow,
    micLimitFitFlow: micLimitFitFlow,
    micNonDesFlow: micNonDesFlow,
    micSurfaceFinishFlow: micSurfaceFinishFlow,
    micThreadMeasureFlow: micThreadMeasureFlow,
    micAngularMeasFlow: micAngularMeasFlow,
    micLinearMeasFlow: micLinearMeasFlow,
    micCh5Flow: micCh5Flow,
    micGearMeasFlow: micGearMeasFlow,
    micFatigueFailFlow: micFatigueFailFlow,


    aceFlow: aceFlow,
    aceIntroControlFlow: aceIntroControlFlow,
    aceModelFreqFlow: aceModelFreqFlow,
    aceTimeResFlow: aceTimeResFlow,
    aceSensorsFlow: aceSensorsFlow,
    aceNumberSysFlow: aceNumberSysFlow,
    aceTransferFuncFlow: aceTransferFuncFlow,
    aceLogicGateFlow: aceLogicGateFlow,
    aceHydraulicsFlow: aceHydraulicsFlow,
    acePneumaticsFlow: acePneumaticsFlow,
    aceIntroRoboticsFlow: aceIntroRoboticsFlow,
    aceJointsFlow: aceJointsFlow,
    aceActuatorFlow: aceActuatorFlow,
    aceGripsFlow: aceGripsFlow,
    aceStructElementsFlow: aceStructElementsFlow,
    aceBooksFlow: aceBooksFlow,

    acmFlow: acmFlow,
    acmBooksFlow: acmBooksFlow,
    acmIntroCostFlow: acmIntroCostFlow,
    acmInterestedUsersFlow: acmInterestedUsersFlow,
    acmAccInActionFlow: acmAccInActionFlow,
    acmRecordingProcessFlow: acmRecordingProcessFlow,
    acmCostBehaviourFlow:acmCostBehaviourFlow,
    acmAccForMerchFlow: acmAccForMerchFlow,
    acmCostAccSysFlow: acmCostAccSysFlow,
    acmCostTechFlow: acmCostTechFlow,

    fsdFlow: fsdFlow,
    fsdBooksFlow: fsdBooksFlow,
    fsdIntroFlow: fsdIntroFlow,
    fsdPlainWeaveFlow: fsdPlainWeaveFlow,
    fsdTwillFlow: fsdTwillFlow,
    fsdFancyFlow: fsdFancyFlow,
    fsdColorWeaveFlow: fsdColorWeaveFlow,
    fsdSatinWeaveFlow: fsdSatinWeaveFlow,

    am2Flow: am2Flow,
    am2BooksFlow: am2BooksFlow,
    am2ClassLecFlow: am2ClassLecFlow,
    am2LineBalancingFlow: am2LineBalancingFlow,
    am2ExcelFlow: am2ExcelFlow,


    ap2Flow: ap2Flow,
    ap2FoldingFlow: ap2FoldingFlow,
    ap2StitchFlow: ap2StitchFlow,
    ap2LockStictchFlow: ap2LockStictchFlow,
    ap2PressingFlow: ap2PressingFlow,
    ap2InspectionFlow: ap2InspectionFlow,

    econoFlow: econoFlow,
    econoBooksFlow: econoBooksFlow,
    econoClassLecFlow: econoClassLecFlow,

    fm2Flow: fm2Flow,
    fm2BooksFlow: fm2BooksFlow,
    fm2ClassLecFlow: fm2ClassLecFlow,
    fm2NotesFlow: fm2NotesFlow,
    fm2BasicWarpFlow: fm2BasicWarpFlow,
    fm2MiscFlow: fm2MiscFlow,

    wp2Flow: wp2Flow,
    wp2BooksFlow: wp2BooksFlow,
    wp2ClasLecFlow: wp2ClasLecFlow,

    ym2Flow: ym2Flow,
    ym2BooksFlow: ym2BooksFlow,
    ym2ClassLecFlow: ym2ClassLecFlow,
    ym2NotesFlow: ym2NotesFlow,
    ym2SpecialyarnsFlow: ym2SpecialyarnsFlow,
    ym2IntroFlow: ym2IntroFlow,
    ym2RotorFlow: ym2RotorFlow,
    ym2SpinningFlow:ym2SpinningFlow,


    bilFlow: bilFlow,
    bilLaborFlow: bilLaborFlow,

    hrmFlow: hrmFlow,

    bsFlow: bsFlow,

    epdFlow: epdFlow,

    irFlow: irFlow,
    irIndusRelationFlow: irIndusRelationFlow,

    ppcFlow: ppcFlow,

    tamFlow: tamFlow,
    tamIntroMerchFlow: tamIntroMerchFlow,

    weave2Flow: weave2Flow,


    level1Labs: level1Labs,
    level2Labs: level2Labs,
    level3Labs: level3Labs,

    labChem1Flow: labChem1Flow,
    labChem1ProcedureFlow: labChem1ProcedureFlow,
    labChem1AcidFlow: labChem1AcidFlow,
    labChem1BasicFlow: labChem1BasicFlow,
    labChem1MohrFlow: labChem1MohrFlow,
    labChem1WetTestFlow: labChem1WetTestFlow,
    labChem1TitrationFlow: labChem1TitrationFlow,

    labPhy1Flow: labPhy1Flow,
    labPhy1M1Flow: labPhy1M1Flow,
    labPhy1M2Flow: labPhy1M2Flow,
    labPhy1M3Flow: labPhy1M3Flow,
    labPhy1M4Flow: labPhy1M4Flow,
    labPhy1M5Flow: labPhy1M5Flow,
    labPhy1M6Flow: labPhy1M6Flow,
    labPhy1O1Flow: labPhy1O1Flow,
    labPhy1O2Flow: labPhy1O2Flow,
    labPhy1O3Flow: labPhy1O3Flow,
    labPhy1O4Flow: labPhy1O4Flow,

    labPhy2Flow :labPhy2Flow,
    labPhy2E1Flow: labPhy2E1Flow,
    labPhy2E2Flow: labPhy2E2Flow,
    labPhy2E3Flow: labPhy2E3Flow,
    labPhy2E4Flow: labPhy2E4Flow,
    labPhy2E5Flow: labPhy2E5Flow,
    labPhy2E6Flow: labPhy2E6Flow,
    labPhy2E7Flow: labPhy2E7Flow,
    labPhy2E8Flow: labPhy2E8Flow,
    labPhy2H1Flow: labPhy2H1Flow,
    labPhy2H2Flow: labPhy2H2Flow,
    labPhy2H3Flow: labPhy2H3Flow,
    labPhy2M1Flow: labPhy2M1Flow,

    labChem2Flow :labChem2Flow,
    labChem2PhysPropFlow: labChem2PhysPropFlow,
    labChem2Lass1Flow: labChem2Lass1Flow,
    labChem2Lass2Flow: labChem2Lass2Flow,
    labChem2SoluTestFlow: labChem2SoluTestFlow,
    labChem2AlcIdenFlow: labChem2AlcIdenFlow,
    labChem2StrengthH2O2Flow: labChem2StrengthH2O2Flow,
    labChem2AmountFe2Flow: labChem2AmountFe2Flow,
    labChem2CarbonylIdenFlow: labChem2CarbonylIdenFlow,
    labChem2CarboxyIdenFlow: labChem2CarboxyIdenFlow,
    labChem2NIdenFlow: labChem2NIdenFlow,
    labChem2AmountNa2CO3Flow: labChem2AmountNa2CO3Flow,

    labmspFlow: labmspFlow,
    labMspLayoutFlow: labMspLayoutFlow,
    labMspHandToolsFlow: labMspHandToolsFlow,
    labMspLabsGrindingFlow: labMspLabsGrindingFlow,
    labMspLatheFlow: labMspLatheFlow,
    labMspSqKeyFlow: labMspSqKeyFlow,
    labMspMatchingPartsFlow: labMspMatchingPartsFlow,
    labMspMillingFlow: labMspMillingFlow,
    labMspDrillingFlow: labMspDrillingFlow,
    labMspShaperFlow: labMspShaperFlow,
    labMspWeldingFlow: labMspWeldingFlow,
    labMspLightMcFlow: labMspLightMcFlow,
    labMspArcWrldFlow: labMspArcWrldFlow,
    labMspMfgAssmFlow: labMspMfgAssmFlow,
    labMspQuizFlow: labMspQuizFlow,

    labBceFlow: labBceFlow,
    labBceListenFlow: labBceListenFlow,
    labBceReadFlow: labBceReadFlow,
    labBceSheetFlow: labBceSheetFlow,

    labAp1Flow: labAp1Flow,
    labAp1InterliningFlow: labAp1InterliningFlow,
    labAp1StdBodyFlow: labAp1StdBodyFlow,
    labAp1FusingFlow: labAp1FusingFlow,
    labAp1StrtKnifeFlow: labAp1StrtKnifeFlow,

    labCpFlow: labCpFlow,
    labCp1Flow: labCp1Flow,
    labCp2Flow: labCp2Flow,
    labCp3Flow: labCp3Flow,
    labCp4Flow: labCp4Flow,
    labCp5Flow: labCp5Flow,
    labCp6Flow: labCp6Flow,
    labCp7Flow: labCp7Flow,
    labCp135Flow: labCp135Flow,

    labAm1Flow: labAm1Flow,
    labAm1AllFlow: labAm1AllFlow,
    labAm1StdBodyFlow: labAm1StdBodyFlow,
    labAm1LayoutFlow: labAm1LayoutFlow,

    labYm1Flow: labYm1Flow,

    labFm1Flow: labFm1Flow,
    labFm1LayoutFlow: labFm1LayoutFlow,
    labFm1TappetFlow: labFm1TappetFlow,
    labFm1LoomingFlow: labFm1LoomingFlow,
    labFm1PackageFlow: labFm1PackageFlow,
    labFm1CheeseFlow: labFm1CheeseFlow,
    labFm1HighSpeedFlow: labFm1HighSpeedFlow,
    labFm1SectionalFlow: labFm1SectionalFlow,
    labFm1ConvSizingFlow: labFm1ConvSizingFlow,
    labFm1DobbyFlow: labFm1DobbyFlow,
    labFm1SizingFlow: labFm1SizingFlow,
    

    labWp1Flow: labWp1Flow,
    labAcwpFlow: labAcwpFlow,
    labApparelWashFlow: labApparelWashFlow,
    labAm2Flow: labAm2Flow,
    labAp2Flow: labAp2Flow,
    labFm2Flow: labFm2Flow,
    labFsdFlow: labFsdFlow,
    labWp2Flow: labWp2Flow,
    labYm2Flow: labYm2Flow,
    labpm2Flow: labpm2Flow,

    labWppFlow: labWppFlow,

    labFe_WppFlow: labFe_WppFlow,

    labFmeFlow: labFmeFlow,

    labFeeeFlow: labFeeeFlow,
    labFeeeMultiFlow: labFeeeMultiFlow,
    labFeeeOhmFlow: labFeeeOhmFlow,
    labFeeeKirchoffFlow: labFeeeKirchoffFlow,
    labFeeeRCFlow: labFeeeRCFlow,
    labFeeeRLFlow: labFeeeRLFlow,
    labFeeeRLCFlow: labFeeeRLCFlow,
    labFeeeCarbonResFlow: labFeeeCarbonResFlow,
    labFeeeFanRegFlow: labFeeeFanRegFlow,
    labFeeeWiringTubelightFlow: labFeeeWiringTubelightFlow,
    labFeeeFullBridgeFlow: labFeeeFullBridgeFlow,
    labFeeeFuseFlow: labFeeeFuseFlow,
    labFeeeOsciFlow: labFeeeOsciFlow,
    labFeeeWireGaugeFlow: labFeeeWireGaugeFlow,
    labFeee2WayLightFlow: labFeee2WayLightFlow,

    labMpFlow: labMpFlow,

    labSss1Flow: labSss1Flow,

    labSss2Flow: labSss2Flow,

    labPm1Flow: labPm1Flow,

    labTtqcFlow: labTtqcFlow,




    syllabusLevelFlow: syllabusLevelFlow,
    syllabusBatch45Flow: syllabusBatch45Flow,
    syllabusBatch45AeFlow: syllabusBatch45AeFlow,
    syllabusBatch45FeFlow: syllabusBatch45FeFlow,
    syllabusBatch45YeFlow: syllabusBatch45YeFlow,
    syllabusBatch45IpeFlow: syllabusBatch45IpeFlow,
    syllabusBatch45WpeFlow: syllabusBatch45WpeFlow,
    syllabusBatch45DceFlow: syllabusBatch45DceFlow,
    syllabusBatch45TemFlow: syllabusBatch45TemFlow,
    syllabusBatch45TfdFlow: syllabusBatch45TfdFlow,
    syllabusBatch45TmdmFlow: syllabusBatch45TmdmFlow,
    syllabusBatch45EseFlow: syllabusBatch45EseFlow,


    jokesFlow: jokesFlow,

    notFound: notFound,
}