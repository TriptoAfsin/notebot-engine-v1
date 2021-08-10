const express = require('express');
const app = express();
let router = express.Router();
require("dotenv").config();


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


let noteLevel1Subs = require('./academic/notes/level1/level1Subs')
let noteLevel2Subs = require('./academic/notes/level2/level2Subs')
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

//level2
let level2Notes = (req, res) => {

    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)

    return res.send(noteLevel2Subs);
};

//level1 -> math1
let math1 = (req, res) => {
    console.log(`🟠 App Platform : ${req.originalUrl} || IP: ${req.ip}`)
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



module.exports = {
    intro: appIntro,
    
    labs: labs,

    notes: notes,
    notesLevel1: level1Notes,
    notesLevel2: level2Notes,

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
}